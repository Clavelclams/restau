<?php
include('db_connect.php');
include('DAO.php');

try {
    $dao = new DAO($db);

    echo "Testing getAllPlats method:<br>";
    $plats = $dao->getAllPlats();
    print_r($plats);

    echo "<br>Testing addPlat method:<br>";
    $dao->addPlat('Test Plat', 'Description du plat de test', 10.99, 1);
    echo "Plat ajouté.<br>";

    echo "<br>Testing getPlatById method:<br>";
    $id = $db->lastInsertId();
    $plat = $dao->getPlatById($id);
    print_r($plat);

    echo "<br>Testing updatePlat method:<br>";
    $dao->updatePlat($id, 'Updated Test Plat', 'Updated description', 12.99, 1);
    $updatedPlat = $dao->getPlatById($id);
    print_r($updatedPlat);

    echo "<br>Testing deletePlat method:<br>";
    $dao->deletePlat($id);
    $deletedPlat = $dao->getPlatById($id);
    if ($deletedPlat === false) {
        echo "Plat supprimé.<br>";
    } else {
        print_r($deletedPlat);
    }

} catch (Exception $e) {
    echo 'Erreur : ' . $e->getMessage();
}
?>
