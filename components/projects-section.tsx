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
  X,
  LucideIcon,
  Link,
  Github,
  CreditCard,
  AppWindow,
  Clock,
  Scale,
  ScanFace,
  Banknote,
  Info
} from "lucide-react"
import { useState } from "react"

interface Project {
  id: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  technologies: string[];
  externalLink?: string;
  githubRepo?: string;
}

export default function ProjectsSection() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // Obtener proyectos desde i18n
  const projects = t("projects.projects", { returnObjects: true }) as any[];

  // Iconos por defecto para los proyectos (puedes personalizar esto si agregas iconos en i18n)
  const iconList = [
    CreditCard, BrainCircuit, Bot, Users, AppWindow, ShoppingCart, Cloud, Clock, Scale, ScanFace, Banknote, Rocket
  ];

  const renderContent = (projectId: number) => {
    const project = projects[projectId];
    return Array.isArray(project.contents) ? project.contents : [];
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            {t("projects.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, idx: number) => {
              const IconComponent = iconList[idx % iconList.length] || Rocket;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 text-blue-600 dark:text-blue-400`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies && project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
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
                      onClick={() => setSelectedProject(project.id)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                    >
                      <Info className="w-4 h-4" />
                      {t("projects.more_info")}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const project = projects.find((p: any) => p.id === selectedProject)
                    const IconComponent = iconList[projects.findIndex((p: any) => p.id === selectedProject) % iconList.length] || Rocket;
                    return project && (
                      <>
                        <div className={`w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 text-blue-600 dark:text-blue-400`} />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                      </>
                    )
                  })()}
                </div>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                  {renderContent(projects.findIndex((p: any) => p.id === selectedProject)).map((description: string, index: number) => (
                    <p key={index} className="mb-0">
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
