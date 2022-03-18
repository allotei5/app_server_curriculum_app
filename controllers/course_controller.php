<?php

require_once(dirname(__FILE__)."/../classes/course_class.php");

function select_all_courses() {
    // new instance
    $courses = new course_class;

    // run query
    $run_query = $courses->select_all_courses();

    if($run_query){
        return $courses->db_fetch_all();
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

