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
  const [siteKey, setSiteKey] = useState<string | null>(null)

  useEffect(() => {
    // 1. Lee la variable de entorno
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    console.log('NEXT_PUBLIC_RECAPTCHA_SITE_KEY', key);

    if (key) {
      // 2. ¡ESTA ES LA LÍNEA QUE FALTABA!
      //    Guarda la clave en el estado para que 'verifyReCaptcha' pueda usarla.
      setSiteKey(key); 
      
      // 3. Carga el script de Google
      loadReCaptcha(key);
    } else {
      console.error('ERROR: NEXT_PUBLIC_RECAPTCHA_SITE_KEY no está definida.');
    }
  }, []);

  const loadReCaptcha = (siteKey: string) => {
    if (typeof window === 'undefined') return

    // Remove existing script if any
    const existingScript = document.querySelector('script[src*="recaptcha"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create new script with site key
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      setIsLoaded(true)
    }
    document.head.appendChild(script)
  }

  const verifyReCaptcha = async (action: string = 'download_cv'): Promise<string | null> => {
    if (!isLoaded || !siteKey || typeof window === 'undefined' || !window.grecaptcha) {
      console.error('reCAPTCHA not ready or site key not available')
      return null
    }

    try {
      
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

  return { verifyReCaptcha, isLoaded: isLoaded && !!siteKey }
}
