#!/bin/bash

# My Resume React - Development Setup Script
# Este script configura el entorno de desarrollo para el monorepo

set -e

echo "🚀 Configurando entorno de desarrollo para My Resume React..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar prerequisitos
check_prerequisites() {
    print_status "Verificando prerequisitos..."
    
    # Verificar Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js no está instalado. Por favor instala Node.js 18+"
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js versión 18+ es requerida. Versión actual: $(node --version)"
        exit 1
    fi
    
    print_success "Node.js $(node --version) encontrado"
    
    # Verificar npm
    if ! command -v npm &> /dev/null; then
        print_error "npm no está instalado"
        exit 1
    fi
    
    print_success "npm $(npm --version) encontrado"
    
    # Verificar Python
    if ! command -v python3 &> /dev/null; then
        print_error "Python 3 no está instalado. Por favor instala Python 3.10+"
        exit 1
    fi
    
    PYTHON_VERSION=$(python3 --version | cut -d' ' -f2 | cut -d'.' -f1,2)
    REQUIRED_VERSION="3.10"
    if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$PYTHON_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
        print_error "Python 3.10+ es requerido. Versión actual: $PYTHON_VERSION"
        exit 1
    fi
    
    print_success "Python $(python3 --version) encontrado"
    
    # Verificar pip
    if ! command -v pip3 &> /dev/null; then
        print_error "pip3 no está instalado"
        exit 1
    fi
    
    print_success "pip3 encontrado"
}

# Configurar frontend
setup_frontend() {
    print_status "Configurando frontend..."
    
    cd frontend
    
    # Instalar dependencias
    print_status "Instalando dependencias de Node.js..."
    npm install
    
    # Verificar si existe .env.local
    if [ ! -f .env.local ]; then
        print_warning "Creando .env.local para frontend..."
        cat > .env.local << EOF
# Frontend Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CHAT_ENDPOINT=/api/v1/chat
NEXT_PUBLIC_APP_NAME=My Resume React
EOF
        print_success "Archivo .env.local creado"
    else
        print_success "Archivo .env.local ya existe"
    fi
    
    cd ..
    print_success "Frontend configurado correctamente"
}

# Configurar backend
setup_backend() {
    print_status "Configurando backend..."
    
    cd backend
    
    # Crear entorno virtual si no existe
    if [ ! -d "venv" ]; then
        print_status "Creando entorno virtual de Python..."
        python3 -m venv venv
        print_success "Entorno virtual creado"
    else
        print_success "Entorno virtual ya existe"
    fi
    
    # Activar entorno virtual
    print_status "Activando entorno virtual..."
    source venv/bin/activate
    
    # Instalar dependencias
    print_status "Instalando dependencias de Python..."
    pip install -r requirements.txt
    
    # Verificar si existe .env
    if [ ! -f .env ]; then
        print_warning "Creando .env para backend..."
        cat > .env << EOF
# Backend Environment Variables
# Google Cloud Configuration
GOOGLE_CLOUD_PROJECT=your-project-id
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json

# Vertex AI Configuration
VERTEX_AI_LOCATION=us-central1
VECTOR_SEARCH_INDEX_ID=portfolio-index
GEMINI_MODEL_NAME=gemini-1.5-pro

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=True

# Security
SECRET_KEY=your-super-secret-key-change-this
RATE_LIMIT_PER_MINUTE=60

# Logging
LOG_LEVEL=INFO
EOF
        print_success "Archivo .env creado"
        print_warning "IMPORTANTE: Configura las variables de entorno en backend/.env"
    else
        print_success "Archivo .env ya existe"
    fi
    
    # Desactivar entorno virtual
    deactivate
    
    cd ..
    print_success "Backend configurado correctamente"
}

# Crear scripts de desarrollo
create_dev_scripts() {
    print_status "Creando scripts de desarrollo..."
    
    # Script para ejecutar frontend
    cat > scripts/dev-frontend.sh << 'EOF'
#!/bin/bash
cd frontend
npm run dev
EOF
    
    # Script para ejecutar backend
    cat > scripts/dev-backend.sh << 'EOF'
#!/bin/bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
EOF
    
    # Script para ejecutar ambos
    cat > scripts/dev-all.sh << 'EOF'
#!/bin/bash
# Ejecutar frontend y backend en paralelo
trap 'kill $(jobs -p)' EXIT

echo "🚀 Iniciando frontend y backend..."
cd frontend && npm run dev &
cd backend && source venv/bin/activate && uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 &

wait
EOF
    
    # Hacer ejecutables los scripts
    chmod +x scripts/dev-frontend.sh
    chmod +x scripts/dev-backend.sh
    chmod +x scripts/dev-all.sh
    
    print_success "Scripts de desarrollo creados"
}

# Mostrar información final
show_final_info() {
    echo ""
    echo "🎉 ¡Configuración completada!"
    echo ""
    echo "📁 Estructura del proyecto:"
    echo "   ├── frontend/     # Aplicación Next.js"
    echo "   ├── backend/      # API FastAPI"
    echo "   └── scripts/      # Scripts de desarrollo"
    echo ""
    echo "🚀 Comandos útiles:"
    echo "   ./scripts/dev-frontend.sh  # Ejecutar solo frontend"
    echo "   ./scripts/dev-backend.sh   # Ejecutar solo backend"
    echo "   ./scripts/dev-all.sh       # Ejecutar ambos"
    echo ""
    echo "📝 Próximos pasos:"
    echo "   1. Configura las variables de entorno en backend/.env"
    echo "   2. Configura las credenciales de Google Cloud"
    echo "   3. Ejecuta ./scripts/dev-all.sh para iniciar desarrollo"
    echo ""
    echo "🌐 URLs de desarrollo:"
    echo "   Frontend: http://localhost:3000"
    echo "   Backend:  http://localhost:8000"
    echo "   API Docs: http://localhost:8000/docs"
    echo ""
}

# Función principal
main() {
    echo "🚀 My Resume React - Development Setup"
    echo "======================================"
    echo ""
    
    check_prerequisites
    setup_frontend
    setup_backend
    create_dev_scripts
    show_final_info
}

# Ejecutar función principal
main "$@" 