"use client"

import { useTranslation } from "react-i18next"
import {
  ShoppingCart,
  BrainCircuit,
  Bot,
  Users,
  Cloud,
  Rocket,
  CheckCircle2,
  LucideIcon,
  Link,
  Github,
  CreditCard,
  AppWindow,
  Clock,
  Scale,
  ScanFace,
  Banknote,
  Info,
  ArrowLeft
} from "lucide-react"
import React, { useRef, useEffect, useState } from "react"
import { useInfiniteCarousel } from "../hooks/use-infinite-carousel";

// Asignación de iconos y colores por índice
const iconMap: { icon: LucideIcon; color: string; bgColor: string; borderColor: string; technologies: string[] }[] = [
  {
    icon: CreditCard,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    technologies: ["Java/Spring Boot", "PostgreSQL", "Microservices", "API Rest", "Jenkins/GitHub Actions", "Veracode", "SonarQube", "Checkstyle", "ArchUnit", "Karate", "Spock"]
  },
  {
    icon: BrainCircuit,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    technologies: ["Python", "OpenCV", "Rekognition", "SageMaker", "EC2", "S3"]
  },
  {
    icon: Bot,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    technologies: ["Python", "SageMaker", "Tensorflow", "Keras", "Sci-Kit Learn", "CNN", "Micropython", "Raspberry Pi"]
  },
  {
    icon: Users,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    technologies: ["Java", "MVC", "OracleDB", "PL/SQL", "Shell Script"]
  },
  {
    icon: AppWindow,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    technologies: ["Java", "Websphere Portal", "Websphere Application Server", "OracleDB", "HTML", "CSS", "JS", "Portlets"]
  },
  {
    icon: ShoppingCart,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
    technologies: ["Java", "PostgreSQL", "Web Services"]
  },
  {
    icon: Cloud,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    technologies: ["AWS"]
  },
  {
    icon: Clock,
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    technologies: ["Google Cloud", "API Rest", "Swagger", "DDD", "SaaS", "OracleDB"]
  },
  {
    icon: Scale,
    color: "text-lime-600 dark:text-lime-400",
    bgColor: "bg-lime-50 dark:bg-lime-900/20",
    borderColor: "border-lime-200 dark:border-lime-800",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "OracleDB", "Veracode", "SonarQube", "JUnit", "Mockito", "Bamboo CI/CD", "OCR"]
  },
  {
    icon: ScanFace,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
    technologies: ["Java", "OracleDB", "OpenCV", "Facial Action Coding System"]
  },
  {
    icon: Banknote,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    technologies: ["Java", "Spring Boot", "Spring Batch", "Spring Data JPA", "Spring Security", "JWT", "OracleDB", "Fortify/Kiuwan", "SonarQube", "JUnit", "Weblogic"]
  },
]

export default function ProjectsSection() {
  const { t } = useTranslation()
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({})
  const projects = t("projects.projects", { returnObjects: true }) as any[]
  const cardWidth = 370
  const speed = 1.0
  const {
    marqueeItems,
    offset,
    trackWidth,
    trackRef,
    dragging,
    handlers
  } = useInfiniteCarousel({ items: projects, cardWidth, speed })

  // Renderiza el contenido extendido del modal
  const renderContent = (project: any) => {
    if (Array.isArray(project.contents) && project.contents.length > 0) {
      return project.contents
    }
    return project.description ? [project.description] : []
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="w-full px-2 sm:px-4">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            {t("projects.title")}
          </h2>
          <div className="relative overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex gap-8 items-center select-none touch-pan-x"
              style={{
                width: `${trackWidth}px`,
                transform: `translateX(${offset}px)`,
                cursor: dragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                transition: dragging ? 'none' : 'transform 0.1s linear',
              }}
              {...handlers}
            >
              {marqueeItems.map((project, idx) => {
                const { icon: Icon, color, bgColor, borderColor } = iconMap[idx % iconMap.length]
                const isFlipped = flipped[idx]
                return (
                  <div
                    key={idx + project.title}
                    className="relative group [perspective:1200px] h-auto overflow-visible"
                    style={{ width: `${cardWidth}px`, minHeight: 420 }}
                  >
                    <div
                      className={`transition-transform duration-700 [transform-style:preserve-3d] w-full min-h-full h-auto ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                      style={{ minHeight: 420 }}
                    >
                      {/* Cara frontal */}
                      <div className={`absolute inset-0 w-full min-h-full h-auto bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border ${borderColor} [backface-visibility:hidden] flex flex-col`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center ${(Icon === Bot || Icon === Users) ? 'p-2' : ''}`}> 
                            {Icon && (
                              <Icon className={`w-6 h-6 ${color}`} />
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {(Array.isArray(project.technologies) && project.technologies.length > 0
                            ? project.technologies
                            : iconMap[idx % iconMap.length]?.technologies || [])
                            .map((tech: string, index: number) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-1"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.externalLink && (
                            <a
                              href={project.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
                            >
                              <Link className="w-4 h-4" />
                              {t("projects.external_link")}
                            </a>
                          )}
                          {project.githubRepo && (
                            <a
                              href={project.githubRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm"
                            >
                              <Github className="w-4 h-4" />
                              {t("projects.github_repo")}
                            </a>
                          )}
                          <button
                            onClick={() => setFlipped(f => ({ ...f, [idx]: true }))}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                          >
                            <Info className="w-4 h-4" />
                            {t("projects.more_info")}
                          </button>
                        </div>
                      </div>
                      {/* Cara trasera */}
                      <div className={`absolute inset-0 w-full min-h-full h-auto bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border ${borderColor} [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center ${(Icon === Bot || Icon === Users) ? 'p-2' : ''}`}>
                            {Icon && (
                              <Icon className={`w-6 h-6 ${color}`} />
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4 max-h-[220px] overflow-y-auto pr-2 mb-4">
                          {renderContent(project).map((description: string, index: number) => (
                            <p key={index} className="mb-0">
                              {description}
                            </p>
                          ))}
                        </div>
                        <div className="mt-auto flex justify-center w-full">
                          <button
                            onClick={() => setFlipped(f => ({ ...f, [idx]: false }))}
                            className="flex items-center justify-center px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-500 transition-all gap-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer select-none"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            {t('projects.close') || 'Volver'}
                          </button>
                        </div>
                      </div>
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