/*
===========================================================
Project : SupplySense AI
File    : 24_stored_procedures.sql
===========================================================
*/

USE supplysense_ai;

DELIMITER $$

CREATE PROCEDURE GetLowStockProducts()

BEGIN

SELECT

p.product_name,

w.warehouse_name,

i.current_stock,

i.reorder_level

FROM inventory i

JOIN products p

ON i.product_id=p.product_id

JOIN warehouses w

ON i.warehouse_id=w.warehouse_id

WHERE i.current_stock<=i.reorder_level;

END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE GetTopSuppliers()

BEGIN

SELECT

s.supplier_name,

ss.overall_score

FROM supplier_scores ss

JOIN suppliers s

ON ss.supplier_id=s.supplier_id

ORDER BY overall_score DESC;

END $$

DELIMITER ;


DELIMITER $$

CREATE PROCEDURE TotalSales()

BEGIN

SELECT

SUM(total_amount) AS total_sales

FROM orders

WHERE order_status='DELIVERED';

END $$

DELIMITER ;