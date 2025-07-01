"use client"

import { useEffect, useState } from "react"
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
import { Bot } from "lucide-react"
import ChatbotSection from "@/components/chatbot-section"
import RecommendationsSection from "@/components/recommendations-section"

export default function Home() {
  const { i18n } = useTranslation()
  const [isChatbotVisible, setIsChatbotVisible] = useState(false)

  useEffect(() => {
    // Set default language to Spanish
    i18n.changeLanguage("es")
  }, [i18n])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <RecommendationsSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          {isChatbotVisible && <ChatbotSection setIsChatbotVisible={setIsChatbotVisible} />}
        </main>
        <Footer />
        {/*
        <button
          onClick={() => setIsChatbotVisible(!isChatbotVisible)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          <Bot className="w-6 h-6" />
        </button>
        */}
      </div>
    </ThemeProvider>
  )
}
