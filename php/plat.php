<?php
// Inclure le fichier header
include 'php/header.php';

// Inclure le fichier de connexion à la base de données
include 'php/db_connect.php';

try {
    // Préparer la requête pour récupérer les plats
    $query = "SELECT * FROM plat";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    // Récupérer tous les plats
    $plats = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo 'Erreur : ' . $e->getMessage();
}

?>

<div class="container">
    <h1>Nos Plats</h1>
    <div class="row section-categorie d-flex">
        <?php foreach ($plats as $plat): ?>
            <div class="col-md-2 card position-relative cate">
                <a href="plat.php?id=<?= htmlspecialchars($plat['id']); ?>">
                    <img src="asset/img/<?= htmlspecialchars($plat['image']); ?>" class="img-fluid margin-card card">
                    <p class="position-absolute top-50 start-50 translate-middle text-break text-plat">
                        <?= htmlspecialchars($plat['nom']); ?>
                    </p>
                </a>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<?php
// Inclure le fichier footer
include 'php/footer.php';
?>
