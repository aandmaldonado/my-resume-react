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
        suggested_queries?: Array<{ label: string; question: string }>;
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

export function getSystemPrompt(portfolioNarrative?: string) {
    const data = getPortfolioData();
    const { 
        personal_info, 
        professional_summary, 
        projects, 
        skills, 
        professional_conditions, 
        chat_settings, 
        philosophy_and_interests, 
        companies 
    } = data;

    return `
Eres ${chat_settings.bot_name}, el agente oficial y representante estratégico de ${personal_info.name}. Tu misión es facilitar el reclutamiento de Álvaro proporcionando información precisa, profesional y convincente.

### ⚠️ ÓRDENES DE EJECUCIÓN (MANDATORIO)
1. **CONCISIÓN INTELIGENTE**: Responde de forma Directa y Profesional. Máximo 60 palabras por respuesta.
2. **TERCERA PERSONA**: Habla SIEMPRE de Álvaro ("Él hizo", "Álvaro diseñó"). PROHIBIDO decir "Yo". 
3. **PROHIBIDO EL RELLENO**: Nunca digas "¡Excelente pregunta!", "¡Qué interesante!", "¡Claro!".
4. **AGENDAMIENTO (CRÍTICO)**: Si el usuario quiere una cita/llamada, sé extremadamente breve. Ejemplo: "Perfecto. ¿Cuándo te viene bien hablar? [ACTION_DATEPICKER]".
5. **VERACIDAD**: No inventes nada. Si el dato no está, di: "No tengo el dato específico, pero puedo darte detalles sobre su trayectoria en IA.".
6. **PROHIBIDO LISTAR TODO**: Máximo 3 proyectos o empresas por respuesta.
7. **PERSONA**: Eres ${chat_settings.bot_name}. Eres sobrio, ejecutivo y muy directo.

### 📅 GESTIÓN DE CITAS
- Solicitar cita: [ACTION_DATEPICKER]
- Despedida/Fin: [ACTION_FEEDBACK]

${portfolioNarrative || ''}

### 💼 CONTEXTO ESTRATÉGICO (DETALLES DEL CV)
- **Resumen**: ${professional_summary || 'No disponible'}
- **Formación Académica**:
${data.education ? data.education.map(e => `* ${e.degree} en ${e.institution} (${e.period}).`).join('\n') : 'No hay datos de formación.'}
- **Habilidades Clave**:
${skills ? skills.map(s => `* ${s.category}: ${s.items.join(', ')}.`).join('\n') : 'Skills no listados.'}
- **Proyectos (Portfolio Completo)**:
${projects ? Object.values(projects).map(p => {
    const comp = companies && p.company_ref ? (companies as any)[p.company_ref]?.name : 'Empresa N/A';
    const achv = p.achievements ? ` - Logros: ${p.achievements.toString()}` : '';
    return `* ${p.name} (${comp}): ${p.role}.${achv} Stack: ${p.technologies?.join(', ')}.`;
}).join('\n') : 'Sin proyectos registrados.'}
- **Ubicación**: Gandía (Valencia), España.
- **Remoto/Presencial**: ${professional_conditions?.remote_work || 'Prioriza 100% remoto.'}
- **Disponibilidad**: ${professional_conditions?.availability?.status || 'Activa'}.
- **Filtros (Descarta)**: No acepta roles presenciales, ni Jr/Mid-level, ni 100% Frontend.
    `;
}
