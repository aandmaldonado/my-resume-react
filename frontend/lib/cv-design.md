# CV Design Guidelines - ATS-Friendly & Human-Readable

## 🎯 Objetivo del Diseño

Crear un CV que sea **100% compatible con sistemas ATS** mientras mantiene un **diseño limpio, profesional y atractivo** para reclutadores humanos. El equilibrio perfecto entre funcionalidad técnica y estética visual, optimizado para máximo 2 páginas en formato A4.

---

## 📋 Reglas Fundamentales ATS

### ❌ Elementos PROHIBIDOS (ATS no los procesa correctamente)
- **Tablas complejas** - Los ATS desordenan el contenido
- **Iconos/emojis** como sustitutos de texto
- **Elementos gráficos pesados** - Barras de progreso, gráficos circulares
- **Colores de bajo contraste** - Texto gris claro sobre blanco
- **Texto dentro de imágenes** - Los ATS no lo leen
- **Títulos creativos** - "Mi camino profesional" → usar "Experience"
- **PDFs escaneados** - Solo PDFs generados desde texto
- **Columnas múltiples** - Los ATS las leen en orden incorrecto
- **Fuentes decorativas** - Solo fuentes estándar del sistema

### ✅ Elementos PERMITIDOS (ATS los procesa correctamente)
- **Títulos de sección estándar** - "Experience", "Projects", "Education"
- **Estructura en listas** - Bullets (• o -)
- **Fechas estándar** - "Jan 2024" o "2024 - Present"
- **Nombres de tecnologías** - Como texto, no en imágenes
- **Palabras clave relevantes** - Que coincidan con la descripción del puesto
- **Texto seleccionable** - PDF generado desde editor de texto

---

## 🎨 Esquema de Colores

### Paleta Principal (Máximo 2 colores)
```css
/* Color Principal - Texto */
--text-primary: #1f2937;        /* Gris oscuro para texto principal */

/* Color Secundario - Acentos */
--accent-primary: #3b82f6;       /* Azul profesional para títulos y bordes */

/* Colores de Fondo */
--bg-primary: #ffffff;           /* Blanco puro para fondo */
--bg-secondary: #f8fafc;        /* Gris muy claro para secciones */

/* Colores de Estado */
--text-muted: #6b7280;          /* Gris medio para información secundaria */
--border-color: #e5e7eb;        /* Gris claro para separadores */
```

### Reglas de Contraste
- **Texto principal**: Gris oscuro (#1f2937) sobre blanco
- **Títulos de sección**: Azul (#3b82f6) sobre blanco
- **Información secundaria**: Gris medio (#6b7280) sobre blanco
- **Separadores**: Gris claro (#e5e7eb) sobre blanco
- **Bordes izquierdos**: Azul (#3b82f6) para elementos de experiencia/educación

---

## 🔤 Tipografía

### Fuentes ATS-Safe
```css
/* Fuente Principal */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Fuente Secundaria (para títulos) */
font-family: 'Georgia', 'Times New Roman', serif;
```

### Jerarquía de Tamaños (Optimizada para 2 páginas)
```css
/* Título Principal */
--font-size-h1: 18px;          /* Nombre completo */
--font-size-h2: 16px;          /* Título profesional */
--font-size-h3: 14px;          /* Títulos de sección */
--font-size-h4: 12px;          /* Subtítulos */
--font-size-body: 11px;        /* Texto principal */
--font-size-small: 10px;       /* Información secundaria */
--font-size-caption: 9px;      /* Notas y fechas */
```

### Pesos de Fuente
```css
--font-weight-light: 300;      /* Información secundaria */
--font-weight-normal: 400;     /* Texto principal */
--font-weight-medium: 500;     /* Subtítulos */
--font-weight-semibold: 600;   /* Títulos de sección */
--font-weight-bold: 700;       /* Título principal */
```

### Line-Height Optimizado
```css
body { line-height: 1.3; }     /* Reducido para ahorrar espacio */
.profile-text { line-height: 1.2; }
.item-bullets li { line-height: 1.2; }
```

---

## 📐 Estructura de Layout

### Principio: Una Sola Columna (Formato A4)
```
┌─────────────────────────────────────┐
│           HEADER                    │
│  Nombre + Título + Contacto         │
├─────────────────────────────────────┤
│           PROFILE                   │
│  Resumen ejecutivo + Key Skills     │
├─────────────────────────────────────┤
│           EXPERIENCE                │
│  Trabajo 1                          │
│  Trabajo 2                          │
│  Trabajo 3                          │
├─────────────────────────────────────┤
│           TECH SKILLS               │
│  Categoría 1                        │
│  Categoría 2                        │
│  Categoría 3                        │
├─────────────────────────────────────┤
│           EDUCATION                 │
│  Grado 1                            │
│  Grado 2                            │
├─────────────────────────────────────┤
│           LANGUAGES                 │
│  Idioma 1 + Nivel                   │
│  Idioma 2 + Nivel                   │
├─────────────────────────────────────┤
│           FOOTER                    │
│  Texto de generación automática     │
└─────────────────────────────────────┘
```

### Espaciado Consistente (Optimizado para 2 páginas)
```css
/* Espaciado entre secciones */
--section-spacing: 12px;

/* Espaciado entre elementos */
--element-spacing: 8px;

/* Espaciado interno de elementos */
--internal-spacing: 6px;

/* Márgenes de página */
--page-margin: 8px;

/* Padding de contenedor principal */
--container-padding: 8px;
```

---

## 🧩 Componentes del CV

### 1. HEADER
```html
<!-- Estructura HTML recomendada -->
<div class="cv-header">
  <h1 class="cv-name">Álvaro Andrés Maldonado Pinto</h1>
  <h2 class="cv-title">Senior Software Engineer | AI-Powered Developer | Product Engineer</h2>
  <div class="cv-contact">
    <span>📍 Gandia, Spain</span>
    <span>📱 +34 641 96 23 96</span>
    <span>✉️ readme.md@almapi.dev</span>
    <span>🌐 almapi.dev</span>
    <span>💼 linkedin.com/in/almapidev</span>
    <span>📚 github.com/aandmaldonado</span>
  </div>
</div>
```

**Estilos CSS:**
```css
.cv-header { 
    background: linear-gradient(135deg, #3b82f6, #1d4ed8); 
    color: white; 
    padding: 20px; 
    border-radius: 6px; 
    margin-bottom: 15px; 
    text-align: center; 
}
.cv-name { font-size: 18px; font-weight: bold; margin-bottom: 6px; }
.cv-title { font-size: 16px; opacity: 0.9; }
```

### 2. PROFILE
```html
<div class="cv-profile">
  <p class="profile-text">
    [Texto del perfil profesional con placeholder {year} para años de experiencia]
  </p>
  <div class="key-skills">
    <span class="skill-tag">Software Architecture</span>
    <span class="skill-tag">AI/ML Development</span>
    <span class="skill-tag">Team Leadership</span>
    <!-- ... más skills -->
  </div>
</div>
```

**Estilos CSS:**
```css
.profile-text { 
    text-align: justify; 
    margin-bottom: 12px; 
    color: #555; 
    font-size: 11px; 
    line-height: 1.2; 
}
.technologies { 
    margin-top: 4px; 
    font-style: italic; 
    color: #6b7280; 
    font-size: 11px; 
}
```

### 3. EXPERIENCE
```html
<div class="cv-experience experience-section">
  <h3 class="section-title">
    <i class="fas fa-briefcase section-icon"></i>
    Experience
  </h3>
  
  <div class="experience-item">
    <div class="experience-header">
      <h4 class="job-title">Senior Software Engineer</h4>
      <span class="company-name">InAdvance Consulting Group</span>
      <span class="job-period">2024 - Present</span>
      <span class="job-location">Santiago, Chile</span>
    </div>
    
    <ul class="job-achievements">
      <li>[Logro 1]</li>
      <li>[Logro 2]</li>
      <li>[Logro 3]</li>
      <li>[Logro 4]</li>
      <li>[Logro 5]</li> <!-- Mostrar TODOS los bullets -->
    </ul>
    
    <div class="job-technologies">
      <span class="tech-tag">Java</span>
      <span class="tech-tag">Spring Boot</span>
      <span class="tech-tag">Microservices</span>
      <!-- ... más tecnologías -->
    </div>
  </div>
</div>
```

**Estilos CSS (Con borde izquierdo robusto):**
```css
/* Experience section - allow page breaks between items */
.experience-section { 
    page-break-inside: auto;
    break-inside: auto;
    orphans: 2;
    widows: 2;
}

/* Prevent border cutting and ensure complete elements */
.experience-item, .education-item {
    border-left: 2px solid #3b82f6;
    background: #f8fafc;
    border-radius: 0 4px 4px 0;
    page-break-inside: avoid; 
    break-inside: avoid;
    margin-bottom: 8px; 
    padding: 6px 8px; 
    /* Ensure complete border visibility across page breaks */
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    /* Control orphan and widow lines */
    orphans: 4;
    widows: 4;
    /* Additional border rendering control */
    border-image: none;
    background-clip: padding-box;
}

/* Alternative solution: border-image for robust page breaks */
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
```

### 4. TECH SKILLS
```html
<div class="cv-tech-skills">
  <h3 class="section-title">
    <i class="fas fa-bolt section-icon"></i>
    Technical Skills
  </h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 8px;">
    <div class="skills" style="margin: 0;">
      <strong>Project Management:</strong> Agile, Scrum, Jira, Confluence
    </div>
    <div class="skills" style="margin: 0;">
      <strong>Backend Development:</strong> Java, Spring Boot, Python, Node.js
    </div>
    <!-- ... más categorías -->
  </div>
</div>
```

**Estilos CSS:**
```css
.skills { 
    margin-top: 4px; 
    color: #555; 
    font-size: 11px; 
}
.skills-grid {
    page-break-inside: avoid;
    break-inside: avoid;
}
```

### 5. EDUCATION
```html
<div class="cv-education">
  <h3 class="section-title">
    <i class="fas fa-graduation-cap section-icon"></i>
    Education
  </h3>
  
  <div class="education-item">
    <div class="education-header">
      <h4 class="degree-name">Master in Artificial Intelligence</h4>
      <span class="university-name">Universitat Politècnica de Catalunya</span>
      <span class="education-period">2020 - 2021</span>
      <span class="education-location">Barcelona, Spain</span>
    </div>
  </div>
</div>
```

**Estilos CSS:**
```css
.education-item {
    /* Mismos estilos que experience-item */
    border-left: 2px solid #3b82f6;
    background: #f8fafc;
    border-radius: 0 4px 4px 0;
    page-break-inside: avoid; 
    break-inside: avoid;
    margin-bottom: 8px; 
    padding: 6px 8px; 
}
```

### 6. LANGUAGES
```html
<div class="cv-languages">
  <h3 class="section-title">
    <i class="fas fa-language section-icon"></i>
    Languages
  </h3>
  
  <div class="languages">
    <div class="language-item">
      <span><strong>Spanish:</strong> Native</span>
    </div>
    <div class="language-item">
      <span><strong>English:</strong> Professional Working Proficiency</span>
    </div>
  </div>
</div>
```

**Estilos CSS:**
```css
.languages { 
    display: flex; 
    gap: 15px; 
    margin-top: 0; 
}
.language-item { 
    display: flex; 
    align-items: center; 
    gap: 6px; 
    font-size: 11px; 
}
```

### 7. FOOTER
```html
<div class="footer">
  CV dinámico y optimizado para ATS | Generado por almap[i] en almapi.dev
</div>
```

**Estilos CSS:**
```css
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
```

---

## 🎨 Estilos CSS Recomendados

### Variables CSS
```css
:root {
  /* Colores */
  --text-primary: #1f2937;
  --accent-primary: #3b82f6;
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-muted: #6b7280;
  --border-color: #e5e7eb;
  
  /* Tipografía */
  --font-family-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-secondary: 'Georgia', 'Times New Roman', serif;
  
  /* Espaciado */
  --section-spacing: 12px;
  --element-spacing: 8px;
  --internal-spacing: 6px;
  --page-margin: 8px;
  
  /* Sombras */
  --shadow-light: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Estilos Base
```css
.cv-container {
  font-family: var(--font-family-primary);
  font-size: 11px;
  line-height: 1.3;
  color: var(--text-primary);
  background: var(--bg-primary);
  max-width: 100%;
  margin: 0;
  padding: var(--page-margin);
}

/* Títulos de sección */
.section-title {
  font-size: 12px;
  font-weight: bold;
  color: var(--accent-primary);
  border-bottom: 1px solid var(--accent-primary);
  padding-bottom: 6px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.section-icon {
  color: var(--accent-primary);
  font-size: 12px;
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) {
  /* Tablet */
  .cv-container {
    padding: 16px;
  }
}

@media (min-width: 1024px) {
  /* Desktop */
  .cv-container {
    padding: 20px;
    max-width: 800px;
  }
}

@media (min-width: 1200px) {
  /* Large Desktop */
  .cv-container {
    max-width: 900px;
  }
}
```

### Adaptaciones Mobile
```css
@media (max-width: 767px) {
  .cv-header {
    text-align: center;
    padding: 16px;
  }
  
  .cv-contact {
    flex-direction: column;
    gap: 8px;
  }
  
  .experience-header {
    flex-direction: column;
    gap: 8px;
  }
  
  .languages {
    flex-direction: column;
    gap: 8px;
  }
}
```

---

## 🖨️ Estrategia de Exportación e Implementación

### 🎯 **Estrategia Principal: Nueva Pestaña con Vista Previa**

La implementación recomendada es **HTML + CSS primero**, luego generar PDF desde el HTML. Esto garantiza compatibilidad ATS total mientras mantiene flexibilidad y profesionalismo.

#### **Flujo de Usuario:**
```
Usuario hace clic en "Descargar CV"
                ↓
        Nueva pestaña se abre
                ↓
    Ve el CV renderizado en HTML
                ↓
    Elige formato de descarga:
    • 📄 PDF (para email/impresión)
    • 📝 TXT (para ATS básicos)
    • 🌐 HTML (para web/portfolios)
    • 🖨️ Imprimir (vista de impresión)
```

### **Formato de Salida**
1. **HTML puro** - Para sistemas web y vista previa
2. **PDF generado desde HTML** - Para envío por email
3. **Texto plano** - Para sistemas ATS que solo aceptan .txt
4. **Vista de impresión** - Optimizada para impresión física

---

## 🚀 **Implementación Técnica**

### **Paso 1: Botón Principal en la Página Principal**
```html
<button class="download-cv-btn" onclick="openCVPreview()">
  📄 Descargar CV
</button>
```

### **Paso 2: Función para Abrir Nueva Pestaña**
```javascript
const openCVPreview = () => {
  // Abrir nueva pestaña con el CV
  const cvWindow = window.open('/cv-preview', '_blank');
  
  // O si prefieres generar el contenido dinámicamente:
  // const cvWindow = window.open('', '_blank');
  // cvWindow.document.write(generateCVHTML());
};
```

### **Paso 3: Nueva Pestaña con CV y Botones de Descarga**
```html
<!-- /cv-preview - Nueva página dedicada -->
<!DOCTYPE html>
<html lang="es">
<head>
  <title>CV - Álvaro Maldonado | Vista Previa</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/cv-styles.css">
</head>
<body>
  <!-- Header con botones de descarga -->
  <div class="cv-preview-header">
    <h1>Vista Previa del CV</h1>
    <div class="download-actions">
      <button class="download-btn pdf" onclick="downloadPDF()">
        📄 Descargar PDF
      </button>
      <button class="download-btn txt" onclick="downloadTXT()">
        📝 Descargar TXT
      </button>
      <button class="download-btn html" onclick="downloadHTML()">
        🌐 Descargar HTML
      </button>
      <button class="print-btn" onclick="printCV()">
        🖨️ Imprimir
      </button>
    </div>
  </div>

  <!-- Contenido del CV -->
  <div id="cv-container" class="cv-container">
    <!-- Aquí va todo el contenido del CV -->
  </div>

  <!-- Scripts de descarga -->
  <script src="/cv-download.js"></script>
</body>
</html>
```

---

## 🎨 **Estilos para la Vista Previa**

### **Header con Botones de Descarga:**
```css
.cv-preview-header {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 2px solid var(--accent-primary);
  padding: 16px;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.download-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}

.download-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.download-btn.pdf {
  background: #dc2626;
  color: white;
}

.download-btn.txt {
  background: #059669;
  color: white;
}

.download-btn.html {
  background: #2563eb;
  color: white;
}

.print-btn {
  background: #7c3aed;
  color: white;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

---

## 📥 **Funciones de Descarga**

### **Descargar PDF:**
```javascript
const downloadPDF = async () => {
  const element = document.getElementById('cv-container');
  
  // Mostrar indicador de carga
  showLoading('Generando PDF...');
  
  try {
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'CV_Alvaro_Maldonado.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    await html2pdf().set(opt).from(element).save();
    
    // Mostrar confirmación
    showSuccess('PDF descargado exitosamente!');
  } catch (error) {
    showError('Error al generar PDF. Intenta de nuevo.');
  }
};
```

### **Descargar TXT (ATS-friendly):**
```javascript
const downloadTXT = () => {
  const cvElement = document.getElementById('cv-container');
  
  // Obtener texto limpio
  const plainText = cvElement.innerText;
  
  // Crear y descargar archivo
  const blob = new Blob([plainText], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV_Alvaro_Maldonado.txt';
  a.click();
  
  // Limpiar
  window.URL.revokeObjectURL(url);
  
  showSuccess('Archivo TXT descargado!');
};
```

### **Descargar HTML:**
```javascript
const downloadHTML = () => {
  const cvElement = document.getElementById('cv-container');
  const htmlContent = cvElement.outerHTML;
  
  // Crear HTML completo con estilos
  const fullHTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CV - Álvaro Maldonado</title>
  <style>
    ${getComputedStyles()}
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;
  
  const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV_Alvaro_Maldonado.html';
  a.click();
  
  window.URL.revokeObjectURL(url);
  showSuccess('Archivo HTML descargado!');
};
```

### **Imprimir CV:**
```javascript
const printCV = () => {
  // Ocultar header de descarga al imprimir
  const header = document.querySelector('.cv-preview-header');
  header.style.display = 'none';
  
  // Imprimir
  window.print();
  
  // Restaurar header
  setTimeout(() => {
    header.style.display = 'block';
  }, 100);
};
```

---

## 🔧 **Utilidades y Helpers**

### **Indicadores de Estado:**
```javascript
const showLoading = (message) => {
  // Implementar indicador de carga
  console.log(`⏳ ${message}`);
};

const showSuccess = (message) => {
  // Implementar notificación de éxito
  console.log(`✅ ${message}`);
};

const showError = (message) => {
  // Implementar notificación de error
  console.log(`❌ ${message}`);
};
```

### **Obtener Estilos Computados:**
```javascript
const getComputedStyles = () => {
  const element = document.getElementById('cv-container');
  const styles = window.getComputedStyle(element);
  
  // Convertir estilos computados a CSS
  let css = '';
  for (let i = 0; i < styles.length; i++) {
    const property = styles[i];
    const value = styles.getPropertyValue(property);
    css += `${property}: ${value};\n`;
  }
  
  return css;
};
```

---

## 📱 **Responsive Design para Vista Previa**

### **Adaptaciones Mobile:**
```css
@media (max-width: 767px) {
  .cv-preview-header {
    padding: 12px;
  }
  
  .download-actions {
    flex-direction: column;
    gap: 8px;
  }
  
  .download-btn {
    width: 100%;
    justify-content: center;
  }
  
  .cv-container {
    padding: 16px;
  }
}
```

### **Optimización para Impresión:**
```css
@media print {
  .cv-preview-header {
    display: none !important;
  }
  
  .cv-container {
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
  
  .section-title {
    break-after: avoid;
  }
  
  .experience-item,
  .project-item,
  .education-item {
    break-inside: avoid;
  }
}
```

---

## ✅ Checklist de Implementación

### ATS Compatibility
- [ ] Sin tablas complejas
- [ ] Sin iconos/emojis como sustitutos de texto
- [ ] Sin elementos gráficos pesados
- [ ] Contraste de colores adecuado
- [ ] Texto seleccionable en PDF
- [ ] Títulos de sección estándar
- [ ] Una sola columna de layout
- [ ] Fuentes del sistema

### Visual Design
- [ ] Paleta de 2 colores máximo
- [ ] Tipografía legible (11px mínimo)
- [ ] Espaciado consistente
- [ ] Jerarquía visual clara
- [ ] Separadores visuales sutiles
- [ ] Tags de habilidades bien definidos
- [ ] Responsive design implementado

### Content Structure
- [ ] Header con información de contacto
- [ ] Profile con resumen ejecutivo
- [ ] Experience con TODOS los bullets (sin límite)
- [ ] Tech Skills categorizadas
- [ ] Education con información completa
- [ ] Languages con niveles
- [ ] Footer con texto de generación automática

### Technical Implementation
- [ ] HTML semántico
- [ ] CSS con variables
- [ ] Responsive breakpoints
- [ ] Generación de PDF
- [ ] Export a texto plano
- [ ] Optimización para impresión
- [ ] Nueva pestaña de vista previa
- [ ] Botones de descarga múltiples
- [ ] Funciones de exportación
- [ ] Indicadores de estado
- [ ] Responsive design para vista previa
- [ ] Optimización para impresión

### Page Break Control
- [ ] Máximo 2 páginas en formato Letter
- [ ] Control de saltos de página inteligente
- [ ] Bordes izquierdos robustos sin cortes
- [ ] Footer siempre al final de página
- [ ] Secciones que no se cortan mal
- [ ] Elementos individuales completos

---

## 🎯 Resultado Final

El CV resultante será:
- **100% ATS-compatible** - Procesable por cualquier sistema de tracking
- **Visualmente atractivo** - Profesional y fácil de leer
- **Estructurado** - Información organizada y accesible
- **Responsive** - Funciona en cualquier dispositivo
- **Exportable** - Múltiples formatos de salida (PDF, TXT, HTML)
- **Optimizado** - Para impresión y visualización digital
- **Vista previa** - Nueva pestaña con opciones de descarga
- **Múltiples formatos** - PDF para email, TXT para ATS, HTML para web
- **Experiencia de usuario superior** - Control total sobre el formato de descarga
- **Máximo 2 páginas** - Formato A4 optimizado
- **Bordes robustos** - Sin cortes en saltos de página

## 🚀 **Beneficios de la Implementación:**

### **Para el Usuario:**
- ✅ **Vista previa completa** antes de descargar
- ✅ **Múltiples formatos** para diferentes usos
- ✅ **Control total** sobre el formato de salida
- ✅ **Experiencia profesional** y fácil de usar

### **Para ATS:**
- ✅ **TXT puro** para sistemas básicos
- ✅ **HTML estructurado** para sistemas avanzados
- ✅ **PDF generado desde texto** para compatibilidad total
- ✅ **Sin elementos gráficos** que interfieran

### **Para Reclutadores:**
- ✅ **PDF profesional** para email y impresión
- ✅ **HTML responsive** para visualización web
- ✅ **Diseño limpio** y fácil de leer
- ✅ **Formato estándar** que conocen
- ✅ **Máximo 2 páginas** en formato A4 para revisión rápida

Este diseño garantiza que el CV pase los filtros ATS mientras mantiene un aspecto profesional que cautiva a los reclutadores humanos, con la flexibilidad adicional de múltiples formatos de exportación, una experiencia de usuario superior, y un control preciso de la paginación para mantener el contenido en máximo 2 páginas.
