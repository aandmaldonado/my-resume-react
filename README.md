# 🚀 My Resume React - Monorepo

Un portafolio personal moderno y responsivo construido con Next.js y un backend RAG (Retrieval-Augmented Generation) para un chatbot inteligente. Este monorepo contiene tanto el frontend como el backend del proyecto.

## 📁 Estructura del Proyecto

```
my-resume-react/
├── frontend/           # Aplicación Next.js (React + TypeScript)
├── backend/           # API FastAPI con sistema RAG
├── docs/             # Documentación del proyecto
├── .github/          # Configuración de GitHub Actions
└── README.md         # Este archivo
```

## 🎯 Características Principales

### Frontend
- 🎨 Diseño moderno y limpio con Tailwind CSS
- 📱 Layout 100% responsivo
- 🌙 Soporte para modo claro/oscuro
- 🌐 Internacionalización (i18n) con múltiples idiomas
- 🃏 Tarjetas de proyectos y skills con efectos interactivos
- 🧑‍💼 Sección de contacto tipo business card
- ⚡ Optimización y rendimiento Next.js
- 💬 Chatbot integrado con el backend RAG

### Backend
- 🤖 Sistema RAG (Retrieval-Augmented Generation)
- 🔍 Búsqueda semántica con Google Vertex AI
- 💬 Chatbot inteligente para consultas sobre el portafolio
- 🔐 API RESTful con FastAPI
- ☁️ Integración con Google Cloud Platform
- 📊 Pipeline de ingesta automatizado

## 🛠️ Tech Stack

### Frontend
- ⚛️ Next.js 14 (React 18)
- 🎨 Tailwind CSS
- 🌍 i18next
- 🦾 TypeScript
- 💡 Lucide Icons
- 🖼️ Next/Image

### Backend
- 🐍 Python 3.10+
- ⚡ FastAPI
- 🤖 Google Vertex AI (Vector Search + Gemini Pro)
- 🔐 Google Cloud Platform
- 📊 Pydantic
- 🐳 Docker

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ y npm
- Python 3.10+
- Cuenta de Google Cloud Platform (para el backend)

### 1. Clonar el repositorio
```bash
git clone https://github.com/yourusername/my-resume-react.git
cd my-resume-react
```

### 2. Configurar el Frontend
```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en [http://localhost:3000](http://localhost:3000)

### 3. Configurar el Backend (Opcional)
```bash
cd backend
pip install -r requirements.txt
# Configurar variables de entorno (ver backend/README.md)
uvicorn app.main:app --reload
```

El backend estará disponible en [http://localhost:8000](http://localhost:8000)

## 📚 Documentación Detallada

- [Frontend README](./frontend/README.md) - Documentación completa del frontend
- [Backend README](./backend/README.md) - Documentación completa del backend
- [Documentación del Chatbot](./docs/chatbot-requeriments.md) - Especificaciones del sistema RAG

## 🏗️ Desarrollo

### Estructura de Carpetas

#### Frontend (`/frontend`)
```
frontend/
├── app/              # App Router de Next.js
├── components/       # Componentes React reutilizables
│   └── ui/          # Componentes de UI base
├── hooks/           # Custom hooks
├── lib/             # Utilidades y configuraciones
├── public/          # Archivos estáticos
├── styles/          # Estilos globales
└── scripts/         # Scripts de utilidad
```

#### Backend (`/backend`)
```
backend/
├── app/
│   ├── api/         # Endpoints de la API
│   │   └── v1/      # Versión 1 de la API
│   ├── core/        # Configuración y utilidades
│   ├── models/      # Modelos Pydantic
│   ├── services/    # Lógica de negocio
│   └── main.py      # Punto de entrada
├── scripts/         # Scripts de ingesta
└── tests/           # Pruebas unitarias
```

## 🚀 Despliegue

### Frontend
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**

### Backend
- **Google Cloud Run** (recomendado)
- **Google App Engine**
- **Docker + Kubernetes**

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Álvaro Maldonado**
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="20" height="20"/> [@aandmaldonado](https://github.com/aandmaldonado)
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" alt="linkedin" width="20" height="20"/> [/in/almapidev](https://linkedin.com/in/almapidev)

## ⭐ Apoya el proyecto

¡Dale una ⭐️ si este proyecto te ayudó!

---

Hecho con ❤️, ☕️, Next.js y FastAPI
