<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class course_class extends db_connection {
    /**
     * It returns a list of all courses in the database.
     * 
     * @return The result of the query.
     */
    public function select_all_courses() {
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_dept`, `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_min_grade`, `apps_department`.`department_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_department` ON `apps_course`.`course_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_grade_breakdown` ON `apps_course`.`course_min_grade` = `apps_grade_breakdown`.`grade_id`";
        return $this->db_query($sql);
    }

    public function select_courses_by_name($course_name) {
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_dept`, `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_min_grade`, `apps_department`.`department_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_department` ON `apps_course`.`course_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_grade_breakdown` ON `apps_course`.`course_min_grade` = `apps_grade_breakdown`.`grade_id`
        WHERE `apps_course`.`course_name` LIKE '$course_name'
        ";
        return $this->db_query($sql);
    }

    /**
     * It returns all courses of a given type.
     * 
     * @param course_type 1
     * 
     * @return The query result.
     */
    public function select_all_courses_by_type($course_type) {
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_dept`, `apps_course`.`course_type`, `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_min_grade`, `apps_department`.`department_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_department` ON `apps_course`.`course_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_course_type` ON `apps_course`.`course_type` = `apps_course_type`.`course_type_id`
        INNER JOIN `apps_grade_breakdown` ON `apps_course`.`course_min_grade` = `apps_grade_breakdown`.`grade_id`
 		WHERE `apps_course_type`.`course_type_id`='$course_type'";
        
        return $this->db_query($sql);
    }

    public function select_all_courses_by_department($department) {
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_dept`, `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_min_grade`, `apps_department`.`department_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_department` ON `apps_course`.`course_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_grade_breakdown` ON `apps_course`.`course_min_grade` = `apps_grade_breakdown`.`grade_id`
 		WHERE `apps_course`.`course_dept`='$department'";
        
        return $this->db_query($sql);
    }

    /**
     * Select all course types from the apps_course_type table.
     * 
     * @return The query result.
     */
    public function select_all_course_types() {
        $sql = "SELECT * FROM `apps_course_type`";
        return $this->db_query($sql);
    }
    
    public function select_one_course($id){
        $sql = "SELECT `apps_course`.`course_id`, `apps_course`.`course_dept`,  `apps_course`.`course_code`, `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_min_grade`, `apps_department`.`department_name`, `apps_grade_breakdown`.`grade_letter`
        FROM `apps_course`
        INNER JOIN `apps_department` ON `apps_course`.`course_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_grade_breakdown` ON `apps_course`.`course_min_grade` = `apps_grade_breakdown`.`grade_id`
 		WHERE `apps_course`.`course_id`='$id'";

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

    public function add_new_course($dept, $code, $name, $unit, $grade, $user) {
        $sql = "INSERT INTO `apps_course`(`course_dept`, `course_code`, `course_name`, `course_unit`, `course_min_grade`, `user_id`, `lastupdate`) VALUES ('$dept', '$code', '$name', '$unit', '$grade', '$user', NOW())";
        
        return $this->db_query($sql);
    }

    public function update_course($id, $dept, $code, $name, $unit, $grade) {
        $sql = "UPDATE `apps_course` SET `course_dept`='$dept',`course_code`='$code',`course_name`='$name',`course_unit`='$unit',`course_min_grade`='$grade', `lastupdate`=NOW() WHERE `course_id`='$id'";

        return $this->db_query($sql);
    }
}