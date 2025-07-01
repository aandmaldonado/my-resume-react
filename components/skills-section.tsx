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


export default function SkillsSection() {
  const { t } = useTranslation()

  const skillCategories = [
    {
      id: "api_design",
      icon: Layout,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      skills: ["Swagger", "OpenAPI"],
    },
    {
      id: "code_review",
      icon: Code2,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      skills: ["Sonar", "Veracode", "Checkstyle"],
    },
    {
      id: "project_management",
      icon: ClipboardList,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      skills: ["Jira", "Confluence"],
    },
    {
      id: "frontend",
      icon: Monitor,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: "backend",
      icon: Server,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      skills: ["Java", "Spring Boot", "Python", "Flask", "FastAPI", "API Rest"],
    },
    {
      id: "database",
      icon: Database,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      skills: ["SQL", "PL/SQL", "Oracle", "MySQL", "PostgreSQL", "NoSQL", "MongoDB", "JPA", "Hibernate"],
    },
    {
      id: "code_management",
      icon: GitBranch,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      skills: ["GitHub", "GitLab", "Bitbucket"],
    },
    {
      id: "build_tools",
      icon: Hammer,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      skills: ["Maven", "Gradle"],
    },
    {
      id: "testing",
      icon: TestTube,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      skills: ["JUnit", "Mockito", "Spock", "Karate", "ArchUnit"],
    },
    {
      id: "cicd",
      icon: Workflow,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      skills: ["Jenkins", "GitHub Actions", "Bamboo", "Kubernetes", "Docker"],
    },
    {
      id: "monitoring",
      icon: Activity,
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      skills: ["Splunk", "Dynatrace", "Elasticsearch"],
    },
    {
      id: "cloud",
      icon: Cloud,
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      skills: ["IAM", "EC2", "Elastic Beanstalk", "Lambda", "RDS", "DynamoDB", "CLI", "S3", "API Gateway", "SageMaker", "Rekognition", "Lex", "CloudFront", "Route 53"],
    },
    {
      id: "ai",
      icon: BrainCircuit,
      color: "text-violet-600 dark:text-violet-400",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      skills: ["Jupyter", "Prompting", "GenAI", " LLM", "RAG", "HuggingFace", "LangChain", "OpenCV", "SciKit-Learn", "TensorFlow", "Pytorch", "OpenAI", "ChatGPT"],
    },
  ]

  const languages = [
    { name: t("skills.languages.spanish"), level: t("skills.languages.native") },
    { name: t("skills.languages.english"), level: t("skills.languages.intermediate") },
  ]

  const softSkills = [
    { name: t("skills.soft_skills.communication"), icon: MessageSquare },
    { name: t("skills.soft_skills.teamwork"), icon: Users },
    { name: t("skills.soft_skills.problem_solving"), icon: Search },
    { name: t("skills.soft_skills.adaptability"), icon: RefreshCw },
    { name: t("skills.soft_skills.leadership"), icon: Target },
    { name: t("skills.soft_skills.time_management"), icon: Clock },
  ]

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
                    {t(`skills.${category.id}.title`)}
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
                  const IconComponent = skill.icon
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
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
                    <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
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