from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.dependencies.auth import require_manager

from app.models.user import User

from app.schemas.category import CategoryResponse

from app.services.category_service import fetch_categories


router = APIRouter(
    prefix="/categories",
    tags=["Categories"]
)


@router.get(
    "/",
    response_model=list[CategoryResponse]
)
def get_categories(
    db: Session = Depends(get_db),
    current_user: User = Depends(require_manager)
):

    return fetch_categories(db)