# 🤖 AskMyCV - Tu Gemelo Digital Profesional

**AskMyCV** es un agente de IA modular y de alto rendimiento diseñado para actuar como un puente interactivo entre profesionales y sus potenciales clientes o reclutadores. Transforma un portfolio estático en una conversación dinámica, capaz de investigar empresas, capturar leads y agendar reuniones de forma autónoma.

> [!TIP]
> Este proyecto está diseñado para ser **Plug-and-Play**. Cualquier profesional puede crear su propio "Cerebro Digital" simplemente completando un archivo estándar `portfolio.yaml`.

## 🚀 Características Clave

- **Gemelo Digital Inteligente**: Responde basándose en tu experiencia real, habilidades y condiciones profesionales (Salario, Remoto, Disponibilidad).
- **Investigación Profunda de Empresas**: Utiliza la API de Tavily para investigar la empresa del usuario en tiempo real, permitiendo que la IA hable con contexto.
- **Captura y Enriquecimiento de Leads**: Recopila datos del usuario y analiza automáticamente el "Fit Estratégico" entre el candidato y el prospecto.
- **Agendamiento Automatizado**: Integración con la API de Resend para notificar y reservar reuniones directamente desde el chat.
- **Protocolo Anti-Ghosting**: Gestiona de forma segura los detalles del usuario (nombre, email, linkedin) para asegurar que no se pierda ningún lead.
- **Soporte Multilingüe**: Soporte nativo para Inglés/Español con detección automática del idioma del usuario.

## 🧠 La Arquitectura (Cerebro vs. Piel)

Este proyecto está construido para ser modular. Puedes tomar el **Cerebro** (Lógica) y ponerle cualquier **Piel** (Front-end):

1.  **El Cerebro (Lógica Back-end)**:
    - `app/api/chat/`: Interacción principal con el LLM (Groq + Llama 3).
    - `app/api/research/`: Motor de investigación de mercado (Tavily).
    - `app/api/lead/`: Sistema de notificación instantánea de leads.
    - `app/api/booking/`: Lógica de agendamiento de reuniones.
    - `lib/chatbot-prompt.ts`: El ensamblador de prompts que analiza tu `portfolio.yaml`.

2.  **La Piel (Front-end)**:
    - `components/chatbot/chat-widget.tsx`: Una interfaz de React elegante y animada con Framer Motion.
    - *Puede adaptarse fácilmente a Streamlit, Vue o incluso una CLI.*

## ⚙️ Configuración y Personalización

1.  **Tu Base de Conocimiento**: Edita `data/portfolio.yaml`. Aquí es donde defines tus habilidades, experiencia y reglas.
2.  **Claves de API**: Configura tu `.env` con:
    - `GROQ_API_KEY`: Para el cerebro de Llama 3.
    - `TAVILY_API_KEY`: Para la investigación de empresas en tiempo real.
    - `RESEND_API_KEY`: Para las notificaciones por correo electrónico.
3.  **Ejecución**: Integra el componente `ChatWidget` o llama a las rutas de la API.

## 📋 Ejemplo de Integración (Concepto de Producto)

Imagina un mundo donde no envías un PDF, envías un **enlace de AskMyCV**. 

- El reclutador visita -> La IA investiga su empresa -> El agente explica por qué TÚ eres el encaje perfecto -> El reclutador reserva una reunión -> Tú recibes un correo con un análisis completo de la empresa del reclutador.

---
*Desarrollado como un proyecto personal de alto nivel por Álvaro Maldonado.*
