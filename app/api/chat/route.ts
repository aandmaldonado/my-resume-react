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

        // 3. Filtro de Ámbito Profesional (Rechazo por defecto de ruido personal/general)
        // Usamos límites de palabra (\b) para evitar que "hi" coincida en "sushi" o "ia" en "experiencia"
        const professionalDomain = [
            "alvaro", "maldonado", "experiencia", "proyecto", "trabajo", "curriculum", "cv", "perfil", "trayectoria", "estudio",
            "tecnologia", "arquitectura", "backend", "software", "ingenier", "desarroll", "program", "ia", "ai", "inteligencia",
            "llm", "rag", "agente", "python", "java", "spring", "aws", "cloud", "devops", "kubernetes", "docker", "testing",
            "entrevista", "contrat", "vacante", "puesto", "rol", "linkedin", "github", "agendar", "cita", "reunion", "llamada",
            "hola", "hi", "quien eres", "que haces", "ayuda", "contacto", "saludo", "tal", "como"
        ];

        const privateDomain = ["hija", "hijo", "esposa", "marido", "novia", "novio", "casa", "vives", "familia", "hijos", "hijas", "pareja", "sueldo", "salario", "dinero", "gana", "ganas", "politica", "religion"];

        // Validación precisa por palabra completa
        const isProfessional = professionalDomain.some(kw => {
            const regex = new RegExp(`\\b${kw}\\b`, "i");
            return regex.test(lastMessageLower);
        });

        const isPrivate = privateDomain.some(kw => {
            const regex = new RegExp(`\\b${kw}\\b`, "i");
            return regex.test(lastMessageLower);
        });

        // Si es un tema privado explícito O si no detectamos contexto profesional en un mensaje corto
        // Aumentamos la sensibilidad de "mensaje corto" a 100 caracteres para filtrar temas generales.
        if (isPrivate || (!isProfessional && lastMessageLower.length < 100)) {
            return NextResponse.json({
                content: "Como asistente profesional de Álvaro, mi propósito es conversar sobre su carrera técnica, proyectos de ingeniería y trayectoria profesional. No dispongo de información sobre temas personales o generales fuera de este ámbito. ¿Te gustaría saber sobre su experiencia en IA o arquitectura de software?"
            });
        }

        const leadContext = leadInfo
            ? `### DATOS DEL INTERLOCUTOR (ÚSALOS PARA AGENDAR)
- Nombre: ${leadInfo.name}
- Email: ${leadInfo.email}
- Empresa: ${leadInfo.company}
- LinkedIn: ${leadInfo.linkedin}`
            : "No hay datos del usuario todavía.";

        const rawSystemPrompt = getSystemPrompt();
        const systemPrompt = rawSystemPrompt
            .replace(/USER_NAME/g, leadInfo?.name || "invitado")
            .replace(/USER_EMAIL/g, leadInfo?.email || "no proporcionado")
            .replace(/USER_COMPANY/g, leadInfo?.company || "no especificada");

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
                        keep_alive: "60m", // Mantiene el modelo en GPU 60 min
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
