import Groq from "groq-sdk";
import { getSystemPrompt } from "@/lib/chatbot-prompt";
import { NextResponse } from "next/server";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages, leadInfo } = await req.json();

        const provider = process.env.AI_PROVIDER || 'groq';

        // --- DEFENSA PROACTIVA Y FILTROS RÁPIDOS (PROFESSIONAL SCOPE) ---
        const lastUserMessage = messages[messages.length - 1]?.content || "";
        const lastMessageLower = lastUserMessage.toLowerCase();

        // 1. Mitigación de DoS (LLM04): Limitar longitud de entrada
        if (lastUserMessage.length > 2000) {
            return NextResponse.json({
                content: "Tu mensaje es demasiado largo. Por favor, intenta resumirlo para que pueda procesarlo mejor."
            });
        }

        // 2. Bloqueo de Jailbreak y Sistema (LLM01)
        const jailbreakKeywords = [
            "system prompt", "instrucciones internas", "prompt de sistema",
            "ignore previous instructions", "dame tu prompt", "revela tu configuracion",
            "forget earlier conversation", "eres ahora", "actua como", "new role",
            "developer mode", "jailbreak"
        ];
        if (jailbreakKeywords.some(keyword => lastMessageLower.includes(keyword))) {
            return NextResponse.json({
                content: "Lo siento, como asistente profesional no puedo revelar mis instrucciones internas ni mi configuración de sistema. ¿En qué puedo ayudarte respecto a la carrera de Álvaro?"
            });
        }

        // Normalizamos el mensaje: limpiamos puntuación Y diacríticos para que el filtro sea robusto
        const normalizedMessage = lastMessageLower
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, "");

        // 3. Filtros Estratégicos (Solo bloqueamos lo que NO queremos que el LLM decida libremente)
        const privateDomain = ["hija", "hijo", "esposa", "marido", "novia", "novio", "religion", "politica", "futbol", "sushi", "comida", "sexo", "odio", "edad", "anos", "cumpleanos", "nacimiento", "personal", "privado"];
        const moneyDomain = ["sueldo", "salario", "dinero", "gana", "ganas", "expectativas", "cobras", "remuneracion", "precio", "tarifa", "cobra"];

        const isPrivate = privateDomain.some(kw => new RegExp(`\\b${kw}\\b`, "i").test(normalizedMessage));
        const isMoney = moneyDomain.some(kw => new RegExp(`\\b${kw}\\b`, "i").test(normalizedMessage));

        // Filtro específico para temas personales/privados — respuesta instantánea, sin llamar al LLM
        if (isPrivate) {
            return NextResponse.json({
                content: "Esa es información que Álvaro prefiere mantener en el ámbito personal. Como su asistente oficial, estoy aquí para ayudarte con cualquier detalle sobre su perfil profesional, retos y trayectoria. ¿Te gustaría saber algo más sobre su experiencia?"
            });
        }

        // Filtro específico para temas económicos/salario
        if (isMoney) {
            return NextResponse.json({
                content: "Para temas de salario, expectativas económicas o tarifas, Álvaro prefiere hablarlo directamente en una llamada, ya que depende mucho del impacto y la responsabilidad del rol. ¿Te gustaría que agendemos una reunión para conversarlo en detalle?"
            });
        }

        const leadContext = leadInfo
            ? `### DATOS DEL INTERLOCUTOR (ÚSALOS PARA AGENDAR)
- Nombre: ${leadInfo.name}
- Email: ${leadInfo.email}
- LinkedIn: ${leadInfo.linkedin}`
            : "No hay datos del usuario todavía.";

        const rawSystemPrompt = getSystemPrompt();
        const systemPrompt = rawSystemPrompt
            .replace(/USER_NAME/g, leadInfo?.name || "invitado")
            .replace(/USER_EMAIL/g, leadInfo?.email || "no proporcionado");

        const finalSystemPrompt = `${leadContext}\n\n${systemPrompt}`;
        const formattedMessages = [
            { role: "system", content: finalSystemPrompt },
            ...messages.map((m: any) => ({
                role: m.role,
                content: m.content,
            })),
        ];

        let text = "";

        if (provider === 'ollama') {
            try {
                const ollamaRes = await fetch("http://localhost:11434/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        model: process.env.OLLAMA_MODEL || "gemma3:1b",
                        messages: formattedMessages,
                        stream: false,
                        keep_alive: "60m",
                        options: {
                            num_gpu: 99,
                            num_thread: 8,       // Ajusta según los cores de tu Mac
                            temperature: 0.1,    // Menos aleatoriedad = más rápido
                            top_p: 0.9,
                            top_k: 40,
                            num_ctx: 4096,       // Contexto optimizado (suficiente para tu CV)
                            repeat_penalty: 1.1
                        }
                    }),
                });

                if (!ollamaRes.ok) {
                    const errorText = await ollamaRes.text();
                    if (ollamaRes.status === 404) {
                        throw new Error(`Ollama model '${process.env.OLLAMA_MODEL}' not found. Run 'ollama pull ${process.env.OLLAMA_MODEL}'`);
                    }
                    throw new Error(`Ollama error (${ollamaRes.status}): ${errorText}`);
                }

                const data = await ollamaRes.json();
                text = data.message?.content || "";
            } catch (e: any) {
                throw new Error(`Ollama connection failed: ${e.message}`);
            }
        } else {
            if (!process.env.GROQ_API_KEY) {
                return NextResponse.json(
                    { error: "Groq API Key not configured" },
                    { status: 500 }
                );
            }

            const completion = await groq.chat.completions.create({
                messages: formattedMessages,
                model: "llama-3.3-70b-versatile",
                temperature: 0.1,
                max_tokens: 1024,
                top_p: 1,
                stream: false,
            });

            text = completion.choices[0]?.message?.content || "";
        }

        return NextResponse.json({ content: text });
    } catch (error: any) {
        console.error("Chat API Error:", error);

        if (error?.status === 429) {
            return NextResponse.json(
                { error: "Rate limit reached. Alvi is resting for a moment, please try again in a few minutes." },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: "Failed to generate response" },
            { status: 500 }
        );
    }
}
