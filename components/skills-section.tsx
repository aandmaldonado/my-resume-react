"use client"

import { useTranslation } from "react-i18next"
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
  MessageSquare,
  Users,
  Search,
  RefreshCw,
  Target,
  Clock,
  Heart,
  Languages,
  FileJson
} from "lucide-react"

type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
  icon: React.ElementType;
  color: string;
  bgColor: string;
};

export default function SkillsSection() {
  const { t } = useTranslation()

  const icons = [
    ClipboardList, Code2, Monitor, Server, Database, GitBranch, Hammer, TestTube, Workflow, Activity, Cloud, BrainCircuit, Brain
  ];

  const skillCategories: SkillCategory[] = [
    "api_design",
    "code_review",
    "project_management",
    "frontend",
    "backend",
    "database",
    "code_management",
    "build_tools",
    "testing",
    "cicd",
    "monitoring",
    "cloud",
    "ai"
  ].map((id, idx) => ({
    id,
    title: t(`skills.${id}.title`),
    skills: t(`skills.${id}.skills`).split(", "),
    icon: icons[idx % icons.length],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900"
  }));

  const softSkills = t("skills.soft_skills.skills", { returnObjects: true }) as string[];
  const languages = t("skills.languages.items", { returnObjects: true }) as { language: string, level: string }[];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            {t("skills.title")}
          </h2>

          {/* Technical Skills */}
          <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
            <FileJson className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            {t("skills.technical.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Soft Skills and Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {t("skills.soft_skills.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const IconComponent = MessageSquare; // Puedes mapear iconos si lo deseas
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {t("skills.languages.title")}
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{lang.language}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
