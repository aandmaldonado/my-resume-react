// scripts/extract-i18n-to-json.js
const fs = require('fs');
const path = require('path');

// Ruta al archivo i18n.ts
const I18N_PATH = path.join(__dirname, '../app', 'i18n.ts');

// Leer el archivo como texto
const i18nRaw = fs.readFileSync(I18N_PATH, 'utf8');

// Extraer el objeto resources usando una expresión regular simple
const resourcesMatch = i18nRaw.match(/const resources = ({[\s\S]*?});\s*i18n\.use/);
if (!resourcesMatch) {
  console.error('No se pudo extraer el objeto resources de i18n.ts');
  process.exit(1);
}

// Evaluar el objeto resources (solo seguro si controlas el archivo)
const resources = eval('(' + resourcesMatch[1] + ')');

// Seleccionar solo el idioma principal (español)
const lang = 'es';
const data = resources[lang]?.translation;
if (!data) {
  console.error('No se encontró el idioma es en resources');
  process.exit(1);
}

// Función para aplanar y transformar cada sección
function extractDocs(data) {
  const docs = [];

  // About
  if (data.about) {
    docs.push({
      id: `es-about`,
      type: 'about',
      title: data.about.title,
      content: [
        ...(data.about.descriptions || []),
        ...(data.about.search_goals || []),
        ...(data.about.collaboration_reasons || []),
        data.about.connect_message || ''
      ].join(' '),
      lang: 'es',
      metadata: {
        location: data.about.location,
        years_experience: data.about.years_experience,
        industries: data.about.industries_list,
      }
    });
  }

  // Experience
  if (data.experience && Array.isArray(data.experience.experiences)) {
    data.experience.experiences.forEach((exp, idx) => {
      docs.push({
        id: `es-exp-${idx}`,
        type: 'experience',
        title: `${exp.position} @ ${exp.company}`,
        content: [
          exp.description,
          ...(exp.responsibilities || []),
          ...(exp.achievements || [])
        ].join(' '),
        lang: 'es',
        metadata: {
          company: exp.company,
          period: exp.period,
          location: exp.location,
        }
      });
    });
  }

  // Education
  if (data.education && Array.isArray(data.education.educations)) {
    data.education.educations.forEach((edu, idx) => {
      docs.push({
        id: `es-edu-${idx}`,
        type: 'education',
        title: `${edu.degree} @ ${edu.institution}`,
        content: [
          edu.degree,
          edu.institution,
          edu.period,
          edu.location,
          ...(edu.concepts || [])
        ].join(' '),
        lang: 'es',
        metadata: {
          institution: edu.institution,
          period: edu.period,
          location: edu.location,
        }
      });
    });
  }

  // Projects
  if (data.projects && Array.isArray(data.projects.projects)) {
    data.projects.projects.forEach((proj, idx) => {
      docs.push({
        id: `es-proj-${idx}`,
        type: 'project',
        title: proj.title,
        content: [
          proj.description,
          ...(proj.contents || [])
        ].join(' '),
        lang: 'es',
        metadata: {
          externalLink: proj.externalLink,
          githubRepo: proj.githubRepo,
        }
      });
    });
  }

  // Skills
  if (data.skills) {
    Object.entries(data.skills).forEach(([key, value]) => {
      if (typeof value === 'object' && value.skills) {
        docs.push({
          id: `es-skill-${key}`,
          type: 'skill',
          title: value.title || key,
          content: value.skills,
          lang: 'es',
          metadata: {}
        });
      }
    });
  }

  return docs;
}

// Procesar solo el idioma español
const docs = extractDocs(data);

// Guardar como JSON
const OUTPUT_PATH = path.join(__dirname, 'portfolio-data.json');
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(docs, null, 2), 'utf8');
console.log(`Extracción completada. Se generó: ${OUTPUT_PATH}`); 