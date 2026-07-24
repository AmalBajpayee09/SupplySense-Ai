USE supplysense_ai;

CREATE TABLE returns(

    return_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    order_id BIGINT UNSIGNED,

    product_id BIGINT UNSIGNED,

    quantity INT,

    return_reason VARCHAR(255),

    return_date DATE,

    refund_amount DECIMAL(10,2),

    CONSTRAINT fk_return_order
    FOREIGN KEY(order_id)
    REFERENCES orders(order_id),

    CONSTRAINT fk_return_product
    FOREIGN KEY(product_id)
    REFERENCES products(product_id)

);