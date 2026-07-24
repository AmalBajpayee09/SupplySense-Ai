/*
===========================================================
Project : SupplySense AI
File    : 16_purchase_orders.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE purchase_orders(

    purchase_order_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    supplier_id BIGINT UNSIGNED NOT NULL,

    warehouse_id BIGINT UNSIGNED NOT NULL,

    order_date DATE,

    expected_delivery DATE,

    total_amount DECIMAL(12,2),

    status ENUM
    (
    'PENDING',
    'APPROVED',
    'RECEIVED',
    'CANCELLED'
    )

    DEFAULT 'PENDING',

    CONSTRAINT fk_po_supplier
    FOREIGN KEY(supplier_id)
    REFERENCES suppliers(supplier_id),

    CONSTRAINT fk_po_warehouse
    FOREIGN KEY(warehouse_id)
    REFERENCES warehouses(warehouse_id)

);