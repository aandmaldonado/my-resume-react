"use client"

import { useEffect, useState } from 'react'

interface Config {
  backendUrl: string
  chatbotEnabled: boolean
}

export function useConfig() {
  const [config, setConfig] = useState<Config | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getConfig = async () => {
      try {
        const response = await fetch('/api/config')
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to get config')
        }
        
        setConfig(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    getConfig()
  }, [])

  return { config, loading, error }
}
