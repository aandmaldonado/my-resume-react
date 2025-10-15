import { NextResponse } from 'next/server'

export async function GET() {
  console.log('🚀 API /api/chatbot-enabled ejecutándose...')
  
  try {
    // Debug: mostrar todas las variables de entorno relacionadas
    console.log('🔍 DEBUG - CHATBOT_ENABLED:', process.env.CHATBOT_ENABLED)
    console.log('🔍 DEBUG - NEXT_PUBLIC_CHATBOT_ENABLED:', process.env.NEXT_PUBLIC_CHATBOT_ENABLED)
    
    // Obtener el valor de la variable de entorno
    const chatbotEnabled = process.env.CHATBOT_ENABLED
    
    console.log('🔍 DEBUG - chatbotEnabled final:', chatbotEnabled)
    
    // Asegurar que siempre devolvemos un objeto con la propiedad chatbotEnabled
    return NextResponse.json({ 
      chatbotEnabled: chatbotEnabled === 'true' 
    })
  } catch (error) {
    console.error('❌ Error en /api/chatbot-enabled:', error)
    return NextResponse.json(
      { error: 'Failed to get chatbot status' },
      { status: 500 }
    )
  }
}
