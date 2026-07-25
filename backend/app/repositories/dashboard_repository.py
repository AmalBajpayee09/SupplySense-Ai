from sqlalchemy import text
from sqlalchemy.orm import Session


def get_dashboard_summary(db: Session):

    total_products = db.execute(
        text("SELECT COUNT(*) FROM products")
    ).scalar()

    total_inventory = db.execute(
        text("SELECT SUM(current_stock) FROM inventory")
    ).scalar()

    low_stock = db.execute(
        text("""
            SELECT COUNT(*)
            FROM inventory
            WHERE current_stock <= reorder_level
        """)
    ).scalar()

    total_suppliers = db.execute(
        text("SELECT COUNT(*) FROM suppliers")
    ).scalar()

    return {
        "total_products": total_products,
        "total_inventory": total_inventory,
        "low_stock_products": low_stock,
        "total_suppliers": total_suppliers
    }


def get_low_stock_products(db: Session):

    result = db.execute(
        text("""
            SELECT
                p.product_name,
                i.current_stock,
                i.reorder_level
            FROM inventory i
            JOIN products p
                ON i.product_id = p.product_id
            WHERE i.current_stock <= i.reorder_level
            ORDER BY i.current_stock ASC
            LIMIT 10
        """)
    )

    return [dict(row._mapping) for row in result]

def get_inventory_value(db: Session):

    result = db.execute(

        text("""

        SELECT

            SUM(i.current_stock * p.cost_price) AS total_inventory_value

        FROM inventory i

        JOIN products p

            ON i.product_id = p.product_id

        """)

    ).scalar()

    return {

        "total_inventory_value": result

    }
    
def get_category_summary(db: Session):

    result = db.execute(

        text("""

        SELECT

            c.category_name,

            COUNT(DISTINCT p.product_id) AS total_products,

            SUM(i.current_stock) AS total_stock,

            SUM(i.current_stock * p.cost_price) AS inventory_value

        FROM categories c

        JOIN products p

            ON c.category_id = p.category_id

        JOIN inventory i

            ON p.product_id = i.product_id

        GROUP BY c.category_id, c.category_name

        ORDER BY inventory_value DESC

        """)

    )

    return [

        dict(row._mapping)

        for row in result

    ]    
    
def get_supplier_performance(db: Session):

    result = db.execute(

        text("""

        SELECT

            s.supplier_name,

            COUNT(DISTINCT i.product_id) AS products_supplied,

            SUM(i.current_stock) AS total_stock,

            SUM(i.current_stock * p.cost_price) AS inventory_value

        FROM suppliers s

        JOIN inventory i

            ON s.supplier_id = i.supplier_id

        JOIN products p

            ON i.product_id = p.product_id

        GROUP BY s.supplier_id, s.supplier_name

        ORDER BY inventory_value DESC

        """)

    )

    return [

        dict(row._mapping)

        for row in result

    ]    