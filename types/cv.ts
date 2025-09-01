export interface CVContact {
  location: string
  phone: string
  email: string
  portfolio: string
  linkedin: string
  github: string
}

export interface CVExperience {
  role: string
  company: string
  city: string
  period: string
  description: string
  bullets: string[]
  technologies: string[]
}

export interface CVProject {
  company: string
  projectName: string
  role: string
  description: string
  technologies: string[]
}

export interface CVEducation {
  degree: string
  university: string
  city: string
  period: string
  thesis?: string
  thesisDescription?: string
  recognition?: string
}

export interface CVLanguage {
  language: string
  level: string
}

export interface CVTechSkills {
  projectManagement: string[]
  analysisDesignArchitecture: string[]
  frontendDevelopment: string[]
  backendDevelopment: string[]
  testing: string[]
  databasesStorage: string[]
  devopsCloudDeployment: string[]
  aiMl: string[]
}

export interface CVData {
  fullName: string
  degree: string
  contact: CVContact
  profile: string
  keySkills: string[]
  experience: CVExperience[]
  featuredProjects: CVProject[]
  techSkills: CVTechSkills
  education: CVEducation[]
  languages: CVLanguage[]
}

export interface CVResources {
  en: {
    cv: CVData
  }
  es: {
    cv: CVData
  }
}
