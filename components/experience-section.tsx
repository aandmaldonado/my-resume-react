"use client"

import { useTranslation } from "react-i18next"
import { Building2, Calendar, Briefcase, CheckCircle2, MapPin, ClipboardList, ListChecks, Award, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const experiences = [
    {
      id: "exp1",
      logo: "/exp/inadvance.jpeg?height=60&width=60",
      company: "InAdvance Consulting Group",
      position: "Senior Software Engineer",
      period: "2024 - Presente",
      location: "Santiago, Chile",
      description1: "exp1.description1",
      description2: "exp1.description2",
      resp1: "exp1.resp1",
      responsibilities: ["exp1.resp2", "exp1.resp3", "exp1.resp4", "exp1.resp5", "exp1.resp6", "exp1.resp7", "exp1.resp8"],
      achiev1: "exp1.achiev1",
      achievments: ["exp1.achiev2", "exp1.achiev3", "exp1.achiev4"]

    },
    {
      id: "exp2",
      logo: "/exp/imagemaker.jpeg?height=60&width=60",
      company: "Imagemaker",
      position: "Senior Software Engineer",
      period: "2023 - 2024",
      location: "Santiago, Chile",
      description1: "exp2.description1",
      description2: "exp2.description2",
      resp1: "exp2.resp1",
      responsibilities: ["exp2.resp2", "exp2.resp3", "exp2.resp4", "exp2.resp5", "exp2.resp6", "exp2.resp7"],
      achiev1: "exp2.achiev1",
      achievments: ["exp2.achiev2", "exp2.achiev3", "exp2.achiev4"]
    },
    {
      id: "exp3",
      logo: "/exp/falabella.jpeg?height=60&width=60",
      company: "Falabella",
      position: "Technical Lead",
      period: "2022 - 2023",
      location: "Santiago, Chile",
      description1: "exp3.description1",
      description2: "exp3.description2",
      resp1: "exp3.resp1",
      responsibilities: ["exp3.resp2", "exp3.resp3", "exp3.resp4", "exp3.resp5", "exp3.resp6", "exp3.resp7", "exp3.resp8", "exp3.resp9", "exp3.resp10"],
      achiev1: "exp3.achiev1",
      achievments: ["exp3.achiev2", "exp3.achiev3", "exp3.achiev4"]
    },
    {
      id: "exp4",
      logo: "/exp/neurogenesis.jpeg?height=60&width=60",
      company: "Neurogenesis IA Technologies",
      position: "CTO & Co-Founder | AI Engineer",
      period: "2021 - 2022",
      location: "Barcelona, España",
      description1: "exp4.description1",
      description2: "exp4.description2",
      resp1: "exp4.resp1",
      responsibilities: ["exp4.resp2", "exp4.resp3", "exp4.resp4", "exp4.resp5", "exp4.resp6", "exp4.resp7", "exp4.resp8"],
      achiev1: "exp4.achiev1",
      achievments: ["exp4.achiev2", "exp4.achiev3", "exp4.achiev4", "exp4.achiev5", "exp4.achiev6", "exp4.achiev7"]
    },
    {
      id: "exp5",
      logo: "/exp/nttdata.jpeg?height=60&width=60",
      company: "NTT DATA",
      position: "Senior Software Engineer",
      period: "2019 - 2021",
      location: "Santiago, Chile",
      description1: "exp5.description1",
      description2: "exp5.description2",
      resp1: "exp5.resp1",
      responsibilities: ["exp5.resp2", "exp5.resp3", "exp5.resp4", "exp5.resp5", "exp5.resp6", "exp5.resp7", "exp5.resp8", "exp5.resp9", "exp5.resp10", "exp5.resp11", "exp5.resp12"],
      achiev1: "exp5.achiev1",
      achievments: ["exp5.achiev2", "exp5.achiev3", "exp5.achiev4", "exp5.achiev5", "exp5.achiev6"]
    },
    {
      id: "exp6",
      logo: "/exp/falabella.jpeg?height=60&width=60",
      company: "Falabella",
      position: "Software Engineer",
      period: "2015 - 2019",
      location: "Santiago, Chile",
      description1: "exp6.description1",
      description2: "exp6.description2",
      resp1: "exp6.resp1",
      responsibilities: ["exp6.resp2", "exp6.resp3", "exp6.resp4", "exp6.resp5", "exp6.resp6", "exp6.resp7", "exp6.resp8"],
      achiev1: "exp6.achiev1",
      achievments: ["exp6.achiev2", "exp6.achiev3", "exp6.achiev4"]
    },
    {
      id: "exp7",
      logo: "/exp/nttdata.jpeg?height=60&width=60",
      company: "NTT DATA",
      position: "Software Engineer",
      period: "2010 - 2014",
      location: "Santiago, Chile",
      description1: "exp7.description1",
      description2: "exp7.description2",
      resp1: "exp6.resp1",
      responsibilities: ["exp7.resp2", "exp7.resp3", "exp7.resp4", "exp7.resp5", "exp7.resp6", "exp7.resp7", "exp7.resp8", "exp7.resp9"],
      achiev1: "exp7.achiev1",
      achievments: ["exp7.achiev2", "exp7.achiev3"]
    }
  ];

export default function ExperienceSection() {
  const { t } = useTranslation()
  const [expandedSections, setExpandedSections] = useState<Record<string, Record<string, boolean>>>(() => {
    const initial: Record<string, Record<string, boolean>> = {};
    experiences.forEach((exp) => {
      initial[exp.id] = { description: true, responsibilities: false, achievements: false };
    });
    return initial;
  })

  const toggleExpand = (expId: string, section: string) => {
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
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                  {/* Company logo */}
                  <div className="ml-16 mr-6 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {t(`experience.${exp.id}.position`)}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {t(`experience.${exp.id}.company`)}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4" />
                            {t(`experience.${exp.id}.location`)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{t(`experience.${exp.id}.period`)}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mb-6">
                      <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-bold flex items-center justify-between w-full">
                        {t(`experience.${exp.id}.description1`)}
                        <button onClick={() => toggleExpand(exp.id, 'description')} className="text-blue-600 dark:text-blue-400">
                          {expandedSections[exp.id]?.['description'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </p>
                    </div>
                    {expandedSections[exp.id]?.['description'] && (
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                        {t(`experience.${exp.id}.description2`)}
                      </p>
                    )}
                    <div className="flex items-start gap-3 mb-6">
                      <ListChecks className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-bold flex items-center justify-between w-full">
                        {t(`experience.${exp.id}.resp1`)}
                        <button onClick={() => toggleExpand(exp.id, 'responsibilities')} className="text-blue-600 dark:text-blue-400">
                          {expandedSections[exp.id]?.['responsibilities'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </p>
                    </div>
                    {expandedSections[exp.id]?.['responsibilities'] && (
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{t(`experience.${resp}`)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-8">
                      <div className="flex items-start gap-3 mb-6">
                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-bold flex items-center justify-between w-full">
                          {t(`experience.${exp.id}.achiev1`)}
                          <button onClick={() => toggleExpand(exp.id, 'achievements')} className="text-blue-600 dark:text-blue-400">
                            {expandedSections[exp.id]?.['achievements'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </p>
                      </div>
                      {expandedSections[exp.id]?.['achievements'] && exp.achievments && (
                        <ul className="space-y-2">
                          {exp.achievments.map((achiev, achievIndex) => (
                            <li key={achievIndex} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{t(`experience.${achiev}`)}</span>
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
