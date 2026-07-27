from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import TIMESTAMP
from sqlalchemy.sql import func

from app.database.base import Base


class Brand(Base):

    __tablename__ = "brands"

    brand_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    brand_name = Column(
        String(100),
        nullable=False,
        unique=True
    )

    country = Column(
        String(100)
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )