<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class prerequisite_class extends db_connection {
    public function add_new_prerequisite($course_id, $prerequisite_course_id, $min_grade_id){
        $sql = "INSERT INTO `curriculum_pre_requisite`(`course_id`, `pre_requisite_course`, `min_grade`) VALUES ('$course_id', '$prerequisite_course_id', '$min_grade_id')";

        return $this->db_query_id($sql);
    }

    public function remove_prerequisite($id){
        $sql = "DELETE FROM `curriculum_pre_requisite` WHERE `pre_requisite_id`='$id'";
        return $this->db_query($sql);
    }

    public function select_prerequisites_of_one_course($course_id){
        $sql = "SELECT `app_server_course`.`course_id`, `app_server_course`.`course_code`, `app_server_course`.`course_unit`, `app_server_course`.`course_name`, `app_server_course`.`course_min_grade`
        FROM `app_server_course`
        INNER JOIN `curriculum_pre_requisite`
        ON `app_server_course`.`course_id` = `curriculum_pre_requisite`.`course_id`
        WHERE `app_server_course`.`course_id`='$course_id'
        ";
        return $this->db_query($sql);
    }


}