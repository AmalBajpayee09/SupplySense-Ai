/*
===========================================================
Project : SupplySense AI
File    : 27_interview_queries.sql
===========================================================
*/

USE supplysense_ai;



Query 1 - Total Revenue
SELECT
SUM(total_amount) AS total_revenue
FROM orders
WHERE order_status='DELIVERED';
Query 2 - Monthly Revenue
SELECT

YEAR(order_date) Year,

MONTH(order_date) Month,

SUM(total_amount) Revenue

FROM orders

GROUP BY YEAR(order_date),MONTH(order_date)

ORDER BY Year,Month;
Query 3 - Top 5 Selling Products
SELECT

p.product_name,

SUM(oi.quantity) Total_Sold

FROM order_items oi

JOIN products p

ON oi.product_id=p.product_id

GROUP BY p.product_name

ORDER BY Total_Sold DESC

LIMIT 5;
Query 4 - Product Revenue
SELECT

p.product_name,

SUM(oi.quantity*oi.selling_price) Revenue

FROM order_items oi

JOIN products p

ON oi.product_id=p.product_id

GROUP BY p.product_name

ORDER BY Revenue DESC;
Query 5 - Low Stock Products
SELECT

product_name,

current_stock,

reorder_level

FROM vw_inventory_summary

WHERE current_stock<=reorder_level;
Query 6 - Warehouse Stock
SELECT

warehouse_name,

SUM(current_stock) TotalStock

FROM inventory i

JOIN warehouses w

ON i.warehouse_id=w.warehouse_id

GROUP BY warehouse_name;
Query 7 - Warehouse Utilization
SELECT

warehouse_name,

capacity,

SUM(current_stock) CurrentStock,

ROUND(
SUM(current_stock)*100/capacity,
2
)

UtilizationPercent

FROM warehouses w

JOIN inventory i

ON w.warehouse_id=i.warehouse_id

GROUP BY warehouse_name,capacity;
Query 8 - Top Customers
SELECT

CONCAT(first_name,' ',last_name) Customer,

SUM(total_amount) TotalPurchase

FROM customers c

JOIN orders o

ON c.customer_id=o.customer_id

GROUP BY Customer

ORDER BY TotalPurchase DESC;
Query 9 - Customer Order Count
SELECT

CONCAT(first_name,' ',last_name) Customer,

COUNT(order_id) Orders

FROM customers c

JOIN orders o

ON c.customer_id=o.customer_id

GROUP BY Customer;
Query 10 - Average Order Value
SELECT

ROUND(AVG(total_amount),2)

AverageOrderValue

FROM orders;
Query 11 - Supplier Ranking
SELECT

supplier_name,

overall_score,

DENSE_RANK()

OVER(

ORDER BY overall_score DESC

)

SupplierRank

FROM supplier_scores ss

JOIN suppliers s

ON ss.supplier_id=s.supplier_id;
Query 12 - Best Supplier
SELECT

supplier_name,

overall_score

FROM vw_supplier_performance

ORDER BY overall_score DESC

LIMIT 1;
Query 13 - Purchase Orders Status
SELECT

status,

COUNT(*) Total

FROM purchase_orders

GROUP BY status;
Query 14 - Total Returns
SELECT

COUNT(*) TotalReturns

FROM returns;
Query 15 - Return Amount
SELECT

SUM(refund_amount)

RefundAmount

FROM returns;
Query 16 - Inventory Value
SELECT

SUM(current_stock*cost_price)

InventoryValue

FROM inventory i

JOIN products p

ON i.product_id=p.product_id;
Query 17 - Highest Cost Product
SELECT

product_name,

cost_price

FROM products

ORDER BY cost_price DESC

LIMIT 1;
Query 18 - Highest Selling Product
SELECT

p.product_name,

SUM(quantity)

Sold

FROM order_items oi

JOIN products p

ON oi.product_id=p.product_id

GROUP BY product_name

ORDER BY Sold DESC

LIMIT 1;
Query 19 - Monthly Forecast
SELECT

forecast_month,

SUM(predicted_demand)

Demand

FROM demand_forecasts

GROUP BY forecast_month;
Query 20 - AI Query Performance
SELECT

AVG(execution_time_ms)

AverageExecutionTime

FROM ai_query_logs;
Query 21 - Most Active User
SELECT

u.first_name,

COUNT(a.audit_id)

Activities

FROM audit_logs a

JOIN users u

ON a.user_id=u.user_id

GROUP BY u.first_name

ORDER BY Activities DESC;
Query 22 - Pending Shipments
SELECT

shipment_id,

shipment_status

FROM shipments

WHERE shipment_status<>'DELIVERED';
Query 23 - Revenue by Payment Method
SELECT

payment_method,

SUM(total_amount)

Revenue

FROM orders

GROUP BY payment_method;
Query 24 - Average Supplier Score
SELECT

ROUND(AVG(overall_score),2)

AverageSupplierScore

FROM supplier_scores;
Query 25 - Dashboard KPI Query
SELECT

(SELECT COUNT(*) FROM products) Products,

(SELECT COUNT(*) FROM customers) Customers,

(SELECT COUNT(*) FROM suppliers) Suppliers,

(SELECT SUM(total_amount) FROM orders) Revenue,

(SELECT SUM(current_stock) FROM inventory) TotalStock;