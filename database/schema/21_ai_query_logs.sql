/*
===========================================================
Project : SupplySense AI
File    : 21_ai_query_logs.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE ai_query_logs(

    log_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    user_id BIGINT UNSIGNED NOT NULL,

    user_question TEXT NOT NULL,

    generated_sql TEXT,

    execution_time_ms INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_ai_user
    FOREIGN KEY(user_id)
    REFERENCES users(user_id)

);