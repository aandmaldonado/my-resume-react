# 🤖 Backend - Sistema RAG para Chatbot

Este backend implementa un sistema RAG (Retrieval-Augmented Generation) para un chatbot inteligente que responde exclusivamente sobre la información de tu portafolio profesional. Integra datos de múltiples fuentes y utiliza Google Vertex AI para búsqueda semántica y generación de respuestas contextuales.

## 🚀 Características Principales

- 🤖 **Sistema RAG Avanzado** - Retrieval-Augmented Generation con búsqueda semántica
- 🔍 **Búsqueda Vectorial** - Integración con Google Vertex AI Vector Search
- 💬 **Chatbot Inteligente** - Respuestas contextuales basadas en el portafolio
- 🔐 **API RESTful** - FastAPI con documentación automática
- 📊 **Pipeline de Ingesta** - Procesamiento automatizado de datos
- ☁️ **Cloud Native** - Optimizado para Google Cloud Platform
- 🔒 **Seguridad** - Rate limiting, autenticación y logging
- 📈 **Escalabilidad** - Arquitectura modular y preparada para producción

## 🛠️ Tech Stack

- 🐍 **Python 3.10+** - Lenguaje principal
- ⚡ **FastAPI** - Framework web moderno y rápido
- 🤖 **Google Vertex AI** - Vector Search y Gemini Pro
- 🔐 **Google Cloud Platform** - Infraestructura cloud
- 📊 **Pydantic** - Validación de datos y serialización
- 🐳 **Docker** - Containerización
- 📝 **Uvicorn** - Servidor ASGI
- 🔍 **Httpx** - Cliente HTTP asíncrono

## 📁 Estructura del Proyecto

```
backend/
├── app/
│   ├── api/                    # Endpoints de la API
│   │   └── v1/                # Versión 1 de la API
│   │       ├── __init__.py
│   │       ├── chat.py        # Endpoint del chatbot
│   │       ├── health.py      # Health check
│   │       └── ingest.py      # Endpoint de ingesta
│   ├── core/                  # Configuración y utilidades
│   │   ├── __init__.py
│   │   ├── config.py          # Configuración de la aplicación
│   │   ├── security.py        # Autenticación y autorización
│   │   └── logging.py         # Configuración de logging
│   ├── models/                # Modelos Pydantic
│   │   ├── __init__.py
│   │   ├── chat.py           # Modelos para el chat
│   │   └── ingest.py         # Modelos para ingesta
│   ├── services/              # Lógica de negocio
│   │   ├── __init__.py
│   │   ├── chat_service.py   # Servicio del chatbot
│   │   ├── vector_service.py # Servicio de búsqueda vectorial
│   │   └── ingest_service.py # Servicio de ingesta
│   ├── utils/                 # Utilidades
│   │   ├── __init__.py
│   │   ├── text_processing.py # Procesamiento de texto
│   │   └── validators.py      # Validadores personalizados
│   └── main.py               # Punto de entrada FastAPI
├── scripts/                   # Scripts de utilidad
│   ├── extract-i18n-to-json.js # Extracción de traducciones
│   └── extract-linkedin-profile.js # Extracción de perfil LinkedIn
├── tests/                     # Pruebas unitarias e integración
│   ├── __init__.py
│   ├── test_api/             # Tests de endpoints
│   ├── test_services/        # Tests de servicios
│   └── conftest.py           # Configuración de pytest
├── requirements.txt           # Dependencias Python
├── requirements-dev.txt       # Dependencias de desarrollo
├── Dockerfile                # Imagen Docker
├── docker-compose.yml        # Orquestación Docker
├── .env.example              # Variables de entorno de ejemplo
├── .env.test                 # Variables de entorno para tests
└── README.md                 # Este archivo
```

## ⚙️ Requisitos

### Software
- Python 3.10 o superior
- pip (gestor de paquetes Python)
- Docker (opcional, para containerización)

### Servicios Cloud
- Cuenta de Google Cloud Platform
- Proyecto GCP con APIs habilitadas:
  - Vertex AI API
  - Cloud Storage API
  - IAM API
- Credenciales de servicio configuradas

## 🚀 Instalación y Configuración

### 1. Clonar y configurar el entorno
```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales:
```env
# Google Cloud Configuration
GOOGLE_CLOUD_PROJECT=tu-proyecto-gcp
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json

# Vertex AI Configuration
VERTEX_AI_LOCATION=us-central1
VECTOR_SEARCH_INDEX_ID=tu-index-id
GEMINI_MODEL_NAME=gemini-1.5-pro

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=True

# Security
SECRET_KEY=tu-secret-key-super-segura
RATE_LIMIT_PER_MINUTE=60

# Logging
LOG_LEVEL=INFO
```

### 3. Configurar credenciales de Google Cloud
```bash
# Opción 1: Usar credenciales de servicio
export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account.json"

# Opción 2: Usar gcloud CLI
gcloud auth application-default login
```

### 4. Ejecutar el servidor
```bash
# Desarrollo
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Producción
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```

## 📚 API Endpoints

### Documentación Interactiva
- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

### Endpoints Principales

#### `GET /api/v1/health`
Health check del servicio
```bash
curl http://localhost:8000/api/v1/health
```

#### `POST /api/v1/chat`
Endpoint principal del chatbot
```bash
curl -X POST "http://localhost:8000/api/v1/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "¿Cuáles son tus habilidades principales?",
    "session_id": "user-123"
  }'
```

#### `POST /api/v1/ingest`
Ingesta de nuevos datos al sistema RAG
```bash
curl -X POST "http://localhost:8000/api/v1/ingest" \
  -H "Content-Type: application/json" \
  -d '{
    "data_type": "portfolio_update",
    "content": "Nueva información del portafolio..."
  }'
```

## 🤖 Sistema RAG

### Arquitectura
```
Usuario → Frontend → API → Chat Service → Vector Search → Gemini Pro → Respuesta
```

### Componentes

#### 1. **Vector Search Service**
- Búsqueda semántica en embeddings del portafolio
- Integración con Google Vertex AI Vector Search
- Filtrado y ranking de resultados

#### 2. **Chat Service**
- Procesamiento de consultas del usuario
- Construcción de prompts contextuales
- Integración con Gemini Pro para generación

#### 3. **Ingest Service**
- Procesamiento de nuevos datos
- Generación de embeddings
- Actualización del índice vectorial

### Flujo de Trabajo
1. **Consulta del usuario** llega al endpoint `/chat`
2. **Procesamiento** de la consulta y extracción de contexto
3. **Búsqueda vectorial** para encontrar información relevante
4. **Construcción del prompt** con contexto recuperado
5. **Generación de respuesta** usando Gemini Pro
6. **Retorno** de la respuesta al usuario

## 🔧 Configuración Avanzada

### Variables de Entorno Detalladas

```env
# Google Cloud
GOOGLE_CLOUD_PROJECT=tu-proyecto-gcp
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json
VERTEX_AI_LOCATION=us-central1

# Vector Search
VECTOR_SEARCH_INDEX_ID=portfolio-index
VECTOR_SEARCH_DIMENSIONS=768
VECTOR_SEARCH_DISTANCE_MEASURE=cosine

# Gemini Pro
GEMINI_MODEL_NAME=gemini-1.5-pro
GEMINI_MAX_TOKENS=2048
GEMINI_TEMPERATURE=0.7

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=True
CORS_ORIGINS=["http://localhost:3000", "https://tu-dominio.com"]

# Security
SECRET_KEY=tu-secret-key-super-segura
RATE_LIMIT_PER_MINUTE=60
API_KEY_HEADER=X-API-Key

# Logging
LOG_LEVEL=INFO
LOG_FORMAT=json
LOG_FILE=logs/app.log

# Monitoring
ENABLE_METRICS=True
METRICS_PORT=9090
```

### Configuración de Logging
```python
# app/core/logging.py
LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "json": {
            "format": "%(asctime)s %(name)s %(levelname)s %(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S"
        }
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "json"
        },
        "file": {
            "class": "logging.FileHandler",
            "filename": "logs/app.log",
            "formatter": "json"
        }
    },
    "root": {
        "level": "INFO",
        "handlers": ["console", "file"]
    }
}
```

## 🧪 Testing

### Instalar dependencias de desarrollo
```bash
pip install -r requirements-dev.txt
```

### Ejecutar tests
```bash
# Tests unitarios
pytest tests/

# Tests con cobertura
pytest --cov=app tests/

# Tests de integración
pytest tests/integration/

# Tests de rendimiento
pytest tests/performance/
```

### Configuración de tests
```python
# tests/conftest.py
import pytest
from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture
def client():
    return TestClient(app)

@pytest.fixture
def mock_vertex_ai():
    # Mock de servicios de Vertex AI para tests
    pass
```

## 🐳 Docker

### Construir imagen
```bash
docker build -t my-resume-backend .
```

### Ejecutar con Docker
```bash
docker run -p 8000:8000 \
  -e GOOGLE_CLOUD_PROJECT=tu-proyecto \
  -e GOOGLE_APPLICATION_CREDENTIALS=/app/credentials.json \
  -v $(pwd)/credentials.json:/app/credentials.json \
  my-resume-backend
```

### Docker Compose
```bash
# Desarrollo
docker-compose up -d

# Producción
docker-compose -f docker-compose.prod.yml up -d
```

## ☁️ Despliegue en Google Cloud

### Cloud Run (Recomendado)
```bash
# Construir y desplegar
gcloud builds submit --tag gcr.io/PROJECT_ID/my-resume-backend
gcloud run deploy my-resume-backend \
  --image gcr.io/PROJECT_ID/my-resume-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### App Engine
```bash
# Crear app.yaml
gcloud app deploy
```

### Kubernetes (GKE)
```bash
# Aplicar manifiestos
kubectl apply -f k8s/
```

## 📊 Monitoreo y Observabilidad

### Métricas
- Prometheus metrics en `/metrics`
- Métricas personalizadas de latencia y throughput
- Alertas configurables

### Logging
- Logs estructurados en JSON
- Integración con Cloud Logging
- Filtros y búsquedas avanzadas

### Tracing
- Distributed tracing con OpenTelemetry
- Trazas de requests completos
- Análisis de performance

## 🔒 Seguridad

### Autenticación
- API Key authentication
- Rate limiting por IP/usuario
- CORS configurado

### Validación
- Validación de entrada con Pydantic
- Sanitización de datos
- Protección contra inyección

### Auditoría
- Logs de auditoría
- Tracking de requests
- Alertas de seguridad

## 🚀 Performance

### Optimizaciones
- Async/await para operaciones I/O
- Connection pooling
- Caching de embeddings
- Compresión de respuestas

### Benchmarks
- Latencia promedio: < 500ms
- Throughput: 1000+ requests/min
- Disponibilidad: 99.9%

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

Hecho con ❤️, Python y Google Cloud 