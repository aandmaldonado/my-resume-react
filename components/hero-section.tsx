"use client"

import { useTranslation } from "react-i18next"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
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
    <section id="hero" className="relative h-screen [min-height:100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background Container - Forced full expansion */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {mounted && (
          <video
            key={resolvedTheme}
            className="min-w-full min-h-full absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source
              src={
                resolvedTheme === "dark"
                  ? "/hero/Digital_Wireframe_Brain_Animation.mp4"
                  : "/hero/Digital_Wireframe_Brain_Animation.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Overlay Double */}
        <div className="absolute inset-0 z-1 bg-dark-bg/60"></div>
        <div className="absolute inset-0 z-2 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 xs:px-6 sm:px-8 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold mb-4 xs:mb-6 leading-tight"
        >
          {t("hero.title")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Álvaro
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg xs:text-xl sm:text-xl md:text-2xl mb-6 xs:mb-8 text-gray-200"
        >
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
        </motion.div>

        {/* Download CV Button + Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center items-center px-4 xs:px-0"
        >
          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-3 px-8 xs:px-12 py-6 xs:py-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-lg xs:text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-glow-blue border-none"
            aria-label={t("hero.contact_button")}
          >
            {t("hero.contact_button")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Modern Mouse Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-1.5 backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
        </div>
      </motion.div>

      {/* Negative margin bottom to allow next section overlap */}
      <div className="absolute bottom-0 left-0 right-0 h-32 -mb-32"></div>
    </section>
  )
}
