/*
===========================================================
Project     : SupplySense AI
File        : 02_roles.sql
Description : Creates roles table
===========================================================
*/

USE supplysense_ai;

CREATE TABLE roles (

    role_id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    role_name VARCHAR(50) NOT NULL,

    description VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uq_role_name UNIQUE(role_name)

);

INSERT INTO roles(role_name, description)
VALUES
('ADMIN','Full system access'),
('MANAGER','Business operations'),
('ANALYST','Analytics and reporting'),
('WAREHOUSE_STAFF','Warehouse operations');

