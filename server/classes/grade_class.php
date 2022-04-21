<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class grade_class extends db_connection {
    public function select_all_grades() {
        $sql = "SELECT * FROM `apps_grade_breakdown`";
        return $this->db_query($sql);
    }

    public function select_grade_by_id($id){
        $sql = "SELECT * FROM `apps_grade_breakdown` WHERE `grade_id`='$id'";
        return $this->db_query($sql);
    }
}