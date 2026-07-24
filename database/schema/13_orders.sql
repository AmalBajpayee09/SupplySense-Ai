USE supplysense_ai;

CREATE TABLE orders(

    order_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    customer_id BIGINT UNSIGNED NOT NULL,

    order_date DATE,

    total_amount DECIMAL(10,2),

    payment_method VARCHAR(50),

    order_status ENUM
    (
    'PLACED',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED'
    )

    DEFAULT 'PLACED',

    CONSTRAINT fk_order_customer

    FOREIGN KEY(customer_id)

    REFERENCES customers(customer_id)

);