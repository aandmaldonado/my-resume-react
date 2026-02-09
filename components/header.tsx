"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"
import Image from "next/image"


const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "recommendations",
  "contact"
];

export default function Header() {
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")

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



  if (!mounted) return null

  // Estilos idénticos para header y menú desplegable
  const headerStyle = "bg-dark-bg/60 border border-white/10 backdrop-blur-xl shadow-2xl"
  const menuStyle = "bg-transparent"

  return (
    <header className={`fixed top-2 xs:top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-[calc(100vw-1rem)] xs:w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] xl:w-[calc(100vw-8rem)] max-w-6xl ${headerStyle} px-3 xs:px-4 sm:px-6 py-2 sm:py-3 lg:py-4 overflow-visible rounded-xl xs:rounded-2xl ${isMenuOpen ? 'pb-4' : ''
      }`}>
      <div className="flex items-center w-full justify-between gap-2">
        {/* Logo & Brand as Home Link */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 sm:gap-3 mr-4 sm:mr-8 shrink-0 group transition-all duration-300 border-none bg-transparent p-0 cursor-pointer"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-blue-500/30 bg-black/40 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
            <Image
              src="/logo.png"
              alt="almap[i] logo"
              fill
              className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            almap<span className="text-blue-500 group-hover:text-blue-300 transition-colors">[i]</span>
          </span>
        </button>

        {/* Desktop Navigation - Oculto en mobile */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-x-2 xl:gap-x-4 mx-2 xl:mx-4 text-sm xl:text-base">
          {SECTION_IDS.filter(id => id !== "hero").map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-gray-400 hover:text-blue-400 transition-all whitespace-nowrap px-1.5 xl:px-3 py-1.5 rounded-full ${activeSection === id ? 'font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20' : ''}`}
            >
              {t(`nav.${id === "hero" ? "home" : id}`)}
            </button>
          ))}
        </nav>

        {/* Controles - 3 botones en mobile, 2 en desktop */}
        <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0">
          {/* Idioma - Toggle Button */}
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
            className="inline-flex items-center justify-center rounded-md text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-9 sm:w-9 p-0"
            aria-label={i18n.language === 'en' ? 'Switch to Spanish (currently EN)' : 'Cambiar a inglés (actualmente ES)'}
          >
            {i18n.language === 'en' ? 'ES' : 'EN'}
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
      <div className={`lg:hidden mt-0 pb-2 xs:pb-3 pt-0 bg-transparent rounded-b-xl xs:rounded-b-2xl transition-all duration-700 ease-in-out ${isMenuOpen
        ? 'opacity-100 max-h-[80vh] translate-y-0'
        : 'opacity-0 max-h-0 translate-y-[-20px] pointer-events-none'
        }`} style={{
          marginTop: isMenuOpen ? '-1px' : '0px' // Conectar perfectamente con el header
        }}>
        <div className="flex flex-col space-y-1 xs:space-y-2">
          {/* Navegación principal - Estilo Devin.ai con punto a la izquierda */}
          {SECTION_IDS.filter(id => id !== "hero").map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left p-3 xs:p-4 rounded-lg transition-all duration-200 min-h-[44px] flex items-center w-full ${activeSection === id
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
            >
              {/* Punto indicador a la izquierda - Estilo Devin.ai */}
              <div className={`w-2 h-2 rounded-full mr-4 flex-shrink-0 ${activeSection === id
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
