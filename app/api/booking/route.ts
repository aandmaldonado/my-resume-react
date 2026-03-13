import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
import { getPortfolioData } from "@/lib/chatbot-prompt";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Booking Request Body:", body);

        const { name, email, company, date, time, linkedin, enrichment } = body;

        if (!process.env.RESEND_API_KEY) {
            console.error("Booking Error: RESEND_API_KEY is missing");
            return NextResponse.json({ error: "Resend API Key not configured" }, { status: 500 });
        }

        const portfolioData = getPortfolioData();
        const notificationEmail = process.env.NOTIFICATION_EMAIL || portfolioData.personal_info.email;

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [notificationEmail],
            subject: `🤝 ${name} quiere agendar una reunión con ${portfolioData.personal_info.name} (${company})`,
            text: `Nueva solicitud de reunión: ${name} de ${company}. Fecha: ${date} ${time}.`,
            html: `
        <h2>Nueva solicitud de reunión</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'No especificado'}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <br/>
        <h3>🔍 Deep Research Empresa:</h3>
        <p>${enrichment || "No hay investigación disponible."}</p>
        <br/>
        <p><i>Este correo fue generado automáticamente por tu Agente IA.</i></p>
      `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log("Email sent successfully:", data);
        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Booking Crash Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
