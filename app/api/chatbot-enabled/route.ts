import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const chatbotEnabled = process.env.CHATBOT_ENABLED === 'true' || process.env.NEXT_PUBLIC_CHATBOT_ENABLED === 'true'
    
    return NextResponse.json({ chatbotEnabled })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get chatbot status' },
      { status: 500 }
    )
  }
}
