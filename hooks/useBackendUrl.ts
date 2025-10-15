import { useState, useEffect } from 'react'

interface BackendUrlResponse {
  backendUrl: string
  error?: string
}

export function useBackendUrl() {
  const [backendUrl, setBackendUrl] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBackendUrl = async () => {
      try {
        const response = await fetch('/api/backend-url')
        const data: BackendUrlResponse = await response.json()
        
        if (data.error) {
          setError(data.error)
          setBackendUrl('http://localhost:8080/api/v1') // fallback
        } else {
          setBackendUrl(data.backendUrl)
          setError(null)
        }
      } catch (err) {
        setError('Failed to fetch backend URL')
        setBackendUrl('http://localhost:8080/api/v1') // fallback
      } finally {
        setLoading(false)
      }
    }

    fetchBackendUrl()
  }, [])

  return { backendUrl, loading, error }
}
