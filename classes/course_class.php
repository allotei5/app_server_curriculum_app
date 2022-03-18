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
        $sql = "SELECT `app_server_course`.`course_id`, `app_server_course`.`course_code`, `app_server_course`.`course_name`, `app_server_course`.`course_unit`, `app_server_grade_breakdown`.`grade_letter`
        FROM `app_server_course`
        INNER JOIN `app_server_grade_breakdown`
        ON `app_server_course`.`course_min_grade`= `app_server_grade_breakdown`.`grade_id`
        WHERE  `course_name` like '$course_name'";
        return $this->db_query($sql);
    }

    public function select_course_prerequisites($id) {
        $sql = "SELECT `curriculum_pre_requisite`.`pre_requisite_id`, `curriculum_pre_requisite`.`pre_requisite_course`, `app_server_grade_breakdown`.`grade_letter`, `curriculum_pre_requisite`.`min_grade`, `app_server_course`.`course_name`, `app_server_grade_breakdown`.`grade_letter`
        FROM `curriculum_pre_requisite`
        INNER JOIN `app_server_course` ON `curriculum_pre_requisite`.`pre_requisite_course`=`app_server_course`.`course_id`
        INNER JOIN `app_server_grade_breakdown` ON `curriculum_pre_requisite`.`min_grade`=`app_server_grade_breakdown`.`grade_id`
        WHERE `curriculum_pre_requisite`.`course_id`='$id'";
        return $this->db_query($sql);
    }

    public function select_all_grades() {
        $sql = "SELECT * FROM `app_server_grade_breakdown`";
        return $this->db_query($sql);
    }

    public function select_grade_by_id($id){
        $sql = "SELECT * FROM `app_server_grade_breakdown` WHERE `grade_id`='$id'";
        return $this->db_query($sql);
    }
}