from sqlalchemy.orm import Session

from app.models.inventory import Inventory


def get_all_inventory(db: Session):

    return db.query(Inventory).all()


def get_inventory_by_id(
    db: Session,
    inventory_id: int
):

    return (
        db.query(Inventory)
        .filter(
            Inventory.inventory_id == inventory_id
        )
        .first()
    )


def create_inventory(
    db: Session,
    inventory: Inventory
):

    db.add(inventory)

    db.commit()

    db.refresh(inventory)

    return inventory


def update_inventory(
    db: Session,
    db_inventory: Inventory,
    data: dict
):

    for key, value in data.items():

        setattr(
            db_inventory,
            key,
            value
        )

    db.commit()

    db.refresh(db_inventory)

    return db_inventory


def delete_inventory(
    db: Session,
    db_inventory: Inventory
):

    db.delete(db_inventory)

    db.commit()