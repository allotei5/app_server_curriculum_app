<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class course_class extends db_connection {
    public function select_all_courses() {
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_dept`, `apps_course`.`course_type`, `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_min_grade`, `apps_department`.`department_name`, `apps_course_type`.`course_type_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_department` ON `apps_course`.`course_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_course_type` ON `apps_course`.`course_type` = `apps_course_type`.`course_type_id`
        INNER JOIN `apps_grade_breakdown` ON `apps_course`.`course_min_grade` = `apps_grade_breakdown`.`grade_id`";
        return $this->db_query($sql);
    }

    public function select_all_courses_by_type($course_type) {
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_dept`, `apps_course`.`course_type`, `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_min_grade`, `apps_department`.`department_name`, `apps_course_type`.`course_type_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_department` ON `apps_course`.`course_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_course_type` ON `apps_course`.`course_type` = `apps_course_type`.`course_type_id`
        INNER JOIN `apps_grade_breakdown` ON `apps_course`.`course_min_grade` = `apps_grade_breakdown`.`grade_id`
 		WHERE `apps_course_type`.`course_type_id`='$course_type'";
        
        return $this->db_query($sql);
    }

    public function select_all_course_types() {
        $sql = "SELECT * FROM `apps_course_type`";
        return $this->db_query($sql);
    }
    
    public function select_one_course($id){
        $sql = "SELECT * FROM `apps_course` WHERE `course_id`='$id'";

        return $this->db_query($sql);
    }

    public function search_for_a_course($course_name){
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_grade_breakdown`
        ON `apps_course`.`course_min_grade`= `apps_grade_breakdown`.`grade_id`
        WHERE  `course_name` like '$course_name'";
        return $this->db_query($sql);
    }

    public function select_course_prerequisites($id) {
        $sql = "SELECT `curriculum_pre_requisite`.`pre_requisite_id`, `curriculum_pre_requisite`.`pre_requisite_course`, `apps_grade_breakdown`.`grade_letter`, `curriculum_pre_requisite`.`min_grade`, `apps_course`.`course_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `curriculum_pre_requisite`
        INNER JOIN `apps_course` ON `curriculum_pre_requisite`.`pre_requisite_course`=`apps_course`.`course_id`
        INNER JOIN `apps_grade_breakdown` ON `curriculum_pre_requisite`.`min_grade`=`apps_grade_breakdown`.`grade_id`
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