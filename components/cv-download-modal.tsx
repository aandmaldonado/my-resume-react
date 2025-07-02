"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Download, Settings } from "lucide-react"
import { generateCV, prepareCVData } from "@/lib/cv-generator"
import { Switch } from "@/components/ui/switch"

interface CVSection {
  id: string
  label: string
  description: string
  defaultChecked: boolean
}

export default function CVDownloadModal() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedSections, setSelectedSections] = useState<Record<string, boolean>>({
    about: true,
    experience: true,
    education: true,
    skills: true,
    projects: false,
    recommendations: false,
  })

  // Contadores correctos para cada sección
  const experienceCount = (t("experience.experiences", { returnObjects: true }) as any[])?.length || 0;
  const educationCount = (t("education.educations", { returnObjects: true }) as any[])?.length || 0;
  const projectsCount = (t("projects.projects", { returnObjects: true }) as any[])?.length || 0;
  const recommendationsCount = (t("recommendations", { returnObjects: true }) as any[])?.length || 0;

  const aboutDescriptions = t("about.descriptions", { returnObjects: true }) as string[];
  const aboutPreview = aboutDescriptions && aboutDescriptions.length > 0
    ? aboutDescriptions[0].substring(0, 100) + "..."
    : "";

  const sections: CVSection[] = [
    {
      id: "about",
      label: t("nav.about"),
      description: aboutPreview,
      defaultChecked: true,
    },
    {
      id: "experience",
      label: t("nav.experience"),
      description: `${experienceCount} ${t("experience.counter")}`,
      defaultChecked: true,
    },
    {
      id: "education",
      label: t("nav.education"),
      description: `${educationCount} ${t("education.counter")}`,
      defaultChecked: true,
    },
    {
      id: "skills",
      label: t("nav.skills"),
      description: t("skills.description"),
      defaultChecked: true,
    },
    {
      id: "projects",
      label: t("nav.projects"),
      description: `${projectsCount} ${t("projects.counter")}`,
      defaultChecked: false,
    },
    {
      id: "recommendations",
      label: t("nav.recommendations"),
      description: `${recommendationsCount} ${t("nav.recommendations")}`,
      defaultChecked: false,
    },
  ];

  const handleSectionToggle = (sectionId: string, checked: boolean) => {
    setSelectedSections(prev => ({
      ...prev,
      [sectionId]: checked
    }))
  }

  const handleDownload = async () => {
    setIsGenerating(true)
    try {
      const cvData = prepareCVData(t, selectedSections)
      await generateCV(cvData, i18n.language)
      setIsOpen(false)
    } catch (error) {
      console.error('Error generating CV:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const selectedCount = Object.values(selectedSections).filter(Boolean).length

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Download className="w-5 h-5" />
          {t("hero.download_cv")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            {t("hero.customize_cv")}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.select_sections")}
          </p>
          <div className="flex items-center mb-2">
            <Switch
              id="select-all"
              checked={selectedCount === sections.length}
              onCheckedChange={(checked) => {
                setSelectedSections(
                  Object.fromEntries(sections.map(s => [s.id, checked as boolean]))
                );
              }}
            />
            <Label htmlFor="select-all" className="ml-2 font-medium">
              {t("hero.select_all_sections")}
            </Label>
          </div>
          <div className="space-y-3">
            {sections.map((section) => (
              <div key={section.id} className="flex items-start space-x-3">
                <Checkbox
                  id={section.id}
                  checked={selectedSections[section.id]}
                  onCheckedChange={(checked) => 
                    handleSectionToggle(section.id, checked as boolean)
                  }
                />
                <div className="space-y-1">
                  <Label 
                    htmlFor={section.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {section.label}
                  </Label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t space-y-2">
            <span className="block text-sm text-gray-600 dark:text-gray-400">
              {selectedCount} of {sections.length} {t("hero.sections_selected")}
            </span>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isGenerating}
              >
                {t("hero.cancel")}
              </Button>
              <Button
                onClick={handleDownload}
                disabled={isGenerating || selectedCount === 0}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {t("hero.generating")}
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    {t("hero.download")}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 