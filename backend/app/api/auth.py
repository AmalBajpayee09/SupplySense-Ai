from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.schemas.auth import (
    UserRegister,
    UserResponse,
    LoginRequest,
    TokenResponse
)

from app.services.auth_service import (
    register_user,
    login_user
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=201
)
def register(
    request: UserRegister,
    db: Session = Depends(get_db)
):

    try:

        return register_user(
            request,
            db
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.post(
    "/login",
    response_model=TokenResponse
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db)
):

    try:

        return login_user(
            request,
            db
        )

    except ValueError as e:

        raise HTTPException(
            status_code=401,
            detail=str(e)
        )