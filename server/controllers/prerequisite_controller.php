<?php

require_once(dirname(__FILE__)."/../classes/prerequisite_class.php");
require_once(dirname(__FILE__)."/../classes/course_class.php");


function add_new_prerequisite($course_id, $prerequisite_course_id, $min_grade_id){
    $prequisite = new prerequisite_class;

    $run_query = $prequisite->add_new_prerequisite($course_id, $prerequisite_course_id, $min_grade_id);

    if($run_query){
        return select_one_prerequisite($run_query);
    }else{
        return false;
    }
}

function select_one_prerequisite($prerequisite_course_id) {
    $prequisite = new prerequisite_class;

    $run_query = $prequisite->select_one_prerequisite($prerequisite_course_id);

    if($run_query) {
        return $prequisite->db_fetch_one();
    }else {
        return false;
    }
}

function remove_prerequisite($id){
    $prequisite = new prerequisite_class;

    $run_query = $prequisite->remove_prerequisite($id);

    if($run_query){
        return $run_query;
    }else{
        return false;
    }
}

function select_one_course_and_its_prerequisites($course_id){
    $prerequisite_object = new prerequisite_class;
    $course_object = new course_class;

    // run query
    $course_run_query = $course_object->select_one_course($course_id);
    if($course_run_query){
        $course = $course_object->db_fetch_one();

        // run prerequisite query
        $prerequisite_run_query = $prerequisite_object->select_prerequisites_of_one_course($course_id);
        if($prerequisite_run_query){
            $course["prerequisites"] = $prerequisite_object->db_fetch_all();
            return $course;
        }else{
            return "pre query went wrong";
        }


    }else{
        return "course query went wrong";
    }
}

function search_for_a_course($course_name){
    $prerequisite_object = new prerequisite_class;
    $course_object = new course_class;

    // run query
    $course_run_query = $course_object->search_for_a_course($course_name);

    $result = [];

    if($course_run_query) {
        while($record = $course_object->db_fetch_one()){
            $prerequisite_object->select_prerequisites_of_one_course($record["course_id"]);
            $record["prerequisites"] = $prerequisite_object->db_fetch_all();
            $result[] = $record;
        }
        return $result;
    }else{
        return false;
    }

}