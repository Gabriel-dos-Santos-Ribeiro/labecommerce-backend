-- Active: 1695681056079@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME()) NOT NULL
);

DROP TABLE users

SELECT * FROM users;

INSERT INTO users(id, name, email, password, created_at)
VALUES('001', 'Gabriel', 'gabrejc@gmail.com', '1234', '' );

INSERT INTO users(id, name, email, password, created_at)
VALUES('004', 'Michele', 'mii@gmail.com', '1234', '')

INSERT INTO users(id, name, email, password, created_at)
VALUES('002', 'Jhow', 'jhowjhow@gmail.com', '1234', '')

UPDATE users SET name='Gertrudis' WHERE id='001'

DELETE from users WHERE id='003'

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

SELECT * FROM products;

INSERT INTO products(id, name, price, description, image_url)
VALUES('prod001', 'Geladeira Philco', 1000, 'Geladeira que Gela!!', '26/09/2023')

INSERT INTO products(id, name, price, description, image_url)
VALUES('prod001', 'Geladeira Philco', 1000, 'Geladeira que Gela!!', 'image1.com')


INSERT INTO products(id, name, price, description, image_url)
VALUES('prod002', 'Torradeira', 2000, 'Item que combina com sua cozinha!!', 'image2.com')

INSERT INTO products(id, name, price, description, image_url)
VALUES('prod003', 'Fogão', 3000, 'Sua cozinha mais completa!!', 'image3.com')

INSERT INTO products(id, name, price, description, image_url)
VALUES('prod004', 'Colchão', 2500, 'Seu sono com qualidade!', 'image4.com')

INSERT INTO products(id, name, price, description, image_url)
VALUES('prod005', 'Play 5', 5000, 'O console do futuro !!', 'image5.com')

UPDATE products SET price=7000 WHERE id='prod005'

DELETE from products WHERE id='prod001'
