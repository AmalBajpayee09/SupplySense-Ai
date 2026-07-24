from sqlalchemy import Column
from sqlalchemy import BigInteger
from sqlalchemy import String
from sqlalchemy import ForeignKey
from sqlalchemy import TIMESTAMP
from sqlalchemy.sql import func

from app.database.base import Base


class User(Base):

    __tablename__ = "users"

    user_id = Column(BigInteger, primary_key=True)

    tenant_id = Column(
        BigInteger,
        ForeignKey("tenants.tenant_id")
    )

    role_id = Column(
        BigInteger,
        ForeignKey("roles.role_id")
    )

    first_name = Column(String(100))

    last_name = Column(String(100))

    email = Column(String(255))

    password_hash = Column(String(255))

    phone = Column(String(20))

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )