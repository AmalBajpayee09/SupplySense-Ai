USE supplysense_ai;

DELIMITER $$

CREATE TRIGGER trg_inventory_update

BEFORE UPDATE

ON inventory

FOR EACH ROW

BEGIN

SET NEW.last_restocked=CURDATE();

END $$

DELIMITER ;


DELIMITER $$

CREATE TRIGGER trg_inventory_insert

AFTER INSERT

ON inventory

FOR EACH ROW

BEGIN

INSERT INTO audit_logs

(

user_id,

action,

table_name,

record_id

)

VALUES

(

1,

'INSERT',

'inventory',

NEW.inventory_id

);

END $$

DELIMITER ;




