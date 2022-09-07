<?php
require_once(dirname(__FILE__)."/../classes/user_class.php");
require_once(dirname(__FILE__)."/../controllers/tracker_controller.php");
require_once(dirname(__FILE__)."/../controllers/user_account_controller.php");

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
        } else if($user_details['user_role'] == 1 || $user_details['user_role'] == 2) {
            // fetch user permissions
            //8 is the app ID
            $permissions = get_user_permission_ctr(8, $user_id);

            if(empty($permissions)) {
                return $user_details;
            }

            $user_details['permissions'] = $permissions;
        }

        return $user_details;
    }
}

function get_student_details($user_id) {
    $student = new user_class;

    $run_query = $student->select_one_student_details($user_id);

    if($run_query) {
        return $student->db_fetch_one();
    } else {
        return false;
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

function get_all_students($start) {
    $students = new user_class;

    $run_query = $students->select_all_students($start);

    if($run_query) {
        return $students->db_fetch_all();
    } else {
        return false;
    }
}

function count_all_students() {
    $students = new user_class;

    $run_query = $students->count_all_students();

    if($run_query) {
        return $students->db_count();
    } else {
        return false;
    }
}

function search_student($name) {
    $students = new user_class;
    $run_query = $students->search_student($name);
    // return $run_query;
    if($run_query) {
        return $students->db_fetch_all();
    } else {
        return false;
    }
}