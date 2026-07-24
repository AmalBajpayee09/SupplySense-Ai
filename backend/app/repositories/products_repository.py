from sqlalchemy.orm import Session

from app.models.product import Product


def get_all_products(db: Session):
    return db.query(Product).all()


def get_product_by_id(db: Session, product_id: int):
    return db.query(Product).filter(
        Product.product_id == product_id
    ).first()


def create_product(db: Session, product: Product):

    db.add(product)

    db.commit()

    db.refresh(product)

    return product


def update_product(
    db: Session,
    db_product: Product,
    data: dict
):

    for key, value in data.items():

        setattr(db_product, key, value)

    db.commit()

    db.refresh(db_product)

    return db_product


def delete_product(
    db: Session,
    db_product: Product
):

    db.delete(db_product)

    db.commit()