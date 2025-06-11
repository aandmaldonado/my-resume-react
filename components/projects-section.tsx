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

  const projects: Project[] = [
    {
      id: "project1",
      icon: CreditCard,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "API Rest", "Jenkins", "GitHub Actions", "Veracode", "SonarQube", "Checkstyle", "ArchUnit", "Karate", "Spock", "Kubernetes", "Docker"]
    },
    {
      id: "project2",
      icon: BrainCircuit,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      technologies: ["Python", "OpenCV", "Rekognition", "SageMaker", "EC2", "S3"]
    },
    {
      id: "project3",
      icon: Bot,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      technologies: ["Python", "SageMaker", "Tensorflow", "Keras", "Sci-Kit Learn", "CNN", "Micropython", "Raspberry Pi"],
      externalLink: t("projects.project3.externalLink")
    },
    {
      id: "project4",
      icon: Users,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      technologies: ["Java", "MVC", "OracleDB", "PL/SQL", "Shell Script"]
    },
    {
      id: "project5",
      icon: AppWindow,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      technologies: ["Java", "Websphere Portal", "Websphere Application Server", "OracleDB", "HTML", "CSS", "JS", "Portlets"],
      externalLink: t("projects.project5.externalLink")
    },
    {
      id: "project6",
      icon: ShoppingCart,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      technologies: ["Java", "PostgreSQL", "Web Services"]
    },
    {
      id: "project7",
      icon: Cloud,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      technologies: ["AWS"]
    },
    {
      id: "project8",
      icon: Clock,
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      technologies: ["Google Cloud", "API Rest", "Swagger", "DDD", "SaaS", "OracleDB"]
    },
    {
      id: "project9",
      icon: Scale,
      color: "text-lime-600 dark:text-lime-400",
      bgColor: "bg-lime-50 dark:bg-lime-900/20",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "OracleDB", "Veracode", "SonarQube", "JUnit", "Mockito", "Bamboo CI/CD", "OCR"]
    },
    {
      id: "project10",
      icon: ScanFace,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      technologies: ["Java", "OracleDB", "OpenCV", "Facial Action Coding System"],
      githubRepo: t("projects.project10.githubRepo")
    },
    {
      id: "project11",
      icon: Banknote,
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      technologies: ["Java", "Spring Boot", "Spring Batch", "Spring Data JPA", "Spring Security", "JWT", "OracleDB", "Fortify", "Kiuwan", "SonarQube", "JUnit", "Weblogic"],
      externalLink: t("projects.project11.externalLink")
    },
  ]

  const renderContent = (projectId: string) => {
    // Try to get content as an array first
    const contentArray = t(`projects.${projectId}.contents`, { returnObjects: true }) as string[];
    
    if (Array.isArray(contentArray) && contentArray.length > 0) {
      return contentArray;
    }

    // Fallback to descriptionX if content array is not found or empty
    const descriptions = []
    let index = 1
    let descriptionKey = `projects.${projectId}.description${index}`
    let description = t(descriptionKey)
    
    while (description && description !== descriptionKey) {
      descriptions.push(description)
      index++
      descriptionKey = `projects.${projectId}.description${index}`
      description = t(descriptionKey)
    }
    
    return descriptions
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
            {projects.map((project) => {
              const IconComponent = project.icon
              return (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${project.color}`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {t(`projects.${project.id}.title`)}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                    {t(`projects.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
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
                    const project = projects.find(p => p.id === selectedProject)
                    const IconComponent = project?.icon as LucideIcon
                    return project && (
                      <>
                        <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 ${project.color}`} />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {t(`projects.${selectedProject}.title`)}
                        </h3>
                      </>
                    )
                  })()}
                </div>

                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                  {renderContent(selectedProject).map((description, index) => (
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
