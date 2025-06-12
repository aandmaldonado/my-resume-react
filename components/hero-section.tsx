"use client"

import { useTranslation } from "react-i18next"
import Typewriter from "typewriter-effect"
import { ArrowDown, Code2, Rocket } from "lucide-react"

export default function HeroSection() {
  const { t } = useTranslation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero/video_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <Typewriter
            options={{
              strings: [t("hero.title")],
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 50,
            }}
          />
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay flex items-center justify-center gap-3">
          <Code2 className="w-6 h-6 text-white-400" />
          <strong>{t("hero.subtitle")}</strong>
          <Rocket className="w-6 h-6 text-white-400" />
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown
          className="w-8 h-8 text-white animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        />
      </div>
    </section>
  )
}
