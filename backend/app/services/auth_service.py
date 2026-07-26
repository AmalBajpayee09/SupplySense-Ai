from sqlalchemy.orm import Session

from app.models.user import User

from app.core.security import (
    hash_password,
    verify_password
)

from app.core.auth import (
    create_access_token
)


def register_user(
    request,
    db: Session
):

    existing = (
        db.query(User)
        .filter(
            User.email == request.email
        )
        .first()
    )

    if existing:

        raise ValueError(
            "Email already exists."
        )

    user = User(

        tenant_id=request.tenant_id,

        role_id=request.role_id,

        first_name=request.first_name,

        last_name=request.last_name,

        email=request.email,

        password_hash=hash_password(
            request.password
        ),

        phone=request.phone

    )

    db.add(user)

    db.commit()

    db.refresh(user)

    return user


def login_user(
    request,
    db: Session
):

    user = (
        db.query(User)
        .filter(
            User.email == request.email
        )
        .first()
    )

    if not user:

        raise ValueError(
            "Invalid email or password."
        )

    if not verify_password(
        request.password,
        user.password_hash
    ):

        raise ValueError(
            "Invalid email or password."
        )

    if not user.is_active:

        raise ValueError(
            "User account is inactive."
        )

    access_token = create_access_token(

        {

            "user_id": user.user_id,

            "tenant_id": user.tenant_id,

            "role_id": user.role_id,

            "email": user.email

        }

    )

    return {

        "access_token": access_token,

        "token_type": "bearer",

        "user": {

            "user_id": user.user_id,

            "tenant_id": user.tenant_id,

            "role_id": user.role_id,

            "first_name": user.first_name,

            "last_name": user.last_name,

            "email": user.email

        }

    }