USE supplysense_ai;

CREATE TABLE inventory (

    inventory_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    product_id BIGINT UNSIGNED NOT NULL,

    warehouse_id BIGINT UNSIGNED NOT NULL,

    supplier_id BIGINT UNSIGNED,

    current_stock INT NOT NULL,

    reserved_stock INT DEFAULT 0,

    reorder_level INT DEFAULT 10,

    last_restocked DATE,

    CONSTRAINT fk_inventory_product
    FOREIGN KEY(product_id)
    REFERENCES products(product_id),

    CONSTRAINT fk_inventory_warehouse
    FOREIGN KEY(warehouse_id)
    REFERENCES warehouses(warehouse_id),

    CONSTRAINT fk_inventory_supplier
    FOREIGN KEY(supplier_id)
    REFERENCES suppliers(supplier_id)

);
INSERT INTO inventory
(product_id,warehouse_id,supplier_id,current_stock,reserved_stock,reorder_level,last_restocked)

VALUES

(1,1,1,120,20,15,'2026-07-15'),

(2,1,2,75,10,12,'2026-07-18'),

(3,3,3,500,35,30,'2026-07-20');
