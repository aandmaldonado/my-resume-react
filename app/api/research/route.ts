import { tavily } from "@tavily/core";
import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
    try {
        const { company } = await req.json();

        if (!company || company.toLowerCase() === "other") {
            return NextResponse.json({ enrichment: "" });
        }

        // 1. Investigar la empresa en Tavily (Modo Basic para velocidad)
        const searchResult = await tvly.search(`company ${company} official website products services and tech stack`, {
            searchDepth: "basic",
            maxResults: 3,
        });

        const searchContext = searchResult.results.map(r => r.content).join("\n\n").slice(0, 4000); // Truncar para no saturar modelos locales
        console.log(`Tavily search context length for ${company}:`, searchContext.length);

        const provider = process.env.AI_PROVIDER || 'groq';
        const systemMsg = `Eres un Analista de Inteligencia Corporativa. Tu único objetivo es destilar información factual sobre una empresa a partir de resultados de búsqueda. NO inventes información, no uses tono comercial y bajo ninguna circunstancia intentes evaluar cómo un candidato encajaría en la empresa. Tu respuesta debe ser una radiografía fría y directa de la compañía. PROHIBIDO USAR FORMATO MARKDOWN (cero asteriscos).`;
        const userMsg = `
DATO DE BÚSQUEDA TAVILY SOBRE LA EMPRESA ("${company}"):
${searchContext}

TAREA OBLIGATORIA:
Redacta un briefing súper conciso y directo de la empresa reportada en la búsqueda y devuélvelo en el siguiente formato. NO incluyas introducciones, despedidas ni asteriscos (markdown):

1. 🎯 Core Business: [1-2 frases exactas sobre a qué se dedica la empresa].
2. 🌍 Escala y Ubicación: [Indica si es multinacional, regional, startup, etc. y su zona si se menciona. REGLA ESTRICTA: NO INVENTES CIUDADES. Si el texto no menciona la sede, escribe "Ubicación no especificada"].
3. 🚀 Proyectos/Tech Stack Relevante: [Menciona proyectos emblemáticos o tecnologías reportadas. Si no hay, pon "No se extrajo info técnica"].
4. ⚠️ Nivel de Certeza: [Indica si hay varías coincidencias o si es sólida].
`;

        let enrichment = "";

        if (provider === 'ollama') {
            try {
                const ollamaRes = await fetch("http://localhost:11434/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        model: process.env.OLLAMA_MODEL || "gemma3:1b", // Usa el mismo modelo que el chat para evitar swap en VRAM
                        messages: [
                            { role: "system", content: systemMsg },
                            { role: "user", content: userMsg }
                        ],
                        stream: false,
                        keep_alive: "60m",
                        options: {
                            num_gpu: 99, // Fuerza cargar todas las capas en la GPU
                        }
                    }),
                });

                if (ollamaRes.ok) {
                    const data = await ollamaRes.json();
                    enrichment = data.message?.content || "";
                } else if (ollamaRes.status === 404) {
                    console.error(`Ollama research failed: Model '${process.env.OLLAMA_MODEL}' not found.`);
                }
            } catch (e) {
                console.error("Ollama Research connection failed:", e);
            }
        } else {
            const analysisCompletion = await groq.chat.completions.create({
                messages: [
                    { role: "system", content: systemMsg },
                    { role: "user", content: userMsg },
                ],
                model: "llama-3.1-8b-instant", // Modelo instant para research
                temperature: 0.1,
            });
            enrichment = analysisCompletion.choices[0]?.message?.content || "";
        }

        return NextResponse.json({ enrichment });
    } catch (error: any) {
        console.error("Research API Error:", error);

        if (error?.status === 429) {
            console.warn("Tavily/Groq Rate Limit detected in Research API");
            return NextResponse.json({ error: "Rate limit reached" }, { status: 429 });
        }

        // Para otros errores, seguimos devolviendo vacío para no romper el flujo
        return NextResponse.json({ enrichment: "" });
    }
}
