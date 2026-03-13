import { tavily } from "@tavily/core";
import Groq from "groq-sdk";
import { getSystemPrompt, getPortfolioData } from "@/lib/chatbot-prompt";
import { NextResponse } from "next/server";

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
    try {
        const { company, name } = await req.json();

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

        // 2. Analizar el fit usando un PROMPT RESUMIDO (Evita saturar el contexto)
        const portfolioData = getPortfolioData();
        const ownerName = portfolioData.personal_info.name;
        const ownerShortName = portfolioData.chat_settings.owner_short_name;
        const ownerTitle = portfolioData.personal_info.title;
        const ownerSummary = portfolioData.professional_summary;
        const targetRoles = portfolioData.career_target?.target_roles.join(", ");

        const provider = process.env.AI_PROVIDER || 'groq';
        const systemMsg = `Eres un analista técnico objetivo. Tu tarea es analizar qué hace una empresa y determinar si el perfil de ${ownerName} (${ownerTitle}) tiene sinergia con sus necesidades técnicas actuales o futuras.`;
        const userMsg = `
DATO DE BÚSQUEDA SOBRE LA EMPRESA:
${searchContext}

PORTFOLIO DE ${ownerName.toUpperCase()}:
Título: ${ownerTitle}
Resumen: ${ownerSummary}
Roles objetivo: ${targetRoles}

TAREA:
1. Basándote en la información encontrada, resume en 1 frase qué hace ${company}.
2. Explica el "Fit Estratégico" técnico con ${ownerShortName} (máximo 2 frases).
3. NO pidas disculpas. Sé resolutivo.
Responde de forma sobria y profesional en Español.
`;

        let enrichment = "";

        if (provider === 'ollama') {
            try {
                const ollamaRes = await fetch("http://localhost:11434/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        model: "gemma3:1b", // FORZAMOS modelo ligero para research (velocidad pura)
                        messages: [
                            { role: "system", content: systemMsg },
                            { role: "user", content: userMsg }
                        ],
                        stream: false,
                        keep_alive: "60m",
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
