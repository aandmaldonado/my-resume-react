import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const config = {
      backendUrl: process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL,
      chatbotEnabled: process.env.NEXT_PUBLIC_CHATBOT_ENABLED === 'true'
    }
    
    if (!config.backendUrl) {
      return NextResponse.json(
        { error: 'Backend URL not configured' },
        { status: 500 }
      )
    }

    return NextResponse.json(config)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get config' },
      { status: 500 }
    )
  }
}
