-- Supprime la base de données si elle existe.
Drop DATABASE IF EXISTS restaurant;


-- Création de la base de données.
CREATE DATABASE restaurant;


-- Sélection de la base
use restaurant;

-- Création de la table utilisateur.
CREATE TABLE utilisateur (
    id_utilisateur INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    tel VARCHAR (20),
    pwd VARCHAR(250) NOT NULL
);

-- Création de la table categorie.
CREATE TABLE categorie (
    id_categorie INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_categorie VARCHAR (50),
    image_categorie VARCHAR (255)
);

-- Création de la table plat.
CREATE TABLE plat (
    id_plat INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_plat VARCHAR(50) NOT NULL,
    description_plat VARCHAR (200),
    prix DECIMAL (10,2),
    image_plat VARCHAR (255),
    id_categorie INT,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
);

-- Création de la table commande.
CREATE TABLE commande (
    id_commande INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_utilisateur INT,
    date_commande DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

-- Données pour la table `utilisateur`.
INSERT INTO utilisateur (nom, prenom, email, tel, pwd) VALUES
('Martin', 'Lucie', 'lucie.martin@exemple.com', '06.XX.XX.XX.XX', 'mot2passe'),
('Bernard', 'Julien', 'julien.bernard@exemple.com', '06.XX.XX.XX.XX', 'monmdp'),
('Kuong', 'Emilie', 'emilie.kuong@exemple.com', '06.XX.XX.XX.XX', 'mdpchiant1234'),
('Petit', 'Sophie', 'sophie.petit@exemple.com', '06.XX.XX.XX.XX', 'lepetitmdp2sophie'),
('Robert', 'Christophe', 'christophe.robert@exemple.com', '06.XX.XX.XX.XX', 'jesuis1mdp_claqué');

-- Données pour la table `categorie`
INSERT INTO categorie (nom_categorie) VALUES
('Variété de Pates'),
('Variété de Burger'),
('Plats Asiatique'),
('Plats végétarien'),
('Grillade et BBQ'),
('Café et Dessert');

-- Données pour la table `plat`
INSERT INTO plat (nom_plat, id_categorie, prix) VALUES
('Tagliatelles à la bolognaise',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Pates'),    12.50),
('Penne alla Vodka',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Pates'),    12.50),
('Raviolis ricotta-épinards',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Pates'),    12.50),
('Linguine aux fruits de mer',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Pates'),    12.50),
('Burger BBQ',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Burger'),    8.50),
('Burger Mushroom Swiss',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Burger'),    8.50),
('Burger Bacon',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Burger'),    8.50),
('Le Sunchao Burger',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Burger'),    8.50),
('Café frappé',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Variété de Burger'),    8.50),
('Cappuccino',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Café et Dessert'),    1.10),
('Affogato',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Café et Dessert'),    1.40),
('Profiteroles au chocolat',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Café et Dessert'),    2.10),
('Ninjago',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Plats Asiatique'),    11.30),
('Salade Niçoise',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Plats végétarien'),    7.30),
('Pizza 4 frommage',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Plats végétarien'),    6.90),
('Brochette de viande',    (SELECT categorie.id_categorie FROM categorie WHERE categorie.nom_categorie = 'Grillade et BBQ'),    9.70);

-- Données pour la table `commande`
INSERT INTO commande (id_utilisateur, date_commande, total) VALUES
((SELECT utilisateur.id_utilisateur FROM utilisateur WHERE utilisateur.email = 'lucie.martin@exemple.com'), '2024-10-29',21.9),
((SELECT utilisateur.id_utilisateur FROM utilisateur WHERE utilisateur.email = 'julien.bernard@exemple.com'), '2024-10-27',38.8),
((SELECT utilisateur.id_utilisateur FROM utilisateur WHERE utilisateur.email = 'emilie.kuong@exemple.com'), '2024-10-20',42.00),
((SELECT utilisateur.id_utilisateur FROM utilisateur WHERE utilisateur.email = 'sophie.petit@exemple.com'), '2024-10-22',34.70),
((SELECT utilisateur.id_utilisateur FROM utilisateur WHERE utilisateur.email = 'christophe.robert@exemple.com'), '2024-10-12',19.40);




