<?php
$db = new PDO('mysql:host=localhost;charset=utf8;dbname=restaurant', 'admin', 'Afpa1234');

try {
    $db = new PDO('mysql:host=localhost;charset=utf8;dbname=restaurant', 'admin', 'Afpa1234');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (Exception $e) {
    echo 'Erreur : ' . $e->getMessage() . '<br />';
    echo 'N° : ' . $e->getCode();
    die('Fin du script');
}
?>