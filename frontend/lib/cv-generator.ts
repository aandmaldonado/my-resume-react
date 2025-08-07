
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
}

export const generateCV = async (language: string = 'en') => {
  // Dynamic import to avoid SSR issues
  const jsPDF = await import('jspdf')
  await import('jspdf-autotable')
  const doc = new jsPDF.default()
  
  // Prepare data with all sections
  const cvData = prepareCVData(language)
  
  // Generate PDF with complete layout
  generatePDF(doc, cvData, language)
  
  // Save the PDF
  const fileName = `CV_Alvaro_Maldonado_${language.toUpperCase()}_${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(fileName)
}

const prepareCVData = (language: string): CVData => {
  // Get all data from translations
  const experiences = getExperiencesFromI18n(language)
  const educations = getEducationsFromI18n(language)
  const skills = getSkillsFromI18n(language)
  const contactInfo = getContactInfoFromI18n(language)
  const about = getAboutFromI18n(language)
  
  return {
    name: contactInfo.name,
    title: "Senior Software Engineer",
    location: contactInfo.location,
    email: contactInfo.email,
    linkedin: contactInfo.linkedin,
    github: contactInfo.github,
    about: about,
    experience: experiences,
    education: educations,
    skills: skills
  }
}

const generatePDF = (doc: any, data: CVData, language: string) => {
  // Set font
  doc.setFont('helvetica')
  
  // Header similar to the image - Name in two lines
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(0, 0, 0) // Pure black for name
  
  // Split name into two lines
  const nameParts = data.name.split(' ')
  const firstName = nameParts.slice(0, -2).join(' ')
  const lastName = nameParts.slice(-2).join(' ')
  
  doc.text(firstName.toUpperCase(), 20, 30)
  doc.text(lastName.toUpperCase(), 20, 40)
  
  // Professional title in blue
  doc.setFontSize(16)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 123, 255) // Vibrant blue
  doc.text(data.title, 20, 55)
  
  // Contact info in a single line with simple symbols
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 0, 0) // Black for contact info
  const contactLine = `+34 641 96 23 96  |  ${data.email}  |  ${data.linkedin}  |  ${data.location}`
  doc.text(contactLine, 20, 70)
  
  let yPosition = 90
  
  // About section
  if (data.about && data.about.length > 0) {
    yPosition = addSectionHeader(doc, language === 'en' ? 'About Me' : 'Sobre Mí', yPosition)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(44, 62, 80)
    yPosition = 105
    
    data.about.forEach((paragraph) => {
      const lines = doc.splitTextToSize(paragraph, 170)
      lines.forEach((line: string) => {
        doc.text(line, 20, yPosition)
        yPosition += 5
      })
      yPosition += 3
    })
  }
  
  // Experience section - all experiences
  if (data.experience && data.experience.length > 0) {
    yPosition += 10
    yPosition = addSectionHeader(doc, language === 'en' ? 'Work Experience' : 'Experiencia Laboral', yPosition)
    
    data.experience.forEach((exp: any) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      // Company and position
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(44, 62, 80)
      doc.text(exp.company, 20, yPosition)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(52, 73, 94)
      doc.text(`${exp.position} | ${exp.period} | ${exp.location}`, 20, yPosition + 7)
      
      // Description
      const descriptionLines = doc.splitTextToSize(exp.description, 170)
      let descY = yPosition + 15
      descriptionLines.forEach((line: string) => {
        doc.text(line, 20, descY)
        descY += 5
      })
      
      // Key achievements (bullet points)
      if (exp.achievements && exp.achievements.length > 0) {
        descY += 5
        exp.achievements.slice(0, 3).forEach((achievement: string) => {
          const achievementLines = doc.splitTextToSize(`• ${achievement}`, 160)
          achievementLines.forEach((line: string) => {
            doc.text(line, 25, descY)
            descY += 5
          })
        })
      }
      
      yPosition = descY + 10
    })
  }
  
  // Education section - all education
  if (data.education && data.education.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    yPosition = addSectionHeader(doc, language === 'en' ? 'Education' : 'Educación', yPosition)
    
    data.education.forEach((edu) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(44, 62, 80)
      doc.text(edu.institution, 20, yPosition)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(52, 73, 94)
      doc.text(`${edu.degree} | ${edu.period}`, 20, yPosition + 7)
      
      yPosition += 15
    })
  }
  
  // Skills section - all skills
  if (data.skills && data.skills.length > 0) {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    yPosition = addSectionHeader(doc, language === 'en' ? 'Skills' : 'Habilidades', yPosition)
    
    // Group skills by category
    const skillsByCategory = groupSkillsByCategory(data.skills)
    
    Object.entries(skillsByCategory).forEach(([category, skills]) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(44, 62, 80)
      doc.text(`${category}:`, 20, yPosition)
      
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(52, 73, 94)
      
      const skillsText = skills.join(', ')
      const skillsLines = doc.splitTextToSize(skillsText, 170)
      skillsLines.forEach((line: string) => {
        doc.text(line, 25, yPosition + 5)
        yPosition += 5
      })
      
      yPosition += 5
    })
  }
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
const getContactInfoFromI18n = (language: string) => {
  const resources = {
    en: {
      name: "Álvaro Andrés Maldonado Pinto",
      location: "Gandia, Spain",
      email: "readme.md@almapi.dev",
      linkedin: "https://www.linkedin.com/in/almapidev/",
      github: "https://github.com/aandmaldonado"
    },
    es: {
      name: "Álvaro Andrés Maldonado Pinto",
      location: "Gandía, España",
      email: "readme.md@almapi.dev",
      linkedin: "https://www.linkedin.com/in/almapidev/",
      github: "https://github.com/aandmaldonado"
    }
  }
  return resources[language as keyof typeof resources] || resources.en
}

const getAboutFromI18n = (language: string): string[] => {
  const resources = {
    en: [
      "I am a Senior Software Engineer with a solid background in developing and integrating technology solutions, involved in the entire software development lifecycle.",
      "I have worked across various industries, including telecommunications and financial services, holding key roles such as Backend Developer, IT Consultant, Technical Lead, and CTO.",
      "My drive is technology and innovation. Currently, I am focusing my professional growth on Artificial Intelligence and Machine Learning, seeking challenges that align purpose, impact, and growth."
    ],
    es: [
      "Soy Ingeniero de Software Senior con una trayectoria consolidada en el desarrollo e integración de soluciones tecnológicas, participando en todo el ciclo de vida del software.",
      "He trabajado en diversas industrias como telecomunicaciones, servicios financieros, entre otros, asumiendo roles clave: desde Desarrollador Backend y Consultor TI, hasta Líder Técnico y CTO.",
      "Mi motor es la tecnología y la innovación. Hoy, enfoco mi evolución profesional hacia la Inteligencia Artificial y Machine Learning, en busca de desafíos que conecten propósito, impacto y crecimiento."
    ]
  }
  return resources[language as keyof typeof resources] || resources.en
}

const getExperiencesFromI18n = (language: string): any[] => {
  const resources = {
    en: [
      {
        company: "InAdvance Consulting Group",
        position: "Senior Software Engineer",
        period: "2024 - Present",
        location: "Santiago, Chile",
        description: "Participated as a backend developer in a key technological migration project for a credit card processing platform. My focus was on designing and implementing modern microservices, ensuring quality, scalability, and standard compliance through Agile methodologies and a DevOps/DevSecOps culture. I also actively contributed to the technical evaluation of new talent for the team.",
        achievements: ["Key role in microservices implementation and technological migration, promoting agility and development automation.", "Ensured solution performance and stability through exhaustive testing and continuous validation.", "Direct contribution to team strengthening through effective technical recruitment processes."],
        responsibilities: ["Active participation in the migration of critical financial systems.", "Analysis, requirements gathering, and technical design of scalable microservices.", "Development of microservices focusing on modern architecture, Agile methodologies, and DevOps/DevSecOps practices."]
      },
      {
        company: "Imagemaker",
        position: "Senior Software Engineer",
        period: "2023 - 2024",
        location: "Santiago, Chile",
        description: "In this project, I acted as a technical consultant and backend developer, designing and implementing custom solutions for clients in the legal and corporate sector. A highlight was the applied research in artificial intelligence techniques for intelligent document processing. The focus was on software quality, microservice performance, and observability, using cutting-edge technologies throughout the development cycle.",
        achievements: ["Led an artificial intelligence POC to automate the reading and analysis of legal documents in PDF, generating innovation and added value for the client.", "Consolidated quality and monitoring best practices in critical backend solutions.", "Consistent delivery of high-performance solutions aligned with specific client needs."],
        responsibilities: ["External technical consulting for optimization and problem-solving in projects and services.", "Design and implementation of efficient client-oriented solutions, following development best practices.", "Research and development of Proofs of Concept (POCs) with AI techniques to process legal PDF documents."]
      },
      {
        company: "Falabella",
        position: "Technical Lead",
        period: "2022 - 2023",
        location: "Santiago, Chile",
        description: "I led the development of a corporate attendance management system implemented across various business units of the Falabella group in Latin America. The project involved decomposing legacy systems, designing distributed and resilient solutions, and creating reusable components. I applied Domain-Driven Design (DDD) principles and event-driven architecture, collaborating closely with technical and business teams to ensure a solution aligned with strategic objectives.",
        achievements: ["Successful implementation of a Corporate Attendance Management System deployed in multiple countries, optimizing shift management and indicator calculation.", "Transformation of legacy systems into modern solutions using event-driven architecture and Domain-Driven Design (DDD).", "Construction of reusable components aligned with the Falabella group's technological strategy."],
        responsibilities: ["Collaborative requirements analysis with the Product Owner and business stakeholders.", "Solution design adapted to technical regulations and modern architectural patterns like SAGA and DDD.", "Backlog management and prioritization of key project functionalities."]
      },
      {
        company: "Neurogenesis IA Technologies",
        position: "CTO & Co-Founder | AI Engineer",
        period: "2021 - 2022",
        location: "Barcelona, Spain",
        description: "I led the development of Artificial Intelligence solutions focused on social and environmental impact, integrating image processing, NLP, and deep learning technologies. I migrated and managed cloud infrastructure with AWS, implementing scalable architectures to support Machine Learning and Deep Learning models. I designed computer vision models with CNN for ornamental fish classification and built a diversified dataset from real images and videos. I also oversaw multidisciplinary projects in AI, DevOps, UX/UI, and Industry 4.0, connecting academia with industry.",
        achievements: ["Successful migration of the company's infrastructure to AWS, optimizing performance and scalability.", "Creation of a robust visual dataset for ornamental fish classification with computer vision.", "Development of a Deep Learning model based on CNN for accurate species classification."],
        responsibilities: ["Applied research in AI technologies, focusing on Deep Learning and computer vision.", "Design and implementation of cloud architecture on AWS (EC2, S3, Lambda, etc.) for AI projects.", "Development of image classification models using convolutional neural networks (CNN)."]
      },
      {
        company: "NTT DATA Europe & LATAM",
        position: "Senior Software Engineer",
        period: "2019 - 2021",
        location: "Santiago, Chile",
        description: "I actively participated in modernizing core systems of the financial ecosystem, addressing the migration of legacy platforms to modern architectures based on Java and Spring Boot. I developed secure applications with Spring Security and JWT, ensuring the protection of critical resources through robust authentication and authorization. I ensured the availability and scalability of the developed solutions, incorporating security best practices (OWASP, PCI) and automated testing. I acted as a technical reference in the analysis, design, and deployment of solutions, promoting quality and risk mitigation using tools like Kiuwan, Fortify, and SonarQube.",
        achievements: ["Successful migration of Transbank's backoffice systems, improving efficiency and maintainability.", "Effective implementation of secure systems using Spring Security and JWT.", "Development of robust and scalable applications for high-data-flow environments."],
        responsibilities: ["Analysis of technical and functional requirements for clients in the financial sector.", "Proactive identification of risks and vulnerabilities in existing solutions.", "Design of robust and secure IT strategies and solutions."]
      }
    ],
    es: [
      {
        company: "InAdvance Consulting Group",
        position: "Senior Software Engineer",
        period: "2024 - Presente",
        location: "Santiago, Chile",
        description: "Participé como desarrollador backend en un proyecto clave de migración tecnológica para una plataforma de procesamiento de tarjetas de crédito. Mi enfoque estuvo en el diseño e implementación de microservicios modernos, asegurando calidad, escalabilidad y cumplimiento de estándares mediante la aplicación de metodologías ágiles y cultura DevOps/DevSecOps. Además, contribuí activamente en la evaluación técnica de nuevos talentos para el equipo.",
        achievements: ["Rol clave en la implementación de microservicios y migración tecnológica, promoviendo la agilidad y automatización del desarrollo.", "Garantía del rendimiento y estabilidad de las soluciones a través de pruebas exhaustivas y validaciones continuas.", "Contribución directa al fortalecimiento del equipo mediante procesos efectivos de reclutamiento técnico."],
        responsibilities: ["Participación activa en la migración de sistemas críticos financieros.", "Análisis, levantamiento y diseño técnico de microservicios escalables.", "Desarrollo de microservicios con enfoque en arquitectura moderna, metodologías ágiles y prácticas DevOps/DevSecOps."]
      },
      {
        company: "Imagemaker",
        position: "Senior Software Engineer",
        period: "2023 - 2024",
        location: "Santiago, Chile",
        description: "En este proyecto actué como consultor técnico y desarrollador backend, diseñando e implementando soluciones a medida para clientes del sector legal y corporativo. Destaca la investigación aplicada en técnicas de inteligencia artificial para el procesamiento inteligente de documentos. El enfoque estuvo en la calidad del software, rendimiento de los microservicios y observabilidad, utilizando tecnologías de punta en todo el ciclo de desarrollo.",
        achievements: ["Lideré una POC de inteligencia artificial para automatizar la lectura y análisis de documentos legales en PDF, generando innovación y valor añadido para el cliente.", "Consolidación de buenas prácticas de calidad y monitoreo en soluciones backend críticas.", "Entregas consistentes de alto rendimiento alineadas con las necesidades específicas del cliente."],
        responsibilities: ["Asesoría técnica externa para optimización y solución de problemas en proyectos y servicios.", "Diseño e implementación de soluciones eficientes orientadas al cliente, con buenas prácticas de desarrollo.", "Investigación y desarrollo de pruebas de concepto (POC) con técnicas de IA para procesar documentos PDF con aplicaciones legales."]
      },
      {
        company: "Falabella",
        position: "Líder Técnico",
        period: "2022 - 2023",
        location: "Santiago, Chile",
        description: "Lideré el desarrollo de un sistema corporativo de gestión de asistencia implementado en diversas unidades de negocio del grupo Falabella en América Latina. El proyecto involucró la descomposición de sistemas legados, el diseño de soluciones distribuidas y resilientes, y la creación de componentes reutilizables. Apliqué principios de Domain-Driven Design (DDD) y arquitectura basada en eventos, colaborando estrechamente con equipos técnicos y de negocio para asegurar una solución alineada con los objetivos estratégicos.",
        achievements: ["Implementación exitosa de un Sistema Corporativo de Gestión de Asistencia desplegado en múltiples países, optimizando la gestión de turnos y cálculo de indicadores.", "Transformación de sistemas legados en soluciones modernas mediante arquitectura basada en eventos y diseño orientado al dominio (DDD).", "Construcción de componentes reutilizables y alineados con la estrategia tecnológica del grupo Falabella."],
        responsibilities: ["Análisis colaborativo de requerimientos junto al Product Owner y stakeholders del negocio.", "Diseño de soluciones adaptadas a normativas técnicas y patrones de arquitectura moderna como SAGA y DDD.", "Gestión del backlog y priorización de funcionalidades clave del proyecto."]
      },
      {
        company: "Neurogenesis IA Technologies",
        position: "CTO & Co-Fundador | Ingeniero de IA",
        period: "2021 - 2022",
        location: "Barcelona, España",
        description: "Lideré el desarrollo de soluciones de Inteligencia Artificial orientadas al impacto social y medioambiental, integrando tecnologías de procesamiento de imágenes, NLP y aprendizaje profundo. Migré y gestioné infraestructura cloud con AWS, implementando arquitecturas escalables para soportar modelos de Machine Learning y Deep Learning. Diseñé modelos de visión por computador con CNN para clasificación de peces ornamentales y construí un dataset diversificado a partir de imágenes y videos reales. También supervisé proyectos multidisciplinarios en IA, DevOps, UX/UI e Industria 4.0, conectando academia con industria.",
        achievements: ["Migración exitosa de la infraestructura de la compañía a AWS, optimizando rendimiento y escalabilidad.", "Creación de un dataset visual robusto para clasificación de peces ornamentales con visión artificial.", "Desarrollo de un modelo de Deep Learning basado en CNN para clasificación precisa de especies."],
        responsibilities: ["Investigación aplicada en tecnologías de IA, con foco en Deep Learning y visión por computador.", "Diseño e implementación de arquitectura cloud en AWS (EC2, S3, Lambda, etc.) para proyectos de IA.", "Desarrollo de modelos de clasificación de imágenes utilizando redes neuronales convolucionales (CNN)."]
      },
      {
        company: "NTT DATA Europe & LATAM",
        position: "Senior Software Engineer",
        period: "2019 - 2021",
        location: "Santiago, Chile",
        description: "Participé activamente en la modernización de sistemas core del ecosistema financiero, abordando la migración de plataformas legacy hacia arquitecturas modernas basadas en Java y Spring Boot. Desarrollé aplicaciones seguras con Spring Security y JWT, asegurando la protección de recursos críticos a través de autenticación y autorización robustas. Aseguré la disponibilidad y escalabilidad de las soluciones desarrolladas, incorporando mejores prácticas de seguridad (OWASP, PCI) y testing automatizado. Actué como referencia técnica en el análisis, diseño y despliegue de soluciones, promoviendo la calidad y mitigación de riesgos usando herramientas como Kiuwan, Fortify y SonarQube.",
        achievements: ["Migración exitosa de los sistemas de backoffice de Transbank, mejorando eficiencia y mantenibilidad.", "Implementación efectiva de sistemas seguros mediante Spring Security y JWT.", "Desarrollo de aplicaciones robustas y escalables para entornos con alto flujo de datos."],
        responsibilities: ["Análisis de requerimientos técnicos y funcionales para clientes del sector financiero.", "Identificación proactiva de riesgos y vulnerabilidades en soluciones existentes.", "Diseño de estrategias y soluciones informáticas robustas y seguras."]
      }
    ]
  }
  return resources[language as keyof typeof resources] || resources.en
}

const getEducationsFromI18n = (language: string): any[] => {
  const resources = {
    en: [
      {
        institution: "LIDR.co | Training great Tech Leaders",
        degree: "AI4DEVS",
        period: "2025 - Present",
        location: "Online, Spain"
      },
      {
        institution: "thePower",
        degree: "Cybersecurity Bootcamp",
        period: "2025",
        location: "Online, Spain"
      },
      {
        institution: "Hackio by thePower",
        degree: "AI Development Bootcamp",
        period: "2025",
        location: "Online, Spain"
      },
      {
        institution: "Universitat Politècnica de Catalunya",
        degree: "Master in Artificial Intelligence",
        period: "2020 - 2021",
        location: "Barcelona, Spain"
      },
      {
        institution: "Universidad de Santiago de Chile",
        degree: "Computer Science Engineering",
        period: "2012 - 2017",
        location: "Santiago, Chile"
      },
      {
        institution: "INACAP",
        degree: "Computer Engineering",
        period: "2006 - 2010",
        location: "Santiago, Chile"
      }
    ],
    es: [
      {
        institution: "LIDR.co | Entrenamos grandes líderes en tech",
        degree: "AI4DEVS",
        period: "2025 - Presente",
        location: "Online, España"
      },
      {
        institution: "thePower",
        degree: "Bootcamp en Ciberseguridad",
        period: "2025",
        location: "Online, España"
      },
      {
        institution: "Hackio by thePower",
        degree: "Bootcamp en Desarrollo de IA",
        period: "2025",
        location: "Online, España"
      },
      {
        institution: "Universitat Politècnica de Catalunya",
        degree: "Máster en Inteligencia Artificial",
        period: "2020 - 2021",
        location: "Barcelona, España"
      },
      {
        institution: "Universidad de Santiago de Chile",
        degree: "Ingeniería Civil en Informática",
        period: "2012 - 2017",
        location: "Santiago, Chile"
      },
      {
        institution: "INACAP",
        degree: "Ingeniería en Informática",
        period: "2006 - 2010",
        location: "Santiago, Chile"
      }
    ]
  }
  return resources[language as keyof typeof resources] || resources.en
}

const getSkillsFromI18n = (language: string): any[] => {
  const resources = {
    en: [
      { name: "Java, Spring Boot", category: "Backend" },
      { name: "Python, FastAPI", category: "Backend" },
      { name: "React, JavaScript", category: "Frontend" },
      { name: "PostgreSQL, Oracle", category: "Database" },
      { name: "AWS, Docker", category: "Cloud" },
      { name: "TensorFlow, OpenCV", category: "AI" },
      { name: "Jenkins, GitHub Actions", category: "CI/CD" },
      { name: "JUnit, SonarQube", category: "Testing" },
      { name: "Swagger, OpenAPI", category: "API Design" },
      { name: "Jira, Confluence", category: "Project Management" },
      { name: "HTML, CSS", category: "Frontend" },
      { name: "SQL, PL/SQL", category: "Database" },
      { name: "GitHub, GitLab", category: "Code Management" },
      { name: "Maven, Gradle", category: "Build Tools" },
      { name: "Mockito, Spock", category: "Testing" },
      { name: "Kubernetes", category: "CI/CD" },
      { name: "Splunk, Dynatrace", category: "Monitoring" },
      { name: "IAM, EC2, Lambda", category: "Cloud (AWS)" },
      { name: "Jupyter, Prompting", category: "AI" },
      { name: "HuggingFace, LangChain", category: "AI" }
    ],
    es: [
      { name: "Java, Spring Boot", category: "Backend" },
      { name: "Python, FastAPI", category: "Backend" },
      { name: "React, JavaScript", category: "Frontend" },
      { name: "PostgreSQL, Oracle", category: "Database" },
      { name: "AWS, Docker", category: "Cloud" },
      { name: "TensorFlow, OpenCV", category: "IA" },
      { name: "Jenkins, GitHub Actions", category: "CI/CD" },
      { name: "JUnit, SonarQube", category: "Testing" },
      { name: "Swagger, OpenAPI", category: "API Design" },
      { name: "Jira, Confluence", category: "Gestión de Proyectos" },
      { name: "HTML, CSS", category: "Frontend" },
      { name: "SQL, PL/SQL", category: "Database" },
      { name: "GitHub, GitLab", category: "Gestión de Código" },
      { name: "Maven, Gradle", category: "Herramientas de Construcción" },
      { name: "Mockito, Spock", category: "Testing" },
      { name: "Kubernetes", category: "CI/CD" },
      { name: "Splunk, Dynatrace", category: "Monitoreo" },
      { name: "IAM, EC2, Lambda", category: "Cloud (AWS)" },
      { name: "Jupyter, Prompting", category: "IA" },
      { name: "HuggingFace, LangChain", category: "IA" }
    ]
  }
  return resources[language as keyof typeof resources] || resources.en
}

// Legacy function for backward compatibility
export const generateCVByRole = async (roleId: string, language: string = 'en') => {
  return generateCV(language)
}

export const prepareCVDataLegacy = (t: any, selectedSections?: Record<string, boolean>): CVData => {
  // Legacy function - now redirects to simple generation
  return prepareCVData('en')
} 