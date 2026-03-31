import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemPrompt } from "@/lib/chatbot-prompt";
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { messages, leadInfo } = await req.json();
        
        // --- SMART PROVIDER SELECTION ---
        let provider = process.env.AI_PROVIDER;
        
        if (!provider) {
            if (process.env.GROQ_API_KEY) {
                provider = 'groq';
            } else if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
                provider = 'google';
            } else {
                provider = 'ollama'; // Fallback por defecto si no hay keys
                console.log("No cloud keys found. Standing by with Ollama...");
            }
        }

        // Lazy instantiation: solo se necesitan cuando se llama a la API en Runtime
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || "");

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

        // Filtro específico para temas personales/privados 
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

        // --- EXTRACCIÓN DINÁMICA DE CONTEXTO (i18n) ---
        let extraContext = { philosophy: [] as string[], testimonials: [] as string[] };
        try {
            const i18nPath = path.join(process.cwd(), 'app/i18n.ts');
            const i18nContent = fs.readFileSync(i18nPath, 'utf8');

            const philosophyMatches = i18nContent.match(/title:\s*"(ADN|Puente|IA)[^"]*",\s*description:\s*"([^"]+)"/g);
            if (philosophyMatches) {
                extraContext.philosophy = philosophyMatches.map((m: string) => {
                    const desc = m.match(/description:\s*"([^"]+)"/);
                    return desc ? desc[1] : "";
                }).filter(Boolean);
            }

            const testimonialMatches = i18nContent.match(/name:\s*"(Jesus Garcia|Ines Garcia|Almudena Alvarez)[^"]*",\s*text:\s*"([^"]+)"/g);
            if (testimonialMatches) {
                extraContext.testimonials = testimonialMatches.map((m: string) => {
                    const name = m.match(/name:\s*"([^"]+)"/);
                    const text = m.match(/text:\s*"([^"]+)"/);
                    return name && text ? `${name[1]}: ${text[1].substring(0, 150)}...` : "";
                }).filter(Boolean);
            }
        } catch (e) {
            console.error("Error leyendo i18n para el bot:", e);
        }

        const rawSystemPrompt = getSystemPrompt(extraContext);
        const systemPrompt = rawSystemPrompt
            .replace(/USER_NAME/g, leadInfo?.name || "invitado")
            .replace(/USER_EMAIL/g, leadInfo?.email || "no proporcionado");

        const hardReminder = "\n\n### 🚨 RECORDATORIO FINAL (CRÍTICO):\n- RESPONDE EN 3ra PERSONA (Álvaro...).\n- MÁXIMO 20 PALABRAS (EJECUTIVO).\n- PROHIBIDO LISTAR MÁS DE 3 PROYECTOS/EMPRESAS.\n- SÉ DIRECTO: SIN SALUDOS, SIN PREÁMBULOS, SIN RELLENO.";
    const finalSystemPrompt = `${leadContext}\n\n${systemPrompt}${hardReminder}`;
    
    const formattedMessages = [
        { role: "system", content: finalSystemPrompt },
        ...messages.map((m: any) => ({
            role: m.role,
            content: m.content,
        })),
    ];

    // --- LÓGICA DE PROVEEDORES CON FALLBACK ---
    let text = "";

    const callModel = async (currentProvider: string): Promise<string> => {
        if (currentProvider === 'ollama') {
            const ollamaRes = await fetch("http://localhost:11434/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: process.env.OLLAMA_MODEL || "gemma3:1b",
                    messages: formattedMessages,
                    stream: false,
                    options: { temperature: 0.1, num_ctx: 4096 }
                }),
            });
            const data = await ollamaRes.json();
            return data.message?.content || "";
        } 
        
        if (currentProvider === 'google') {
            if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) throw new Error("Google API Key missing");
            const model = genAI.getGenerativeModel({ 
              model: "gemini-2.0-flash",
              systemInstruction: finalSystemPrompt 
            });
            
            // Google usa un formato de historial diferente
            const chat = model.startChat({
              history: messages.slice(0, -1).map((m: any) => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.content }]
              }))
            });
            
            const result = await chat.sendMessage(lastUserMessage);
            const response = await result.response;
            return response.text();
        }

        // DEFAULT: Groq
        if (!process.env.GROQ_API_KEY) throw new Error("Groq API Key missing");
        const completion = await groq.chat.completions.create({
            messages: formattedMessages,
            model: "llama-3.3-70b-versatile",
            temperature: 0.1,
            max_tokens: 1024,
        });
        return completion.choices[0]?.message?.content || "";
    };

    try {
        text = await callModel(provider);
    } catch (err: any) {
        console.error(`Primary provider (${provider}) failed:`, err);
        
        // TRANSICIÓN LIMPIA: Failover automático a Gemini
        if (provider !== 'google' && process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
            console.log("⚠️ Groq/Ollama falló. Activando Failover a Gemini...");
            try {
                text = await callModel('google');
            } catch (geminiErr) {
                console.error("Critical: Gemini failover also failed:", geminiErr);
                throw err;
            }
        } else {
            throw err;
        }
    }

    // Detectar y añadir tags si son necesarios
    if (text.toLowerCase().includes("reunión") || text.toLowerCase().includes("agendar") || text.toLowerCase().includes("cita") || text.toLowerCase().includes("llamada")) {
        if (!text.includes("[ACTION_DATEPICKER]")) text += " [ACTION_DATEPICKER]";
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
