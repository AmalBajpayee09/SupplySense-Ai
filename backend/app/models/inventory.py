from sqlalchemy import Column
from sqlalchemy import BigInteger
from sqlalchemy import Integer
from sqlalchemy import ForeignKey

from app.database.base import Base


class Inventory(Base):

    __tablename__="inventory"

    inventory_id=Column(
        BigInteger,
        primary_key=True
    )

    product_id=Column(
        BigInteger,
        ForeignKey("products.product_id")
    )

    warehouse_id=Column(
        BigInteger,
        ForeignKey("warehouses.warehouse_id")
    )

    supplier_id=Column(
        BigInteger,
        ForeignKey("suppliers.supplier_id")
    )

    current_stock=Column(Integer)

    reserved_stock=Column(Integer)

    reorder_level=Column(Integer)