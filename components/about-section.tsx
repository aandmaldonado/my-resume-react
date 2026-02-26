"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { Haze } from "lucide-react"
import { motion } from "framer-motion"
import GlassCard from "./ui/glass-card"
import { trackSocialClick } from "@/lib/analytics"

export default function AboutSection() {
  const { t, i18n } = useTranslation()

  // Obtener datos de i18n
  const cards = t("about.cards", { returnObjects: true }) as Array<{
    number: string;
    title: string;
    description: string;
  }>;


  return (
    <section id="about" className="relative -mt-11 pt-11 pb-12 sm:pb-16 bg-dark-bg">
      <div className="container mx-auto px-4 pt-4 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            {t("about.title").split(" ").length <= 1 ? (
              t("about.title")
            ) : t("about.title").split(" ").length === 2 ? (
              <>
                {t("about.title").split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("about.title").split(" ")[1]}
                </span>
              </>
            ) : (
              <>
                {t("about.title").split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("about.title").split(" ").slice(-2).join(" ")}
                </span>
              </>
            )}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo and Social Icons */}
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden shadow-glow-blue mb-6 p-[2px] bg-gradient-to-b from-blue-500/20 to-transparent"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-dark-card p-1">
                  <Image
                    src="/about/profile.jpeg"
                    alt="Fotografía de perfil de Álvaro Maldonado"
                    fill
                    sizes="(max-width: 640px) 320px, 400px"
                    className="object-cover rounded-full"
                  />
                </div>
              </motion.div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Álvaro Maldonado</h3>
                <p className="text-gray-300 flex items-center justify-center gap-2">
                  <Haze className="w-4 h-4" />
                  {t("about.location")}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {[
                  { name: "linkedin", url: "https://www.linkedin.com/in/alvaro-maldonado-ai/", label: "LinkedIn" },
                  { name: "email", url: "mailto:readme.md@almapi.dev", label: "Email" },
                  { name: "credly", url: "https://www.credly.com/users/almapi.dev", label: "Credly" },
                  { name: "google-cloud", url: "https://www.cloudskillsboost.google/public_profiles/333c0c54-8af4-48ae-8353-531e97f03c7d", label: "Google Cloud" },
                  { name: "github", url: "https://github.com/aandmaldonado", label: "GitHub" }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -4 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    onClick={() => {
                      trackSocialClick(
                        social.name,
                        'about_section',
                        social.url
                      );
                    }}
                  >
                    <Image
                      src={`/about/${social.name}.svg`}
                      alt={social.label}
                      width={24}
                      height={24}
                      sizes="24px"
                      className="w-6 h-6 invert dark:invert-0 opacity-70 hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Content - 3 Cards */}
            <div className="space-y-6">
              {/* 3 Tarjetas principales */}
              {cards.map((card, idx) => (
                <GlassCard key={idx} className="my-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        {card.number}.
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-justify">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
