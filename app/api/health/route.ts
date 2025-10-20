// app/api/health/route.ts
import { NextResponse } from 'next/server';
// Importa tu nuevo servicio de autenticación
import { getAuthedClient } from '@/lib/gcpAuth'; // (Ajusta la ruta '../lib/...' si es necesario)

// La URL COMPLETA de tu endpoint de health en el backend
const BACKEND_HEALTH_URL = 'https://chatbot-api-251107984645.europe-west1.run.app/health';

export async function GET(request: Request) {
  try {
    // 1. Obtén el cliente autenticado
    const authedClient = await getAuthedClient();

    // 2. Realiza la llamada segura
    const response = await authedClient.request({
      url: BACKEND_HEALTH_URL,
      method: 'GET',
    });

    // 3. Devuelve la respuesta al navegador
    return NextResponse.json(response.data);

  } catch (error: any) {
    console.error("Error al contactar el backend (health):", error.message);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message }, 
      { status: 500 }
    );
  }
}