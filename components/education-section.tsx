"use client"

import { useTranslation } from "react-i18next"
import { GraduationCap, Calendar, School, Award, CheckCircle2, MapPin } from "lucide-react"
import GlassCard from "./ui/glass-card"
import { motion } from "framer-motion"

export default function EducationSection() {
  const { t } = useTranslation()
  const educations = t("education.educations", { returnObjects: true }) as any[];

  return (
    <section id="education" className="py-12 sm:py-16 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            {t("education.title").split(" ").length <= 1 ? (
              t("education.title")
            ) : t("education.title").split(" ").length === 2 ? (
              <>
                {t("education.title").split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("education.title").split(" ")[1]}
                </span>
              </>
            ) : (
              <>
                {t("education.title").split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("education.title").split(" ").slice(-2).join(" ")}
                </span>
              </>
            )}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>

            <div className="space-y-12">
              {educations.map((edu, index) => {
                const concepts = Array.isArray(edu.concepts) ? edu.concepts : [];
                const hasConcepts = concepts.length > 0;
                return (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 sm:left-6.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-dark-bg z-10"></div>

                    {/* Institution logo - Oculto en mobile */}
                    <div className="hidden sm:block ml-16 mr-6 flex-shrink-0">
                      <div className="border border-blue-500/30 w-16 h-16 rounded-full bg-black/50 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                        <img
                          src={edu.logo}
                          alt={`Logotipo de ${edu.institution}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <GlassCard className="flex-1 sm:ml-0 ml-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-blue-400 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {edu.degree}
                            </h3>
                            <p className="text-blue-400 font-medium flex items-center gap-2">
                              <School className="w-4 h-4" />
                              {edu.institution}
                            </p>
                            <p className="text-gray-300 text-sm flex items-center gap-2 mt-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>

                      {/* Concepts list */}
                      {hasConcepts && (
                        <div className="mt-4 border-t border-white/10 pt-4">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {concepts.map((concept: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{concept}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
