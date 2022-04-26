<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class curriculum_class extends db_connection {
    public function select_academic_years(){
        $sql = "SELECT * FROM `apps_academic_year`";
        return $this->db_query($sql);
    }

    public function select_semesters() {
        $sql = "SELECT * FROM `apps_semester`";
        return $this->db_query($sql);
    }

    public function select_year_group_by_id($id){
        $sql = "SELECT * FROM `app_server_year_group` WHERE `year_group_id`='$id'";
        return $this->db_query($sql);
    }

    public function select_majors(){
        $sql = "SELECT * FROM `app_server_major`";
        return $this->db_query($sql);
    }

    public function select_major_by_id($id) {
        $sql = "SELECT * FROM `app_server_major` WHERE `major_id`='$id'";
        return $this->db_query($sql);
    }

    public function select_student_level(){
        $sql = "SELECT * FROM `app_server_student_level`";
        return $this->db_query($sql);
    }

    public function select_course_type(){
        $sql = "SELECT * FROM `apps_course_type`";
        return $this->db_query($sql);
    }

    public function select_levels(){
        $sql = "SELECT * FROM `app_server_student_level`";
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
        $sql = "SELECT `curriculum_detail`.`curriculum_detail_id`, `curriculum_detail`.`curriculum_id`, `curriculum_detail`.`semester_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`course_id`, `curriculum_detail`.`course_type`, `apps_student_level`.`student_level_name`, `apps_semester`.`semester_name`, `apps_course`.`course_name`, `apps_course_type`.`course_type_name` 
        FROM `curriculum_detail`
        INNER JOIN `apps_student_level` ON `curriculum_detail`.`student_level`=`apps_student_level`.`student_level_id`
        INNER JOIN `apps_semester` ON `curriculum_detail`.`semester_id`=`apps_semester`.`semester_id`
        INNER JOIN `apps_course` ON `curriculum_detail`.`course_id`=`apps_course`.`course_id`
        INNER JOIN `apps_course_type` ON `curriculum_detail`.`course_type`=`apps_course_type`.`course_type_id`
        WHERE `curriculum_id`='$curriculum_id'";
        return $this->db_query($sql);
    }

    public function add_new_curriculum_detail($curriculum_id, $student_level, $semester_id, $course_id, $course_type) {
        $sql = "INSERT INTO `curriculum_detail`(`curriculum_id`, `student_level`, `semester_id`, `course_id`, `course_type`) VALUES ('$curriculum_id', '$student_level', '$semester_id', '$course_id', '$course_type')";
        return $this->db_query_id($sql);
    }

    public function select_curriculum_detail($id) {
        $sql = "SELECT `curriculum_detail`.`curriculum_detail_id`, `curriculum_detail`.`curriculum_id`, `curriculum_detail`.`semester_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`course_id`, `curriculum_detail`.`course_type`, `apps_student_level`.`student_level_name`, `apps_semester`.`semester_name`, `apps_course`.`course_name`, `apps_course_type`.`course_type_name` 
        FROM `curriculum_detail`
        INNER JOIN `apps_student_level` ON `curriculum_detail`.`student_level`=`apps_student_level`.`student_level_id`
        INNER JOIN `apps_semester` ON `curriculum_detail`.`semester_id`=`apps_semester`.`semester_id`
        INNER JOIN `apps_course` ON `curriculum_detail`.`course_id`=`apps_course`.`course_id`
        INNER JOIN `apps_course_type` ON `curriculum_detail`.`course_type`=`apps_course_type`.`course_type_id`
        WHERE `curriculum_detail_id`='$id'";
        return $this->db_query($sql);
    }

    public function remove_curriculum_detail($id) {
        $sql = "DELETE FROM `curriculum_detail` WHERE `curriculum_detail_id`='$id'";
        return $this->db_query($sql);
    }

    public function select_curriculum_details_by_level_semester_and_id($level_id, $semester_id , $curriculum_id){
        $sql = "SELECT `curriculum_detail`.`curriculum_detail_id`, `curriculum_detail`.`curriculum_id`, `curriculum_detail`.`semester_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`course_id`, `curriculum_detail`.`course_type`, `apps_student_level`.`student_level_name`, `apps_semester`.`semester_name`, `apps_course`.`course_name`, `apps_course_type`.`course_type_name`
        FROM `curriculum_detail`
        INNER JOIN `apps_student_level` ON `curriculum_detail`.`student_level`=`apps_student_level`.`student_level_id`
        INNER JOIN `apps_semester` ON `curriculum_detail`.`semester_id`=`apps_semester`.`semester_id`
        INNER JOIN `apps_course` ON `curriculum_detail`.`course_id`=`apps_course`.`course_id`
        INNER JOIN `apps_course_type` ON `curriculum_detail`.`course_type`=`apps_course_type`.`course_type_id`
        WHERE `student_level`='$level_id' AND `curriculum_id`='$curriculum_id' AND `curriculum_detail`.`semester_id`='$semester_id'";
        return $this->db_query($sql);
    }

    public function select_curriculum_by_year_group_and_major($year_group_id, $major_id){
        $sql = "SELECT `app_server_year_group`.`year_group_name`,`curriculum_curriculum`.`major_id`, `curriculum_curriculum`.`year_group`, `app_server_major`.`major_code`, `curriculum_curriculum`.`lastupdate`, `curriculum_curriculum`.`curriculum_id`
        FROM `curriculum_curriculum`
        INNER JOIN `app_server_year_group` ON `curriculum_curriculum`.`year_group`=`app_server_year_group`.`year_group_id`
        INNER JOIN `app_server_major` ON `curriculum_curriculum`.`major_id`=`app_server_major`.`major_id` 
        WHERE `year_group`='$year_group_id' AND `curriculum_curriculum`.`major_id`='$major_id'";
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

    // curriculum tracking methods
    public function select_users_courses_in_curriculum($user_id) {
        $sql = "SELECT `app_server_course`.`course_name`, `curriculum_track`.`curriculum_track_id`, `curriculum_track`.`curriculum_detail_id`,
        `curriculum_track`.`completed`, `app_server_grade_breakdown`.`grade_id`, `app_server_grade_breakdown`.`grade_letter`, `curriculum_track`.`user_id`
        FROM `app_server_course`
        INNER JOIN `curriculum_detail`
        ON `curriculum_detail`.`course_id`=`app_server_course`.`course_id`
        INNER JOIN `curriculum_track`
        ON `curriculum_track`.`curriculum_detail_id`=`curriculum_detail`.`curriculum_detail_id`
        INNER JOIN `app_server_grade_breakdown`
        ON `app_server_grade_breakdown`.`grade_id`=`curriculum_track`.`grade_id`
        WHERE `curriculum_track`.`user_id`='$user_id'
        ";
        return $this->db_query($sql);
    }

    public function select_student_major_and_year_group($student_id) {
        $sql = "SELECT * FROM `app_server_student` WHERE `app_server_user_id`='$student_id'";
        return $this->db_query($sql);
    }

    public function insert_users_course_in_curriculum($user_id, $curriculum_detail_id, $completed, $grade_id){
        $sql = "INSERT INTO `curriculum_track`(`user_id`, `curriculum_detail_id`, `completed`, `grade_id`) VALUES ('$user_id','$curriculum_detail_id','$completed',IF($grade_id='', NULL, '$grade_id'))";
        return $this->db_query($sql);
        
    }

    public function update_users_course_in_curriculum_tracker($user_id, $curriculum_track_id, $curriculum_detail_id, $completed, $grade_id) {
        //return $this->db_query($sql);
        
        if(empty($grade_id)) {
            $sql = "UPDATE `curriculum_track` SET `curriculum_detail_id`='$curriculum_detail_id',`completed`='$completed',`grade_id`=NULL WHERE `curriculum_track_id`='$curriculum_track_id' AND `user_id`='$user_id'";
        }else{
            $sql = "UPDATE `curriculum_track` SET `curriculum_detail_id`='$curriculum_detail_id',`completed`='$completed',`grade_id`='$grade_id' WHERE `curriculum_track_id`='$curriculum_track_id' AND `user_id`='$user_id'";
        }
        return $this->db_query($sql);
        // echo $sql;
    }

    public function select_student_courses_in_tracker($user_id){
        $sql = "SELECT `app_server_course`.`course_name`, `app_server_course`.`course_unit`, `app_server_course`.`course_id`, `curriculum_track`.`curriculum_track_id`, `curriculum_track`.`user_id`, `curriculum_track`.`curriculum_detail_id`, `curriculum_track`.`completed`, `curriculum_track`.`grade_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`semester_id`, `app_server_semester`.`semester_name`, `app_server_student_level`.`student_level_name`
        FROM `app_server_course`
        INNER JOIN `curriculum_detail`
        ON `app_server_course`.`course_id`=`curriculum_detail`.`course_id`
        INNER JOIN `curriculum_track`
        ON `curriculum_track`.`curriculum_detail_id`=`curriculum_detail`.`curriculum_detail_id`
        INNER JOIN `app_server_student_level`
        ON `app_server_student_level`.`student_level_id`=`curriculum_detail`.`student_level`
        INNER JOIN `app_server_semester`
        ON `app_server_semester`.`semester_id`=`curriculum_detail`.`semester_id`
        WHERE `curriculum_track`.`user_id`='$user_id'";
        return $this->db_query($sql);
    }
    public function select_student_courses_in_tracker_completed($user_id){
        $sql = "SELECT `app_server_course`.`course_name`, `app_server_course`.`course_unit`, `app_server_course`.`course_id`, `curriculum_track`.`curriculum_track_id`, `curriculum_track`.`user_id`, `curriculum_track`.`curriculum_detail_id`, `curriculum_track`.`completed`, `curriculum_track`.`grade_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`semester_id`, `app_server_semester`.`semester_name`, `app_server_student_level`.`student_level_name`, `app_server_grade_breakdown`.`grade_point`
        FROM `app_server_course`
        INNER JOIN `curriculum_detail`
        ON `app_server_course`.`course_id`=`curriculum_detail`.`course_id`
        INNER JOIN `curriculum_track`
        ON `curriculum_track`.`curriculum_detail_id`=`curriculum_detail`.`curriculum_detail_id`
        INNER JOIN `app_server_student_level`
        ON `app_server_student_level`.`student_level_id`=`curriculum_detail`.`student_level`
        INNER JOIN `app_server_semester`
        ON `app_server_semester`.`semester_id`=`curriculum_detail`.`semester_id`
        INNER JOIN `app_server_grade_breakdown`
        ON `app_server_grade_breakdown`.`grade_id` = `curriculum_track`.`grade_id`
        WHERE `curriculum_track`.`user_id`='$user_id'
        AND `curriculum_track`.`completed`=1
        ";
        return $this->db_query($sql);
    }

    public function select_student_courses_in_tracker_uncompleted($user_id){
        $sql = "SELECT `app_server_course`.`course_name`, `app_server_course`.`course_unit`, `app_server_course`.`course_id`, `curriculum_track`.`curriculum_track_id`, `curriculum_track`.`user_id`, `curriculum_track`.`curriculum_detail_id`, `curriculum_track`.`completed`, `curriculum_track`.`grade_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`semester_id`, `app_server_semester`.`semester_name`, `app_server_student_level`.`student_level_name`
        FROM `app_server_course`
        INNER JOIN `curriculum_detail`
        ON `app_server_course`.`course_id`=`curriculum_detail`.`course_id`
        INNER JOIN `curriculum_track`
        ON `curriculum_track`.`curriculum_detail_id`=`curriculum_detail`.`curriculum_detail_id`
        INNER JOIN `app_server_student_level`
        ON `app_server_student_level`.`student_level_id`=`curriculum_detail`.`student_level`
        INNER JOIN `app_server_semester`
        ON `app_server_semester`.`semester_id`=`curriculum_detail`.`semester_id`
        WHERE `curriculum_track`.`user_id`='$user_id'
        AND `curriculum_track`.`completed`=0
        ";
        return $this->db_query($sql);
    }

}