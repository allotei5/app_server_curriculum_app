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

    public function select_all_students($start) {
        
        $sql = "SELECT * FROM `apps_users`
        LEFT JOIN `apps_student`
        	ON `apps_users`.`user_id`=`apps_student`.`apps_user_id`
        LEFT JOIN `apps_department`
        	ON `apps_student`.`student_dept` = `apps_department`.`department_id`
        LEFT JOIN `apps_year_group`
        	ON `apps_student`.`student_year_group` = `apps_year_group`.`year_group_id`
        LEFT JOIN `apps_major`
        	ON `apps_student`.`student_major` = `apps_major`.`major_id` WHERE `apps_users`.`user_role`=4 LIMIT $start, 20";

        return $this->db_query($sql);
    }

    public function search_student($name) {
        $sql = "SELECT * FROM `apps_users`
        LEFT JOIN `apps_student`
        	ON `apps_users`.`user_id`=`apps_student`.`apps_user_id`
        LEFT JOIN `apps_department`
        	ON `apps_student`.`student_dept` = `apps_department`.`department_id`
        LEFT JOIN `apps_year_group`
        	ON `apps_student`.`student_year_group` = `apps_year_group`.`year_group_id`
        LEFT JOIN `apps_major`
        	ON `apps_student`.`student_major` = `apps_major`.`major_id`
        WHERE (`apps_users`.`user_fname` LIKE '$name' OR `apps_users`.`user_lname` LIKE '$name') AND `apps_users`.`user_role`=4
        ";
        return $this->db_query($sql);
    }

    public function count_all_students() {
        $sql = "SELECT count(`user_fname`) as `nums` FROM `apps_users`
        LEFT JOIN `apps_student`
        	ON `apps_users`.`user_id`=`apps_student`.`apps_user_id`
        LEFT JOIN `apps_department`
        	ON `apps_student`.`student_dept` = `apps_department`.`department_id`
        LEFT JOIN `apps_year_group`
        	ON `apps_student`.`student_year_group` = `apps_year_group`.`year_group_id`
        LEFT JOIN `apps_major`
        	ON `apps_student`.`student_major` = `apps_major`.`major_id` WHERE `apps_users`.`user_role`=4";

        return $this->db_query($sql);
    }

    public function select_one_student_details($user_id) {
        $sql = "SELECT `apps_student`.`student_id`, `apps_student`.`student_dept`, `apps_department`.`department_name`, `apps_student`.`student_year_group`, `apps_year_group`.`year_group_name`, `apps_student`.`student_major`, `apps_major`.`major_name`, `apps_users`.`user_id`, `apps_users`.`user_fname`, `apps_users`.`user_lname`, `apps_users`.`user_email`
        FROM `apps_student`
        INNER JOIN `apps_users` ON `apps_student`.`apps_user_id` = `apps_users`.`user_id`
        INNER JOIN `apps_department` ON `apps_student`.`student_dept` = `apps_department`.`department_id`
        INNER JOIN `apps_year_group` ON `apps_student`.`student_year_group` = `apps_year_group`.`year_group_id`
        INNER JOIN `apps_major` ON `apps_student`.`student_major` = `apps_major`.`major_id`
        WHERE `apps_student`.`apps_user_id`='$user_id'";

        return $this->db_query($sql);
    }

    public function update_student_details($user_id, $student_id, $student_dept, $student_year_group, $student_major) {
        $sql = "UPDATE `apps_student` SET `student_id`='$student_id',`student_dept`='$student_dept',`student_year_group`='$student_year_group',`student_major`='$student_major' WHERE `apps_user_id`='$user_id'";
        return $this->db_query($sql);
    }

    public function insert_student_details($user_id, $student_id, $student_dept, $student_year_group, $student_major){
        $sql = "INSERT INTO `apps_student`(`apps_user_id`, `student_id`, `student_dept`, `student_year_group`, `student_major`) VALUES ('$user_id','$student_id','$student_dept','$student_year_group','$student_major')";
        return $this->db_query($sql);
    }
}