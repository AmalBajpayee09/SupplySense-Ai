USE supplysense_ai;

CREATE TABLE shipments(

    shipment_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    order_id BIGINT UNSIGNED,

    warehouse_id BIGINT UNSIGNED,

    shipment_date DATE,

    expected_delivery DATE,

    shipment_status ENUM
    (
    'PACKED',
    'SHIPPED',
    'DELIVERED'
    ),

    courier_name VARCHAR(100),

    tracking_number VARCHAR(100),

    CONSTRAINT fk_ship_order

    FOREIGN KEY(order_id)

    REFERENCES orders(order_id),

    CONSTRAINT fk_ship_warehouse

    FOREIGN KEY(warehouse_id)

    REFERENCES warehouses(warehouse_id)

);