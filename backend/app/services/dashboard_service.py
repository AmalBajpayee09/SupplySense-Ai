from sqlalchemy.orm import Session

from app.repositories.dashboard_repository import (
    get_dashboard_summary,
    get_low_stock_products,
    get_inventory_value,
    get_category_summary,
    get_supplier_performance
)


def fetch_dashboard_summary(db: Session):

    return get_dashboard_summary(db)


def fetch_low_stock(db: Session):

    return get_low_stock_products(db)


def fetch_inventory_value(db: Session):

    return get_inventory_value(db)


def fetch_category_summary(db: Session):

    return get_category_summary(db)


def fetch_supplier_performance(db: Session):

    return get_supplier_performance(db)


# -----------------------------
# NEW COMBINED SERVICE
# -----------------------------

def fetch_complete_dashboard(db: Session):

    return {

        "summary": fetch_dashboard_summary(db),

        "inventory_value": fetch_inventory_value(db),

        "low_stock": fetch_low_stock(db),

        "category_summary": fetch_category_summary(db),

        "supplier_performance": fetch_supplier_performance(db)

    }