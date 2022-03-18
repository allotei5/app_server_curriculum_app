<?php

require_once(dirname(__FILE__)."/../classes/grade_class.php");

function select_all_grades() {
    // create object
    $grades = new grade_class;

    // run query
    $run_query = $grades->select_all_grades();

    if($run_query){
        return $grades->db_fetch_all();
    }else{
        return false;
    }
}

function select_grade_by_id($id) {
    // create object
    $grades = new grade_class;

    // run query
    $run_query = $grades->select_grade_by_id($id);

    if($run_query){
        return $grades->db_fetch_one();
    }else{
        return false;
    }
}