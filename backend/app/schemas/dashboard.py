from pydantic import BaseModel


class DashboardSummary(BaseModel):

    total_products: int

    total_inventory: int

    low_stock_products: int

    total_suppliers: int
    
class LowStockProduct(BaseModel):

    product_name: str

    current_stock: int

    reorder_level: int
    
class InventoryValue(BaseModel):

    total_inventory_value: float   
    
class CategorySummary(BaseModel):

    category_name: str

    total_products: int

    total_stock: int

    inventory_value: float   
    
    
class SupplierPerformance(BaseModel):

    supplier_name: str

    products_supplied: int

    total_stock: int

    inventory_value: float      