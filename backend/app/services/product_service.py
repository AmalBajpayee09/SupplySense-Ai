from sqlalchemy.orm import Session

from app.models.product import Product

from app.repositories.products_repository import *


def fetch_products(db: Session):
    return get_all_products(db)


def fetch_product(db: Session, product_id: int):
    return get_product_by_id(db, product_id)


def add_product(db: Session, data):
    print(Product.__table__.columns.keys())
    product = Product(**data.model_dump())

    return create_product(db, product)


def edit_product(
    db: Session,
    product_id: int,
    data
):

    db_product = get_product_by_id(
        db,
        product_id
    )

    if not db_product:

        return None

    return update_product(
        db,
        db_product,
        data.model_dump()
    )


def remove_product(
    db: Session,
    product_id: int
):

    db_product = get_product_by_id(
        db,
        product_id
    )

    if not db_product:

        return False

    delete_product(
        db,
        db_product
    )

    return True