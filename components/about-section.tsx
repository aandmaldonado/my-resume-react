"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { Calendar, Building2, Haze, CircleUser, ScanSearch, Handshake, Inbox, Rocket, Earth, Bot, Brain, Puzzle, Globe, MessageCircle } from "lucide-react"
import CountUp from 'react-countup'

export default function AboutSection() {
  const { t, i18n } = useTranslation()

  const industries = [
    "Telecomunicaciones",
    "AFP",
    "Gobierno",
    "Retail",
    "HR",
    "Banca",
    "Aerolineas",
    "IA"
  ]

  // Obtener datos de i18n
  const descriptions = t("about.descriptions", { returnObjects: true }) as string[];
  const searchGoals = t("about.search_goals", { returnObjects: true }) as string[];
  const collaborationReasons = t("about.collaboration_reasons", { returnObjects: true }) as string[];
  const recommendations = t("recommendations", { returnObjects: true }) as any[];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <CircleUser className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            {t("about.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo and Social Icons */}
            <div className="flex flex-col items-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl mb-6">
                <Image
                  src="/about/profile2.jpg?height=320&width=320"
                  alt="Álvaro Maldonado"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Álvaro Andrés Maldonado Pinto</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                  <Haze className="w-4 h-4" />
                  {t("about.location")}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/almapidev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/about/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="mailto:readme.md@almapi.dev"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/about/email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.credly.com/users/almapi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/about/credly.svg"
                    alt="Credly"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.cloudskillsboost.google/public_profiles/333c0c54-8af4-48ae-8353-531e97f03c7d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/about/google-cloud.svg"
                    alt="Google Scholar"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://github.com/aandmaldonado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/about/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      <CountUp end={new Date().getFullYear() - 2010} duration={2.5} />
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{t("about.years_experience")}</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      <CountUp end={industries.length} duration={2.5} />
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{t("about.industries")}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-6 text-justify">
                {descriptions.map((desc, idx) => (
                  <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">{desc}</p>
                ))}
                {/* Tarjeta de objetivos de búsqueda */}
                <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4 my-4 shadow-sm">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-center gap-2 mb-2">
                    <ScanSearch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <strong>{t("about.looking_for")}</strong>
                  </p>
                  <ul className="list-none list-inside space-y-1 mt-1 text-gray-700 dark:text-gray-300">
                    {searchGoals.map((item, index) => {
                      const icons = [Rocket, Earth, Bot];
                      const IconComponent = icons[index % icons.length];
                      return (
                        <li key={index} className="leading-relaxed flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* Tarjeta de colaboración */}
                <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4 my-4 shadow-sm">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-center gap-2 mb-2">
                    <Handshake className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <strong>{t("about.why_collaborate")}</strong>
                  </p>
                  <ul className="list-none list-inside space-y-1 mt-1 text-gray-700 dark:text-gray-300">
                    {collaborationReasons.map((item, index) => {
                      const icons = [Brain, Puzzle, Globe];
                      const IconComponent = icons[index % icons.length];
                      return (
                        <li key={index} className="leading-relaxed flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex gap-2 mt-4">
                    <Inbox className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    {t("about.connect_message")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
