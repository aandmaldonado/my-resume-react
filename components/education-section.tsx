"use client"

import { useTranslation } from "react-i18next"
import { GraduationCap, Calendar, School, Award, CheckCircle2, MapPin } from "lucide-react"

export default function EducationSection() {
  const { t } = useTranslation()

  const education = [
    {
      id: "edu1",
      institution: "LIDR.co",
      degree: "AI4DEVS",
      period: "2025",
      location: "Online, España",
      logo: "/edu/lidr.jpeg?height=60&width=60"
    },
    {
      id: "edu2",
      institution: "thePower",
      degree: "Bootcamp en Ciberseguridad",
      period: "2025",
      location: "Online, España",
      logo: "/edu/thepower.jpeg?height=60&width=60"
    },
    {
      id: "edu3",
      institution: "Hackio",
      degree: "Bootcamp en Desarrollo de IA",
      period: "2025",
      location: "Online, España",
      logo: "/edu/hackio.jpeg?height=60&width=60"
    },
    {
      id: "edu4",
      institution: "Universitat Politècnica de Catalunya",
      degree: "Máster en Inteligencia Artificial",
      period: "2020 - 2021",
      location: "Online, España",
      logo: "/edu/upc.jpeg?height=60&width=60"
    },
    {
      id: "edu5",
      institution: "Universidad de Santiago de Chile",
      degree: "Ingeniería Civil en Informática",
      period: "2012 - 2017",
      location: "Santiago, Chile",
      logo: "/edu/usach.jpeg?height=60&width=60"
    },
    {
      id: "edu6",
      institution: "Universidad de Santiago de Chile",
      degree: "Licenciatura en Ciencias de la Ingeniería",
      period: "2012 - 2015",
      location: "Santiago, Chile",
      logo: "/edu/usach.jpeg?height=60&width=60"
    },
    {
      id: "edu7",
      institution: "INACAP",
      degree: "Ingeniería en Informática",
      period: "2006 - 2010",
      location: "Santiago, Chile",
      logo: "/edu/inacap.jpeg?height=60&width=60"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            {t("education.title")}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>

            <div className="space-y-12">
              {education.map((edu, index) => {
                const concepts = t(`education.${edu.id}.concepts`, { returnObjects: true })
                const hasConcepts = Array.isArray(concepts) && concepts.length > 0

                return (
                  <div key={edu.id} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>

                    {/* Institution logo */}
                    <div className="ml-16 mr-6 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {t(`education.${edu.id}.degree`)}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                              <School className="w-4 h-4" />
                              {t(`education.${edu.id}.institution`)}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mt-1">
                              <MapPin className="w-4 h-4" />
                              {t(`education.${edu.id}.location`)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{t(`education.${edu.id}.period`)}</span>
                        </div>
                      </div>

                      {/* Concepts list */}
                      {hasConcepts && (
                        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {concepts.map((concept, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{concept}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
