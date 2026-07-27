from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import TIMESTAMP
from sqlalchemy.sql import func

from app.database.base import Base


class Category(Base):

    __tablename__ = "categories"

    category_id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    category_name = Column(
        String(100),
        nullable=False,
        unique=True
    )

    description = Column(
        String(255)
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )