"use client"

import { useTranslation } from "react-i18next"
import { Building2, Calendar, CheckCircle2, MapPin } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Image from "next/image"
import { extractStackIcons } from "@/lib/stack-icons"

export default function ExperienceSection() {
  const { t } = useTranslation()

  const experiences = t("experience.experiences", { returnObjects: true }) as any[]

  return (
    <section id="experience" className="py-12 sm:py-16 bg-[#030712]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            {t("experience.title").split(" ").length <= 1 ? (
              t("experience.title")
            ) : t("experience.title").split(" ").length === 2 ? (
              <>
                {t("experience.title").split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("experience.title").split(" ")[1]}
                </span>
              </>
            ) : (
              <>
                {t("experience.title").split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("experience.title").split(" ").slice(-2).join(" ")}
                </span>
              </>
            )}
          </h2>

          <div className="relative">
            {/* Timeline line - Ajustado para mobile */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => {
                const stackIcons = extractStackIcons(exp.stack)

                return (
                  <div key={idx} className="relative flex items-start">
                    {/* Timeline dot - Ajustado para mobile */}
                    <div className="absolute left-2 sm:left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 z-20"></div>

                    {/* Company logo - Oculto en mobile */}
                    <div className="hidden sm:block ml-16 mr-6 flex-shrink-0">
                      <div className="relative border border-blue-200 dark:border-blue-800 w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`Logotipo de ${exp.company}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <GlassCard className="flex-1 sm:ml-0 ml-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {exp.position}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {exp.company}
                            </p>
                            <p className="text-gray-500 dark:text-gray-300 text-sm flex items-center gap-2 mt-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-400 dark:text-gray-300 mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      {/* Logros */}
                      <div className="mt-8">
                        {exp.achievements && (
                          <ul className="space-y-2">
                            {exp.achievements.map((achiev: string, achievIndex: number) => (
                              <li key={achievIndex} className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">{achiev}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {stackIcons.length > 0 && (
                          <div className="mt-6">
                            <p className="mb-3 text-sm font-medium text-gray-400">
                              {t("experience.stack")}
                            </p>
                            <div
                              className="flex flex-wrap items-center gap-2.5"
                              role="list"
                              aria-label={t("experience.stack")}
                            >
                              {stackIcons.map((tech) => (
                                <span
                                  key={tech.id}
                                  role="listitem"
                                  title={tech.alt}
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 p-1.5 shadow-sm transition-transform hover:scale-110 hover:bg-white"
                                >
                                  {tech.src ? (
                                    <Image
                                      src={tech.src}
                                      alt={tech.alt}
                                      width={24}
                                      height={24}
                                      className="h-full w-full object-contain"
                                    />
                                  ) : (
                                    <svg
                                      role="img"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-full w-full"
                                      aria-label={tech.alt}
                                    >
                                      <path d={tech.path} fill={tech.hex} />
                                    </svg>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
