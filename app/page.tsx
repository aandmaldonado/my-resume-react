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
import RecommendationsSection from "@/components/recommendations-section"
import ContactCard from "@/components/contact-card"

interface Message {
  type: 'user' | 'bot';
  content: string;
  isHTML?: boolean;
}

export default function Home() {
  const { i18n, t } = useTranslation()

  // Generar session_id una sola vez al montar el componente
  const sessionIdRef = useRef(`user-${Date.now()}-${Math.random().toString(36).slice(2)}`)
  // Referencia para evitar múltiples inicializaciones
  const isInitializedRef = useRef(false)

  // const isChatbotEnabled = process.env.NEXT_PUBLIC_CHATBOT_ENABLED === 'true';
  const isChatbotEnabled = false;

  useEffect(() => {
    // Set default language to Spanish
    i18n.changeLanguage("es")
  }, [i18n])

  return (
    <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-dark-bg transition-colors duration-300">
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
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
