from sqlalchemy.orm import Session

from app.models.inventory import Inventory

from app.repositories.inventory_repository import *


def fetch_inventory(db: Session):

    return get_all_inventory(db)


def fetch_inventory_by_id(
    db: Session,
    inventory_id: int
):

    return get_inventory_by_id(
        db,
        inventory_id
    )


def add_inventory(
    db: Session,
    data
):

    inventory = Inventory(
        **data.model_dump()
    )

    return create_inventory(
        db,
        inventory
    )


def edit_inventory(
    db: Session,
    inventory_id: int,
    data
):

    db_inventory = get_inventory_by_id(
        db,
        inventory_id
    )

    if not db_inventory:

        return None

    return update_inventory(
        db,
        db_inventory,
        data.model_dump()
    )


def remove_inventory(
    db: Session,
    inventory_id: int
):

    db_inventory = get_inventory_by_id(
        db,
        inventory_id
    )

    if not db_inventory:

        return False

    delete_inventory(
        db,
        db_inventory
    )

    return True