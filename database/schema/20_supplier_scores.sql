USE supplysense_ai;

CREATE TABLE supplier_scores(

    score_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    supplier_id BIGINT UNSIGNED,

    delivery_score DECIMAL(5,2),

    quality_score DECIMAL(5,2),

    pricing_score DECIMAL(5,2),

    overall_score DECIMAL(5,2),

    evaluated_on DATE,

    CONSTRAINT fk_supplier_score

    FOREIGN KEY(supplier_id)

    REFERENCES suppliers(supplier_id)

);