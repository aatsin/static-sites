CREATE TABLE IF NOT EXISTS undiapersempre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TINYTEXT NOT NULL,
    surname TINYTEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    child TINYINT NOT NULL,
    menu TEXT NOT NULL,
    song TEXT,
);