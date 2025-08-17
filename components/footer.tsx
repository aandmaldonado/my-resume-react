"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import {Code2, BrainCircuit, Bot, Linkedin, Github, Icon} from "lucide-react"

export default function Footer() {
  const { t, i18n } = useTranslation()
  const year = new Date().getFullYear()
  const copyright = t("footer.copyright").replace("{year}", year.toString())
  const madeWith = t("footer.made_with")
  const slogan = t("footer.slogan")

  return (
    <footer className="w-full py-6 bg-gray-900 text-gray-300 flex flex-col items-center gap-2">
      <div className="flex items-center gap-3">
        <Linkedin className="w-5 h-5" />
        <a href="https://linkedin.com/in/almapidev" className="hover:text-blue-400">LinkedIn</a>
        <Github className="w-5 h-5 ml-4" />
        <a href="https://github.com/aandmaldonado" className="hover:text-blue-400">GitHub</a>
      </div>
      <div className="text-sm text-center">
        {slogan}
      </div>
      <div className="text-sm text-center">
        {copyright} | {madeWith}
        <span className="ml-2">
          <BrainCircuit className="inline w-4 h-4" />
          <Bot className="inline w-4 h-4 ml-1" />
          <Code2 className="inline w-4 h-4 ml-1" />
        </span>
      </div>
    </footer>
  )
}
