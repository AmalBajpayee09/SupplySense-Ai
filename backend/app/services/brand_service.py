from sqlalchemy.orm import Session

from app.repositories.brand_repository import get_all_brands


def fetch_brands(db: Session):

    return get_all_brands(db)