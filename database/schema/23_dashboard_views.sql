USE supplysense_ai;

CREATE VIEW vw_inventory_summary AS

SELECT

p.product_name,

w.warehouse_name,

i.current_stock,

i.reserved_stock,

i.reorder_level

FROM inventory i

JOIN products p
ON i.product_id = p.product_id

JOIN warehouses w
ON i.warehouse_id = w.warehouse_id;



CREATE VIEW vw_sales_summary AS

SELECT

o.order_id,

CONCAT(c.first_name,' ',c.last_name) customer,

o.total_amount,

o.order_status,

o.order_date

FROM orders o

JOIN customers c

ON o.customer_id=c.customer_id;


CREATE VIEW vw_supplier_performance AS

SELECT

s.supplier_name,

ss.delivery_score,

ss.quality_score,

ss.pricing_score,

ss.overall_score

FROM suppliers s

JOIN supplier_scores ss

ON s.supplier_id=ss.supplier_id;

