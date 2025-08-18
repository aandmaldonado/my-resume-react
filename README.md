# 🎨 My Resume React - Frontend

Una aplicación web moderna y completamente responsiva construida con Next.js 14, TypeScript y Tailwind CSS. Este es un portafolio personal interactivo con funcionalidades avanzadas de CV y diseño adaptativo.

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Interface limpia y profesional con Tailwind CSS
- 📱 **100% Responsivo**: Optimizado para todos los dispositivos (mobile-first)
- 🌙 **Modo Claro/Oscuro**: Cambio de tema con persistencia automática
- 🌐 **Internacionalización**: Soporte para múltiples idiomas (ES/EN/PT)
- 🃏 **Componentes Interactivos**: Tarjetas flip, carruseles y efectos visuales
- 🧑‍💼 **Sección de Contacto**: Business card con efecto flip
- 🦾 **Accesibilidad**: Navegación por teclado y screen readers
- ⚡ **Performance**: Optimizado con Next.js 14 y App Router
- 📝 **Generador de CV**: Exportación a PDF con diseño profesional
- 🎬 **Videos de Fondo**: Contenido multimedia dinámico
- 🎯 **Header Inteligente**: Navegación adaptativa con menú móvil
- 🔍 **SEO Optimizado**: Meta tags y estructura semántica
- 🛡️ **Seguridad Avanzada**: reCAPTCHA v3, rate limiting, protección DoS
- 🔒 **Protección de Recursos**: Headers de seguridad, detección de amenazas

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
- 📄 **jsPDF 3.0.1** - Generación de CV en PDF
- 📊 **Recharts 2.15.0** - Gráficos y visualizaciones
- 🔄 **React CountUp 6.5.3** - Contadores animados
- ⌨️ **Typewriter Effect 2.22.0** - Efectos de escritura
- 🎯 **React Intersection Observer 9.16.0** - Animaciones on-scroll

### **Herramientas de Desarrollo**
- 🚀 **ESLint 8.57.0** - Linting y calidad de código
- 🎨 **PostCSS + Autoprefixer** - Procesamiento de CSS
- 🔧 **Tailwind CSS Animate** - Animaciones CSS predefinidas

### **🛡️ Herramientas de Seguridad**
- **Google reCAPTCHA v3** - Protección invisible contra bots
- **Rate Limiting Avanzado** - Protección contra DoS y abuso
- **Headers de Seguridad** - Protección web estándar
- **Detección de Amenazas** - Monitoreo de actividad sospechosa

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

### **3. Configurar Seguridad (Requerido)**
```bash
# 1. Registra tu sitio en Google reCAPTCHA
# Ve a: https://www.google.com/recaptcha/admin
# Crea sitio con tipo "reCAPTCHA v3"
# Agrega dominios: tu-dominio.com, localhost, localhost:3000

# 2. Crear archivo de variables de entorno
cp env.example .env.local

# 3. Editar .env.local con tus claves
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
NEXT_PUBLIC_RECAPTCHA_ACTION=download_cv

# 4. Reiniciar servidor
npm run dev
```

### **4. Construir para producción**
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
│   ├── ui/               # Componentes base (shadcn/ui + Radix)
│   │   ├── accordion.tsx # Acordeones colapsables
│   │   ├── button.tsx    # Botones con variantes
│   │   ├── card.tsx      # Tarjetas contenedoras
│   │   ├── dialog.tsx    # Modales y diálogos
│   │   └── ...           # Otros componentes UI
│   ├── about-section.tsx # Sección "Sobre Mí" con foto de perfil
│   ├── chatbot-section.tsx # Sección del chatbot integrado
│   ├── contact-card.tsx  # Tarjeta de contacto tipo business card
│   ├── cv-download-modal.tsx # Modal para descarga de CV
│   ├── education-section.tsx # Sección de educación con timeline
│   ├── experience-section.tsx # Sección de experiencia laboral
│   ├── footer.tsx        # Footer minimalista
│   ├── header.tsx        # Header adaptativo con navegación móvil
│   ├── hero-section.tsx  # Sección hero con video de fondo
│   ├── projects-section.tsx # Sección de proyectos con carrusel
│   ├── recommendations-section.tsx # Sección de recomendaciones
│   ├── skills-section.tsx # Sección de habilidades con tags nube
│   └── theme-provider.tsx # Proveedor de tema claro/oscuro
├── hooks/                # Custom hooks personalizados
│   ├── use-infinite-carousel.tsx # Hook para carruseles infinitos
│   ├── use-mobile.tsx   # Hook para detección de dispositivos móviles
│   └── use-toast.ts     # Hook para notificaciones toast
├── lib/                  # Utilidades y configuraciones
│   ├── cv-generator.ts   # Generador de CV en PDF
│   ├── cv-design.md      # Documentación del diseño del CV
│   ├── cv-template.md    # Plantilla del CV
│   ├── cv-i18n.ts       # Datos del CV en múltiples idiomas
│   └── utils.ts          # Utilidades generales
├── types/                # Definiciones de tipos TypeScript
├── public/               # Archivos estáticos
│   ├── about/           # Imágenes de la sección about
│   ├── chatbot/         # Imágenes del chatbot
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
- [x] **Internacionalización**: ES/EN/PT con i18next
- [x] **Header Adaptativo**: Navegación móvil con menú hamburguesa
- [x] **Sección Hero**: Con video de fondo y CTA buttons
- [x] **Sección About**: Foto de perfil con información personal
- [x] **Sección Skills**: Tags nube con colores únicos
- [x] **Sección Experience**: Timeline responsivo con logos
- [x] **Sección Education**: Timeline educativo
- [x] **Sección Projects**: Carrusel de proyectos con flip cards
- [x] **Sección Recommendations**: Carrusel de recomendaciones
- [x] **Contact Card**: Business card con efecto flip
- [x] **Footer**: Minimalista con enlaces sociales
- [x] **Generador de CV**: Exportación a PDF profesional
- [x] **Chatbot Section**: Integración preparada para backend
- [x] **Animaciones**: Framer Motion y CSS transitions
- [x] **SEO**: Meta tags y estructura semántica
- [x] **reCAPTCHA v3**: Protección invisible contra bots
- [x] **Rate Limiting**: Protección contra descargas excesivas
- [x] **Detección de Amenazas**: Monitoreo de actividad sospechosa
- [x] **Headers de Seguridad**: Protección web estándar

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
- **Skills Section** - Habilidades con tags nube interactivos
- **Experience Section** - Timeline laboral responsivo
- **Projects Section** - Carrusel de proyectos con flip cards
- **Contact Card** - Business card con efecto flip
- **CV Download Modal** - Modal para descarga de CV

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

## 🛡️ Seguridad y Protección

### **Puntuación de Seguridad: 9/10**

### **🔐 reCAPTCHA v3 de Google**
- **Verificación Invisible**: No interrumpe la experiencia del usuario
- **Análisis de Comportamiento**: Google evalúa patrones de navegación
- **Puntuación Inteligente**: Score de 0.0 a 1.0 (1.0 = humano, 0.0 = bot)
- **Protección Avanzada**: Machine learning contra bots automatizados

#### **Configuración de reCAPTCHA:**
1. **Registra tu sitio**: https://www.google.com/recaptcha/admin
2. **Tipo**: reCAPTCHA v3
3. **Dominios**: Incluye `localhost` para desarrollo local
4. **Variables de entorno**:
   ```bash
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
   RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
   NEXT_PUBLIC_RECAPTCHA_ACTION=download_cv
   ```

### **🚫 Rate Limiting y Protección DoS**
- **Descargas por Sesión**: Máximo 5 descargas por sesión
- **Ventana de Tiempo**: 1 minuto para reset de contador
- **Período de Enfriamiento**: 5 minutos después de límite alcanzado
- **Protección por Hora**: Máximo 20 intentos por hora
- **Detección de Actividad Sospechosa**: Bloqueo automático

### **🔒 Headers de Seguridad HTTP**
- **X-Frame-Options**: `DENY` - Previene clickjacking
- **X-Content-Type-Options**: `nosniff` - Previene MIME sniffing
- **Referrer-Policy**: `strict-origin-when-cross-origin`
- **Permissions-Policy**: Restringe acceso a hardware (cámara, micrófono, GPS)
- **X-DNS-Prefetch-Control**: `on` - Optimiza DNS

### **🛡️ Protección CAPTCHA**
- **Máximo Intentos**: 3 intentos fallidos antes del bloqueo
- **Tiempo de Bloqueo**: 5 minutos de lockout automático
- **Verificación de Tokens**: Validación de tokens reCAPTCHA
- **Fallback de Seguridad**: Si reCAPTCHA falla, mantiene protección

### **🔍 Detección de Amenazas**
- **Monitoreo de Actividad**: Tracking de intentos de descarga
- **Análisis de Patrones**: Detección de comportamiento sospechoso
- **Bloqueo Inteligente**: Bloqueo automático por múltiples métricas
- **Reset de Seguridad**: Botones de reset para usuarios legítimos

### **📊 Métricas de Seguridad**
- **Protección contra Bots**: reCAPTCHA v3 (Invisible)
- **Rate Limiting**: Múltiples capas de protección
- **Detección de Amenazas**: Monitoreo de actividad sospechosa
- **Headers de Seguridad**: Protección web estándar
- **Validación de Entrada**: Verificación de tokens reCAPTCHA

### **🚨 Respuesta a Incidentes**
- **Bloqueo Automático**: Activación inmediata de protecciones
- **Notificaciones Visuales**: Alertas claras para el usuario
- **Períodos de Enfriamiento**: Tiempos de espera configurables
- **Recuperación de Acceso**: Reset de bloqueos para casos legítimos

### **🔧 Configuración de Desarrollo**
- **ESLint Habilitado**: Verificaciones de seguridad en build
- **TypeScript Estricto**: Verificación de tipos para prevenir errores
- **Logs de Consola Eliminados**: Sin exposición de información interna
- **Manejo Silencioso de Errores**: Sin filtración de detalles técnicos

### **🌐 Despliegue Seguro en GCP**
- **Cloud Armor**: WAF y rate limiting a nivel de infraestructura
- **Cloud Logging**: Auditoría completa de acceso y seguridad
- **Cloud Monitoring**: Alertas automáticas de actividad sospechosa
- **VPC Firewall**: Reglas de red restrictivas
- **HTTPS Obligatorio**: Encriptación de tráfico

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
- 💼 [/in/almapidev](https://linkedin.com/in/almapidev) - LinkedIn
- 🌐 [almapi.dev](https://almapi.dev) - Portfolio

---

**Hecho con ❤️, Next.js 14 y TypeScript**

*Última actualización: Diciembre 2024* 