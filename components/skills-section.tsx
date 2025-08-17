"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
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
  Brain,
  BrainCircuit,
  Code2,
  Layout,
  Heart,
  Languages,
  Filter,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function SkillsSection() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      category: "backend",
    },
    code_review: {
      icon: Code2,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      category: "backend",
    },
    project_management: {
      icon: ClipboardList,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      category: "soft_skills",
    },
    frontend: {
      icon: Monitor,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      category: "frontend",
    },
    backend: {
      icon: Server,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      category: "backend",
    },
    database: {
      icon: Database,
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      category: "backend",
    },
    code_management: {
      icon: GitBranch,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      category: "devops",
    },
    build_tools: {
      icon: Hammer,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      category: "devops",
    },
    testing: {
      icon: TestTube,
      color: "text-lime-600 dark:text-lime-400",
      bgColor: "bg-lime-50 dark:bg-lime-900/20",
      borderColor: "border-lime-200 dark:border-lime-800",
      category: "backend",
    },
    cicd: {
      icon: Workflow,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
      category: "devops",
    },
    monitoring: {
      icon: Activity,
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      category: "devops",
    },
    cloud: {
      icon: Cloud,
      color: "text-fuchsia-600 dark:text-fuchsia-400",
      bgColor: "bg-fuchsia-50 dark:bg-fuchsia-900/20",
      borderColor: "border-fuchsia-200 dark:border-fuchsia-800",
      category: "cloud",
    },
    ai: {
      icon: BrainCircuit,
      color: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      borderColor: "border-rose-200 dark:border-rose-800",
      category: "ai",
    },
    soft_skills: {
      icon: Heart,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      category: "soft_skills",
    },
    languages: {
      icon: Languages,
      color: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-900/20",
      borderColor: "border-sky-200 dark:border-sky-800",
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

  const filters = [
    { id: "all", icon: Filter },
    { id: "backend", icon: Server },
    { id: "frontend", icon: Monitor },
    { id: "cloud", icon: Cloud },
    { id: "ai", icon: BrainCircuit },
    { id: "devops", icon: Workflow },
    { id: "soft_skills", icon: Heart },
    { id: "languages", icon: Languages },
  ];

  const filteredCategories = skillCategories.filter(
    (category) => activeFilter === "all" || category.category === activeFilter
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Brain className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
            {t("skills.title")}
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {t(`skills.filters.${filter.id}`)}
                </Button>
              );
            })}
          </div>

          {/* Skills */}
          {(activeFilter === "all" ||
            activeFilter === "backend" ||
            activeFilter === "frontend" ||
            activeFilter === "cloud" ||
            activeFilter === "ai" ||
            activeFilter === "devops" ||
            activeFilter === "soft_skills" ||
            activeFilter === "languages") && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={category.id}
                      className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm border ${category.borderColor} hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${category.color}`}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {t(`skills.${category.id}.title`)}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="flex items-center px-4 py-2 rounded-full shadow-md cursor-pointer transition-all duration-200 transform hover:scale-105 hover:shadow-lg bg-gray-100 !bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* No results message */}
          {filteredCategories.length === 0 &&
            activeFilter !== "all" &&
            activeFilter !== "soft_skills" &&
            activeFilter !== "languages" && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No skills found for the selected category.
                </p>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
