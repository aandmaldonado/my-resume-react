from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    language: str = None
    sessionId: str = None

class ChatResponse(BaseModel):
    response: str
    sources: list = []
    language: str = None

@router.post("/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    # Lógica de ejemplo (reemplazar por integración real)
    return ChatResponse(response="Respuesta de ejemplo", sources=[], language=request.language or "es") 