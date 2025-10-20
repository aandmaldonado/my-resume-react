// app/api/chat/route.ts
import { NextResponse } from 'next/server';
// ¡Usa el nuevo servicio!
import { getAuthedClient } from '@/lib/gcpAuth'; // (Ajusta la ruta '../lib/...' si es necesario)

// Le dice a Next.js que nunca ejecute esto en tiempo de build.
export const dynamic = 'force-dynamic'

// La URL COMPLETA de tu endpoint de chat
const BACKEND_CHAT_URL = 'https://chatbot-api-251107984645.europe-west1.run.app/api/v1/chat';

// ¡Ya NO necesitas el código 'new GoogleAuth()', 'client', o 'getClient()' aquí!

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, session_id } = body;
    
    // 1. Obtén el cliente autenticado (¡mucho más limpio!)
    const authedClient = await getAuthedClient(); 
    
    // 2. Realiza la llamada segura
    const response = await authedClient.request({
      url: BACKEND_CHAT_URL,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { message, session_id },
    });

    // 3. Devuelve la respuesta
    return NextResponse.json(response.data);
  
  } catch (error: any) {
    console.error("Error al contactar el backend (chat):", error.message);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message }, 
      { status: 500 }
    );
  }
}