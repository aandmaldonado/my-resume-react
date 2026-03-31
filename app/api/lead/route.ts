import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getPortfolioData } from "@/lib/chatbot-prompt";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, role, linkedin, enrichment } = body;

        console.log("New Lead Captured:", { name, email, company });

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ error: "Resend API Key not configured" }, { status: 500 });
        }

        // Lazy instantiation: solo se crea cuando se llama a la API en Runtime
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const portfolioData = getPortfolioData();
        const notificationEmail = process.env.NOTIFICATION_EMAIL || portfolioData.personal_info.email;

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [notificationEmail],
            subject: `💡 Nuevo interés: ${name} (${company})`,
            text: `Nuevo lead capturado: ${name} de ${company}. Rol: ${role}. LinkedIn: ${linkedin}.`,
            html: `
                <h2>Nuevo lead capturado</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
                <p><strong>LinkedIn:</strong> ${linkedin || 'No especificado'}</p>
                <p><strong>Rol:</strong> ${role || 'No especificado'}</p>
                <br/>
                <h3>🔍 Deep Research Empresa:</h3>
                <div style="white-space: pre-wrap; font-family: monospace; line-height: 1.6; background-color: #f4f4f5; padding: 15px; border-radius: 8px;">
${enrichment || "No hay investigación disponible o no se especificó empresa."}
                </div>
                <br/>
                <p><i>Este correo fue generado tras completar el formulario inicial (Lead de interés). No es una cita agendada todavía.</i></p>
            `,
        });

        if (error) {
            console.error("Resend Lead Error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Lead API Crash:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
