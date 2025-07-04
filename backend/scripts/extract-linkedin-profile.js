// scripts/extract-linkedin-profile.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Leer configuración
const configPath = path.join(__dirname, 'linkedin.config.json');
if (!fs.existsSync(configPath)) {
  console.error('Falta el archivo linkedin.config.json en scripts/.');
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const { profileUrl, cookies } = config;
if (!profileUrl || !Array.isArray(cookies)) {
  console.error('linkedin.config.json debe tener profileUrl y cookies.');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');
  await page.setCookie(...cookies);
  await page.goto(profileUrl, { waitUntil: 'networkidle2', timeout: 120000 });

  // Esperar a que cargue el perfil
  await page.waitForSelector('main');

  // Extraer datos principales y secciones extendidas
  const profile = await page.evaluate(() => {
    const clean = txt => txt ? txt.replace(/\s+/g, ' ').trim() : '';
    const getAttr = (el, attr) => el ? el.getAttribute(attr) : '';
    // Foto de perfil y banner
    const photoUrl = getAttr(document.querySelector('img.profile-photo-edit__preview, img.pv-top-card-profile-picture__image, img.evi-image.ember-view'), 'src') || '';
    const bannerUrl = getAttr(document.querySelector('.profile-background-image__image, .pv-top-card-profile-background-image__image'), 'src') || '';
    // Nombre, headline, ubicación, sector
    const name = clean(document.querySelector('h1')?.innerText);
    const headline = clean(document.querySelector('.text-body-medium.break-words')?.innerText);
    const location = clean(document.querySelector('.text-body-small.inline.t-black--light.break-words')?.innerText);
    const sector = clean(document.querySelector('.text-body-small.inline.t-black--light:not(.break-words)')?.innerText);
    // About
    let about = '';
    // Buscar sección About por id o por texto en el encabezado
    const aboutSections = Array.from(document.querySelectorAll('section'));
    for (const section of aboutSections) {
      const h2 = section.querySelector('h2');
      if (h2 && /about|acerca de/i.test(h2.innerText)) {
        about = clean(section.innerText);
        break;
      }
    }
    // Featured
    const featured = [];
    document.querySelectorAll('section[id*=featured] li, section[data-section="featured"] li').forEach(li => {
      const title = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const url = li.querySelector('a')?.href || '';
      const img = getAttr(li.querySelector('img'), 'src') || '';
      if (title || url) featured.push({ title, url, img });
    });
    // Experiencia
    const experiences = [];
    document.querySelectorAll('section[id*=experience] li').forEach(li => {
      const position = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const company = clean(li.querySelector('span.t-14.t-normal')?.innerText);
      const period = clean(li.querySelector('span.t-14.t-normal.t-black--light')?.innerText);
      const description = clean(li.querySelector('.pv-entity__description, .display-flex.align-items-center')?.innerText);
      const logo = getAttr(li.querySelector('img'), 'src') || '';
      if (position || company) {
        experiences.push({ position, company, period, description, logo });
      }
    });
    // Educación
    const educations = [];
    document.querySelectorAll('section[id*=education] li').forEach(li => {
      const institution = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const degree = clean(li.querySelector('.t-14.t-normal')?.innerText);
      const period = clean(li.querySelector('.t-14.t-normal.t-black--light')?.innerText);
      const logo = getAttr(li.querySelector('img'), 'src') || '';
      if (institution) {
        educations.push({ institution, degree, period, logo });
      }
    });
    // Licencias y certificaciones
    const licenses = [];
    document.querySelectorAll('section[id*=license], section[id*=certification]').forEach(section => {
      section.querySelectorAll('li').forEach(li => {
        const name = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
        const issuer = clean(li.querySelector('.t-14.t-normal')?.innerText);
        const period = clean(li.querySelector('.t-14.t-normal.t-black--light')?.innerText);
        const url = li.querySelector('a')?.href || '';
        licenses.push({ name, issuer, period, url });
      });
    });
    // Proyectos
    const projects = [];
    document.querySelectorAll('section[id*=project]').forEach(section => {
      section.querySelectorAll('li').forEach(li => {
        const name = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
        const description = clean(li.querySelector('.t-14.t-normal')?.innerText);
        const url = li.querySelector('a')?.href || '';
        projects.push({ name, description, url });
      });
    });
    // Publicaciones
    const publications = [];
    document.querySelectorAll('section[id*=publication]').forEach(section => {
      section.querySelectorAll('li').forEach(li => {
        const title = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
        const publisher = clean(li.querySelector('.t-14.t-normal')?.innerText);
        const date = clean(li.querySelector('.t-14.t-normal.t-black--light')?.innerText);
        const url = li.querySelector('a')?.href || '';
        publications.push({ title, publisher, date, url });
      });
    });
    // Reconocimientos y premios
    const honors = [];
    document.querySelectorAll('section[id*=honor], section[id*=award]').forEach(section => {
      section.querySelectorAll('li').forEach(li => {
        const title = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
        const issuer = clean(li.querySelector('.t-14.t-normal')?.innerText);
        const date = clean(li.querySelector('.t-14.t-normal.t-black--light')?.innerText);
        honors.push({ title, issuer, date });
      });
    });
    // Idiomas
    const languages = [];
    document.querySelectorAll('section[id*=language] li').forEach(li => {
      const language = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const proficiency = clean(li.querySelector('.t-14.t-normal')?.innerText);
      if (language) languages.push({ language, proficiency });
    });
    // Skills
    const skills = [];
    document.querySelectorAll('span.pv-skill-category-entity__name-text, span[data-test-skill-name]').forEach(span => {
      const skill = clean(span.innerText);
      if (skill) skills.push(skill);
    });
    // Recomendaciones
    const recommendations = [];
    document.querySelectorAll('section[id*=recommendation] li').forEach(li => {
      const name = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const text = clean(li.querySelector('.pv-recommendation-entity__text')?.innerText);
      const relation = clean(li.querySelector('.pv-recommendation-entity__headline')?.innerText);
      recommendations.push({ name, text, relation });
    });
    // Voluntariado
    const volunteer = [];
    document.querySelectorAll('section[id*=volunteer] li').forEach(li => {
      const role = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const organization = clean(li.querySelector('.t-14.t-normal')?.innerText);
      const period = clean(li.querySelector('.t-14.t-normal.t-black--light')?.innerText);
      const description = clean(li.querySelector('.pv-entity__description')?.innerText);
      volunteer.push({ role, organization, period, description });
    });
    // Organizaciones
    const organizations = [];
    document.querySelectorAll('section[id*=organization] li').forEach(li => {
      const name = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const role = clean(li.querySelector('.t-14.t-normal')?.innerText);
      const period = clean(li.querySelector('.t-14.t-normal.t-black--light')?.innerText);
      organizations.push({ name, role, period });
    });
    // Patentes
    const patents = [];
    document.querySelectorAll('section[id*=patent] li').forEach(li => {
      const title = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const number = clean(li.querySelector('.t-14.t-normal')?.innerText);
      const date = clean(li.querySelector('.t-14.t-normal.t-black--light')?.innerText);
      patents.push({ title, number, date });
    });
    // Cursos
    const courses = [];
    document.querySelectorAll('section[id*=course] li').forEach(li => {
      const name = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const number = clean(li.querySelector('.t-14.t-normal')?.innerText);
      courses.push({ name, number });
    });
    // Puntajes de exámenes
    const testScores = [];
    document.querySelectorAll('section[id*=test] li').forEach(li => {
      const name = clean(li.querySelector('span[aria-hidden="true"]')?.innerText);
      const score = clean(li.querySelector('.t-14.t-normal')?.innerText);
      testScores.push({ name, score });
    });
    // Causas
    const causes = [];
    document.querySelectorAll('section[id*=cause] li').forEach(li => {
      const cause = clean(li.innerText);
      if (cause) causes.push(cause);
    });
    // Intereses
    const interests = [];
    document.querySelectorAll('section[id*=interest] li').forEach(li => {
      const interest = clean(li.innerText);
      if (interest) interests.push(interest);
    });
    // Información de contacto
    let contact = {};
    const contactBtn = document.querySelector('a[data-control-name="contact_see_more"]');
    if (contactBtn) {
      contactBtn.click();
      const modal = document.querySelector('.pv-contact-info');
      if (modal) {
        contact = {
          email: clean(modal.querySelector('a[href^="mailto:"]')?.innerText),
          phone: clean(modal.querySelector('span.t-14.t-black.t-normal')?.innerText),
          linkedin: clean(modal.querySelector('a[href*="linkedin.com/in/"]')?.href),
          website: clean(modal.querySelector('a[href^="http"]:not([href*="linkedin.com"])')?.href),
        };
      }
    }
    // URL personalizada
    const customUrl = window.location.href;
    return {
      photoUrl,
      bannerUrl,
      name,
      headline,
      location,
      sector,
      about,
      featured,
      experiences,
      educations,
      licenses,
      projects,
      publications,
      honors,
      languages,
      skills,
      recommendations,
      volunteer,
      organizations,
      patents,
      courses,
      testScores,
      causes,
      interests,
      contact,
      customUrl
    };
  });

  await browser.close();

  // Guardar resultado
  const outputPath = path.join(__dirname, 'linkedin-profile.json');
  fs.writeFileSync(outputPath, JSON.stringify(profile, null, 2), 'utf8');
  console.log(`Extracción completada. Se generó: ${outputPath}`);
})(); 