from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db
from app.services.ai_service import ask_ai

from app.schemas.ai import (
    AIQueryRequest,
    AIQueryResponse,
    AIResultResponse
)

from app.services.ai_service import generate_sql

router = APIRouter(

    prefix="/ai",

    tags=["AI"]

)


@router.post(

    "/query",

    response_model=AIQueryResponse

)

def ai_query(request: AIQueryRequest):

    sql = generate_sql(request.question)

    return {

        "sql": sql

    }
    
@router.post(
    "/ask",
    response_model=AIResultResponse
)
def ask_ai_endpoint(
    request: AIQueryRequest,
    db: Session = Depends(get_db)
):

    return ask_ai(
        request.question,
        db
    )    