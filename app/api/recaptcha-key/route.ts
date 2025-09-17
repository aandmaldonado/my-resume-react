import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const siteKey = process.env.RECAPTCHA_SITE_KEY
    
    if (!siteKey) {
      return NextResponse.json(
        { error: 'reCAPTCHA site key not configured' },
        { status: 500 }
      )
    }

    return NextResponse.json({ siteKey })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get reCAPTCHA key' },
      { status: 500 }
    )
  }
}
