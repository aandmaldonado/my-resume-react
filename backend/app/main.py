from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Chatbot Portfolio Backend", version="1.0.0")

# Configuración básica de CORS (ajustar origins en producción)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Importar e incluir routers aquí (ejemplo)
# from app.api.v1 import chat, ingest, health
# app.include_router(chat.router, prefix="/v1/chat")
# app.include_router(ingest.router, prefix="/v1/ingest")
# app.include_router(health.router, prefix="/v1/health")

@app.get("/")
def root():
    return {"message": "Chatbot Portfolio Backend is running"} 