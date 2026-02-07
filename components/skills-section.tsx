"use client";

import { useTranslation } from "react-i18next";
import {
  ClipboardList,
  Monitor,
  Server,
  Database,
  GitBranch,
  Hammer,
  TestTube,
  Workflow,
  Activity,
  Cloud,
  BrainCircuit,
  Code2,
  Layout,
  Heart,
  Languages,
} from "lucide-react";
import GlassCard from "./ui/glass-card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const { t } = useTranslation();

  const skillsData = t("skills", { returnObjects: true }) as any;

  // Mapeo de iconos, colores y categorías por id
  const skillMeta: Record<
    string,
    {
      icon: any;
      color: string;
      bgColor: string;
      borderColor: string;
      category: string;
    }
  > = {
    api_design: {
      icon: Layout,
      color: "text-blue-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "backend",
    },
    code_review: {
      icon: Code2,
      color: "text-purple-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "backend",
    },
    project_management: {
      icon: ClipboardList,
      color: "text-pink-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "soft_skills",
    },
    frontend: {
      icon: Monitor,
      color: "text-green-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "frontend",
    },
    backend: {
      icon: Server,
      color: "text-orange-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "backend",
    },
    database: {
      icon: Database,
      color: "text-cyan-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "backend",
    },
    code_management: {
      icon: GitBranch,
      color: "text-red-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "devops",
    },
    build_tools: {
      icon: Hammer,
      color: "text-yellow-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "devops",
    },
    testing: {
      icon: TestTube,
      color: "text-lime-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "backend",
    },
    cicd: {
      icon: Workflow,
      color: "text-amber-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "devops",
    },
    monitoring: {
      icon: Activity,
      color: "text-teal-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "devops",
    },
    cloud: {
      icon: Cloud,
      color: "text-fuchsia-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "cloud",
    },
    ai: {
      icon: BrainCircuit,
      color: "text-rose-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "ai",
    },
    soft_skills: {
      icon: Heart,
      color: "text-indigo-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "soft_skills",
    },
    languages: {
      icon: Languages,
      color: "text-sky-400",
      bgColor: "bg-white/5",
      borderColor: "border-white/10",
      category: "languages",
    },
  };

  const skillCategories = Object.keys(skillsData)
    .filter((id) => skillMeta[id])
    .map((id) => ({
      id,
      icon: skillMeta[id].icon,
      color: skillMeta[id].color,
      bgColor: skillMeta[id].bgColor,
      borderColor: skillMeta[id].borderColor,
      category: skillMeta[id].category,
      skills: skillsData[id].skills.split(",").map((s: string) => s.trim()),
    }));

  return (
    <section id="skills" className="py-12 sm:py-16 bg-[#030712]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            {t("skills.title").split(" ").length <= 1 ? (
              t("skills.title")
            ) : t("skills.title").split(" ").length === 2 ? (
              <>
                {t("skills.title").split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("skills.title").split(" ")[1]}
                </span>
              </>
            ) : (
              <>
                {t("skills.title").split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t("skills.title").split(" ").slice(-2).join(" ")}
                </span>
              </>
            )}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <GlassCard
                  key={category.id}
                  className="h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn("w-12 h-12 rounded-lg flex items-center justify-center", category.bgColor)}
                    >
                      <IconComponent
                        className={cn("w-6 h-6", category.color)}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {t(`skills.${category.id}.title`)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="flex items-center px-4 py-2 rounded-full shadow-sm cursor-pointer transition-all duration-200 transform hover:scale-105 hover:bg-white/5 bg-[#0A0F1E]/60 border border-white/5 text-gray-400 text-xs sm:text-sm hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
