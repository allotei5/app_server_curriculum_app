<?php
require_once(dirname(__FILE__)."/../settings/db_class.php");

class user_class extends db_connection {
    public function select_user_details($user_id) {
        $sql = "SELECT `user_id`, `user_fname`, `user_lname`, `user_role` FROM `apps_users` WHERE `user_id`='$user_id'";
        return $this->db_query($sql);
    }

    public function select_student_details($user_id) {
        $sql = "SELECT `apps_student`.`student_id`, `apps_student`.`student_dept`, `apps_department`.`department_name`, `apps_student`.`student_year_group`, `apps_year_group`.`year_group_name`, `apps_student`.`student_major`, `apps_major`.`major_name`
        FROM `apps_student`
        INNER JOIN `apps_department` ON `apps_student`.`student_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_year_group` ON `apps_student`.`student_year_group` = `apps_year_group`.`year_group_id`
        INNER JOIN `apps_major` ON `apps_student`.`student_major` = `apps_major`.`major_id`
        WHERE `apps_student`.`apps_user_id`='$user_id'";
        return $this->db_query($sql);
    }
}