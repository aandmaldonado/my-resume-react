// app/api/gdpr/consent/route.ts
import { NextResponse } from 'next/server';
// Importa tu nuevo servicio de autenticación
import { getAuthedClient } from '@/lib/gcpAuth';

// Le dice a Next.js que nunca ejecute esto en tiempo de build.
export const dynamic = 'force-dynamic'

// La URL COMPLETA de tu endpoint de consentimiento GDPR en el backend
const BACKEND_GDPR_CONSENT_URL = 'https://chatbot-api-251107984645.europe-west1.run.app/api/v1/gdpr/consent';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { session_id, consent_types } = body;
    
    // 1. Obtén el cliente autenticado
    const authedClient = await getAuthedClient();
    
    // 2. Realiza la llamada segura
    const response = await authedClient.request({
      url: BACKEND_GDPR_CONSENT_URL,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { session_id, consent_types },
    });

    // 3. Devuelve la respuesta
    return NextResponse.json(response.data);
  
  } catch (error: any) {
    console.error("Error al contactar el backend (gdpr-consent):", error.message);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message }, 
      { status: 500 }
    );
  }
}
