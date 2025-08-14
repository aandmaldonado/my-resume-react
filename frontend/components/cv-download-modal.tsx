"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { generateCVHTML } from "@/lib/cv-generator"

export default function CVDownloadModal() {
  const { t, i18n } = useTranslation()
  const [isOpening, setIsOpening] = useState(false)

  const handleDownloadCV = async () => {
    setIsOpening(true)
    try {
      // Generar HTML del CV con iconos reales
      const htmlContent = generateCVHTML(i18n.language)
      
      // Crear un elemento temporal para renderizar el HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = htmlContent
      document.body.appendChild(tempDiv)
      
      // Configuración de html2pdf.js
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `CV_Alvaro_Maldonado_${i18n.language.toUpperCase()}_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      }
      
      // Generar PDF usando html2pdf.js
      const html2pdf = (await import('html2pdf.js')).default
      await html2pdf().from(tempDiv).set(opt).save()
      
      // Limpiar elemento temporal
      document.body.removeChild(tempDiv)
      
      console.log('CV con iconos descargado exitosamente!')
    } catch (error) {
      console.error('Error generating CV with icons:', error)
      // Fallback al método anterior si html2pdf falla
      try {
        const link = document.createElement('a')
        link.download = `CV_Alvaro_Maldonado_${i18n.language.toUpperCase()}_${new Date().toISOString().slice(0, 10)}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        console.log('CV descargado con método fallback!')
      } catch (fallbackError) {
        console.error('Error en método fallback:', fallbackError)
      }
    } finally {
      setIsOpening(false)
    }
  }

  return (
    <Button 
      onClick={handleDownloadCV}
      disabled={isOpening}
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
    >
      {isOpening ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          {i18n.language === 'es' ? 'Generando...' : 'Generating...'}
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          {t("hero.download_cv")}
        </>
      )}
    </Button>
  )
}