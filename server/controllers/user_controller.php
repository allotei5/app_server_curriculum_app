<?php
require_once(dirname(__FILE__)."/../classes/user_class.php");

function get_user_details($user_id) {
    $user = new user_class;

    $run_query = $user->select_user_details($user_id);

    if($run_query) {
        $user_details = $user->db_fetch_one();
        // check if user is student
        if($user_details['user_role'] == 4) {
            // fetch and add student details
            $run_query_2 = $user->select_student_details($user_id);
            if($run_query_2) {
                $user_details['student_details'] = $user->db_fetch_one();
            }
        }

        return $user_details;
    }
}