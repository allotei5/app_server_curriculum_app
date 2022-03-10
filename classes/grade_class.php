<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class grade_class extends db_connection {
    public function select_all_grades() {
        $sql = "SELECT * FROM `app_server_grade_breakdown`";
        return $this->db_query($sql);
    }
}