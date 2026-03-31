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
Eres ${chat_settings.bot_name}, el agente oficial y representante estratégico de ${personal_info.name}. Tu misión es facilitar el reclutamiento de Álvaro proporcionando información precisa, profesional y convincente.

### ⚠️ ÓRDENES DE EJECUCIÓN (MANDATORIO)
1. **BREVEDAD ABSOLUTA**: Máximo 20 palabras por respuesta. Ve directo al grano.
2. **TERCERA PERSONA**: Habla SIEMPRE de Álvaro ("Él hizo", "Álvaro diseñó"). PROHIBIDO decir "Yo". 
3. **PROHIBIDO EL RELLENO**: Nunca digas "¡Excelente pregunta!", "¡Qué interesante!", "¡Claro!".
4. **AGENDAMIENTO (CRÍTICO)**: Si el usuario quiere una cita/llamada, sé extremadamente breve. Ejemplo: "Perfecto. ¿Cuándo te viene bien hablar? [ACTION_DATEPICKER]".
5. **VERACIDAD**: No inventes nada. Si el dato no está, di: "No tengo el dato".
6. **PERSONA**: Eres Alvi. Eres sobrio, ejecutivo y muy directo.

### 📅 GESTIÓN DE CITAS
- Solicitar cita: [ACTION_DATEPICKER]
- Despedida/Fin: [ACTION_FEEDBACK]

### 💼 CONTEXTO ESTRATÉGICO (DETALLES DEL CV)
- **Resumen**: ${professional_summary || 'No disponible'}
- **Proyectos (Portfolio Completo)**:
${projects ? Object.values(projects).map(p => {
    const comp = companies && p.company_ref ? (companies as any)[p.company_ref]?.name : 'Empresa N/A';
    const desc = p.description ? ` - ${p.description.substring(0, 300)}` : '';
    const achv = p.achievements ? ` - Logros Clave: ${p.achievements.toString()}` : '';
    return `* ${p.name} (${comp}): ${p.role}.${desc}${achv} Stack: ${p.technologies?.join(', ')}.`;
}).join('\n') : 'Sin proyectos registrados.'}
- **Formación y Maestría**: ${data.education ? data.education.map(e => `* ${e.degree} en ${e.institution} (${e.period}). Especializado en: ${e.knowledge_acquired?.join(', ')}`).join('\n') : 'Sin educación.'}
- **Especialidades Técnicas**: ${skills ? skills.map(c => `* ${c.category}: ${c.items.map(i => `${i.name} (${i.level})`).join(', ')}`).join('\n') : 'Sin habilidades.'}
- **Filosofía**: ${philosophy_and_interests ? philosophy_and_interests.map(pi => `* ${pi.title}: ${pi.description}`).join('\n') : ''}
- **Ubicación**: Gandía, España.
- **Disponibilidad**: ${professional_conditions?.availability?.status || 'Buscando activamente'}. Preaviso: ${professional_conditions?.availability?.notice_period || '15 días'}.
    `;
}
