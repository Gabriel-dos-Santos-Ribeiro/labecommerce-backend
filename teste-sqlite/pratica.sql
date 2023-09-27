-- Active: 1695681056079@@127.0.0.1@3306


CREATE TABLE books (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL
); 
-- SEMPRE COLOCAR PONTO E VIRGULA NO FINAL ASSIM QUE CRIAR UMA TABELA

SELECT * FROM books;

PRAGMA table_info(books)

DROP TABLE books

INSERT INTO books (id, name, author, page_count, price) 
VALUES ('8503012928', 'O Quinze', 'Rachel de Queiroz', 208, 24.85)

INSERT INTO books (id, name, author, price)
VALUES('8578887239', 'Dom Casmurro', 'Machado de Assis', 46.77)

INSERT INTO books (id, name , author,page_count, price)
VALUES('8578887249','Sitio do Pica-Pau Amarelo', 'Monteiro Lobato', 200, 150.00)

UPDATE books SET page_count=463 WHERE id='8578887239'

UPDATE books SET author='Gabrielzin' WHERE id='8578887239'

UPDATE books SET name='A volta dos que não foram' WHERE id='8578887239'

DELETE from books WHERE id='8503012928 '


-- CRIANDO TABELA
CREATE TABLE tarefas (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    tarefa1 TEXT NOT NULL,
    tarefa2 TEXT NOT NULL,
    tarefa3 TEXT NOT NULL
); 

-- VISUALISANDO A TABELA
SELECT * FROM tarefas

-- INSERINDO VALORES NA TABELA
INSERT INTO tarefas (id, tarefa1, tarefa2, tarefa3)
VALUES ('T001', 'Arrumar a casa', 'Ler e-mails', 'Estudar')

INSERT INTO tarefas (id, tarefa1, tarefa2, tarefa3)
VALUES ('T002', 'Dar banho no dog', 'pagar a internet', 'Academia')

INSERT INTO tarefas (id, tarefa1, tarefa2, tarefa3)
VALUES ('T003', 'Sair com namorada', 'Fazer compras', 'Dever de casa')

-- DELETANDO A TABELA TODA
DROP TABLE  tarefas

-- EDITANDO DADOS DA TABELA
UPDATE tarefas SET tarefa1='Cortar o cabelo' WHERE id='T001'

-- DELETANDO DADOS DA TABELA
DELETE from tarefas WHERE id='T002'