from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.schemas.dashboard import (
    DashboardSummary,
    LowStockProduct,
    InventoryValue,
    CategorySummary,
    SupplierPerformance
)

from app.services.dashboard_service import (
    fetch_dashboard_summary,
    fetch_low_stock,
    fetch_inventory_value,
    fetch_category_summary,
    fetch_supplier_performance
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get(
    "/summary",
    response_model=DashboardSummary
)
def dashboard_summary(
    db: Session = Depends(get_db)
):

    return fetch_dashboard_summary(db)


@router.get(
    "/low-stock",
    response_model=list[LowStockProduct]
)
def low_stock_products(
    db: Session = Depends(get_db)
):

    return fetch_low_stock(db)

@router.get(
    "/inventory-value",
    response_model=InventoryValue
)
def inventory_value(
    db: Session = Depends(get_db)
):

    return fetch_inventory_value(db)

@router.get(
    "/category-summary",
    response_model=list[CategorySummary]
)
def category_summary(
    db: Session = Depends(get_db)
):

    return fetch_category_summary(db)

@router.get(
    "/supplier-performance",
    response_model=list[SupplierPerformance]
)
def supplier_performance(
    db: Session = Depends(get_db)
):

    return fetch_supplier_performance(db)