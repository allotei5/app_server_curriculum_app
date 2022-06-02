<?php
require_once(dirname(__FILE__)."/../classes/user_class.php");
require_once(dirname(__FILE__)."/../controllers/tracker_controller.php");

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
                $student_details = $user->db_fetch_one();

                if(empty($student_details)) {
                    return $user_details;
                }

                $user_details['student_details'] = $student_details;
            }
        }

        return $user_details;
    }
}

function update_student_details($user_id, $student_id, $student_dept, $student_year_group, $student_major) {
    $user = new user_class;

    // check if details are already in the table
    $run_query_check_for_student_details = $user->select_student_details($user_id);

    $student_details = $user->db_fetch_one();

    // if student details are empty run insert else run update
    if(empty($student_details)) {

        $run_query_insert = $user->insert_student_details($user_id, $student_id, $student_dept, $student_year_group, $student_major);
        if($run_query_insert) {
            return true;
        } else {
            return false;
        }

    } else {

        $run_query_update = $user->update_student_details($user_id, $student_id, $student_dept, $student_year_group, $student_major);
        if($run_query_update) {
            // delete courses in tracker
            delete_student_courses_in_tracker($user_id);
            return true;
        } else {
            return false;
        }

    }
}