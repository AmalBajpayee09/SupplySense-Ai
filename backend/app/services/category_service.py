from sqlalchemy.orm import Session

from app.repositories.category_repository import get_all_categories


def fetch_categories(db: Session):

    return get_all_categories(db)