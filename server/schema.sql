create database chat;

USE chat;

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Text VARCHAR(255)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL PRIMARY KEY,
  user VARCHAR(255)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

