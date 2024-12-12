<?php
echo "pq tu bug 1 <br>";

error_reporting(E_ALL);
ini_set('display_errors', 1);
echo "pq tu bug <br>";

try {
    $db = new PDO('mysql:host=localhost;charset=utf8;dbname=restaurant', 'admin', 'Afpa1234');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie bg !";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
