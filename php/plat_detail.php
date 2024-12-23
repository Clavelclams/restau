<?php include 'php/header.php';

// Inclure le fichier de connexion à la base de données
include 'php/db_connect.php';

// Vérifier si l'ID du plat est passé en paramètre
if (isset($_GET['id'])) {
    $id = (int)$_GET['id'];

    try {
        // Préparer la requête pour récupérer le plat spécifique
        $query = "SELECT * FROM plat WHERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        // Récupérer le plat
        $plat = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$plat) {
            echo 'Plat non trouvé.';
        }
    } catch (PDOException $e) {
        echo 'Erreur : ' . $e->getMessage();
    }
} else {
    echo 'Aucun plat spécifié.';
}
?>

<?php if ($plat): ?>
    <div class="container">
        <h1><?= htmlspecialchars($plat['nom']); ?></h1>
        <img src="asset/img/<?= htmlspecialchars($plat['image']); ?>" class="img-fluid">
        <p><?= htmlspecialchars($plat['description']); ?></p>
        <p>Prix : <?= htmlspecialchars($plat['prix']); ?> €</p>
    </div>
<?php endif; ?>

<?php include 'php/footer.php'; ?>
