USE supplysense_ai;

CREATE TABLE purchase_order_items(

    purchase_order_item_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    purchase_order_id BIGINT UNSIGNED,

    product_id BIGINT UNSIGNED,

    quantity INT,

    cost_price DECIMAL(10,2),

    CONSTRAINT fk_poi_order
    FOREIGN KEY(purchase_order_id)
    REFERENCES purchase_orders(purchase_order_id),

    CONSTRAINT fk_poi_product
    FOREIGN KEY(product_id)
    REFERENCES products(product_id)

);