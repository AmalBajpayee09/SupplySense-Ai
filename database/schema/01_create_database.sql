/*
===========================================================
Project     : SupplySense AI
File        : 01_create_database.sql
Version     : 1.0
Author      : Amal Bajpayee
Description :
Creates the SupplySense AI database.
===========================================================
*/

-- Delete old database (Development only)
DROP DATABASE IF EXISTS supplysense_ai;

-- Create database
CREATE DATABASE supplysense_ai
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Use database
USE supplysense_ai;

-- Verify
SELECT DATABASE() AS current_database;