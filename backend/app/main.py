from fastapi import FastAPI

from app.api.products import router as product_router
from app.database.db import test_connection

app = FastAPI(
    title="SupplySense AI",
    version="1.0.0"
)


from contextlib import asynccontextmanager
from fastapi import FastAPI

from app.api.products import router as product_router
from app.database.db import test_connection


@asynccontextmanager
async def lifespan(app: FastAPI):
    test_connection()
    yield
    print("Application Shutting Down...")


app = FastAPI(
    title="SupplySense AI",
    version="1.0.0",
    lifespan=lifespan
)

app.include_router(product_router)


@app.get("/")
def home():
    return {
        "message": "SupplySense AI Backend Running 🚀"
    }

