"use client"

import { useTranslation } from "react-i18next"
import { Building2, Calendar, Briefcase, CheckCircle2, MapPin, ClipboardList, ListChecks, Award, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function ExperienceSection() {
  const { t } = useTranslation()
  const [expandedSections, setExpandedSections] = useState<Record<number, Record<string, boolean>>>(() => {
    const initial: Record<number, Record<string, boolean>> = {};
    const experiences = t("experience.experiences", { returnObjects: true }) as any[];
    experiences.forEach((_, idx) => {
      initial[idx] = { description: true, responsibilities: false, achievements: false };
    });
    return initial;
  })

  const experiences = t("experience.experiences", { returnObjects: true }) as any[];

  const toggleExpand = (expId: number, section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [expId]: {
        ...prev[expId],
        [section]: !prev[expId]?.[section],
      },
    }))
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            {t("experience.title")}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                  {/* Company logo */}
                  <div className="ml-16 mr-6 flex-shrink-0">
                    <div className="border border-blue-200 dark:border-blue-800 w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="border border-blue-200 dark:border-blue-800 flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
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
                          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    {/* Descripción */}
                    <div className="flex items-start gap-3 mb-6">
                      <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-bold flex items-center justify-between w-full">
                        {t("experience.description")}
                        <button onClick={() => toggleExpand(idx, 'description')} className="text-blue-600 dark:text-blue-400">
                          {expandedSections[idx]?.['description'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </p>
                    </div>
                    {expandedSections[idx]?.['description'] && (
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                        {exp.description}
                      </p>
                    )}
                    {/* Responsabilidades */}
                    <div className="flex items-start gap-3 mb-6">
                      <ListChecks className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-bold flex items-center justify-between w-full">
                        {t("experience.responsibilities")}
                        <button onClick={() => toggleExpand(idx, 'responsibilities')} className="text-blue-600 dark:text-blue-400">
                          {expandedSections[idx]?.['responsibilities'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </p>
                    </div>
                    {expandedSections[idx]?.['responsibilities'] && (
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp: string, respIndex: number) => (
                          <li key={respIndex} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* Logros */}
                    <div className="mt-8">
                      <div className="flex items-start gap-3 mb-6">
                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-bold flex items-center justify-between w-full">
                          {t("experience.achievements")}
                          <button onClick={() => toggleExpand(idx, 'achievements')} className="text-blue-600 dark:text-blue-400">
                            {expandedSections[idx]?.['achievements'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </p>
                      </div>
                      {expandedSections[idx]?.['achievements'] && exp.achievements && (
                        <ul className="space-y-2">
                          {exp.achievements.map((achiev: string, achievIndex: number) => (
                            <li key={achievIndex} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{achiev}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
