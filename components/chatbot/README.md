# 🤖 InterviewMyCV - Tu Agente Inteligente Profesional

**InterviewMyCV** es un asistente de IA de alto nivel diseñado para actuar como tu representante oficial. Transforma un portfolio estático en una conversación ejecutiva estratégica, eliminando fricción con chips de un solo clic y garantizando respuestas concisas de nivel C-Level.

> [!IMPORTANT]
> Este agente está diseñado para ser **Data-Driven**. Toda su personalidad, conocimientos y sugerencias se controlan desde un único archivo: `data/cv.yaml`.

## 🚀 Innovaciones Clave

- **Multi-Provider (Resiliencia Total)**: Soporte nativo para **Groq (Llama 3.3)** y **Google Gemini 2.0 Flash**.
- **Automatic Failover**: Si Groq alcanza el límite por segundo (Rate Limit), el bot salta instantáneamente a Gemini sin que el usuario lo note.
- **Modo Offline/Local**: Detección automática de **Ollama** si no se encuentran claves API de nube configuradas.
- **UX de Un Solo Clic**: Los chips de sugerencia disparan la acción automáticamente, reduciendo la carga cognitiva del usuario.
- **Identidad Blindada**: Respuesta estricta en **3ra persona** ("Álvaro..."), con un límite radical de **20 palabras** para asegurar la máxima profesionalidad.

## 🧠 Arquitectura de Inferencia

El backend del chatbot (`app/api/chat/route.ts`) es agnóstico y autogestionado:

1.  **Smart Provider Selection**: Detecta keys en el `.env` y prioriza el mejor motor disponible (Groq > Google > Ollama).
2.  **Safety Filters**: Triple capa de protección contra Inyecciones (Jailbreak), preguntas personales sensibles y temas salariales.
3.  **Context Enrichment**: El bot no solo lee el CV; también analiza automágicamente tu **Filosofía** y **Recomendaciones** desde el sistema de traducción `i18n.ts`.

## ⚙️ Configuración (Single Source of Truth)

Ya no es necesario tocar el código para actualizar el bot. Todo vive en:
`data/cv.yaml` -> Seccion: `chat_settings`.

- **`bot_name`**: El nombre oficial de tu agente.
- **`suggested_queries`**: Lista dinámica de preguntas (chips) que aparecen en la interfaz.

## 📋 Ejemplo de Flujo Ejecutivo

1. **Usuario Pulsa un Chip** → *"🤖 Ver Experiencia"*
2. **Acción Instantánea** → Se envía el mensaje automáticamente.
3. **Respuesta Flash** → *"Álvaro tiene +15 años liderando equipos técnicos en proyectos como Motor de Facultades y AcuaMattic IA. ¿Algún proyecto en particular?"* (Máximo 20 palabras).
4. **Conversión** → Invita a agendar una llamada si detecta interés real.

---
*Diseñado y Desarrollado por Álvaro Maldonado.* 
*InterviewMyCV - The Future of Digital Representation.*
