<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class tracker_class extends db_connection {
    public function insert_course_into_tracker($user_id, $curriculum_detail_id) {
        $sql = "INSERT INTO `curriculum_tracker`(`user_id`, `curriculum_detail_id`, `completed`) VALUES ('$user_id', '$curriculum_detail_id', 0)";
        return $this->db_query($sql);
    }

    public function select_student_courses_in_tracker($user_id) {
        $sql = "SELECT `apps_course`.`course_name`, `apps_course`.`course_unit`, `apps_course`.`course_id`, `curriculum_tracker`.`curriculum_tracker_id`, `curriculum_tracker`.`user_id`, `curriculum_tracker`.`curriculum_detail_id`, `curriculum_tracker`.`completed`, `curriculum_tracker`.`grade_id`, `curriculum_detail`.`student_level`, `curriculum_detail`.`semester_id`, `apps_semester`.`semester_name`, `apps_student_level`.`student_level_name`
        FROM `apps_course`
        INNER JOIN `curriculum_detail`
        ON `apps_course`.`course_id`=`curriculum_detail`.`course_id`
        INNER JOIN `curriculum_tracker`
        ON `curriculum_tracker`.`curriculum_detail_id`=`curriculum_detail`.`curriculum_detail_id`
        INNER JOIN `apps_student_level`
        ON `apps_student_level`.`student_level_id`=`curriculum_detail`.`student_level`
        INNER JOIN `apps_semester`
        ON `apps_semester`.`semester_id`=`curriculum_detail`.`semester_id`
        WHERE `curriculum_tracker`.`user_id`='$user_id'";
        return $this->db_query($sql);
    }

    public function update_student_course_in_tracker($tracker_id, $completed, $grade_id) {

        if(empty($grade_id)) {
            $sql = "UPDATE `curriculum_tracker` SET `completed`='$completed',`grade_id`=NULL WHERE `curriculum_tracker_id` = '$tracker_id'";
        } else {
            $sql = "UPDATE `curriculum_tracker` SET `completed`='$completed',`grade_id`='$grade_id' WHERE `curriculum_tracker_id` = '$tracker_id'";
        }
        
        return $this->db_query($sql);
    }

    public function delete_student_courses_in_tracker($user_id) {

        $sql = "DELETE FROM `curriculum_tracker` WHERE `user_id` ='$user_id'";
        return $this->db_query($sql);
    }


}