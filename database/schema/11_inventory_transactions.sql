USE supplysense_ai;

CREATE TABLE inventory_transactions (

    transaction_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    inventory_id BIGINT UNSIGNED NOT NULL,

    transaction_type ENUM('IN','OUT','RETURN','ADJUSTMENT'),

    quantity INT NOT NULL,

    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    remarks VARCHAR(255),

    CONSTRAINT fk_inventory_transaction
    FOREIGN KEY(inventory_id)
    REFERENCES inventory(inventory_id)

);
INSERT INTO inventory_transactions
(inventory_id,transaction_type,quantity,remarks)

VALUES

(1,'IN',100,'Initial Stock'),

(1,'OUT',20,'Customer Orders'),

(2,'OUT',5,'Online Sale'),

(3,'RETURN',2,'Returned Product');