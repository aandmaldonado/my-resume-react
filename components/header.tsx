"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Moon, Sun, Menu, X, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "recommendations"
];

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")
  const observerRef = useRef<IntersectionObserver | null>(null)

  const languages = [
    { code: "es", name: t("head.lang_es") },
    { code: "en", name: t("head.lang_en") }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      let closestSection = SECTION_IDS[0];
      let minDistance = Infinity;
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Calcula la distancia desde el top del viewport (ajusta 80 si tu header tiene otra altura)
          const distance = Math.abs(rect.top - 80);
          if (rect.top <= window.innerHeight / 2 && distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });
      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Llama al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted]);

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
    <header className="fixed top-2 xs:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100vw-1rem)] xs:w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] xl:w-[calc(100vw-8rem)] max-w-6xl rounded-xl xs:rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md px-3 xs:px-4 sm:px-6 py-2 overflow-hidden">
      <div className="flex items-center w-full justify-between gap-2">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <BrainCircuit className="w-5 h-5 xs:w-6 xs:h-6 text-blue-600 dark:text-blue-400 mr-1.5 xs:mr-2" />
          <span className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            almap<span className="text-blue-600">[i]</span>
          </span>
        </div>
        
        {/* Desktop Navigation - Oculto en mobile */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-x-2 xl:gap-x-4 mx-2 xl:mx-4 text-sm xl:text-base">
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap px-1.5 xl:px-2 py-1 rounded-md ${activeSection === id ? 'font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : ''}`}
            >
              {t(`nav.${id === "hero" ? "home" : id}`)}
            </button>
          ))}
        </nav>
        
        {/* Controles */}
        <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0">
          {/* Idioma - Solo visible en desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="hidden lg:flex text-xs min-h-[32px] h-8 px-2">
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
            className="min-h-[32px] h-8 w-8 p-0"
          >
            {theme === "dark" ? (
              <Sun className="h-3 w-3" />
            ) : (
              <Moon className="h-3 w-3" />
            )}
          </Button>
          
          {/* Mobile Menu Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden min-h-[32px] h-8 w-8 p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-3 w-3" />
            ) : (
              <Menu className="h-3 w-3" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - Mejorado y optimizado */}
      {isMenuOpen && (
        <div className="lg:hidden mt-3 xs:mt-4 pb-3 xs:pb-4 border-t border-gray-200 dark:border-gray-700 pt-3 xs:pt-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg">
          <div className="flex flex-col space-y-2 xs:space-y-3">
            {/* Navegación principal */}
            {SECTION_IDS.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left p-2.5 xs:p-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center justify-between w-full ${
                  activeSection === id
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span className="text-sm xs:text-base font-medium">{t(`nav.${id === "hero" ? "home" : id}`)}</span>
                {activeSection === id && (
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                )}
              </button>
            ))}
            
            {/* Separador */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 xs:pt-3 mt-1 xs:mt-2">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 xs:mb-3 px-2 xs:px-3 font-medium">IDIOMA</p>
              
              {/* Mobile Language Selector - Mejorado */}
              <div className="grid grid-cols-2 gap-2 px-2 xs:px-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`p-2.5 xs:p-3 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px] ${
                      i18n.language === lang.code
                        ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-700"
                        : "text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
