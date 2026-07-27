from sqlalchemy.orm import Session

from app.models.brand import Brand


def get_all_brands(db: Session):

    return (
        db.query(Brand)
        .order_by(Brand.brand_name)
        .all()
    )