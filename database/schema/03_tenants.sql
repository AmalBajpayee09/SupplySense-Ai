/*
===========================================================
Project     : SupplySense AI
File        : 03_tenants.sql
Description : Creates tenants table
===========================================================
*/

USE supplysense_ai;

CREATE TABLE tenants (

    tenant_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    company_name VARCHAR(150) NOT NULL,

    company_code VARCHAR(50) NOT NULL UNIQUE,

    industry VARCHAR(100),

    country VARCHAR(100),

    contact_email VARCHAR(255) UNIQUE,

    status ENUM('ACTIVE','INACTIVE')
    DEFAULT 'ACTIVE',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

);

INSERT INTO tenants
(
company_name,
company_code,
industry,
country,
contact_email
)

VALUES

('Flipkart','flipkart','E-Commerce','India','admin@flipkart.com'),

('Meesho','meesho','E-Commerce','India','admin@meesho.com'),

('Blinkit','blinkit','Quick Commerce','India','admin@blinkit.com');
