"use client"

import { useTranslation } from "react-i18next"
import Typewriter from "typewriter-effect"
import { ArrowDown, Code2, Rocket, Mail } from "lucide-react"
import CVDownloadModal from "@/components/cv-download-modal"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const { t } = useTranslation()
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Split subtitle by '|' and trim whitespace
  const subtitleParts = t("hero.subtitle").split('|').map(part => part.trim())

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <video
            key={resolvedTheme}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src={
                resolvedTheme === "dark"
                  ? "/hero/video_bg_dark.mp4"
                  : "/hero/video_bg_light.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 xs:px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 xs:mb-6 animate-fade-in">
          {(() => {
            const title = t("hero.title");
            const words = title.split(' ');
            const firstPart = words.slice(0, -2).join(' '); // "¡Hola Mundo! Soy"
            const secondPart = words.slice(-2).join(' ');   // "Álvaro Maldonado"
            
            return (
              <>
                <div className="mb-4">{firstPart}</div>
                <div>{secondPart}</div>
              </>
            );
          })()}
        </div>
        <div className="text-lg xs:text-xl sm:text-xl md:text-2xl mb-6 xs:mb-8 text-gray-200 animate-fade-in-delay">
          <Typewriter
            options={{
              strings: subtitleParts,
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
        
        {/* Download CV Button + Contact Button */}
        <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center items-center px-4 xs:px-0">
          <CVDownloadModal />
          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-4 xs:px-6 py-2.5 xs:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label={t("hero.contact_button", "Contáctame")}
          >
            <Mail className="w-4 h-4 xs:w-5 xs:h-5" />
            {t("hero.contact_button", "Contáctame")}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown
          className="w-8 h-8 text-white animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        />
      </div>
      
      {/* Negative margin bottom to allow next section overlap */}
      <div className="absolute bottom-0 left-0 right-0 h-32 -mb-32"></div>
    </section>
  )
}
