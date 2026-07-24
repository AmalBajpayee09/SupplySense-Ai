/*
===========================================================
Project : SupplySense AI
File    : 07_products.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE products(

    product_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    tenant_id BIGINT UNSIGNED NOT NULL,

    category_id INT UNSIGNED NOT NULL,

    brand_id INT UNSIGNED NOT NULL,

    sku VARCHAR(50) NOT NULL UNIQUE,

    product_name VARCHAR(200) NOT NULL,

    unit_price DECIMAL(10,2) NOT NULL,

    cost_price DECIMAL(10,2) NOT NULL,

    reorder_level INT DEFAULT 10,

    status ENUM('ACTIVE','INACTIVE')
    DEFAULT 'ACTIVE',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_product_tenant
    FOREIGN KEY(tenant_id)
    REFERENCES tenants(tenant_id),

    CONSTRAINT fk_product_category
    FOREIGN KEY(category_id)
    REFERENCES categories(category_id),

    CONSTRAINT fk_product_brand
    FOREIGN KEY(brand_id)
    REFERENCES brands(brand_id)

);

INSERT INTO products
(
tenant_id,
category_id,
brand_id,
sku,
product_name,
unit_price,
cost_price,
reorder_level
)

VALUES

(
1,
1,
1,
'SAM-S24',
'Samsung Galaxy S24',
74999,
63000,
15
),

(
1,
1,
2,
'APP-IP16',
'iPhone 16',
89999,
76000,
12
),

(
2,
1,
4,
'BOAT-AIR',
'Boat Airdopes',
1999,
1200,
30
),

(
3,
5,
5,
'PUMA-RUN',
'Puma Running Shoes',
3999,
2400,
25
);