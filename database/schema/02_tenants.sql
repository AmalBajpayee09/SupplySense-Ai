

  USE supplysense_ai;



CREATE TABLE tenants (

    tenant_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    company_name VARCHAR(150) NOT NULL,

    company_code VARCHAR(50) NOT NULL,

    industry VARCHAR(100),

    subscription_plan VARCHAR(50) NOT NULL DEFAULT 'Basic',

    country VARCHAR(100) NOT NULL,

    timezone VARCHAR(100) NOT NULL DEFAULT 'Asia/Kolkata',

    currency VARCHAR(10) NOT NULL DEFAULT 'INR',

    contact_email VARCHAR(255) NOT NULL,

    contact_phone VARCHAR(20),

    status ENUM('ACTIVE','INACTIVE','SUSPENDED')
        NOT NULL DEFAULT 'ACTIVE',

    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    deleted_at TIMESTAMP NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    created_by VARCHAR(100) DEFAULT 'SYSTEM',

    updated_by VARCHAR(100) DEFAULT 'SYSTEM',

    CONSTRAINT uq_company_code UNIQUE(company_code),

    CONSTRAINT uq_contact_email UNIQUE(contact_email)

);


INSERT INTO tenants
(
company_name,
company_code,
industry,
subscription_plan,
country,
timezone,
currency,
contact_email,
contact_phone
)

VALUES

(
'Flipkart',
'flipkart',
'E-Commerce',
'Enterprise',
'India',
'Asia/Kolkata',
'INR',
'admin@flipkart.com',
'9876543210'
),

(
'Meesho',
'meesho',
'E-Commerce',
'Pro',
'India',
'Asia/Kolkata',
'INR',
'admin@meesho.com',
'9999999999'
),

(
'Blinkit',
'blinkit',
'Quick Commerce',
'Enterprise',
'India',
'Asia/Kolkata',
'INR',
'admin@blinkit.com',
'8888888888'
);

