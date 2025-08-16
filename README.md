# 🎨 Frontend - My Resume React

Una aplicación web moderna y responsiva construida con Next.js 14, TypeScript y Tailwind CSS. Esta es la parte frontend del monorepo que incluye un portafolio personal interactivo con chatbot integrado.

## ✨ Características

- 🎨 Diseño moderno y limpio con Tailwind CSS
- 📱 Layout 100% responsivo para todos los dispositivos
- 🌙 Soporte completo para modo claro/oscuro
- 🌐 Internacionalización (i18n) con múltiples idiomas
- 🃏 Tarjetas de proyectos y skills con efectos flip y tags tipo nube
- 🧑‍💼 Sección de contacto tipo business card con flip
- 🦾 Accesibilidad y UX profesional
- ⚡ Optimización y rendimiento Next.js
- 📝 Visualización de skills y tecnologías
- 💬 Footer y header minimalistas
- 🤖 Chatbot integrado con backend RAG
- 📄 Generación de CV en PDF
- 🎬 Videos de fondo dinámicos

## 🛠️ Tech Stack

- ⚛️ **Next.js 14** - Framework React con App Router
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 🌍 **i18next** - Internacionalización
- 🦾 **TypeScript** - Tipado estático
- 💡 **Lucide React** - Iconos modernos
- 🖼️ **Next/Image** - Optimización de imágenes
- 📊 **Recharts** - Gráficos y visualizaciones
- 🎭 **Framer Motion** - Animaciones
- 📄 **jsPDF** - Generación de PDFs
- 🎬 **React Player** - Reproducción de videos

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### 1. Instalar dependencias
```bash
cd frontend
npm install
```

### 2. Configurar variables de entorno
Crea un archivo `.env.local` en la carpeta `frontend/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CHAT_ENDPOINT=/api/v1/chat
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### 4. Construir para producción
```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
frontend/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── i18n.ts           # Configuración de internacionalización
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página principal
│   └── error.tsx         # Página de error
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI base (shadcn/ui)
│   ├── about-section.tsx # Sección sobre mí
│   ├── chatbot-section.tsx # Sección del chatbot
│   ├── contact-card.tsx  # Tarjeta de contacto
│   ├── cv-download-modal.tsx # Modal de descarga CV
│   ├── education-section.tsx # Sección educación
│   ├── experience-section.tsx # Sección experiencia
│   ├── footer.tsx        # Footer
│   ├── header.tsx        # Header
│   ├── hero-section.tsx  # Sección hero
│   ├── projects-section.tsx # Sección proyectos
│   ├── recommendations-section.tsx # Sección recomendaciones
│   ├── skills-section.tsx # Sección habilidades
│   └── theme-provider.tsx # Proveedor de tema
├── hooks/                # Custom hooks
│   ├── use-infinite-carousel.tsx
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                  # Utilidades y configuraciones
│   ├── cv-generator.ts   # Generador de CV PDF
│   └── utils.ts          # Utilidades generales
├── public/               # Archivos estáticos
│   ├── about/           # Imágenes de la sección about
│   ├── chatbot/         # Imágenes del chatbot
│   ├── edu/             # Imágenes de educación
│   ├── exp/             # Imágenes de experiencia
│   ├── footer/          # Imágenes del footer
│   ├── hero/            # Videos de fondo
│   └── icon/            # Iconos y favicon
├── scripts/              # Scripts de utilidad
├── styles/               # Estilos adicionales
├── next.config.mjs       # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias y scripts
```

## 🎯 Features Implementados

### ✅ Completado
- [x] Modo claro/oscuro con persistencia
- [x] Internacionalización (i18n) con múltiples idiomas
- [x] Tarjetas de proyectos con flip y tags nube
- [x] Sección de skills con tags nube y colores únicos
- [x] Sección de contacto tipo business card con flip
- [x] Footer y header minimalistas
- [x] Accesibilidad y diseño responsivo
- [x] Chatbot integrado con backend RAG
- [x] Generación de CV en PDF
- [x] Videos de fondo dinámicos
- [x] Animaciones y transiciones suaves
- [x] Optimización de imágenes con Next/Image
- [x] SEO optimizado

### 🚧 En Desarrollo
- [ ] Tests unitarios y de integración
- [ ] PWA (Progressive Web App)
- [ ] Analytics y métricas de rendimiento
- [ ] Optimización adicional de Core Web Vitals

## 🎨 Componentes UI

El proyecto utiliza [shadcn/ui](https://ui.shadcn.com/) como base para los componentes de UI:

- **Accordion** - Acordeones colapsables
- **Alert** - Alertas y notificaciones
- **Button** - Botones con variantes
- **Card** - Tarjetas contenedoras
- **Dialog** - Modales y diálogos
- **Form** - Formularios con validación
- **Input** - Campos de entrada
- **Select** - Selectores desplegables
- **Toast** - Notificaciones toast
- **Tooltip** - Tooltips informativos

## 🌍 Internacionalización

El proyecto soporta múltiples idiomas usando `i18next`:

- **Español** (es) - Idioma por defecto
- **Inglés** (en) - Idioma secundario
- **Portugués** (pt) - Idioma adicional

Los archivos de traducción se encuentran en `app/i18n.ts` y se pueden expandir fácilmente.

## 🎨 Temas y Estilos

### Modo Claro/Oscuro
- Implementado con `next-themes`
- Persistencia automática en localStorage
- Transiciones suaves entre temas
- Iconos y colores adaptativos

### Tailwind CSS
- Configuración personalizada en `tailwind.config.ts`
- Variables CSS para colores y espaciado
- Animaciones personalizadas
- Responsive design utilities

## 📱 Responsive Design

El proyecto es completamente responsivo con breakpoints optimizados:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run lint:fix     # Linting con auto-fix
```

## 🔧 Configuración

### Next.js
- App Router habilitado
- Optimización de imágenes
- Compresión automática
- Hot reload en desarrollo

### TypeScript
- Configuración estricta
- Path mapping para imports
- Tipado completo

### ESLint
- Reglas de Next.js
- Reglas de TypeScript
- Auto-fix disponible

## 📊 Rendimiento

### Optimizaciones Implementadas
- Lazy loading de componentes
- Optimización de imágenes con Next/Image
- Code splitting automático
- Bundle analysis disponible
- Core Web Vitals optimizados

### Métricas Objetivo
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🧪 Testing

```bash
# Próximamente
npm run test         # Tests unitarios
npm run test:e2e     # Tests end-to-end
npm run test:coverage # Cobertura de tests
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
# Conectar repositorio a Vercel
```

### Netlify
```bash
npm run build
# Configurar build command: npm run build
# Configurar publish directory: out
```

### Docker
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

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Álvaro Maldonado**
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="20" height="20"/> [@aandmaldonado](https://github.com/aandmaldonado)
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" alt="linkedin" width="20" height="20"/> [/in/almapidev](https://linkedin.com/in/almapidev)

---

Hecho con ❤️ y Next.js 