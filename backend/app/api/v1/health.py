from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

@router.get("/health")
def healthcheck():
    return {"status": "ok", "timestamp": datetime.utcnow().isoformat() + "Z"} 