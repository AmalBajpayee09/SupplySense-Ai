/*
===========================================================
Project     : SupplySense AI
File        : 04_users.sql
Description : Creates users table
===========================================================
*/

USE supplysense_ai;

CREATE TABLE users (

    user_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    tenant_id BIGINT UNSIGNED NOT NULL,

    role_id TINYINT UNSIGNED NOT NULL,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100),

    email VARCHAR(255) NOT NULL UNIQUE,

    password_hash VARCHAR(255) NOT NULL,

    phone VARCHAR(20),

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_user_tenant
        FOREIGN KEY (tenant_id)
        REFERENCES tenants(tenant_id),

    CONSTRAINT fk_user_role
        FOREIGN KEY (role_id)
        REFERENCES roles(role_id)

);


INSERT INTO users
(
tenant_id,
role_id,
first_name,
last_name,
email,
password_hash,
phone
)

VALUES

(
1,
1,
'Amal',
'Bajpayee',
'amal.admin@flipkart.com',
'hashed_password',
'9876543210'
),

(
1,
3,
'Rahul',
'Sharma',
'rahul@flipkart.com',
'hashed_password',
'9999999999'
),

(
2,
2,
'Aman',
'Verma',
'aman@meesho.com',
'hashed_password',
'8888888888'
);