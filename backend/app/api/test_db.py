from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.database.db import get_db

router = APIRouter(
    prefix="/test",
    tags=["Database Test"]
)


@router.get("/")
def test_database(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT DATABASE();"))
    database_name = result.scalar()

    return {
        "status": "success",
        "database": database_name,
        "message": "Database Connected Successfully 🚀"
    }