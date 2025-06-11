"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import {Code2, BrainCircuit, Bot, Sparkles } from "lucide-react"

export default function Footer() {
  const { t, i18n } = useTranslation()

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer/bg4.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Slogan */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center">
              <BrainCircuit className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-2xl font-bold text-gray-900 text-white">
                almap<span className="text-blue-600">[i]</span>
              </span>
            </div>
            <p className="text-gray-300 text-center text-lg flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="italic">{t("footer.slogan")}</span>
              <Sparkles className="w-5 h-5 text-blue-400" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/almapidev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Image src="/footer/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
            </a>
            <a
              href="mailto:readme.md@almapi.dev"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Image src="/footer/email.svg" alt="Email" width={24} height={24} className="w-6 h-6" />
            </a>
            <a
              href="https://www.credly.com/users/almapi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Image src="/footer/credly.svg" alt="Credly" width={24} height={24} className="w-6 h-6" />
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/333c0c54-8af4-48ae-8353-531e97f03c7d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Image src="/footer/google-cloud.svg" alt="Google Scholar" width={24} height={24} className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/aandmaldonado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Image src="/footer/github.svg" alt="GitHub" width={24} height={24} className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-center">
            <p className="text-gray-400 mb-2 flex items-center justify-center gap-2">
              {t("footer.made_with")}
              <BrainCircuit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <Bot className="w-4 h-4 text-blue-500 dark:text-blue-300" />
              <Code2 className="w-4 h-4 text-blue-700 dark:text-blue-500" />
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} almap[i] · almapi.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
