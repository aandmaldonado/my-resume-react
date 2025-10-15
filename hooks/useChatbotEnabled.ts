import { useState, useEffect } from 'react'

interface ChatbotEnabledResponse {
  chatbotEnabled: boolean
  error?: string
}

export function useChatbotEnabled() {
  const [chatbotEnabled, setChatbotEnabled] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchChatbotEnabled = async () => {
      try {
        const response = await fetch('/api/chatbot-enabled')
        const data: ChatbotEnabledResponse = await response.json()
        
        if (data.error) {
          setError(data.error)
          setChatbotEnabled(false) // fallback
        } else {
          setChatbotEnabled(data.chatbotEnabled)
          setError(null)
        }
      } catch (err) {
        setError('Failed to fetch chatbot status')
        setChatbotEnabled(false) // fallback
      } finally {
        setLoading(false)
      }
    }

    fetchChatbotEnabled()
  }, [])

  return { chatbotEnabled, loading, error }
}
