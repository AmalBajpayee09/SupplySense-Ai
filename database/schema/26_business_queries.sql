SELECT

p.product_name,

SUM(oi.quantity) total_quantity

FROM order_items oi

JOIN products p

ON oi.product_id=p.product_id

GROUP BY p.product_name

ORDER BY total_quantity DESC;



SELECT

p.product_name,

i.current_stock,

i.reorder_level

FROM inventory i

JOIN products p

ON p.product_id=i.product_id

WHERE current_stock<=reorder_level;


SELECT

supplier_name,

overall_score,

RANK()

OVER(

ORDER BY overall_score DESC

)

supplier_rank

FROM supplier_scores ss

JOIN suppliers s

ON ss.supplier_id=s.supplier_id;


SELECT

MONTH(order_date) month_no,

SUM(total_amount) sales

FROM orders

GROUP BY MONTH(order_date);


SELECT

warehouse_name,

SUM(current_stock) total_stock

FROM warehouses w

JOIN inventory i

ON w.warehouse_id=i.warehouse_id

GROUP BY warehouse_name;


SELECT

p.product_name,

SUM

(

oi.quantity*oi.selling_price

)

revenue

FROM order_items oi

JOIN products p

ON oi.product_id=p.product_id

GROUP BY p.product_name

ORDER BY revenue DESC;


SELECT

CONCAT(first_name,' ',last_name) customer,

SUM(total_amount) total_purchase

FROM customers c

JOIN orders o

ON c.customer_id=o.customer_id

GROUP BY customer

ORDER BY total_purchase DESC;


SELECT

purchase_order_id,

status

FROM purchase_orders

WHERE status='PENDING';


SELECT

COUNT(return_id)

total_returns

FROM returns;

SELECT

AVG(overall_score)

average_score

FROM supplier_scores;


