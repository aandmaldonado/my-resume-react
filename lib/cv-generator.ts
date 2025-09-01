interface CVData {
  name: string
  title: string
  email: string
  linkedin: string
  web: string
  github: string
  about: string[]
  experience: any[]
  education: any[]
  skills: any[]
  languages: any[]
}

const prepareCVData = (language: string): CVData => {
  try {
    // Get all data from translations
    const experiences = getExperiencesFromI18n(language)
    const educations = getEducationsFromI18n(language)
    const skills = getSkillsFromI18n(language)
    const contactInfo = getContactInfoFromI18n(language)
    const about = getAboutFromI18n(language)
    const languages = getLanguagesFromI18n(language)
    
    return {
      name: contactInfo.name || "Álvaro Andrés Maldonado Pinto",
      title: contactInfo.title || "Senior Software Engineer",
      email: contactInfo.email || "readme.md@almapi.dev",
      linkedin: contactInfo.linkedin || "https://www.linkedin.com/in/almapidev/",
      web: contactInfo.web || "https://almapi.dev",
      github: contactInfo.github || "https://github.com/aandmaldonado",
      about: about || [],
      experience: experiences || [],
      education: educations || [],
      skills: skills || [],
      languages: languages || []
    }
  } catch (error) {
    // Silent error handling for security
    throw new Error(`Failed to prepare CV data for language ${language}`)
  }
}

const groupSkillsByCategory = (skills: any[]): Record<string, any> => {
  const grouped: Record<string, any> = {}
  
  skills.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill.name)
  })
  
  return grouped
}

// Import the resources directly from i18n
import { cvResources } from './cv-i18n';

// Helper functions to get data from i18n
const getContactInfoFromI18n = (language: string): any => {
  try {
    // Get data directly from the imported resources object
    const i18nData = cvResources[language as keyof typeof cvResources];
    if (!i18nData || !i18nData.cv) {
      throw new Error('CV data not found in i18n resources');
    }
    
    const cv = i18nData.cv;
    
    // Get data from cv.contact section
    const contactInfo = {
      name: cv.fullName,
      title: cv.degree,
      email: cv.contact?.email,
      linkedin: cv.contact?.linkedin,
      web: cv.contact?.portfolio,
      github: cv.contact?.github
    };
    
    // Verify all required fields are present
    if (!contactInfo.name || !contactInfo.title || !contactInfo.email) {
      throw new Error('Required contact information missing in i18n resources');
    }
    
    return contactInfo;
  } catch (error) {
    // Silent error handling for security
    throw new Error('Failed to load contact information');
  }
}

const getAboutFromI18n = (language: string): string[] => {
  try {
    const i18nData = cvResources[language as keyof typeof cvResources];
    if (i18nData && i18nData.cv && i18nData.cv.profile) {
      const profile = i18nData.cv.profile;
      if (typeof profile === 'string') {
        return [profile];
      }
      if (Array.isArray(profile)) {
        return profile;
      }
    }
    throw new Error('About data not found in i18n resources');
  } catch (error) {
    // Silent error handling for security
    throw new Error('Failed to load about information');
  }
}

const getKeySkillsFromI18n = (language: string): string[] => {
  try {
    const i18nData = cvResources[language as keyof typeof cvResources];
    if (i18nData && i18nData.cv && i18nData.cv.keySkills) {
      return i18nData.cv.keySkills;
    }
    return [];
  } catch (error) {
    // Silent error handling for security
    throw new Error('Failed to load key skills');
  }
}

const getExperiencesFromI18n = (language: string): any[] => {
  try {
    const i18nData = cvResources[language as keyof typeof cvResources];
    
    if (i18nData && i18nData.cv && i18nData.cv.experience) {
      return i18nData.cv.experience;
    }
    throw new Error('Experience data not found in i18n resources');
  } catch (error) {
    // Silent error handling for security
    throw new Error('Failed to load experience data');
  }
}

const getEducationsFromI18n = (language: string): any[] => {
  try {
    const i18nData = cvResources[language as keyof typeof cvResources];
    if (i18nData && i18nData.cv && i18nData.cv.education) {
      return i18nData.cv.education.map((education: any) => ({
        degree: education.degree,
        university: education.university,
        location: education.city,
        period: education.period
      }));
    }
    throw new Error('Education data not found in i18n resources');
  } catch (error) {
    // Silent error handling for security
    throw new Error('Failed to load education data');
  }
}

const getSkillsFromI18n = (language: string): any[] => {
  try {
    const i18nData = cvResources[language as keyof typeof cvResources];
    if (i18nData && i18nData.cv && i18nData.cv.techSkills) {
      // Convert the new techSkills array structure to the expected format
      const skillsArray: Array<{category: string, name: string}> = [];
      const techSkills = i18nData.cv.techSkills;
      
      // Process each skill category object
      techSkills.forEach((skillCategory: any) => {
        if (skillCategory.category && skillCategory.skills && Array.isArray(skillCategory.skills)) {
          skillsArray.push({
            category: skillCategory.category,
            name: skillCategory.skills.join(', ')
          });
        }
      });
      
      return skillsArray;
    }
    throw new Error('Skills data not found in i18n resources');
  } catch (error) {
    // Silent error handling for security
    throw new Error('Failed to load skills data');
  }
}

const getLanguagesFromI18n = (language: string): any[] => {
  try {
    const i18nData = cvResources[language as keyof typeof cvResources];
    if (i18nData && i18nData.cv && i18nData.cv.languages) {
      return i18nData.cv.languages;
    }
    return [];
  } catch (error) {
    // Silent error handling for security
    throw new Error('Failed to load languages data');
  }
}

const getFooterTextFromI18n = (language: string): string => {
  try {
    const i18nData = cvResources[language as keyof typeof cvResources];
    if (i18nData && i18nData.cv && i18nData.cv.footer) {
      return i18nData.cv.footer;
    }
    // Default text if not found in i18n
    return language === 'en' 
      ? "CV automatically generated by almap[i] | almapi.dev" 
      : "CV generado automáticamente por almap[i] | almapi.dev";
  } catch (error) {
    // Silent error handling for security
    // Return default text if error occurs
    return language === 'en' 
      ? "CV automatically generated by almap[i] | almapi.dev"
      : "CV generado automáticamente por almap[i] | almapi.dev";
  }
}

// Generate HTML CV with real icons for html2pdf.js
export const generateCVHTML = (language: string): string => {
  const data = prepareCVData(language)
  
  // Function to calculate years of experience since 2010
  const calculateYearsOfExperience = (): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - 2010;
  };
  
  // Function to convert text between single quotes to bold
  const convertQuotesToBold = (text: string): string => {
    return text.replace(/'([^']*)'/g, (match, p1) => `<strong>${p1}</strong>`);
  };
  
  return `
<!DOCTYPE html>
<html lang="${language}">
    <head>
      <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - ${data.name}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.3; color: #333; background: white; }
        .cv-container { max-width: 100%; margin: 0; padding: 8px; background: white; }
        
        /* Header - Optimized for space */
        .cv-header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px; text-align: center; }
        .cv-name { font-size: 18px; font-weight: bold; margin-bottom: 6px; }
        .cv-title { font-size: 16px; opacity: 0.9; }
        
        /* Contact info - Compact layout */
        .contact-info { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px; align-items: center; justify-content: center; width: 100%; }
        .contact-item { display: flex; align-items: center; gap: 4px; padding: 2px 0; }
        .contact-icon { color: #3b82f6; font-size: 12px; width: 16px; text-align: center; flex-shrink: 0; }
        .contact-value { color: #555; font-size: 11px; white-space: nowrap; }
        .contact-separator { color: #ccc; margin: 0 2px; font-size: 10px; flex-shrink: 0; }
        
        /* Section typography - Reduced margins */
        .section { margin-bottom: 12px; }
        .section-title { font-size: 12px; font-weight: bold; color: #3b82f6; border-bottom: 1px solid #3b82f6; padding-bottom: 6px; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; }
        .section-icon { color: #3b82f6; font-size: 12px; }
        
        /* Content typography - Optimized spacing */
        .profile-text { text-align: justify; margin-bottom: 12px; color: #555; font-size: 11px; line-height: 1.2; }
        .experience-item, .project-item, .education-item { margin-bottom: 10px; padding: 8px 10px; border-left: 2px solid #3b82f6; background: #f8fafc; border-radius: 0 4px 4px 0; }
        .item-header { margin-bottom: 4px; }
        .item-title { font-size: 11px; font-weight: bold; color: #1f2937; margin-bottom: 2px; }
        .item-subtitle { color: #6b7280; font-size: 11px; }
        .item-bullets { list-style: none; margin-top: 4px; }
        .item-bullets li { margin-bottom: 2px; padding-left: 14px; position: relative; font-size: 11px; line-height: 1.2; }
        .item-bullets li:before { content: "•"; color: #3b82f6; font-weight: bold; position: absolute; left: 0; }
        
        /* Additional content - Compact */
        .technologies { margin-top: 4px; font-style: italic; color: #6b7280; font-size: 11px; }
        .skills { margin-top: 4px; color: #555; font-size: 11px; }
        .languages { display: flex; gap: 15px; margin-top: 0; }
        .language-item { display: flex; align-items: center; gap: 6px; font-size: 11px; }
        
        /* Page break control and PDF optimization */
        .section { 
            margin-bottom: 12px;
        }
        
        /* Experience section - allow page breaks between items */
        .experience-section { 
            page-break-inside: auto;
            break-inside: auto;
            orphans: 2;
            widows: 2;
        }
        
        /* Prevent border cutting and ensure complete elements */
        .experience-item, .education-item {
            border-left: none;
            background: #f8fafc;
            border-radius: 0 4px 4px 0;
            page-break-inside: avoid; 
            break-inside: avoid;
            margin-bottom: 8px; 
            padding: 6px 8px; 
            position: relative;
            /* Control orphan and widow lines */
            orphans: 4;
            widows: 4;
            /* Use border-image for robust page break handling */
            border-image: linear-gradient(to bottom, #3b82f6 0%, #3b82f6 100%) 1;
            border-left: 2px solid transparent;
            background-clip: padding-box;
        }
        
        /* Additional visual indicator that won't be cut */
        .experience-item::after, .education-item::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #3b82f6;
            z-index: 1;
        }
        
        .item-header {
            page-break-after: avoid;
            break-after: avoid;
        }
        
        .item-bullets {
            page-break-inside: avoid;
            break-inside: avoid;
        }
        
        .skills-grid {
            page-break-inside: avoid;
            break-inside: avoid;
        }
        
        /* Footer positioning - always at bottom of current page */
        .footer {
            position: relative;
            margin-top: 15px;
            padding-top: 8px;
            border-top: none;
            text-align: center;
            color: #6b7280;
            font-size: 10px;
            font-style: italic;
            page-break-inside: avoid;
            break-inside: avoid;
            /* Ensure footer is not attached to previous section */
            clear: both;
            display: block;
        }
        
        /* Print optimization with page break control */
        @media print { 
            body { margin: 0; } 
            .cv-container { padding: 0; }
            .cv-header { 
                margin-bottom: 8px; 
                padding: 12px;
                page-break-after: avoid;
                break-after: avoid;
            }
            .section { 
                margin-bottom: 12px;
            }
            
            /* Experience section - allow page breaks between items in print */
            .experience-section { 
                page-break-inside: auto;
                break-inside: auto;
            }
            .experience-item, .education-item { 
                margin-bottom: 10px; 
                padding: 8px 10px;
                page-break-inside: avoid;
                break-inside: avoid;
                position: relative;
                /* Use border-image for robust page break handling in print */
                border-image: linear-gradient(to bottom, #3b82f6 0%, #3b82f6 100%) 1;
                border-left: 2px solid transparent;
                background-clip: padding-box;
            }
            
            /* Ensure pseudo-element works in print */
            .experience-item::after, .education-item::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 2px;
                background: #3b82f6;
                z-index: 1;
            }
            .item-bullets li { margin-bottom: 2px; }
            .technologies { margin-top: 4px; }
            .skills { margin-top: 4px; }
            .footer { 
                margin-top: 12px; 
                padding-top: 6px;
                page-break-inside: avoid;
                break-inside: avoid;
                /* Ensure footer is not attached to previous section in print */
                clear: both;
                display: block;
            }
            
            /* Force page breaks at strategic points */
            .experience-section { 
                page-break-before: auto;
                break-before: auto;
            }
            
            /* Ensure contact info stays with header */
            .contact-info {
                page-break-after: avoid;
                break-after: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="cv-container">
        <!-- Header -->
        <div class="cv-header" style="page-break-after: avoid; break-after: avoid;">
            <h1 class="cv-name">${data.name}</h1>
            <p class="cv-title">${data.title}</p>
        </div>
        
        <!-- Contact Info -->
        <div class="contact-info" style="page-break-after: avoid; break-after: avoid;">
            <span class="contact-separator">&nbsp;</span>
            <div class="contact-item">
                <i class="fas fa-envelope contact-icon"></i>
                <span class="contact-value">${data.email}</span>
            </div>
            <span class="contact-separator">&nbsp;</span>
            <div class="contact-item">
                <i class="fas fa-globe contact-icon"></i>
                <span class="contact-value">${data.web}</span>
            </div>
            <span class="contact-separator">&nbsp;</span>
            <div class="contact-item">
                <i class="fab fa-linkedin contact-icon"></i>
                <span class="contact-value">${data.linkedin}</span>
            </div>
            <span class="contact-separator">&nbsp;</span>
            <div class="contact-item">
                <i class="fab fa-github contact-icon"></i>
                <span class="contact-value">${data.github}</span>
            </div>
        </div>
        
        <!-- Profile -->
        <div class="section" style="page-break-inside: avoid; break-inside: avoid;">
            <h2 class="section-title">
                <i class="fas fa-user section-icon"></i>
                ${language === 'en' ? 'Profile' : 'Perfil'}
            </h2>
            <p class="profile-text">${data.about ? convertQuotesToBold(data.about.join(' ').replace('{year}', calculateYearsOfExperience().toString())) : ''}</p>
            
            <div class="technologies">
              <strong>${language === 'en' ? 'Key Skills:' : 'Habilidades Clave:'}</strong> ${getKeySkillsFromI18n(language).map((tech: string) => `<code>${convertQuotesToBold(tech)}</code>`).join(', ')}
            </div>
        </div>
        
        <!-- Experience -->
        <div class="section experience-section">
            <h2 class="section-title">
                <i class="fas fa-briefcase section-icon"></i>
                ${language === 'en' ? 'Experience' : 'Experiencia'}
            </h2>
            ${data.experience ? data.experience.map((exp: any) => `
                <div class="experience-item" style="page-break-inside: avoid; break-inside: avoid;">
                    <div class="item-header">
                        <div class="item-title">${convertQuotesToBold(exp.role)} - ${convertQuotesToBold(exp.company)}</div>
                        <div class="item-subtitle">
                          <i class="fas fa-map-marker-alt" style="color: #3b82f6; margin-right: 5px;"></i>${convertQuotesToBold(exp.city)} 
                          <span style="margin: 0 8px;">&nbsp;</span>
                          <i class="fas fa-calendar-alt" style="color: #3b82f6; margin-right: 5px;"></i>${convertQuotesToBold(exp.period)}
                        </div>
                    </div>
                    <ul class="item-bullets">
                        ${exp.bullets.map((bullet: string) => `<li>${convertQuotesToBold(bullet)}</li>`).join('')}
                    </ul>
                    ${exp.technologies ? `<div class="technologies"><strong>${language === 'en' ? 'Technologies:' : 'Tecnologías:'}</strong> ${exp.technologies.map((tech: string) => `<code>${convertQuotesToBold(tech)}</code>`).join(', ')}</div>` : ''}
                </div>
            `).join('') : ''}
        </div>
        
        <!-- Tech Skills -->
        <div class="section" style="page-break-inside: avoid; break-inside: avoid;">
            <h2 class="section-title">
                <i class="fas fa-bolt section-icon"></i>
                ${language === 'en' ? 'Tech Skills' : 'Habilidades Técnicas'}
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 8px;">
                ${Object.entries(groupSkillsByCategory(data.skills)).map(([category, skills]) => `
                    <div class="skills" style="margin: 0;"><strong>${convertQuotesToBold(category)}:</strong> ${skills.map((skill: string) => `${convertQuotesToBold(skill)}`).join(', ')}</div>
                `).join('')}
            </div>
        </div>
        
        <!-- Education -->
        <div class="section" style="page-break-inside: avoid; break-inside: avoid;">
            <h2 class="section-title">
                <i class="fas fa-graduation-cap section-icon"></i>
                ${language === 'en' ? 'Education' : 'Educación'}
            </h2>
            ${data.education ? data.education.map((edu: any) => `
                <div class="education-item" style="page-break-inside: avoid; break-inside: avoid;">
                    <div class="item-header">
                        <div class="item-title">${convertQuotesToBold(edu.degree)} - ${convertQuotesToBold(edu.university)}</div>
                        <div class="item-subtitle">
                          <i class="fas fa-map-marker-alt" style="color: #3b82f6; margin-right: 5px;"></i>${convertQuotesToBold(edu.location)} 
                          <span style="margin: 0 8px;">&nbsp;</span>
                          <i class="fas fa-calendar-alt" style="color: #3b82f6; margin-right: 5px;"></i>${convertQuotesToBold(edu.period)}
                        </div>
                    </div>
                </div>
            `).join('') : ''}
        </div>
        
        <!-- Languages -->
        <div class="section" style="page-break-inside: avoid; break-inside: avoid;">
            <h2 class="section-title">
                <i class="fas fa-language section-icon"></i>
                ${language === 'en' ? 'Languages' : 'Idiomas'}
            </h2>
            <div class="languages">
                ${data.languages ? data.languages.map((lang: any) => `
                    <div class="language-item">
                        <span><strong>${convertQuotesToBold(lang.language)}:</strong> ${convertQuotesToBold(lang.level)}</span>
                    </div>
                `).join('') : ''}
            </div>
        </div>
        
        <!-- Footer - Always at bottom of page -->
        <div class="footer" style="margin-top: 15px; padding-top: 8px; clear: both; display: block;">
            ${convertQuotesToBold(getFooterTextFromI18n(language))}
        </div>
    </div>
</body>
</html>
  `
}