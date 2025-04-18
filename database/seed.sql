---------------------------------------------------------------------------------
--
-- CRÉATION DES TABLES de la BD
--
---------------------------------------------------------------------------------

-- Table Client
CREATE TABLE Client (
    idClient SERIAL PRIMARY KEY,
    permEmprunt VARCHAR(50),
    nom VARCHAR(100)
);

-- Table Adresse
CREATE TABLE Adresse (
    idAdresse SERIAL PRIMARY KEY,
    rue VARCHAR(255),
    ville VARCHAR(100),
    code VARCHAR(20),
    pays VARCHAR(100)
);

-- Table AdresseClient
CREATE TABLE AdresseClient (
    idClient INT,
    idAdresse INT,
    PRIMARY KEY (idClient, idAdresse),
    FOREIGN KEY (idClient) REFERENCES Client(idClient) ON DELETE CASCADE,
    FOREIGN KEY (idAdresse) REFERENCES Adresse(idAdresse) ON DELETE CASCADE
);

-- Table Livre
CREATE TABLE Livre (
    isbn VARCHAR(20) PRIMARY KEY,
    titre VARCHAR(255),
    genre VARCHAR(50),
    auteur VARCHAR(100),
    nbExemplaire INT
);

-- Table StatutEmprunt
CREATE TABLE StatutEmprunt (
    statutEmprunt VARCHAR(50) PRIMARY KEY
);

-- Table StatutCommande
CREATE TABLE StatutCommande (
    statutCommande VARCHAR(50) PRIMARY KEY
);

-- Table Commande
CREATE TABLE Commande (
    idCommande SERIAL PRIMARY KEY,
    isbn VARCHAR(20),
    idClient INT,
    statutCommande VARCHAR(50),
    dateCommande DATE,
    dateDispo DATE,
    dateLimiteRetrait DATE,
    FOREIGN KEY (isbn) REFERENCES Livre(isbn),
    FOREIGN KEY (idClient) REFERENCES Client(idClient),
    FOREIGN KEY (statutCommande) REFERENCES StatutCommande(statutCommande)
);

-- Table RangCommande
CREATE TABLE RangCommande (
    idCommande INT,
    isbn VARCHAR(20),
    rang INT,
    PRIMARY KEY (idCommande, isbn),
    FOREIGN KEY (idCommande) REFERENCES Commande(idCommande) ON DELETE CASCADE,
    FOREIGN KEY (isbn) REFERENCES Livre(isbn)
);

-- Table Emprunte
CREATE TABLE Emprunte (
    idEmprunt SERIAL PRIMARY KEY,
    isbn VARCHAR(20),
    idClient INT,
    statutEmprunt VARCHAR(50),
    dateEmprunt DATE,
    dateLimiteRetour DATE,
    FOREIGN KEY (isbn) REFERENCES Livre(isbn),
    FOREIGN KEY (idClient) REFERENCES Client(idClient),
    FOREIGN KEY (statutEmprunt) REFERENCES StatutEmprunt(statutEmprunt)
);




--------------------------------------------------------------------------------
--
-- POPULATION DES TABLES
--
---------------------------------------------------------------------------------

-- Insertion dans Client
INSERT INTO Client (idClient, permEmprunt, nom) VALUES
(1, 'PERM0001', 'Client_1'),
(2, 'PERM0002', 'Client_2'),
(3, 'PERM0003', 'Client_3'),
(4, 'PERM0004', 'Client_4'),
(5, 'PERM0005', 'Client_5'),
(6, 'PERM0006', 'Client_6'),
(7, 'PERM0007', 'Client_7'),
(8, 'PERM0008', 'Client_8'),
(9, 'PERM0009', 'Client_9'),
(10, 'PERM0010', 'Client_10');

-- Insertion dans Adresse
INSERT INTO Adresse (idAdresse, rue, ville, code, pays) VALUES
(1, '1 rue Exemple', 'Ville_1', 'H0001', 'Canada'),
(2, '2 rue Exemple', 'Ville_2', 'H0002', 'Canada'),
(3, '3 rue Exemple', 'Ville_3', 'H0003', 'Canada'),
(4, '4 rue Exemple', 'Ville_4', 'H0004', 'Canada'),
(5, '5 rue Exemple', 'Ville_0', 'H0005', 'Canada'),
(6, '6 rue Exemple', 'Ville_1', 'H0006', 'Canada'),
(7, '7 rue Exemple', 'Ville_2', 'H0007', 'Canada'),
(8, '8 rue Exemple', 'Ville_3', 'H0008', 'Canada'),
(9, '9 rue Exemple', 'Ville_4', 'H0009', 'Canada'),
(10, '10 rue Exemple', 'Ville_0', 'H0010', 'Canada');

-- Insertion dans AdresseClient
INSERT INTO AdresseClient (idClient, idAdresse) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- Insertion dans Livre
INSERT INTO Livre (isbn, titre, genre, auteur, nbExemplaire) VALUES
('ISBN0001', 'Titre_1', 'Roman', 'Auteur_1', 6),
('ISBN0002', 'Titre_2', 'Science', 'Auteur_2', 9),
('ISBN0003', 'Titre_3', 'Roman', 'Auteur_3', 2),
('ISBN0004', 'Titre_4', 'Histoire', 'Auteur_4', 7),
('ISBN0005', 'Titre_5', 'Roman', 'Auteur_5', 8),
('ISBN0006', 'Titre_6', 'Histoire', 'Auteur_6', 3),
('ISBN0007', 'Titre_7', 'Science', 'Auteur_7', 6),
('ISBN0008', 'Titre_8', 'Roman', 'Auteur_8', 1),
('ISBN0009', 'Titre_9', 'Science', 'Auteur_9', 4),
('ISBN0010', 'Titre_10', 'Roman', 'Auteur_10', 7);

-- Insertion dans StatutEmprunt
INSERT INTO StatutEmprunt (statutEmprunt) VALUES
('en_cours'),
('retourne'),
('retard');

-- Insertion dans StatutCommande
INSERT INTO StatutCommande (statutCommande) VALUES
('en_attente'),
('disponible'),
('recuperee');

-- Insertion dans Commande
INSERT INTO Commande (idCommande, isbn, idClient, statutCommande, dateCommande, dateDispo, dateLimiteRetrait) VALUES
(1, 'ISBN0002', 1, 'recuperee', '2025-04-15', '2025-04-16', '2025-04-22'),
(2, 'ISBN0003', 2, 'en_attente', '2025-04-13', '2025-04-15', '2025-04-22'),
(3, 'ISBN0004', 3, 'disponible', '2025-04-11', '2025-04-14', '2025-04-22'),
(4, 'ISBN0005', 4, 'en_attente', '2025-04-09', '2025-04-13', '2025-04-22'),
(5, 'ISBN0006', 5, 'recuperee', '2025-04-07', '2025-04-12', '2025-04-22'),
(6, 'ISBN0007', 6, 'disponible', '2025-04-05', '2025-04-11', '2025-04-22'),
(7, 'ISBN0008', 7, 'en_attente', '2025-04-03', '2025-04-10', '2025-04-22'),
(8, 'ISBN0009', 8, 'recuperee', '2025-04-01', '2025-04-09', '2025-04-22'),
(9, 'ISBN0010', 9, 'disponible', '2025-03-30', '2025-04-08', '2025-04-22'),
(10, 'ISBN0001', 10, 'en_attente', '2025-03-28', '2025-04-07', '2025-04-22');

-- Insertion dans RangCommande
INSERT INTO RangCommande (idCommande, isbn, rang) VALUES
(1, 'ISBN0002', 3),
(2, 'ISBN0003', 1),
(3, 'ISBN0004', 2),
(4, 'ISBN0005', 5),
(5, 'ISBN0006', 1),
(6, 'ISBN0007', 2),
(7, 'ISBN0008', 4),
(8, 'ISBN0009', 1),
(9, 'ISBN0010', 2),
(10, 'ISBN0001', 3);

-- Insertion dans Emprunte
INSERT INTO Emprunte (idEmprunt, isbn, idClient, statutEmprunt, dateEmprunt, dateLimiteRetour) VALUES
(1, 'ISBN0002', 1, 'retourne', '2025-03-27', '2025-04-29'),
(2, 'ISBN0003', 2, 'en_cours', '2025-03-18', '2025-04-22'),
(3, 'ISBN0004', 3, 'retard', '2025-04-12', '2025-05-06'),
(4, 'ISBN0005', 4, 'en_cours', '2025-03-08', '2025-04-22'),
(5, 'ISBN0006', 5, 'retourne', '2025-04-07', '2025-05-07'),
(6, 'ISBN0007', 6, 'retard', '2025-04-09', '2025-05-01'),
(7, 'ISBN0008', 7, 'retourne', '2025-03-18', '2025-05-01'),
(8, 'ISBN0009', 8, 'en_cours', '2025-04-05', '2025-05-05'),
(9, 'ISBN0010', 9, 'retard', '2025-04-11', '2025-05-01'),
(10, 'ISBN0001', 10, 'en_cours', '2025-03-30', '2025-05-03');