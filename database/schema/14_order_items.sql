USE supplysense_ai;

CREATE TABLE order_items(

    order_item_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    order_id BIGINT UNSIGNED,

    product_id BIGINT UNSIGNED,

    quantity INT,

    selling_price DECIMAL(10,2),

    CONSTRAINT fk_item_order

    FOREIGN KEY(order_id)

    REFERENCES orders(order_id),

    CONSTRAINT fk_item_product

    FOREIGN KEY(product_id)

    REFERENCES products(product_id)

);