from sqlalchemy import Column
from sqlalchemy import BigInteger
from sqlalchemy import Integer
from sqlalchemy import Date

from app.database.base import Base


class Inventory(Base):

    __tablename__ = "inventory"

    inventory_id = Column(
        BigInteger,
        primary_key=True,
        index=True
    )

    product_id = Column(
        BigInteger,
        nullable=False
    )

    warehouse_id = Column(
        BigInteger,
        nullable=False
    )

    supplier_id = Column(
        BigInteger,
        nullable=False
    )

    current_stock = Column(
        Integer,
        nullable=False
    )

    reserved_stock = Column(
        Integer,
        nullable=False
    )

    reorder_level = Column(
        Integer,
        nullable=False
    )

    last_restocked = Column(Date)