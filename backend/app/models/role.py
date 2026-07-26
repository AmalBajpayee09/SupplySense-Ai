from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import TIMESTAMP
from sqlalchemy import SmallInteger
from sqlalchemy import text

from sqlalchemy.orm import relationship

from app.database.db import Base


class Role(Base):

    __tablename__ = "roles"

    role_id = Column(
        SmallInteger,
        primary_key=True,
        autoincrement=True
    )

    role_name = Column(
        String(50),
        nullable=False,
        unique=True
    )

    description = Column(
        String(255)
    )

    created_at = Column(
        TIMESTAMP,
        server_default=text("CURRENT_TIMESTAMP")
    )

    users = relationship(
        "User",
        back_populates="role"
    )