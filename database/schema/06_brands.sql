/*
===========================================================
Project : SupplySense AI
File    : 06_brands.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE brands(

    brand_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    brand_name VARCHAR(100) NOT NULL UNIQUE,

    country VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO brands(brand_name,country)

VALUES

('Samsung','South Korea'),

('Apple','USA'),

('Nike','USA'),

('Boat','India'),

('Puma','Germany');