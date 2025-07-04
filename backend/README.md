# Backend RAG para Chatbot de Portafolio

Este backend implementa un sistema RAG (Retrieval-Augmented Generation) para un chatbot que responde exclusivamente sobre la información de tu portafolio profesional, integrando datos de i18n.ts, LinkedIn y documentos adicionales, y utilizando Google Vertex AI (Vector Search y Gemini Pro) para búsqueda semántica y generación de respuestas.

---

## 🚀 Características principales
- API RESTful (FastAPI) para chat, ingesta y administración.
- Pipeline de ingesta automatizado y seguro.
- Integración con Vertex AI Vector Search y Gemini Pro.
- Seguridad: rate limiting, autenticación, logging y control de costes.
- Modular, escalable y preparado para producción en Google Cloud.

## 📁 Estructura de carpetas

```
backend/
├── app/
│   ├── api/                # Endpoints (v1/chat, v1/ingest, v1/health)
│   ├── core/               # Configuración, seguridad, logging
│   ├── models/             # Esquemas Pydantic
│   ├── services/           # Lógica de negocio, integración Vertex AI
│   ├── utils/              # Utilidades
│   └── main.py             # Punto de entrada FastAPI
├── tests/                  # Pruebas
├── scripts/                # Scripts de ingesta/mantenimiento
├── requirements.txt        # Dependencias
├── Dockerfile              # Imagen para despliegue
├── .env.example            # Variables de entorno
└── README.md
```

## ⚙️ Requisitos
- Python 3.10+
- Acceso a Google Cloud (Vertex AI, IAM, etc.)
- (Opcional) Docker para despliegue

## 🏃‍♂️ Ejecución local
1. Clona el repositorio y entra en la carpeta `backend/`.
2. Instala dependencias:
   ```bash
   pip install -r requirements.txt
   ```
3. Copia `.env.example` a `.env` y configura tus variables de entorno (credenciales, endpoints, etc.).
4. Ejecuta el servidor:
   ```bash
   uvicorn app.main:app --reload
   ```
5. Accede a la documentación interactiva en [http://localhost:8000/docs](http://localhost:8000/docs)

## ☁️ Despliegue en Google Cloud
- Recomendado: Google Cloud Run, App Engine o Kubernetes.
- Usa el `Dockerfile` para construir la imagen y desplegar.
- Configura variables de entorno y permisos IAM adecuados.

## 📚 Documentación relevante
- [docs/chatbot-requeriments.md](../docs/chatbot-requeriments.md): Diseño y requerimientos completos.
- [Google Vertex AI](https://cloud.google.com/vertex-ai)
- [FastAPI](https://fastapi.tiangolo.com/)

---

> Para dudas, sugerencias o mejoras, revisa la documentación técnica o abre un issue en el repositorio principal. 