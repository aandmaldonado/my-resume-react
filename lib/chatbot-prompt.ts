import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

/**
 * CONTRATO DEL PORTFOLIO YAML
 */
interface PortfolioData {
    personal_info: {
        name: string;
        title: string;
        location: string;
        email: string;
        linkedin: string;
        [key: string]: any;
    };
    chat_settings: {
        bot_name: string;
        owner_short_name: string;
    };
    professional_summary: string;
    projects?: Record<string, {
        name: string;
        role: string;
        duration: string;
        key_responsibilities: string[];
        achievements: string[];
        technologies: string[];
        tags: string[];
        [key: string]: any;
    }>;
    skills?: Array<{
        category: string;
        items: any[];
    }>;
    career_target?: {
        target_roles: string[];
        discarded_roles: string[];
        ideal_company_profile: string[];
    };
    professional_conditions?: {
        availability?: { status: string; notice_period?: string; [key: string]: any };
        remote_work?: string;
        work_permit?: { status: string; [key: string]: any };
        salary_expectations?: { notes: string; [key: string]: any };
        motivation_for_change?: string;
    };
    education?: Array<{
        degree: string;
        institution: string;
        period: string;
        [key: string]: any;
    }>;
    philosophy_and_interests?: Array<{
        title: string;
        description: string;
    }>;
    companies?: Record<string, {
        name: string;
        [key: string]: any;
    }>;
}

export function getPortfolioData(): PortfolioData {
    const yamlPath = path.join(process.cwd(), 'data/cv.yaml');
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    return yaml.load(fileContents) as PortfolioData;
}

export function getGuidelinesData(): any {
    const yamlPath = path.join(process.cwd(), 'data/guidelines.yaml');
    if (!fs.existsSync(yamlPath)) return null;
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    return yaml.load(fileContents);
}

export function getSystemPrompt() {
    const data = getPortfolioData();
    const { personal_info, professional_summary, projects, skills, professional_conditions, chat_settings, philosophy_and_interests, companies } = data;

    return `
Eres ${chat_settings.bot_name}, el agente IA de ${personal_info.name}. Actúas como su representante oficial.

### 🛡️ REGLA DE ORO: PROHIBIDO ALUCINAR
1. **SOLO LO ESCRITO**: Responde basándote únicamente en la información literal del CV.
2. **INTEGRIDAD DE MAPEO**: Prohibido asociar tecnologías a proyectos si no están en su lista "technologies". (Ej: No digas que usó Python en Transbank o Falabella/T&A).
3. **EDUCACIÓN VS SKILLS**: Ante preguntas sobre "especialización" o "cursos", prioriza siempre la sección de educación. Menciona la Maestría en IA (UPC) y el AI-Powered Engineering Program (LIDR.co) como sus hitos de formación.
4. **AUTORIDAD SENIOR**: Álvaro es Tech Lead y ex-CTO. No uses lenguaje de principiante o "buscando aprender". Su perfil es de experto estratégico.

### 🎭 IDENTIDAD Y TONO (AGENTE)
- **PERSONA**: Eres un asistente profesional. Hablas de Álvaro en tercera persona ("Álvaro tiene...", "Él diseñó..."). Nunca digas "Como Álvaro" ni hables en primera persona.
- **PRIVACIDAD**: Si preguntan edad, familia o temas personales: "Esa es información que Álvaro prefiere mantener en el ámbito personal. Como su asistente, puedo ayudarte con cualquier detalle de su perfil profesional."
- **REMOTOS**: Él busca posiciones 100% remotas. Híbrido ocasional solo si el impacto lo justifica. Presencial: descartado.
- **MENOS ES MÁS**: Respuestas directas, sin muletillas de IA.

### 📅 GESTIÓN DE CITAS
- Solo si hay interés EXPLÍCITO en agendar: "[ACTION_DATEPICKER]"
- Al despedirse: "[ACTION_FEEDBACK]"

### 💼 CONTEXTO PROFESIONAL
- **Resumen**: ${professional_summary || 'No disponible'}
- **Proyectos**:
${projects ? Object.values(projects).slice(0, 8).map(p => {
    const comp = companies && p.company_ref ? (companies as any)[p.company_ref]?.name : 'Empresa N/A';
    return `* ${p.name} (${comp}): ${p.role}. Stack: ${p.technologies?.slice(0, 4).join(', ')}.`;
}).join('\n') : 'Sin proyectos.'}
- **Educación**: ${data.education ? data.education.map(e => `* ${e.degree} en ${e.institution} (${e.period})`).join('\n') : 'Sin educación.'}
- **Habilidades Core**: ${skills ? skills.map(c => `* ${c.category}: ${c.items.slice(0, 5).map(i => i.name || i).join(', ')}`).join('\n') : 'Sin habilidades.'}
- **Valores**: ${philosophy_and_interests ? philosophy_and_interests.map(pi => `* ${pi.title}`).join('\n') : ''}
- **Modalidad**: Remoto-first. Ubicación actual: Gandía, España.
    `;
}
