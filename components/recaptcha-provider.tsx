"use client"

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export function useReCaptcha() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.grecaptcha) {
      setIsLoaded(true)
    } else {
      // Wait for reCAPTCHA to load
      const checkReCaptcha = () => {
        if (typeof window !== 'undefined' && window.grecaptcha) {
          setIsLoaded(true)
        } else {
          setTimeout(checkReCaptcha, 100)
        }
      }
      checkReCaptcha()
    }
  }, [])

  const verifyReCaptcha = async (action: string = 'download_cv'): Promise<string | null> => {
    if (!isLoaded || typeof window === 'undefined' || !window.grecaptcha) {
      console.error('reCAPTCHA not loaded')
      return null
    }

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      if (!siteKey) {
        console.error('reCAPTCHA site key not found')
        return null
      }

      return new Promise((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, { action })
            resolve(token)
          } catch (error) {
            reject(error)
          }
        })
      })
    } catch (error) {
      console.error('reCAPTCHA verification failed:', error)
      return null
    }
  }

  return { verifyReCaptcha, isLoaded }
}
