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

-- Table AdresseClient (relation plusieurs-à-plusieurs)
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
