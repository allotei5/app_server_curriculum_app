<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class course_class extends db_connection {
    public function select_all_courses() {
        $sql = "SELECT * FROM `app_server_course`";

        return $this->db_query($sql);
    }

    public function select_one_course($id){
        $sql = "SELECT * FROM `app_server_course` WHERE `course_id`='$id'";

        return $this->db_query($sql);
    }

    public function search_for_a_course($course_name){
        $sql = "SELECT * FROM `app_server_course` WHERE  `course_name` like '$course_name'";
        return $this->db_query($sql);
    }
}