/*
===========================================================
Project : SupplySense AI
File    : 12_customers.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE customers(

    customer_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    tenant_id BIGINT UNSIGNED NOT NULL,

    first_name VARCHAR(100),

    last_name VARCHAR(100),

    email VARCHAR(255),

    phone VARCHAR(20),

    city VARCHAR(100),

    state VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_customer_tenant
    FOREIGN KEY(tenant_id)
    REFERENCES tenants(tenant_id)

);
INSERT INTO customers
(
tenant_id,
first_name,
last_name,
email,
phone,
city,
state
)

VALUES

(1,'Amit','Sharma','amit@gmail.com','9999991111','Delhi','Delhi'),

(1,'Priya','Verma','priya@gmail.com','9999992222','Mumbai','Maharashtra'),

(2,'Rohit','Singh','rohit@gmail.com','9999993333','Bangalore','Karnataka');