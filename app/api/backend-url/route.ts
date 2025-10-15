import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Debug: mostrar todas las variables de entorno relacionadas
    console.log('🔍 DEBUG - BACKEND_URL:', process.env.BACKEND_URL)
    console.log('🔍 DEBUG - NEXT_PUBLIC_BACKEND_URL:', process.env.NEXT_PUBLIC_BACKEND_URL)
    
    const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL
    
    console.log('🔍 DEBUG - backendUrl final:', backendUrl)
    
    if (!backendUrl) {
      console.log('❌ Backend URL not configured')
      return NextResponse.json(
        { error: 'Backend URL not configured' },
        { status: 500 }
      )
    }

    return NextResponse.json({ backendUrl })
  } catch (error) {
    console.error('❌ Error en /api/backend-url:', error)
    return NextResponse.json(
      { error: 'Failed to get backend URL' },
      { status: 500 }
    )
  }
}
