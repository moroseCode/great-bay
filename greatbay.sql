DROP DATABASE IF EXISTS greatbay;
CREATE DATABASE greatbay;

USE greatbay;

CREATE TABLE items(
  id INT NOT NULL auto_increment,
  price DECIMAL NOT NULL,
  item VARCHAR(45) NOT NULL,
  description VARCHAR(120) NOT NULL,
  name VARCHAR(45) NOT NULL,
  highestBidder VARCHAR(45),
  PRIMARY KEY (id)
);

INSERT INTO items (price, item, description, name, highestBidder)
VALUES (10, "Red Ranger", "Action Figure", "Tony", "Tontizzle");

INSERT INTO items (price, item, description, name, highestBidder)
VALUES (15, "Pink Ranger", "Action Figure", "Bishop", "bFlat");

INSERT INTO items (price, item, description, name, highestBidder)
VALUES (20, "Blue Ranger", "Action Figure", "Matt", "SirFunk");

INSERT INTO items (price, item, description, name, highestBidder)
VALUES (30, "GeForce 1090", "PCI Express III", "RawLock", "All your basses are belong to us");