USE supplysense_ai;

-- =====================================================
-- PART 1 : Categories, Brands & Suppliers
-- =====================================================

/* ---------- Categories ---------- */

INSERT INTO categories (category_name)
SELECT 'Computers'
WHERE NOT EXISTS (
    SELECT 1 FROM categories WHERE category_name='Computers'
);

INSERT INTO categories (category_name)
SELECT 'Accessories'
WHERE NOT EXISTS (
    SELECT 1 FROM categories WHERE category_name='Accessories'
);


/* ---------- Brands ---------- */

INSERT INTO brands (brand_name,country)
SELECT 'Dell','USA'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Dell'
);

INSERT INTO brands (brand_name,country)
SELECT 'HP','USA'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='HP'
);

INSERT INTO brands (brand_name,country)
SELECT 'Lenovo','China'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Lenovo'
);

INSERT INTO brands (brand_name,country)
SELECT 'LG','South Korea'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='LG'
);

INSERT INTO brands (brand_name,country)
SELECT 'Sony','Japan'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Sony'
);

INSERT INTO brands (brand_name,country)
SELECT 'Asus','Taiwan'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Asus'
);

INSERT INTO brands (brand_name,country)
SELECT 'Logitech','Switzerland'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Logitech'
);

INSERT INTO brands (brand_name,country)
SELECT 'TP-Link','China'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='TP-Link'
);

INSERT INTO brands (brand_name,country)
SELECT 'Philips','Netherlands'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Philips'
);

INSERT INTO brands (brand_name,country)
SELECT 'Adidas','Germany'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Adidas'
);

INSERT INTO brands (brand_name,country)
SELECT 'Levis','USA'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Levis'
);

INSERT INTO brands (brand_name,country)
SELECT 'Lakme','India'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Lakme'
);

INSERT INTO brands (brand_name,country)
SELECT 'Nivea','Germany'
WHERE NOT EXISTS(
SELECT 1 FROM brands WHERE brand_name='Nivea'
);


/* ---------- Suppliers ---------- */

INSERT INTO suppliers
(
tenant_id,
supplier_name,
contact_person,
email,
phone,
city,
country,
rating
)
SELECT
1,
'Dell India',
'Aman Verma',
'dell@india.com',
'9876500011',
'Bangalore',
'India',
4.8
WHERE NOT EXISTS(
SELECT 1 FROM suppliers
WHERE supplier_name='Dell India'
);

INSERT INTO suppliers
(
tenant_id,
supplier_name,
contact_person,
email,
phone,
city,
country,
rating
)
SELECT
1,
'HP India',
'Rakesh Sharma',
'hp@india.com',
'9876500012',
'Noida',
'India',
4.7
WHERE NOT EXISTS(
SELECT 1 FROM suppliers
WHERE supplier_name='HP India'
);

INSERT INTO suppliers
(
tenant_id,
supplier_name,
contact_person,
email,
phone,
city,
country,
rating
)
SELECT
1,
'LG Electronics',
'Mohit Jain',
'lg@india.com',
'9876500013',
'Delhi',
'India',
4.9
WHERE NOT EXISTS(
SELECT 1 FROM suppliers
WHERE supplier_name='LG Electronics'
);

INSERT INTO suppliers
(
tenant_id,
supplier_name,
contact_person,
email,
phone,
city,
country,
rating
)
SELECT
1,
'Sony India',
'Vivek Gupta',
'sony@india.com',
'9876500014',
'Mumbai',
'India',
4.8
WHERE NOT EXISTS(
SELECT 1 FROM suppliers
WHERE supplier_name='Sony India'
);

INSERT INTO suppliers
(
tenant_id,
supplier_name,
contact_person,
email,
phone,
city,
country,
rating
)
SELECT
1,
'Logitech India',
'Rohit Kapoor',
'logitech@india.com',
'9876500015',
'Pune',
'India',
4.7
WHERE NOT EXISTS(
SELECT 1 FROM suppliers
WHERE supplier_name='Logitech India'
);

INSERT INTO suppliers
(
tenant_id,
supplier_name,
contact_person,
email,
phone,
city,
country,
rating
)
SELECT
1,
'Philips India',
'Ajay Kumar',
'philips@india.com',
'9876500016',
'Delhi',
'India',
4.9
WHERE NOT EXISTS(
SELECT 1 FROM suppliers
WHERE supplier_name='Philips India'
);

INSERT INTO suppliers
(
tenant_id,
supplier_name,
contact_person,
email,
phone,
city,
country,
rating
)
SELECT
1,
'Puma India',
'Ankit Singh',
'puma@india.com',
'9876500017',
'Gurgaon',
'India',
4.6
WHERE NOT EXISTS(
SELECT 1 FROM suppliers
WHERE supplier_name='Puma India'
);

SELECT 'PART 1 COMPLETED' AS STATUS;


/* ============================================================
   SupplySense AI - Enterprise Demo Data
   PART 2 : Dynamic IDs + Products (Batch 1)
   ============================================================ */

USE supplysense_ai;

-- ============================================================
-- CATEGORY IDS
-- ============================================================

SET @electronics =
(
SELECT category_id
FROM categories
WHERE category_name='Electronics'
LIMIT 1
);

SET @fashion =
(
SELECT category_id
FROM categories
WHERE category_name='Fashion'
LIMIT 1
);

SET @home =
(
SELECT category_id
FROM categories
WHERE category_name='Home & Kitchen'
LIMIT 1
);

SET @beauty =
(
SELECT category_id
FROM categories
WHERE category_name='Beauty'
LIMIT 1
);

SET @sports =
(
SELECT category_id
FROM categories
WHERE category_name='Sports'
LIMIT 1
);

SET @computers =
(
SELECT category_id
FROM categories
WHERE category_name='Computers'
LIMIT 1
);

SET @accessories =
(
SELECT category_id
FROM categories
WHERE category_name='Accessories'
LIMIT 1
);

-- ============================================================
-- BRAND IDS
-- ============================================================

SET @samsung=(SELECT brand_id FROM brands WHERE brand_name='Samsung' LIMIT 1);
SET @apple=(SELECT brand_id FROM brands WHERE brand_name='Apple' LIMIT 1);
SET @boat=(SELECT brand_id FROM brands WHERE brand_name='Boat' LIMIT 1);

SET @dell=(SELECT brand_id FROM brands WHERE brand_name='Dell' LIMIT 1);
SET @hp=(SELECT brand_id FROM brands WHERE brand_name='HP' LIMIT 1);
SET @lenovo=(SELECT brand_id FROM brands WHERE brand_name='Lenovo' LIMIT 1);

SET @lg=(SELECT brand_id FROM brands WHERE brand_name='LG' LIMIT 1);
SET @philips=(SELECT brand_id FROM brands WHERE brand_name='Philips' LIMIT 1);

SET @puma=(SELECT brand_id FROM brands WHERE brand_name='Puma' LIMIT 1);
SET @adidas=(SELECT brand_id FROM brands WHERE brand_name='Adidas' LIMIT 1);

SET @lakme=(SELECT brand_id FROM brands WHERE brand_name='Lakme' LIMIT 1);
SET @nivea=(SELECT brand_id FROM brands WHERE brand_name='Nivea' LIMIT 1);

-- ============================================================
-- PRODUCTS
-- ============================================================

INSERT INTO products
(
tenant_id,
category_id,
brand_id,
sku,
product_name,
unit_price,
cost_price,
reorder_level
)

VALUES

(1,@electronics,@samsung,'SKU1001','Samsung Galaxy S25',999.99,820.00,15),

(1,@electronics,@apple,'SKU1002','iPhone 16 Pro',1299.99,1100.00,10),

(1,@electronics,@boat,'SKU1003','Boat Rockerz 551',69.99,42.00,20),

(1,@computers,@dell,'SKU1004','Dell Inspiron 15',1099.99,890.00,10),

(1,@computers,@hp,'SKU1005','HP Pavilion 15',1049.99,860.00,12),

(1,@computers,@lenovo,'SKU1006','Lenovo ThinkPad E16',1199.99,940.00,10),

(1,@home,@lg,'SKU1007','LG Washing Machine',799.99,620.00,6),

(1,@home,@philips,'SKU1008','Philips Mixer Grinder',149.99,95.00,12),

(1,@sports,@puma,'SKU1009','Puma Running Shoes',129.99,78.00,15),

(1,@sports,@adidas,'SKU1010','Adidas Football',39.99,20.00,30),

(1,@beauty,@lakme,'SKU1011','Lakme Sunscreen SPF50',18.99,9.50,30),

(1,@beauty,@nivea,'SKU1012','Nivea Face Wash',12.99,6.20,35);

SELECT 'PART 2 COMPLETED' AS STATUS;

