# 🎨 My Resume React - Frontend

Una aplicación web moderna y completamente responsiva construida con Next.js 14, TypeScript y Tailwind CSS. Este es un portafolio personal interactivo con funcionalidades avanzadas de CV y diseño adaptativo.

## ✨ Características Principales

- 🎨 **Diseño Moderno & Glassmorphism**: Estética premium con bordes iluminados, desenfoque de fondo y efectos dinámicos
- 🃏 **Unified Card Styling**: Sistema de diseño consistente basado en `GlassCard` con bordes degradados de 1px
- 📱 **100% Responsivo**: Optimizado para todos los dispositivos con enfoque mobile-first y soporte táctil
- 🌙 **Tema Dark-First**: Interfaz optimizada para entornos oscuros con acentos en azul eléctrico y cian
- 🌐 **Internacionalización (i18n)**: Soporte completo para Español e Inglés con cambio en tiempo real
- 🎥 **Infraestructura Dinámica**: Carruseles infinitos de alta performance y animaciones `framer-motion`
- 🧑‍💼 **Sección de Contacto**: Tarjeta de presentación interactiva con efecto 3D flip
- ⚡ **Performance**: Optimizado con Next.js 14, App Router y optimización de imágenes avanzada
- 🎬 **Videos de Fondo**: Contenido multimedia dinámico en alta resolución
- 🎯 **Header Inteligente**: Navegación adaptativa con detección de sección activa
- 🤖 **AskMyCV Integration**: Agente de IA (Gemelo Digital) con investigación de empresas en tiempo real y agendamiento automático
- 🔍 **SEO Optimizado**: Meta tags dinámicos y estructura semántica HTML5
- 🔒 **Protección de Datos**: Headers de seguridad básicos y configuración privada de recursos

## 🛠️ Tech Stack

### **Frontend Core**
- ⚛️ **Next.js 14.2.16** - Framework React con App Router
- 🎨 **Tailwind CSS 3.4.17** - Framework CSS utility-first
- 🌍 **i18next 23.8.0** - Sistema de internacionalización
- 🦾 **TypeScript 5** - Tipado estático completo
- 🎭 **Framer Motion 11.0.0** - Animaciones y transiciones

### **UI Components**
- 💡 **Lucide React 0.454.0** - Iconografía moderna
- 🎨 **Radix UI** - Componentes accesibles (Accordion, Dialog, etc.)
- 🖼️ **Next/Image** - Optimización automática de imágenes
- 🎬 **React Player 2.15.1** - Reproducción de videos

### **Funcionalidades Avanzadas**
-  **Recharts 2.15.0** - Gráficos y visualizaciones dinámicas
- ⌨️ **Typewriter Effect 2.22.0** - Efectos de escritura en Hero section
- 🎯 **React Intersection Observer 9.16.0** - Animaciones on-scroll para secciones

### **Funcionalidades de IA (AskMyCV)**
- 🧠 **Groq SDK** - Motor de inferencia para LLM (Llama 3 70B)
- 🔍 **Tavily AI** - Motor de búsqueda para Deep Research de empresas
- � **Resend API** - Notificaciones inteligentes y agendamiento

### **🛡️ Seguridad**
- **SOP & CORS Policies** - Configuración de orígenes cruzados segura
- **Headers de Seguridad** - Protección web estándar mediante middleware
- **HTTPS Enforced** - Conexiones seguras obligatorias

## 🚀 Inicio Rápido

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn

### **1. Instalar dependencias**
```bash
npm install
```

### **2. Ejecutar en desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### **3. Construir para producción**
```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js 14
│   ├── globals.css        # Estilos globales y variables CSS
│   ├── i18n.ts           # Configuración de internacionalización
│   ├── layout.tsx        # Layout principal con providers
│   ├── page.tsx          # Página principal
│   └── error.tsx         # Página de error personalizada
├── components/            # Componentes React organizados
│   ├── chatbot/          # AskMyCV: Módulo de IA modular (Cerebro + UI)
│   ├── ui/               # Componentes base (shadcn/ui + Radix)
│   ├── about-section.tsx # Perfil profesional con foto alineada y biografía
│   ├── contact-card.tsx  # Tarjeta de contacto interactiva con GlassCard DNA
│   ├── education-section.tsx # Historial académico en timeline refinado
│   ├── experience-section.tsx # Trayectoria profesional con logos y timelines
│   ├── footer.tsx        # Navegación secundaria y créditos
│   ├── header.tsx        # Navbar adaptativa con Glassmorphism
│   ├── hero-section.tsx  # Hero impactante con video loop y CTAs
│   ├── projects-section.tsx # Galería de soluciones con filtros y 3D flip cards
│   ├── recommendations-section.tsx # Carrusel infinito de testimonios con fotos reales
│   ├── skills-section.tsx # Stack técnico categorizado con badges dinámicos
│   └── theme-provider.tsx # Gestión de temas dark/light
├── hooks/                # Custom hooks personalizados
├── lib/                  # Utilidades y configuraciones generales
├── types/                # Definiciones de tipos TypeScript
├── public/               # Archivos estáticos
│   ├── about/           # Imágenes de la sección about
│   ├── edu/             # Imágenes de educación
│   ├── exp/             # Imágenes de experiencia
│   ├── footer/          # Imágenes del footer
│   ├── hero/            # Videos de fondo
│   └── icon/            # Iconos y favicon
├── scripts/              # Scripts de utilidad
├── .github/              # Configuración de GitHub
├── next.config.mjs       # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind CSS
├── postcss.config.mjs    # Configuración de PostCSS
├── tsconfig.json         # Configuración de TypeScript
├── eslint.config.js      # Configuración de ESLint
├── components.json       # Configuración de shadcn/ui
└── package.json          # Dependencias y scripts
```

## 🎯 Features Implementados

### ✅ **Completado y Funcionando**
- [x] **Diseño Responsivo**: Mobile-first con breakpoints optimizados
- [x] **Modo Claro/Oscuro**: Con persistencia automática
- [x] **Internacionalización**: ES/EN con i18next
- [x] **Header Adaptativo**: Navegación móvil con menú hamburguesa
- [x] **Glassmorphism UI**: Bordes con gradiente de 1px y backdrop-blur constante
- [x] **Proyectos 3D**: Tarjetas reversibles con información detallada y links
- [x] **Testimonios Infinitos**: Carrusel fluido con fotos de perfil mapeadas
- [x] **Ajuste de Spacing**: Layout optimizado para mejor ritmo visual y scroll
- [x] **Internacionalización**: Traducciones completas ES/EN
- [x] **Responsividad Total**: Verificada en Mobile, Tablet y Desktop
- [x] **Header Inteligente**: Navbar translúcida con detección de sección activa
- [x] **AskMyCV Digital Twin**: Agente IA modular con investigación real-time y booking

### 🚧 **En Desarrollo/Mejoras**
- [ ] Tests unitarios y de integración
- [ ] PWA (Progressive Web App)
- [ ] Analytics y métricas de rendimiento
- [ ] Optimización adicional de Core Web Vitals
- [ ] Más idiomas de soporte

## 🎨 Componentes UI

El proyecto utiliza **shadcn/ui** + **Radix UI** como base para componentes accesibles:

### **Componentes Base**
- **Accordion** - Acordeones colapsables
- **Alert Dialog** - Diálogos de confirmación
- **Button** - Botones con múltiples variantes
- **Card** - Tarjetas contenedoras
- **Dialog** - Modales y diálogos
- **Dropdown Menu** - Menús desplegables
- **Form** - Formularios con validación Zod
- **Input** - Campos de entrada
- **Select** - Selectores desplegables
- **Toast** - Notificaciones toast
- **Tooltip** - Tooltips informativos

### **Componentes Personalizados**
- **Header** - Navegación adaptativa con menú móvil
- **Hero Section** - Sección principal con video de fondo
- **About Section** - Información personal con foto de perfil
- **AskMyCV** - Chatbot interactivo con LLM e investigación profunda
- **Skills Section** - Habilidades con tags nube interactivos
- **Experience Section** - Timeline laboral responsivo
- **Projects Section** - Carrusel de proyectos con flip cards
- **Contact Card** - Business card con efecto flip

## 🌍 Internacionalización

El proyecto soporta múltiples idiomas usando `i18next`:

- **Español (es)** - Idioma por defecto
- **Inglés (en)** - Idioma secundario

### **Características i18n**
- Cambio de idioma en tiempo real
- Persistencia de preferencia de idioma
- Traducciones completas para toda la UI
- Soporte para RTL (futuro)

## 🎨 Temas y Estilos

### **Modo Claro/Oscuro**
- Implementado con `next-themes`
- Persistencia automática en localStorage
- Transiciones suaves entre temas
- Iconos y colores adaptativos
- Variables CSS dinámicas

### **Tailwind CSS Personalizado**
- Configuración en `tailwind.config.ts`
- Breakpoints personalizados (xs: 475px)
- Variables CSS para colores y espaciado
- Animaciones personalizadas
- Utilities responsivas optimizadas

### **Sistema de Colores**
- Paleta de colores consistente
- Variables CSS para temas
- Gradientes y sombras personalizadas
- Colores semánticos para estados

## 📱 Responsive Design

El proyecto es **100% responsivo** con enfoque mobile-first:

### **Breakpoints Optimizados**
- **xs**: 475px - Dispositivos muy pequeños
- **sm**: 640px - Móviles
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Pantallas grandes

### **Características Responsivas**
- Header adaptativo con menú móvil
- Grid layouts que se adaptan
- Imágenes y videos responsivos
- Touch targets optimizados para móvil
- Navegación táctil mejorada

## 🚀 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run lint:fix     # Linting con auto-fix
npm test             # Tests (próximamente)
```

## 🔧 Configuración

### **Next.js 14**
- App Router habilitado
- Optimización de imágenes automática
- Compresión y minificación
- Hot reload en desarrollo
- Build optimizado para producción

### **TypeScript**
- Configuración estricta
- Path mapping para imports
- Tipado completo de componentes
- Interfaces para props y estado

### **ESLint**
- Reglas de Next.js
- Reglas de TypeScript
- Auto-fix disponible
- Plugin de imports no utilizados

### **PostCSS**
- Autoprefixer para compatibilidad
- Tailwind CSS processing
- Optimización de CSS

## 📊 Rendimiento

### **Optimizaciones Implementadas**
- Lazy loading de componentes
- Optimización de imágenes con Next/Image
- Code splitting automático
- Bundle analysis disponible
- Core Web Vitals optimizados
- Animaciones con `will-change`

### **Métricas Objetivo**
- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1
- **TTFB**: < 600ms

### **Herramientas de Performance**
- Next.js built-in optimizations
- Tailwind CSS purging
- Image optimization
- Font optimization

## 🧪 Testing

```bash
# Próximamente
npm run test         # Tests unitarios
npm run test:e2e     # Tests end-to-end
npm run test:coverage # Cobertura de tests
npm run test:watch   # Tests en modo watch
```

### **Frameworks de Testing Planificados**
- **Jest** - Tests unitarios
- **React Testing Library** - Tests de componentes
- **Playwright** - Tests E2E
- **Cypress** - Tests de integración

## 🚀 Despliegue

### **Vercel (Recomendado)**
```bash
npm run build
# Conectar repositorio a Vercel
# Deploy automático en push
```

### **Netlify**
```bash
npm run build
# Build command: npm run build
# Publish directory: .next
```

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### **Otros Plataformas**
- **Railway** - Deploy automático
- **Render** - Build automático
- **Heroku** - Con buildpacks de Node.js

### **🔐 Configuración de Seguridad en Producción**
```bash
# Variables de entorno requeridas
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_produccion
RECAPTCHA_SECRET_KEY=tu_secret_key_produccion
NEXT_PUBLIC_RECAPTCHA_ACTION=download_cv

# Dominios permitidos en reCAPTCHA
tu-dominio.com
www.tu-dominio.com
*.tu-dominio.com
```

## 🛡️ Seguridad
- **Headers de Seguridad**: X-Frame-Options, CSP básico y protección MIME.
- **Validación Estricta**: Control de tipos con TypeScript en todo el flujo de datos.
- **Protección de Rutas**: Gestión de accesos mediante App Router.

## 🤝 Contribuir

1. **Fork** el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### **Guías de Contribución**
- Sigue las convenciones de código
- Incluye tests para nuevas funcionalidades
- Actualiza la documentación
- Mantén el código limpio y legible

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

## 👨‍💻 Autor

**Álvaro Maldonado**
- 🐙 [@aandmaldonado](https://github.com/aandmaldonado) - GitHub
- 💼 [/in/alvaro-maldonado-ai](https://linkedin.com/in/alvaro-maldonado-ai) - LinkedIn
- 🌐 [almapi.dev](https://almapi.dev) - Portfolio

---

**Hecho con ❤️, Next.js 14 y TypeScript**

*Última actualización: Febrero 2026* 