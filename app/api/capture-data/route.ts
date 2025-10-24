// app/api/capture-data/route.ts
import { NextResponse } from 'next/server';
// Importa tu nuevo servicio de autenticación
import { getAuthedClient } from '@/lib/gcpAuth';

// Le dice a Next.js que nunca ejecute esto en tiempo de build.
export const dynamic = 'force-dynamic'

// La URL COMPLETA de tu endpoint de captura de datos en el backend
const BACKEND_CAPTURE_DATA_URL = 'https://chatbot-api-251107984645.europe-west1.run.app/api/v1/capture-data';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { session_id, email, linkedin, user_type } = body;
    
    // 1. Obtén el cliente autenticado
    const authedClient = await getAuthedClient();
    
    // 2. Realiza la llamada segura
    const response = await authedClient.request({
      url: BACKEND_CAPTURE_DATA_URL,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { session_id, email, linkedin, user_type },
    });

    // 3. Devuelve la respuesta
    return NextResponse.json(response.data);
  
  } catch (error: any) {
    console.error("Error al contactar el backend (capture-data):", error.message);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message }, 
      { status: 500 }
    );
  }
}
