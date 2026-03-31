# 🎨 My Resume React - Frontend

Una aplicación web de ultra-alto rendimiento y diseño premium construida con **Next.js 16 (Canary)**, **React 19** y **Tailwind CSS 4**. Este es un portafolio interactivo de nivel ejecutivo que integra un "Gemelo Digital" inteligente para procesos de selección de alta dirección.

## ✨ Características Principales

- 🎨 **Aesthetica Premium & Glassmorphism**: Interfaz con bordes iluminados, micro-interacciones y efectos dinámicos de última generación.
- 🤖 **InterviewMyCV Integration**: Agente de IA (Gemelo Digital) Multi-Provider con resiliencia automática y agendamiento inteligente.
- ⚡ **Next.js 16 & React 19**: Aprovechamiento total de Server Components, Actions y optimizaciones de renderizado de vanguardia.
- 📱 **Mobile-First Dinámico**: Optimizado para dispositivos táctiles con transiciones fluidas de `framer-motion`.
- 🌐 **Internacionalización (i18n)**: Soporte completo ES/EN con detección automática y persistencia.
- 🔒 **Cloud Infrastructure**: Despliegue automatizado en **Google Cloud Run** mediante **Cloud Build** con gestión segura de secretos.
- 🔍 **SEO de Alto Nivel**: Estructura de metadatos dinámica y semántica HTML5 perfecta para buscadores.

## 🛠️ Tech Stack (State-of-the-Art)

### **Frontend Core**
- ⚛️ **Next.js 16.1.x** - Framework React (App Router)
- 🧪 **React 19** - Librería UI (Concurrent Mode, Actions)
- 🎨 **Tailwind CSS 4.x** - Motor de estilos de alto rendimiento
- 🌍 **i18next 23.x** - Sistema de internacionalización robusto
- 🎭 **Framer Motion 12.x** - Animaciones y orquestación visual

### **IA & Backend (InterviewMyCV)**
- 🧠 **Groq SDK** - Inferencia ultra-rápida con Llama 3.3 70B
- ♊ **Google Generative AI** - Backup de alta fidelidad con **Gemini 2.0 Flash**
- 🏠 **Ollama** - Soporte para ejecución de LLMs en local (Gemma 2)
- 📬 **Resend API** - Sistema de notificaciones y booking profesional
- 🛡️ **Failover System**: Cambio automático entre proveedores en caso de rate limit.

## 🚀 Inicio Rápido

### **1. Instalar dependencias**
```bash
npm install --legacy-peer-deps
```

### **2. Configurar entorno**
Crea un archivo `.env` basado en `.env.example` con tus API Keys de Groq, Google AI y Resend.

### **3. Ejecutar en desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura Principal

- `app/`: Lógica de rutas, API y configuración de temas/i18n.
- `components/`: Biblioteca de componentes (Chatbot, Sections, UI).
- `data/cv.yaml`: **Single Source of Truth** para todo el contenido del portfolio y chatbot.
- `lib/`: Utilidades de prompt engineering y configuraciones de IA.

## 🌐 Despliegue en GCP

Este proyecto está configurado para **CI/CD automático**:
1. El código se sube al repositorio.
2. **Cloud Build** (ver `cloudbuild.yaml`) construye y pushea la imagen a Artifact Registry.
3. Se despliega automáticamente en **Cloud Run** inyectando secretos desde **Secret Manager**.

---
**Hecho con ❤️ por Álvaro Maldonado**
*Última actualización: Marzo 2026*