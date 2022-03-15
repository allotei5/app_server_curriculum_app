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

function select_one_course($id){
    // new instance
    $course = new course_class;

    // run query
    $run_query = $course->select_one_course($id);

    if($run_query){
        return $course->db_fetch_one();
    }else{
        return false;
    }
}