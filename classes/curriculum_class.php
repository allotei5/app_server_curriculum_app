<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class curriculum_class extends db_connection {
    public function select_year_groups(){
        $sql = "SELECT * FROM `app_server_year_group`";
        return $this->db_query($sql);
    }

    public function select_majors(){
        $sql = "SELECT * FROM `app_server_major`";
        return $this->db_query($sql);
    }

    public function select_student_level(){
        $sql = "SELECT * FROM `app_server_student_level`";
        return $this->db_query($sql);
    }

    public function select_course_type(){
        $sql = "SELECT * FROM `app_server_course_type`";
        return $this->db_query($sql);
    }

    public function select_semesters() {
        $sql = "SELECT * FROM `app_server_semester`";
        return $this->db_query($sql);
    }

    public function select_all_curriculum() {
        $sql = "SELECT `app_server_year_group`.`year_group_name`, `app_server_major`.`major_code`, `curriculum_curriculum`.`lastupdate`, `curriculum_curriculum`.`curriculum_id`
        FROM `curriculum_curriculum`
        INNER JOIN `app_server_year_group` ON `curriculum_curriculum`.`year_group`=`app_server_year_group`.`year_group_id`
        INNER JOIN `app_server_major` ON `curriculum_curriculum`.`major_id`=`app_server_major`.`major_id`";

        return $this->db_query($sql);
    }

    public function select_one_curriculum_by_id($curriculum_id){
        $sql = "SELECT `app_server_year_group`.`year_group_name`,`curriculum_curriculum`.`major_id`, `curriculum_curriculum`.`year_group`, `app_server_major`.`major_code`, `curriculum_curriculum`.`lastupdate`, `curriculum_curriculum`.`curriculum_id`
        FROM `curriculum_curriculum`
        INNER JOIN `app_server_year_group` ON `curriculum_curriculum`.`year_group`=`app_server_year_group`.`year_group_id`
        INNER JOIN `app_server_major` ON `curriculum_curriculum`.`major_id`=`app_server_major`.`major_id` 
        WHERE `curriculum_curriculum`.`curriculum_id`='$curriculum_id'";
        return $this->db_query($sql);
    }

    public function select_curriculum_details_by_id($curriculum_id){
        $sql = "SELECT `curriculum_detail`.`curriculum_detail_id`, `curriculum_detail`.`curriculum_id`, `curriculum_detail`.`semester_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`course_id`, `curriculum_detail`.`course_type`, `app_server_student_level`.`student_level_name`, `app_server_semester`.`semester_name`, `app_server_course`.`course_name`, `app_server_course_type`.`course_type_name` 
        FROM `curriculum_detail`
        INNER JOIN `app_server_student_level` ON `curriculum_detail`.`student_level`=`app_server_student_level`.`student_level_id`
        INNER JOIN `app_server_semester` ON `curriculum_detail`.`semester_id`=`app_server_semester`.`semester_id`
        INNER JOIN `app_server_course` ON `curriculum_detail`.`course_id`=`app_server_course`.`course_id`
        INNER JOIN `app_server_course_type` ON `curriculum_detail`.`course_type`=`app_server_course_type`.`course_type_id`
        WHERE `curriculum_id`='$curriculum_id'";
        return $this->db_query($sql);
    }

    public function duplicate_curriculum($curriculum_id){
        $sql = "INSERT INTO `curriculum_curriculum`(`year_group`, `major_id`, `user_id`)
        SELECT `year_group`, `major_id`, `user_id`
        FROM `curriculum_curriculum`
        WHERE `curriculum_id`='$curriculum_id'";

        return $this->db_query_id($sql);
    }

    public function duplicate_curriculum_details($curriculum_id, $student_level, $semester_id, $course_id, $course_type){
        $sql = "INSERT INTO `curriculum_detail`(`curriculum_id`, `student_level`, `semester_id`, `course_id`, `course_type`) 
        VALUES ('$curriculum_id', '$student_level', '$semester_id', '$course_id', '$course_type')";
        return $this->db_query_id($sql);
    }

    public function edit_curriculum($curriculum_id, $year_group_id, $major_id){
        // open db connection
        $this->db_connect();

        // apply mysqli escape string
        $curriculum_id = mysqli_real_escape_string($this->db, $curriculum_id);
        $year_group_id = mysqli_real_escape_string($this->db, $year_group_id);
        $major_id = mysqli_real_escape_string($this->db, $major_id);

        $sql = "UPDATE `curriculum_curriculum` SET `year_group`='$year_group_id',`major_id`='$major_id', `lastupdate`=NOW() WHERE `curriculum_id`='$curriculum_id'";
        return $this->db_query_escape_string($sql);
    }

    public function edit_curriculum_details($curriculum_detail_id, $level_id, $semester_id, $course_id, $course_type){
        // open db connection
        $this->db_connect();

        // apply mysqli escape string
        $curriculum_detail_id = mysqli_escape_string($this->db, $curriculum_detail_id);
        $level_id = mysqli_escape_string($this->db, $level_id);
        $semester_id = mysqli_escape_string($this->db, $semester_id);
        $course_id = mysqli_escape_string($this->db, $course_id);
        $course_type = mysqli_escape_string($this->db, $course_type);
        
        $sql = "UPDATE `curriculum_detail` SET `student_level`='$level_id',`semester_id`='$semester_id',`course_id`='$course_id',`course_type`='$course_type' WHERE `curriculum_detail_id`='$curriculum_detail_id'";
        return $this->db_query_escape_string($sql);
    }
}