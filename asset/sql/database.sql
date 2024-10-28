-- Supprime la base de données si elle existe.
Drop DATABASE IF EXISTS restaurant;


--Création de la base de données.
CREATE DATABASE restaurant;


--Sélection de la base
use restaurant;

--Création de la table utilisateur.
CREATE TABLE utilisateur (
    id_utilisateur INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_prenom VARCHAR(50)
    email VARCHAR(100)
    password VARCHAR(250)
);

--Création de la table categorie.
CREATE TABLE categorie (
    id_categorie INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_categorie (50)

);

-- Création de la table plat.
CREATE TABLE plat (
    id_plat INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_plat VARCHAR (50),
    id_categorie INT,
    prix DECIMAL (id_categorie) REFERENCES categorie(id_categorie)


);

-- Création de la table commande.
CREATE TABLE commande (
    id-commande INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_utilisateur INT,
    date_commande DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

