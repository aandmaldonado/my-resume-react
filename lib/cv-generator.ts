// Dynamic imports will be used in the function

interface CVData {
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  github: string
  about: string[]
  experience: any[]
  education: any[]
  skills: any[]
  projects: any[]
  recommendations: any[]
}

export const generateCV = async (data: CVData, language: string = 'en') => {
  // Dynamic import to avoid SSR issues
  const jsPDF = (await import('jspdf')).default
  await import('jspdf-autotable')
  const doc = new jsPDF()
  
  // Set font
  doc.setFont('helvetica')
  
  // Header
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(data.name, 20, 30)
  
  doc.setFontSize(14)
  doc.setFont('helvetica', 'normal')
  doc.text(data.title, 20, 40)
  doc.text(data.location, 20, 50)
  
  // Contact info
  doc.setFontSize(10)
  doc.text(`Email: ${data.email}`, 20, 65)
  doc.text(`LinkedIn: ${data.linkedin}`, 20, 72)
  doc.text(`GitHub: ${data.github}`, 20, 79)
  
    // About section
  let yPosition = 95
  if (data.about && Array.isArray(data.about) && data.about.length > 0) {
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(language === 'en' ? 'About Me' : 'Sobre Mí', 20, yPosition)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    yPosition = 105
    data.about.forEach((paragraph, index) => {
      const lines = doc.splitTextToSize(paragraph, 170)
      lines.forEach((line: string) => {
        doc.text(line, 20, yPosition)
        yPosition += 5
      })
      yPosition += 3
    })
  }
  
  // Experience section
  if (data.experience && Array.isArray(data.experience) && data.experience.length > 0) {
    yPosition += 10
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(language === 'en' ? 'Work Experience' : 'Experiencia Laboral', 20, yPosition)
    
    yPosition += 10
    data.experience.forEach((exp, index) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text(exp.company, 20, yPosition)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`${exp.position} | ${exp.period} | ${exp.location}`, 20, yPosition + 7)
    
    const descriptionLines = doc.splitTextToSize(exp.description, 170)
    let descY = yPosition + 15
    descriptionLines.forEach((line: string) => {
      doc.text(line, 20, descY)
      descY += 5
    })
    
    yPosition = descY + 10
    })
  }
  
  // Education section
  if (data.education && Array.isArray(data.education) && data.education.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(language === 'en' ? 'Education' : 'Educación', 20, yPosition)
    
    yPosition += 10
    data.education.forEach((edu, index) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text(edu.institution, 20, yPosition)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`${edu.degree} | ${edu.period}`, 20, yPosition + 7)
    
    yPosition += 15
    })
  }
  
  // Skills section
  if (data.skills && Array.isArray(data.skills) && data.skills.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(language === 'en' ? 'Skills' : 'Habilidades', 20, yPosition)
    
    yPosition += 10
    data.skills.forEach((skill, index) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      const skillText = `• ${skill.name}: ${skill.level}`
      const lines = doc.splitTextToSize(skillText, 170)
      lines.forEach((line: string) => {
        doc.text(line, 20, yPosition)
        yPosition += 5
      })
          yPosition += 2
  })
  }
  
  // Projects section
  if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(language === 'en' ? 'Featured Projects' : 'Proyectos Destacados', 20, yPosition)
    
    yPosition += 10
    data.projects.forEach((project, index) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(project.title, 20, yPosition)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(project.description, 20, yPosition + 7)
      
      const contentLines = doc.splitTextToSize(project.contents?.[0] || '', 170)
      let contentY = yPosition + 15
      contentLines.forEach((line: string) => {
        doc.text(line, 20, contentY)
        contentY += 5
      })
      
      yPosition = contentY + 10
    })
  }
  
  // Recommendations section
  if (data.recommendations && Array.isArray(data.recommendations) && data.recommendations.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(language === 'en' ? 'Recommendations' : 'Recomendaciones', 20, yPosition)
    
    yPosition += 10
    data.recommendations.forEach((rec, index) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(rec.name, 20, yPosition)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`${rec.position} at ${rec.company}`, 20, yPosition + 7)
      
      const textLines = doc.splitTextToSize(rec.text, 170)
      let textY = yPosition + 15
      textLines.forEach((line: string) => {
        doc.text(line, 20, textY)
        textY += 5
      })
      
      yPosition = textY + 10
    })
  }
  
  // Save the PDF
  const fileName = `CV_Alvaro_Maldonado_${language.toUpperCase()}_${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(fileName)
}

export const prepareCVData = (t: any, selectedSections?: Record<string, boolean>): CVData => {
  const experiences = t("experience.experiences", { returnObjects: true }) as any[]
  const educations = t("education.educations", { returnObjects: true }) as any[]
  const projects = t("projects.projects", { returnObjects: true }) as any[]
  const about = t("about.descriptions", { returnObjects: true }) as any[]
  const recommendations = t("recommendations", { returnObjects: true }) as any[]
  
  // Convertir la estructura de skills actual a un formato compatible
  const skillsData = [
    { name: "Frontend", level: t("skills.frontend.skills") },
    { name: "Backend", level: t("skills.backend.skills") },
    { name: "Database", level: t("skills.database.skills") },
    { name: "Cloud (AWS)", level: t("skills.cloud.skills") },
    { name: "AI", level: t("skills.ai.skills") },
    { name: "CI/CD", level: t("skills.cicd.skills") },
    { name: "Testing", level: t("skills.testing.skills") },
    { name: "Monitoring", level: t("skills.monitoring.skills") },
    { name: "API Design", level: t("skills.api_design.skills") },
    { name: "Code Review", level: t("skills.code_review.skills") },
    { name: "Project Management", level: t("skills.project_management.skills") },
    { name: "Code Management", level: t("skills.code_management.skills") },
    { name: "Build Tools", level: t("skills.build_tools.skills") },
    { name: "Languages", level: `${t("skills.languages.spanish")} (${t("skills.languages.native")}), ${t("skills.languages.english")} (${t("skills.languages.intermediate")})` },
    { name: "Soft Skills", level: `${t("skills.soft_skills.communication")}, ${t("skills.soft_skills.teamwork")}, ${t("skills.soft_skills.problem_solving")}, ${t("skills.soft_skills.adaptability")}, ${t("skills.soft_skills.leadership")}, ${t("skills.soft_skills.time_management")}` }
  ]
  
  // Filtrar datos según las secciones seleccionadas
  const filteredExperiences = selectedSections?.experience === false ? [] : experiences
  const filteredEducations = selectedSections?.education === false ? [] : educations
  const filteredSkills = selectedSections?.skills === false ? [] : skillsData
  const filteredProjects = selectedSections?.projects === false ? [] : projects
  const filteredAbout = selectedSections?.about === false ? [] : about
  const filteredRecommendations = selectedSections?.recommendations === false ? [] : recommendations
  
  return {
    name: "Álvaro Andrés Maldonado Pinto",
    title: t("hero.subtitle"),
    location: t("about.location"),
    email: "readme.md@almapi.dev",
    linkedin: "https://www.linkedin.com/in/almapidev/",
    github: "https://github.com/aandmaldonado",
    about: filteredAbout,
    experience: filteredExperiences,
    education: filteredEducations,
    skills: filteredSkills,
    projects: filteredProjects,
    recommendations: filteredRecommendations
  }
} 