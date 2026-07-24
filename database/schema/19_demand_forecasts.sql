USE supplysense_ai;

CREATE TABLE demand_forecasts(

    forecast_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    product_id BIGINT UNSIGNED,

    forecast_month DATE,

    predicted_demand INT,

    confidence_score DECIMAL(5,2),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_forecast_product

    FOREIGN KEY(product_id)

    REFERENCES products(product_id)

);