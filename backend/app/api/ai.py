from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.dependencies.auth import require_analyst
from app.models.user import User

from app.services.ai_service import (
    ask_ai,
    generate_sql
)

from app.schemas.ai import (
    AIQueryRequest,
    AIQueryResponse,
    AIResultResponse
)

router = APIRouter(

    prefix="/ai",

    tags=["AI"]

)


@router.post(

    "/query",

    response_model=AIQueryResponse

)
def ai_query(
    request: AIQueryRequest,
    current_user: User = Depends(require_analyst)
):

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
    db: Session = Depends(get_db),
    current_user: User = Depends(require_analyst)
):

    return ask_ai(
        request.question,
        db
    )