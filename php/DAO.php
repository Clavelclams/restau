<?php
include('db_connect.php')
class DAO {
    private $db;
    public function __construct($db) {
        $this->db = $db; 
    }
    public function getAllPlats() {
        $query = "SELECT * FORM plat";
    }
    
}



?>
