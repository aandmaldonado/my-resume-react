import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL
    
    if (!backendUrl) {
      return NextResponse.json(
        { error: 'Backend URL not configured' },
        { status: 500 }
      )
    }

    return NextResponse.json({ backendUrl })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get backend URL' },
      { status: 500 }
    )
  }
}
