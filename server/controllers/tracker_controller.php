<?php
require_once(dirname(__FILE__)."/../classes/tracker_class.php");
require_once(dirname(__FILE__)."/../classes/curriculum_class.php");

function select_student_courses_in_tracker($user_id, $major, $year_group) {
    $tracker = new tracker_class;

    $run_query = $tracker->select_student_courses_in_tracker($user_id);

    $courses = $tracker->db_fetch_all();

    if(empty($courses)) {
        // insert courses into tracker
        $curriculum_obj = new curriculum_class;
        $run_query_2 = $curriculum_obj->select_curriculum_by_year_group_and_major($year_group, $major);
        $curriculum = $curriculum_obj->db_fetch_one();

        // return $curriculum;

        if(empty($curriculum)) {
            return [
                "response" => false
            ];
        } else {
            $curriculum_id = $curriculum["curriculum_id"];
            $run_query_3 = $curriculum_obj->select_curriculum_details_by_id($curriculum_id);
            $curriculum_details = $curriculum_obj->db_fetch_all();
            foreach($curriculum_details as $course) {
                $insert_into_tracker = $tracker->insert_course_into_tracker($user_id, $course["curriculum_detail_id"]);
            }

            $run_query = $tracker->select_student_courses_in_tracker($user_id);
            $courses = $tracker->db_fetch_all();
        }

    }

    return $courses;
}

function update_course_in_tracker($tracker_id, $completed, $grade_id) {
    $tracker = new tracker_class;

    $run_query = $tracker->update_student_course_in_tracker($tracker_id, $completed, $grade_id);

    if($run_query) {
        return $run_query;
    }else {
        return false;
    }
    
}

function delete_student_courses_in_tracker($user_id) {
    $tracker = new tracker_class;

    $tracker_course_query = $tracker->select_student_courses_in_tracker($user_id);

    $courses = $tracker->db_fetch_all();

    if(!empty($courses)) {

        $run_query = $tracker->delete_student_courses_in_tracker($user_id);

        if($run_query) {
            return $run_query;
        } else {
            return false;
        }

    }

    return true;
  
}