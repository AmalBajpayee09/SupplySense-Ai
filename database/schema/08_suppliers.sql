/*
===========================================================
Project : SupplySense AI
File    : 08_suppliers.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE suppliers (

    supplier_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    tenant_id BIGINT UNSIGNED NOT NULL,

    supplier_name VARCHAR(150) NOT NULL,

    contact_person VARCHAR(100),

    email VARCHAR(255),

    phone VARCHAR(20),

    city VARCHAR(100),

    country VARCHAR(100),

    rating DECIMAL(3,2) DEFAULT 5.00,

    status ENUM('ACTIVE','INACTIVE')
    DEFAULT 'ACTIVE',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_supplier_tenant
    FOREIGN KEY (tenant_id)
    REFERENCES tenants(tenant_id)

);

INSERT INTO suppliers
(tenant_id,supplier_name,contact_person,email,phone,city,country)

VALUES

(1,'Samsung India','Rahul Singh','contact@samsung.com','9876543210','Noida','India'),

(1,'Apple India','Amit Sharma','apple@india.com','9876500000','Mumbai','India'),

(2,'Boat Lifestyle','Rohan Gupta','boat@india.com','9999999999','Delhi','India');