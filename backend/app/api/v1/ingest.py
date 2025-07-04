from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

router = APIRouter()

class IngestRequest(BaseModel):
    trigger: str
    source: str = None

class IngestResponse(BaseModel):
    status: str
    message: str
    updated: list = []

@router.post("/ingest", response_model=IngestResponse)
def ingest_endpoint(request: IngestRequest):
    # Lógica de ejemplo (reemplazar por integración real)
    return IngestResponse(status="success", message="Ingesta simulada", updated=[request.source or "all"]) 