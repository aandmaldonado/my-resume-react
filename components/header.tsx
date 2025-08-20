"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Moon, Sun, Menu, X, BrainCircuit } from "lucide-react"
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
    // Cerrar el menú móvil
    setIsMenuOpen(false)
    
    // Hacer scroll a la sección
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  if (!mounted) return null

  // Estilos idénticos para header y menú desplegable
  const headerStyle = "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
  const menuStyle = "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" // Exactamente igual al header ni sombra
  
  return (
    <header className={`fixed top-2 xs:top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-[calc(100vw-1rem)] xs:w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] xl:w-[calc(100vw-8rem)] max-w-6xl ${headerStyle} px-3 xs:px-4 sm:px-6 py-2 sm:py-3 lg:py-4 overflow-visible rounded-xl xs:rounded-2xl ${
      isMenuOpen ? 'pb-4' : '' // Más padding inferior cuando menú está abierto
    }`} style={{
      backdropFilter: 'blur(12px)', // CSS personalizado que funciona
      WebkitBackdropFilter: 'blur(12px)' // Soporte para Safari
    }}>
      <div className="flex items-center w-full justify-between gap-2">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <BrainCircuit className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400 mr-1.5 xs:mr-2" />
          <span className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
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
        
        {/* Controles - 3 botones en mobile, 2 en desktop */}
        <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0">
          {/* Idioma - Visible en todos los dispositivos */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-9 sm:w-9 p-0">
                {currentLanguage.code.toUpperCase()}
              </button>
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
          
          {/* Dark mode - Visible en todos los dispositivos */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-9 sm:w-9 p-0"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
          
          {/* Mobile Menu Toggle - Solo visible en mobile */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-9 sm:w-9 p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
          

        </div>
      </div>

      {/* Mobile Navigation - Completamente transparente para integración perfecta */}
      <div className={`lg:hidden mt-0 pb-2 xs:pb-3 pt-0 bg-transparent rounded-b-xl xs:rounded-b-2xl transition-all duration-700 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 max-h-[80vh] translate-y-0' 
          : 'opacity-0 max-h-0 translate-y-[-20px] pointer-events-none'
      }`} style={{
        marginTop: isMenuOpen ? '-1px' : '0px' // Conectar perfectamente con el header
      }}>
        <div className="flex flex-col space-y-1 xs:space-y-2">
          {/* Navegación principal - Estilo Devin.ai con punto a la izquierda */}
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left p-3 xs:p-4 rounded-lg transition-all duration-200 min-h-[44px] flex items-center w-full ${
                activeSection === id
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {/* Punto indicador a la izquierda - Estilo Devin.ai */}
              <div className={`w-2 h-2 rounded-full mr-4 flex-shrink-0 ${
                activeSection === id
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}></div>
              
              <span className="text-sm xs:text-base font-medium">{t(`nav.${id === "hero" ? "home" : id}`)}</span>
            </button>
          ))}
          
          
        </div>
      </div>
    </header>
  );
}
