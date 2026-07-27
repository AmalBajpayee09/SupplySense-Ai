from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.dependencies.auth import require_manager

from app.models.user import User

from app.schemas.brand import BrandResponse

from app.services.brand_service import fetch_brands


router = APIRouter(
    prefix="/brands",
    tags=["Brands"]
)


@router.get(
    "/",
    response_model=list[BrandResponse]
)
def get_brands(
    db: Session = Depends(get_db),
    current_user: User = Depends(require_manager)
):

    return fetch_brands(db)