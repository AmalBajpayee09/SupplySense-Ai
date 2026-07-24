from decimal import Decimal
from pydantic import BaseModel, ConfigDict


class ProductBase(BaseModel):
    tenant_id: int
    category_id: int
    brand_id: int
    sku: str
    product_name: str
    unit_price: Decimal
    cost_price: Decimal
    reorder_level: int
    status: str


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    pass


class ProductResponse(ProductBase):
    product_id: int

    model_config = ConfigDict(
        from_attributes=True
    )