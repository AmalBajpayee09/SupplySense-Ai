from sqlalchemy import Column
from sqlalchemy import BigInteger
from sqlalchemy import SmallInteger
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import TIMESTAMP
from sqlalchemy import ForeignKey
from sqlalchemy import text

from sqlalchemy.orm import relationship

from app.database.db import Base


class User(Base):

    __tablename__ = "users"

    user_id = Column(
        BigInteger,
        primary_key=True,
        autoincrement=True
    )

    tenant_id = Column(
        BigInteger,
        ForeignKey("tenants.tenant_id"),
        nullable=False
    )

    role_id = Column(
        SmallInteger,
        ForeignKey("roles.role_id"),
        nullable=False
    )

    first_name = Column(
        String(100),
        nullable=False
    )

    last_name = Column(
        String(100)
    )

    email = Column(
        String(255),
        nullable=False,
        unique=True,
        index=True
    )

    password_hash = Column(
        String(255),
        nullable=False
    )

    phone = Column(
        String(20)
    )

    is_active = Column(
        Boolean,
        default=True
    )

    created_at = Column(
        TIMESTAMP,
        server_default=text("CURRENT_TIMESTAMP")
    )

    updated_at = Column(
        TIMESTAMP,
        server_default=text("CURRENT_TIMESTAMP"),
        onupdate=text("CURRENT_TIMESTAMP")
    )

    tenant = relationship(
        "Tenant",
        back_populates="users"
    )

    role = relationship(
        "Role",
        back_populates="users"
    )