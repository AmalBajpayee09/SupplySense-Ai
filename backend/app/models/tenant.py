from sqlalchemy import Column
from sqlalchemy import BigInteger
from sqlalchemy import String
from sqlalchemy import Enum
from sqlalchemy import TIMESTAMP
from sqlalchemy import text

from sqlalchemy.orm import relationship

from app.database.db import Base


class Tenant(Base):

    __tablename__ = "tenants"

    tenant_id = Column(
        BigInteger,
        primary_key=True,
        autoincrement=True
    )

    company_name = Column(
        String(150),
        nullable=False
    )

    company_code = Column(
        String(50),
        nullable=False,
        unique=True
    )

    industry = Column(
        String(100)
    )

    country = Column(
        String(100)
    )

    contact_email = Column(
        String(255),
        unique=True
    )

    status = Column(
        Enum(
            "ACTIVE",
            "INACTIVE",
            name="tenant_status"
        ),
        default="ACTIVE"
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

    users = relationship(
        "User",
        back_populates="tenant"
    )