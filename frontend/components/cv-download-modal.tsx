"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { generateCV } from "@/lib/cv-generator"

export default function CVDownloadModal() {
  const { t, i18n } = useTranslation()
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    setIsGenerating(true)
    try {
      // Generar CV completo
      await generateCV(i18n.language)
    } catch (error) {
      console.error('Error generating CV:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button 
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
    >
      {isGenerating ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Generating...
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