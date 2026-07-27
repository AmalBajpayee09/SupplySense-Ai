from sqlalchemy.orm import Session

from app.models.category import Category


def get_all_categories(db: Session):

    return (
        db.query(Category)
        .order_by(Category.category_name)
        .all()
    )