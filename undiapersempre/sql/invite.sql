CREATE DATABASE IF NOT EXISTS undiapersempre;
USE undiapersempre;

CREATE TABLE IF NOT EXISTS invite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    adult_kid ENUM('adult', 'kid') NOT NULL,
    comments TEXT,
);