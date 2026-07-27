from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.products import router as product_router
from app.api.inventory import router as inventory_router
from app.api.dashboard import router as dashboard_router

from app.database.db import test_connection
from app.api.ai import router as ai_router
from app.api.forecast import router as forecast_router
from app.database.db import Base, engine
import app.models
from app.api.auth import router as auth_router
from fastapi.middleware.cors import CORSMiddleware
from app.api.category import router as category_router
from app.api.brand import router as brand_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    test_connection()
    yield
    print("Application Shutting Down...")

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SupplySense AI",
    version="1.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(product_router)
app.include_router(inventory_router)
app.include_router(dashboard_router)
app.include_router(ai_router)
app.include_router(forecast_router)
app.include_router(auth_router)
app.include_router(category_router)
app.include_router(brand_router)
@app.get("/")
def home():
    return {
        "message": "SupplySense AI Backend Running 🚀"
    }
    