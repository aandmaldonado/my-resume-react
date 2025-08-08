
interface CVData {
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  web: string
  phone: string
  github: string
  about: string[]
  experience: any[]
  education: any[]
  skills: any[]
}

export const generateCV = async (language: string = 'en'): Promise<Blob> => {
  try {
    // Dynamic import to avoid SSR issues
    const jsPDF = await import('jspdf')
    await import('jspdf-autotable')
    const doc = new jsPDF.default()
    
    // Prepare data for CV from i18n resources
    const cvData = prepareCVData(language)
    
    // Generate PDF with MCS template layout
    generateMCSTemplatePDF(doc, cvData, language)
    
    // Return as blob
    return doc.output('blob')
  } catch (error) {
    console.error('Error generating CV:', error)
    throw new Error(`Failed to generate CV in ${language}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

const prepareCVData = (language: string): CVData => {
  try {
    // Get all data from translations
    const experiences = getExperiencesFromI18n(language)
    const educations = getEducationsFromI18n(language)
    const skills = getSkillsFromI18n(language)
    const contactInfo = getContactInfoFromI18n(language)
    const about = getAboutFromI18n(language)
    
    // Process experiences to ensure they have all required fields for MCS template
    const processedExperiences = experiences.map((exp: any) => {
      return {
        ...exp,
        // Ensure achievements is an array
        achievements: exp.achievements || [],
        // Ensure responsibilities is an array
        responsibilities: exp.responsibilities || []
      }
    })
    
    // Process educations to ensure they have all required fields for MCS template
    const processedEducations = educations.map((edu: any) => {
      return {
        ...edu,
        // Ensure concepts is an array
        concepts: edu.concepts || []
      }
    })
    
    return {
      name: contactInfo.name || "Álvaro Andrés Maldonado Pinto",
      title: contactInfo.title || "Senior Software Engineer",
      location: contactInfo.location || "Gandia, Spain",
      email: contactInfo.email || "readme.md@almapi.dev",
      linkedin: contactInfo.linkedin || "https://www.linkedin.com/in/almapidev/",
      web: contactInfo.web || "https://almapi.dev",
      phone: contactInfo.phone || "+34 641962396",
      github: contactInfo.github || "https://github.com/aandmaldonado",
      about: about || [],
      experience: processedExperiences || [],
      education: processedEducations || [],
      skills: skills || []
    }
  } catch (error) {
    console.error('Error preparing CV data:', error)
    throw new Error(`Failed to prepare CV data for language ${language}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

// New MCS Template PDF generator
const generateMCSTemplatePDF = (doc: any, data: CVData, language: string) => {
  // Set font
  doc.setFont('helvetica')
  
  // Get footer text from i18n
  const footerText = getFooterTextFromI18n(language)
  
  // Name in bold
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(0, 0, 0) // Black for name
  doc.text(data.name, 20, 20)

  // Role in bold
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(0, 0, 0) // Black for role
  doc.text(data.title, 20, 25)
  
  // Contact info line
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 0, 0) // Black for contact info
  const contactLine = `${data.location} • ${data.email} • ${data.linkedin} • ${data.web} • ${data.phone} • ${data.github}`
  doc.text(contactLine, 20, 35)
  
  let yPosition = 45
  
  // Education section
  if (data.education && data.education.length > 0) {
    yPosition = addMCSSectionHeader(doc, language === 'en' ? 'Education' : 'Educación', yPosition)
    
    data.education.forEach((edu) => {
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 20
      }
      
      // Institution name and location
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(0, 0, 0)
      doc.text(edu.institution, 20, yPosition)
      doc.setFont('helvetica', 'normal')
      doc.text(edu.location, 150, yPosition, { align: 'right' })
      
      // Degree and period
      yPosition += 6
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`${edu.degree}`, 20, yPosition)
      doc.text(edu.period, 150, yPosition, { align: 'right' })
      
      // Add concepts if available (from i18n)
      if (edu.concepts && edu.concepts.length > 0) {
        yPosition += 6
        doc.setFontSize(10)
        edu.concepts.forEach((concept: string) => {
          const conceptLines = doc.splitTextToSize(`• ${concept}`, 170)
          conceptLines.forEach((line: string) => {
            doc.text(line, 25, yPosition)
            yPosition += 5
          })
        })
      }
      
      yPosition += 8
    })
  }
  
  // Experience section
  if (data.experience && data.experience.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    yPosition = addMCSSectionHeader(doc, language === 'en' ? 'Experience' : 'Experiencia', yPosition)
    
    data.experience.forEach((exp: any) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      // Organization/Company
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(0, 0, 0)
      doc.text(exp.company, 20, yPosition)
      doc.setFont('helvetica', 'normal')
      doc.text(exp.location, 150, yPosition, { align: 'right' })
      
      // Position and period
      yPosition += 6
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text(exp.position, 20, yPosition)
      doc.setFont('helvetica', 'normal')
      doc.text(exp.period, 150, yPosition, { align: 'right' })
      
      // Achievements as bullet points
      if (exp.achievements && exp.achievements.length > 0) {
        yPosition += 6
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        
        exp.achievements.forEach((achievement: string) => {
          const achievementLines = doc.splitTextToSize(`• ${achievement}`, 170)
          achievementLines.forEach((line: string) => {
            doc.text(line, 25, yPosition)
            yPosition += 5
          })
        })
      }
      
      // Add responsibilities if needed
      if (exp.responsibilities && exp.responsibilities.length > 0) {
        yPosition += 3
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        
        exp.responsibilities.slice(0, 3).forEach((responsibility: string) => {
          const respLines = doc.splitTextToSize(`• ${responsibility}`, 170)
          respLines.forEach((line: string) => {
            doc.text(line, 25, yPosition)
            yPosition += 5
          })
        })
      }
      
      yPosition += 8
    })
  }
  
  // Skills section
  if (data.skills && data.skills.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    yPosition = addMCSSectionHeader(doc, language === 'en' ? 'Skills & Interests' : 'Habilidades e Intereses', yPosition)
    
    // Group skills by category
    const skillsByCategory = groupSkillsByCategory(data.skills)
    
    Object.entries(skillsByCategory).forEach(([category, skills]) => {
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(0, 0, 0)
      doc.text(`${category === 'IA' ? 'AI' : category}:`, 20, yPosition)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      
      const skillsText = skills.join(', ')
      const skillsLines = doc.splitTextToSize(skillsText, 170)
      yPosition += 5
      skillsLines.forEach((line: string) => {
        doc.text(line, 25, yPosition)
        yPosition += 5
      })
      
      yPosition += 3
    })
  }
  
  // Add footer at the bottom of the last page
  doc.setFontSize(8)
  doc.setFont('helvetica', 'italic')
  doc.setTextColor(128, 128, 128) // Gray color for footer
  
  // Get the total number of pages
  const totalPages = doc.internal.getNumberOfPages()
  
  // Add footer to the last page
  doc.setPage(totalPages)
  
  // Calculate position for footer (bottom of page with margin)
  const pageHeight = doc.internal.pageSize.height
  const footerY = pageHeight - 10
  
  // Center the footer text
  const textWidth = doc.getStringUnitWidth(footerText) * 8 / doc.internal.scaleFactor
  const textX = (doc.internal.pageSize.width - textWidth) / 2
  
  // Add the footer text
  doc.text(footerText, textX, footerY)
}

const addSectionHeader = (doc: any, title: string, yPosition: number): number => {
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(41, 128, 185) // Blue
  doc.text(title, 20, yPosition)
  
  // Add underline
  doc.setDrawColor(41, 128, 185)
  doc.setLineWidth(0.5)
  doc.line(20, yPosition + 2, 190, yPosition + 2)
  
  return yPosition + 10
}

// MCS Template section header format
const addMCSSectionHeader = (doc: any, title: string, yPosition: number): number => {
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(0, 0, 0) // Black for MCS template
  doc.text(`${title}`, 20, yPosition)
  
  return yPosition + 10
}

const groupSkillsByCategory = (skills: any[]): Record<string, string[]> => {
  const grouped: Record<string, string[]> = {}
  
  skills.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill.name)
  })
  
  return grouped
}

// Helper functions to get data from i18n
const getContactInfoFromI18n = (language: string): any => {
  try {
    // Get data from i18n.ts dynamically
    const i18nData = require('../app/i18n').default.getResourceBundle(language, 'translation');
    if (!i18nData || !i18nData.cv) {
      throw new Error('CV data not found in i18n resources');
    }
    
    // Combine header and contactInfo data
    const contactInfo = {
      name: i18nData.cv.header?.title, // Use title as name since there's no name property
      title: i18nData.cv.header?.subtitle, // Use subtitle as title
      location: i18nData.cv.contactInfo?.location,
      email: i18nData.cv.contactInfo?.email,
      linkedin: i18nData.cv.contactInfo?.linkedin,
      web: i18nData.cv.contactInfo?.web,
      github: i18nData.cv.contactInfo?.github,
      phone: i18nData.cv.contactInfo?.phone,
    };
    
    // Verify all required fields are present
    if (!contactInfo.name || !contactInfo.title || !contactInfo.email) {
      throw new Error('Required contact information missing in i18n resources');
    }
    
    return contactInfo;
  } catch (error) {
    console.error('Error loading contact info from i18n:', error);
    throw error; // Re-throw to handle at higher level
  }
}

const getAboutFromI18n = (language: string): string[] => {
  try {
    // Get data from i18n.ts dynamically
    const i18nData = require('../app/i18n').default.getResourceBundle(language, 'translation');
    if (i18nData && i18nData.cv && i18nData.cv.about) {
      // If text is a string, convert to array with one element
      if (typeof i18nData.cv.about.text === 'string') {
        return [i18nData.cv.about.text];
      }
      // If text is already an array, return it
      if (Array.isArray(i18nData.cv.about.text)) {
        return i18nData.cv.about.text;
      }
    }
    throw new Error('About data not found in i18n resources');
  } catch (error) {
    console.error('Error loading about data from i18n:', error);
    throw error; // Re-throw to handle at higher level
  }
}

const getExperiencesFromI18n = (language: string): any[] => {
  try {
    // Get data from i18n.ts dynamically
    const i18nData = require('../app/i18n').default.getResourceBundle(language, 'translation');
    if (i18nData && i18nData.cv && i18nData.cv.experience && i18nData.cv.experience.jobs) {
      return i18nData.cv.experience.jobs;
    }
    throw new Error('Experience data not found in i18n resources');
  } catch (error) {
    console.error('Error loading experience data from i18n:', error);
    throw error; // Re-throw to handle at higher level
  }
}

const getEducationsFromI18n = (language: string): any[] => {
  try {
    // Get data from i18n.ts dynamically
    const i18nData = require('../app/i18n').default.getResourceBundle(language, 'translation');
    if (i18nData && i18nData.cv && i18nData.cv.education && i18nData.cv.education.degrees) {
      return i18nData.cv.education.degrees;
    }
    throw new Error('Education data not found in i18n resources');
  } catch (error) {
    console.error('Error loading education data from i18n:', error);
    throw error; // Re-throw to handle at higher level
  }
}

const getSkillsFromI18n = (language: string): any[] => {
  try {
    // Get data from i18n.ts dynamically
    const i18nData = require('../app/i18n').default.getResourceBundle(language, 'translation');
    if (i18nData && i18nData.cv && i18nData.cv.skills && i18nData.cv.skills.categories) {
      return i18nData.cv.skills.categories;
    }
    throw new Error('Skills data not found in i18n resources');
  } catch (error) {
    console.error('Error loading skills data from i18n:', error);
    throw error; // Re-throw to handle at higher level
  }
}

const getFooterTextFromI18n = (language: string): string => {
  try {
    // Get data from i18n.ts dynamically
    const i18nData = require('../app/i18n').default.getResourceBundle(language, 'translation');
    if (i18nData && i18nData.cv && i18nData.cv.footer && i18nData.cv.footer.text) {
      return i18nData.cv.footer.text;
    }
    // Default text if not found in i18n
    return language === 'en' 
      ? "CV automatically generated by almap[i] | almapi.dev" 
      : "CV generado automáticamente por almap[i] | almapi.dev";
  } catch (error) {
    console.error('Error loading footer text from i18n:', error);
    // Default text if error occurs
    return language === 'en' 
      ? "CV automatically generated by almap[i] | almapi.dev" 
      : "CV generado automáticamente por almap[i] | almapi.dev";
  }
}

// Todas las funciones legacy han sido eliminadas para usar exclusivamente datos dinámicos de i18n.ts