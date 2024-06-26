-- Active: 1718788852575@@localhost@3306@destinations
create table countries (id int PRIMARY KEY,name varchar(20));



CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
