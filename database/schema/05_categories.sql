/*
===========================================================
Project : SupplySense AI
File    : 05_categories.sql
===========================================================
*/

USE supplysense_ai;

CREATE TABLE categories(

    category_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    category_name VARCHAR(100) NOT NULL UNIQUE,

    description VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO categories(category_name,description)

VALUES

('Electronics','Electronic Products'),

('Fashion','Clothing & Fashion'),

('Home & Kitchen','Kitchen Products'),

('Beauty','Beauty Products'),

('Sports','Sports Items');