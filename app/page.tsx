"use client"

import { useEffect, useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./i18n"
import { Bot, MessageCircle } from "lucide-react"
import ChatbotSection from "@/components/chatbot-section"
import RecommendationsSection from "@/components/recommendations-section"
import ContactCard from "@/components/contact-card"

interface Message {
  type: 'user' | 'bot';
  content: string;
  isHTML?: boolean;
}

export default function Home() {
  const { i18n, t } = useTranslation()
  const [isChatbotVisible, setIsChatbotVisible] = useState(false)
  const [showNotification, setShowNotification] = useState(true)
  const [chatMessages, setChatMessages] = useState<Message[]>([])
  const [isChatLoading, setIsChatLoading] = useState(false)
  const [chatStatus, setChatStatus] = useState({ text: '', isError: false })
  
  // Generar session_id una sola vez al montar el componente
  const sessionIdRef = useRef(`user-${Date.now()}-${Math.random().toString(36).slice(2)}`)

  const API_URL = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080/api/v1';
  
  // Variable de entorno para controlar la visibilidad del chatbot
  const isChatbotEnabled = process.env.NEXT_PUBLIC_CHATBOT_ENABLED === 'true';

  useEffect(() => {
    // Set default language to Spanish
    i18n.changeLanguage("es")
  }, [i18n])

  // Inicializar chatbot solo una vez
  useEffect(() => {
    if (chatMessages.length === 0) {
      const initializeChatbot = async () => {
        try {
          
          const response = await fetch(`${API_URL}/health`)

          const data = await response.json()
          if (data.status === 'healthy') {
            setChatStatus({ text: `🟢 ${t("chatbot.online_status")}`, isError: false })
          } else {
            setChatStatus({ text: `🛜 ${t("chatbot.connecting_status")}`, isError: true })
          }
          // Agregar mensaje de bienvenida cuando la conexión es exitosa
          setChatMessages([{ type: 'bot', content: t("chatbot.welcome_message") }])
        } catch {
          setChatStatus({ text: `🔴 ${t("chatbot.offline_status")}`, isError: true })
          // Agregar mensaje de offline cuando hay error
          setChatMessages([{ type: 'bot', content: t("chatbot.offline_message") }])
        }
      }
      initializeChatbot()
    }
  }, [t, chatMessages.length])

  // Actualizar textos del chatbot cuando cambia el idioma
  useEffect(() => {
    if (chatMessages.length > 0) {
      // Actualizar el estado del chatbot con el nuevo idioma
      if (chatStatus.isError) {
        setChatStatus({ text: `🔴 ${t("chatbot.offline_status")}`, isError: true })
      } else {
        setChatStatus({ text: `🟢 ${t("chatbot.online_status")}`, isError: false })
      }
      
      // Actualizar el mensaje de bienvenida/offline
      const firstMessage = chatMessages[0]
      if (firstMessage && firstMessage.type === 'bot') {
        const newContent = chatStatus.isError ? t("chatbot.offline_message") : t("chatbot.welcome_message")
        setChatMessages(prev => [
          { ...firstMessage, content: newContent },
          ...prev.slice(1)
        ])
      }
    }
  }, [i18n.language, t, chatStatus.isError])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <RecommendationsSection />
          <ContactCard locale={i18n.language as 'en' | 'es'} />
          {isChatbotEnabled && isChatbotVisible && (
            <ChatbotSection 
              setIsChatbotVisible={setIsChatbotVisible}
              messages={chatMessages}
              setMessages={setChatMessages}
              isLoading={isChatLoading}
              setIsLoading={setIsChatLoading}
              status={chatStatus}
              setStatus={setChatStatus}
              sessionId={sessionIdRef.current}
            />
          )}
        </main>
        <Footer />
        {/* Botón del chatbot con notificación - Solo visible si está habilitado */}
        {isChatbotEnabled && (
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => {
                setIsChatbotVisible(!isChatbotVisible)
                setShowNotification(false)
              }}
              className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors relative"
            >
              <Bot className="w-6 h-6" />
              
              {/* Notificación animada */}
              {showNotification && !isChatbotVisible && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center chatbot-notification shadow-lg">
                  <span className="font-bold">1</span>
                </div>
              )}
              
              {/* Mensaje flotante */}
              {showNotification && !isChatbotVisible && (
                <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap chatbot-message">
                  {t("chatbot.notification_message")}
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
