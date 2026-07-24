USE supplysense_ai;

CREATE TABLE warehouses (

    warehouse_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    tenant_id BIGINT UNSIGNED NOT NULL,

    warehouse_name VARCHAR(150) NOT NULL,

    city VARCHAR(100),

    state VARCHAR(100),

    capacity INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_warehouse_tenant
    FOREIGN KEY (tenant_id)
    REFERENCES tenants(tenant_id)

);

INSERT INTO warehouses
(
tenant_id,
warehouse_name,
city,
state,
capacity
)

VALUES

(1,'Delhi Warehouse','Delhi','Delhi',50000),

(1,'Mumbai Warehouse','Mumbai','Maharashtra',40000),

(2,'Bangalore Warehouse','Bangalore','Karnataka',30000);