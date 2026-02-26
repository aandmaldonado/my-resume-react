"use client"

import { useTranslation } from "react-i18next"
import { trackProjectClick, trackProjectFilter } from "@/lib/analytics"
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
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Asignación de iconos, colores y categorías por índice
const iconMap: { icon: LucideIcon; color: string; bgColor: string; borderColor: string; category: string }[] = [
  {
    icon: Bot,
    color: "text-green-400",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/20",
    category: "ai"
  },
  {
    icon: BrainCircuit,
    color: "text-purple-400",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/20",
    category: "ai"
  },
  {
    icon: Scale,
    color: "text-lime-400",
    bgColor: "bg-lime-900/20",
    borderColor: "border-lime-500/20",
    category: "bank"
  },
  {
    icon: Clock,
    color: "text-cyan-400",
    bgColor: "bg-cyan-900/20",
    borderColor: "border-cyan-500/20",
    category: "hr"
  },
  {
    icon: Banknote,
    color: "text-teal-400",
    bgColor: "bg-teal-900/20",
    borderColor: "border-teal-500/20",
    category: "bank"
  },
  {
    icon: CreditCard,
    color: "text-blue-400",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/20",
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
    <section id="projects" className="py-12 sm:py-16 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            {t("projects.title").split(" ").length <= 1 ? (
              t("projects.title")
            ) : t("projects.title").split(" ").length === 2 ? (
              <>
                {t("projects.title").split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("projects.title").split(" ")[1]}
                </span>
              </>
            ) : (
              <>
                {t("projects.title").split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("projects.title").split(" ").slice(-2).join(" ")}
                </span>
              </>
            )}
          </h2>
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <Button
                  key={filter.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setActiveFilter(filter.id);
                    trackProjectFilter(filter.id);
                  }}
                  className={cn(
                    "flex items-center gap-2 transition-all rounded-lg h-9 px-4",
                    isActive
                      ? "bg-blue-950/40 text-blue-400 border border-blue-500/50 backdrop-blur-sm shadow-glow-blue hover:bg-blue-900/60 hover:text-blue-300"
                      : "bg-dark-card/40 border border-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5"
                  )}
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
              const globalIdx = projects.findIndex(p => p.title === project.title)
              const { icon: Icon, color, bgColor, borderColor } = iconMap[globalIdx % iconMap.length]
              const isFlipped = flipped[globalIdx]
              return (
                <motion.div
                  key={globalIdx + project.title}
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group perspective-1000 min-h-[420px] h-auto"
                >
                  <motion.div
                    className="relative w-full h-full preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {/* Front Face */}
                    <div
                      className={cn(
                        "absolute inset-0 w-full h-full backface-hidden p-[1px] rounded-xl bg-gradient-to-b from-blue-500/30 to-blue-500/5 group/front",
                        !isFlipped ? "z-20 pointer-events-auto" : "z-0 pointer-events-none"
                      )}
                      style={{ transform: "translateZ(1px)" }}
                    >
                      <div className="relative h-full w-full bg-dark-card/90 backdrop-blur-xl rounded-[11px] p-6 flex flex-col transition-all duration-300 hover:shadow-glow-blue overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", bgColor)}>
                            {Icon && (
                              <Icon className={cn("w-6 h-6", color)} />
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed text-justify h-full text-sm">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto relative z-20">
                          {project.externalLink && (
                            <a
                              href={project.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-blue-950/40 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-900/60 transition-all flex items-center gap-2 text-sm backdrop-blur-sm"
                              onClick={() => {
                                trackProjectClick(project.title, 'demo');
                              }}
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
                              className="px-4 py-2 bg-slate-900/40 text-slate-300 border border-slate-700/30 rounded-lg hover:bg-slate-800/60 transition-all flex items-center gap-2 text-sm backdrop-blur-sm"
                              onClick={() => {
                                trackProjectClick(project.title, 'repo');
                              }}
                            >
                              <Github className="w-4 h-4" />
                              {t("projects.github_repo")}
                            </a>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setFlipped(f => ({ ...f, [globalIdx]: true }));
                              trackProjectClick(project.title, 'flip_info');
                            }}
                            className="px-4 py-2 bg-slate-900/40 text-slate-300 border border-slate-700/30 rounded-lg hover:bg-slate-800/60 transition-all flex items-center gap-2 text-sm backdrop-blur-sm"
                          >
                            <Info className="w-4 h-4" />
                            {t("projects.more_info")}
                          </button>
                        </div>

                        {/* Accent line at bottom match GlassCard */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover/front:w-full transition-all duration-500 ease-out bg-blue-500" />
                      </div>
                    </div>

                    {/* Back Face */}
                    <div
                      className={cn(
                        "absolute inset-0 w-full h-full backface-hidden p-[1px] rounded-xl bg-gradient-to-b from-blue-500/30 to-blue-500/5 group/back",
                        isFlipped ? "z-20 pointer-events-auto" : "z-0 pointer-events-none"
                      )}
                      style={{ transform: "rotateY(180deg) translateZ(1px)" }}
                    >
                      <div className="relative h-full w-full bg-dark-card/90 backdrop-blur-xl rounded-[11px] p-6 flex flex-col transition-all duration-300 hover:shadow-glow-blue overflow-hidden text-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", bgColor)}>
                            {Icon && (
                              <Icon className={cn("w-6 h-6", color)} />
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                        </div>
                        <div className="text-gray-300 leading-relaxed text-justify space-y-4 max-h-[220px] overflow-y-auto pr-2 mb-4 scrollbar-thin scrollbar-thumb-gray-700">
                          {renderContent(project).map((description: string, index: number) => (
                            <p key={index} className="mb-0">
                              {description}
                            </p>
                          ))}
                        </div>
                        <div className="mt-auto flex justify-center w-full">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setFlipped(f => ({ ...f, [globalIdx]: false }));
                              trackProjectClick(project.title, 'flip_back');
                            }}
                            className="flex items-center justify-center px-6 py-2 bg-blue-950/40 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-900/60 transition-all gap-2 text-sm font-medium backdrop-blur-sm"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            {t('projects.close') || 'Volver'}
                          </button>
                        </div>
                        {/* Accent line at bottom match GlassCard */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover/back:w-full transition-all duration-500 ease-out bg-blue-500" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
          {/* Mensaje si no hay proyectos */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No hay proyectos para la categoría seleccionada.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}