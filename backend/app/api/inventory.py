from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.schemas.inventory import *

from app.services.inventory_service import *

router = APIRouter(
    prefix="/inventory",
    tags=["Inventory"]
)


@router.get(
    "/",
    response_model=list[InventoryResponse]
)
def get_inventory(
    db: Session = Depends(get_db)
):

    return fetch_inventory(db)


@router.get(
    "/{inventory_id}",
    response_model=InventoryResponse
)
def get_inventory_by_id_api(
    inventory_id: int,
    db: Session = Depends(get_db)
):

    inventory = fetch_inventory_by_id(
        db,
        inventory_id
    )

    if not inventory:

        raise HTTPException(
            status_code=404,
            detail="Inventory not found"
        )

    return inventory


@router.post(
    "/",
    response_model=InventoryResponse,
    status_code=201
)
def create_inventory_api(
    inventory: InventoryCreate,
    db: Session = Depends(get_db)
):

    return add_inventory(
        db,
        inventory
    )


@router.put(
    "/{inventory_id}",
    response_model=InventoryResponse
)
def update_inventory_api(
    inventory_id: int,
    inventory: InventoryUpdate,
    db: Session = Depends(get_db)
):

    updated = edit_inventory(
        db,
        inventory_id,
        inventory
    )

    if not updated:

        raise HTTPException(
            status_code=404,
            detail="Inventory not found"
        )

    return updated


@router.delete(
    "/{inventory_id}"
)
def delete_inventory_api(
    inventory_id: int,
    db: Session = Depends(get_db)
):

    deleted = remove_inventory(
        db,
        inventory_id
    )

    if not deleted:

        raise HTTPException(
            status_code=404,
            detail="Inventory not found"
        )

    return {
        "message": "Inventory deleted successfully"
    }