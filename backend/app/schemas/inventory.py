from datetime import date

from pydantic import BaseModel
from pydantic import ConfigDict


class InventoryBase(BaseModel):

    product_id: int
    warehouse_id: int
    supplier_id: int
    current_stock: int
    reserved_stock: int
    reorder_level: int
    last_restocked: date


class InventoryCreate(InventoryBase):
    pass


class InventoryUpdate(InventoryBase):
    pass


class InventoryResponse(InventoryBase):

    inventory_id: int

    model_config = ConfigDict(
        from_attributes=True
    )