<?php
include('db_connect.php');

class DAO {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllPlats() {
        $sql = "SELECT * FROM plat";
        $requete = $this->db->query($sql);
        return $requete->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getPlatById($id) {
        $sql = "SELECT * FROM plat WHERE id_plat = :id";
        $requete = $this->db->prepare($sql);
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        $requete->execute();
        return $requete->fetch(PDO::FETCH_ASSOC);
    }

    public function addPlat($nom, $description, $prix, $id_categorie) {
        $sql = "INSERT INTO plat (nom_plat, description_plat, prix, id_categorie) VALUES (:nom, :description, :prix, :id_categorie)";
        $requete = $this->db->prepare($sql);
        $requete->bindParam(':nom', $nom);
        $requete->bindParam(':description', $description);
        $requete->bindParam(':prix', $prix);
        $requete->bindParam(':id_categorie', $id_categorie);
        $requete->execute();
    }

    public function updatePlat($id, $nom, $description, $prix, $id_categorie) {
        $sql = "UPDATE plat SET nom_plat = :nom, description_plat = :description, prix = :prix, id_categorie = :id_categorie WHERE id_plat = :id";
        $requete = $this->db->prepare($sql);
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        $requete->bindParam(':nom', $nom);
        $requete->bindParam(':description', $description);
        $requete->bindParam(':prix', $prix);
        $requete->bindParam(':id_categorie', $id_categorie);
        $requete->execute();
    }

    public function deletePlat($id) {
        $sql = "DELETE FROM plat WHERE id_plat = :id";
        $requete = $this->db->prepare($sql);
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        $requete->execute();
    }
}
?>


