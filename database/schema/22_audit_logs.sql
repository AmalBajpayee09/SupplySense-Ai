/*
===========================================================
Project : SupplySense AI
File    : 22_audit_logs.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE audit_logs(

    audit_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT UNSIGNED,

    action VARCHAR(100),

    table_name VARCHAR(100),

    record_id BIGINT,

    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_audit_user
    FOREIGN KEY(user_id)
    REFERENCES users(user_id)

);