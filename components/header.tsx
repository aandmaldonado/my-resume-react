"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Moon, Sun, Menu, X, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const languages = [
    { code: "es", name: t("head.lang_es") },
    { code: "en", name: t("head.lang_en") }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  if (!mounted) return null

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] max-w-5xl rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md px-6 py-2">
      <div className="flex items-center w-full justify-between">
        {/* Logo */}
        <div className="flex items-center min-w-[160px]">
          <BrainCircuit className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            almap<span className="text-blue-600">[i]</span>
          </span>
        </div>
        {/* Nav */}
        <nav className="flex-1 flex items-center justify-center gap-x-4 mx-4 text-base">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            {t("nav.home")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            {t("nav.experience")}
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            {t("nav.education")}
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            {t("nav.skills")}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            {t("nav.projects")}
          </button>
          <button
            onClick={() => scrollToSection("recommendations")}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            {t("nav.recommendations")}
          </button>
        </nav>
        {/* Controles */}
        <div className="flex items-center gap-x-2 min-w-[100px] justify-end pl-2 pr-1">
          {/* Idioma */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                {currentLanguage.code.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={
                    i18n.language === lang.code
                      ? "bg-blue-50 dark:bg-blue-900"
                      : ""
                  }
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Dark mode */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          {/* Mobile Menu Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("nav.experience")}
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("nav.education")}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("nav.skills")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("recommendations")}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("nav.recommendations")}
            </button>

            {/* Mobile Language Selector */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`text-left p-2 rounded ${
                      i18n.language === lang.code
                        ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
