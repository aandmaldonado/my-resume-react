"use client"

import { useTranslation } from "react-i18next"
import {
  BrainCircuit,
  Bot,
  Users,
  Rocket,
  LucideIcon,
  Link,
  Github,
  CreditCard,
  Clock,
  Scale,
  Banknote,
  Info,
  ArrowLeft,
  Filter,
  Landmark
} from "lucide-react"
import React, { useState } from "react"
import { Button } from "./ui/button"

// Asignación de iconos, colores y categorías por índice
const iconMap: { icon: LucideIcon; color: string; bgColor: string; borderColor: string; category: string }[] = [
  {
    icon: Bot,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    category: "ai"
  },
  {
    icon: BrainCircuit,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    category: "ai"
  },
  {
    icon: Scale,
    color: "text-lime-600 dark:text-lime-400",
    bgColor: "bg-lime-50 dark:bg-lime-900/20",
    borderColor: "border-lime-200 dark:border-lime-800",
    category: "bank"
  },
  {
    icon: Clock,
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    category: "hr"
  },
  {
    icon: Banknote,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    category: "bank"
  },
  {
    icon: CreditCard,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    category: "bank"
  }
]

const filters = [
  { id: "all", icon: Filter },
  { id: "bank", icon: Landmark },
  { id: "hr", icon: Users },
  { id: "ai", icon: BrainCircuit }
];

export default function ProjectsSection() {
  const { t } = useTranslation()
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({})
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const projects = t("projects.projects", { returnObjects: true }) as any[]

  // Renderiza el contenido extendido del modal
  const renderContent = (project: any) => {
    if (Array.isArray(project.contents) && project.contents.length > 0) {
      return project.contents
    }
    return project.description ? [project.description] : []
  }

  // Filtrado por categoría usando iconMap[idx].category
  const filteredProjects = projects.filter((_, idx) =>
    activeFilter === "all" ? true : iconMap[idx].category === activeFilter
  )

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 pt-8 sm:pt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Rocket className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
            {t("projects.title")}
          </h2>
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <Button
                  key={filter.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 transition-colors ${isActive ? 'hover:bg-blue-700 dark:hover:bg-blue-500' : 'hover:bg-blue-200 dark:hover:bg-blue-800'}`}
                >
                  <IconComponent className="w-4 h-4" />
                  {t(`projects.filters.${filter.id}`)}
                </Button>
              );
            })}
          </div>
          {/* Grilla de proyectos filtrados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project, idx) => {
              // El idx aquí es relativo al array filtrado, pero necesitamos el idx global para iconMap y flip
              const globalIdx = projects.findIndex(p => p.title === project.title)
              const { icon: Icon, color, bgColor, borderColor } = iconMap[globalIdx % iconMap.length]
              const isFlipped = flipped[globalIdx]
              return (
                <div
                  key={globalIdx + project.title}
                  className="relative group [perspective:1200px] min-h-[420px] h-auto overflow-hidden"
                  style={{ minHeight: 420 }}
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
                          onClick={() => setFlipped(f => ({ ...f, [globalIdx]: true }))}
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
                          onClick={() => setFlipped(f => ({ ...f, [globalIdx]: false }))}
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
          {/* Mensaje si no hay proyectos */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No hay proyectos para la categoría seleccionada.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}