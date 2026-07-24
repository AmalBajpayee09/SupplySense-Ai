from sqlalchemy import Column
from sqlalchemy import BigInteger
from sqlalchemy import String
from sqlalchemy import DECIMAL

from sqlalchemy import TIMESTAMP
from sqlalchemy.sql import func

from app.database.base import Base


class Product(Base):

    __tablename__ = "products"

    product_id = Column(
        BigInteger,
        primary_key=True,
        index=True
    )

    tenant_id = Column(
        BigInteger,
        nullable=False
    )

    category_id = Column(
        BigInteger,
        nullable=False
    )

    brand_id = Column(
        BigInteger,
        nullable=False
    )

    sku = Column(
        String(50),
        nullable=False,
        unique=True
    )

    product_name = Column(
        String(255),
        nullable=False
    )

    unit_price = Column(
        DECIMAL(10,2),
        nullable=False
    )

    cost_price = Column(
        DECIMAL(10,2),
        nullable=False
    )

    reorder_level = Column(
        BigInteger,
        nullable=False
    )

    status = Column(
        String(20),
        nullable=False
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )