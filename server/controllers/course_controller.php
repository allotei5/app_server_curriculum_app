<?php

require_once(dirname(__FILE__)."/../classes/course_class.php");

function select_all_courses() {
    // new instance
    $courses = new course_class;

    // run query
    $run_query = $courses->select_all_courses();

    if($run_query){
        $coursesFromDB = $courses->db_fetch_all();
        $result = [];
        foreach($coursesFromDB as $course) {
            $course_prerequisites_query = $courses->select_course_prerequisites($course["course_id"]);
            $course["prerequisites"] = $courses->db_fetch_all();
            array_push($result, $course);
        }
        return $result;
    }else {
        return false;
    }
}

function select_courses_by_name($course_name) {
    $courses = new course_class;

    $name = '%'.$course_name.'%';
    // run query
    $run_query = $courses->select_courses_by_name($name);

    if($run_query){
        $coursesFromDB = $courses->db_fetch_all();
        $result = [];
        foreach($coursesFromDB as $course) {
            $course_prerequisites_query = $courses->select_course_prerequisites($course["course_id"]);
            $course["prerequisites"] = $courses->db_fetch_all();
            array_push($result, $course);
        }
        return $result;
    }else {
        return false;
    }
}

function select_all_courses_by_department($department) {
    $courses = new course_class;

    $run_query = $courses->select_all_courses_by_department($department);

    if($run_query) {
        return $courses->db_fetch_all();
    } else {
        return false;
    }

}

function select_all_courses_formatted_by_type($course_type) {
    $course = new course_class;

    $run_query = $course->select_all_courses_by_type($course_type);

    if($run_query) {
        return $course->db_fetch_all();
        
    }else {
        return false;
    }
}

function select_all_course_types() {
    $course = new course_class;
    $run_query = $course->select_all_course_types();

    if($run_query) {
        return $course->db_fetch_all();
        
    }else {
        return false;
    }
}

function select_all_grades() {
    // new instance
    $courses = new course_class;

    // run query
    $run_query = $courses->select_all_grades();

    if($run_query){
        return $courses->db_fetch_all();
    }else {
        return false;
    }
}

function select_grade_by_id($id) {
    // create object
    $grades = new course_class;

    // run query
    $run_query = $grades->select_grade_by_id($id);

    if($run_query){
        return $grades->db_fetch_one();
    }else{
        return false;
    }
}

function select_one_course($id){
    // new instance
    $course = new course_class;

    // run query
    $run_query = $course->select_one_course($id);

    if($run_query){
        $result = $course->db_fetch_one();
        $run_query_2 = $course->select_course_prerequisites($id);
        $result["prerequisites"] = $course->db_fetch_all();
        return $result;
    }else{
        return false;
    }
}

function add_new_course($dept, $code, $name, $unit, $grade, $user) {
    $course = new course_class;

    // run query
    $run_query = $course->add_new_course($dept, $code, $name, $unit, $grade, $user);

    if($run_query) {
        return $run_query;
    } else {
        return false;
    }
}

function update_course($id, $dept, $code, $name, $unit, $grade) {
    $course = new course_class;

    // run query
    $run_query = $course->update_course($id, $dept, $code, $name, $unit, $grade);

    if($run_query) {
        return $run_query;
    } else {
        return false;
    }
}