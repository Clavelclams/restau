<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Début du script <br>";

try {
    echo "Avant la connexion <br>";
    $db = new PDO('mysql:host=localhost;charset=utf8;dbname=restaurant', 'admin', 'Afpa1234');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie bg !";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}

echo "Fin du script <br>";


?>
