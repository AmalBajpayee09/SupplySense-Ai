from typing import Callable

from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer

from sqlalchemy.orm import Session
from sqlalchemy.orm import joinedload

from app.database.db import get_db

from app.models.user import User

from app.core.auth import decode_access_token
from app.core.roles import Roles


# ======================================================
# Swagger JWT Authentication
# ======================================================

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)


# ======================================================
# Get Current Logged In User
# ======================================================

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
) -> User:

    payload = decode_access_token(token)

    if payload is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired access token."
        )

    user = (
        db.query(User)
        .options(
            joinedload(User.role),
            joinedload(User.tenant)
        )
        .filter(
            User.user_id == payload["user_id"]
        )
        .first()
    )

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="User not found."
        )

    if not user.is_active:
        raise HTTPException(
            status_code=403,
            detail="User account is inactive."
        )

    return user


# ======================================================
# Generic Role Authorization
# ======================================================

def require_roles(
    allowed_roles: list[str]
) -> Callable:

    def role_checker(
        current_user: User = Depends(get_current_user)
    ) -> User:

        if current_user.role.role_name not in allowed_roles:
            raise HTTPException(
                status_code=403,
                detail="You do not have permission to perform this action."
            )

        return current_user

    return role_checker


# ======================================================
# Ready To Use Role Dependencies
# ======================================================

require_admin = require_roles([
    Roles.ADMIN
])

require_manager = require_roles([
    Roles.ADMIN,
    Roles.MANAGER
])

require_analyst = require_roles([
    Roles.ADMIN,
    Roles.MANAGER,
    Roles.ANALYST
])

require_warehouse = require_roles([
    Roles.ADMIN,
    Roles.WAREHOUSE_STAFF
])