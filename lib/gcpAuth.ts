// lib/gcpAuth.ts
import { GoogleAuth } from 'google-auth-library';

// La URL RAÍZ de tu servicio de backend privado
const AUDIENCE_URL = 'https://chatbot-api-251107984645.europe-west1.run.app';

const auth = new GoogleAuth();
let client: any;

/**
 * Obtiene un cliente de Google Auth autenticado para
 * hacer llamadas seguras de servicio-a-servicio a nuestro backend.
 */
export async function getAuthedClient() {
  if (client) return client;

  // Obtenemos un cliente que puede generar tokens de identidad (OIDC)
  // con la "audiencia" (la URL raíz) de nuestro backend.
  client = await auth.getIdTokenClient(AUDIENCE_URL);
  return client;
}