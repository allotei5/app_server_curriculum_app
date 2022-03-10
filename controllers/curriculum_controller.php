<?php
require_once(dirname(__FILE__)."/../classes/curriculum_class.php");

function select_year_groups(){
    // new object
    $year_group = new curriculum_class;

    // run query
    $run_query = $year_group->select_year_groups();

    if($run_query){
        return $year_group->db_fetch_all();
    }else{
        return false;
    }
}

function select_majors() {
    $majors = new curriculum_class;

    $run_query = $majors->select_majors();

    if($run_query){
        return $majors->db_fetch_all();
    }else{
        return false;
    }
}

function select_all_curriculum() {
    $curriculum = new curriculum_class;

    $run_query = $curriculum->select_all_curriculum();

    if($run_query){
        return $curriculum->db_fetch_all();
    }else{
        return false;
    }
}

function select_curriculum_details_by_id($curriculum_id){
    $curriculum = new curriculum_class;

    $run_query = $curriculum->select_curriculum_details_by_id($curriculum_id);

    if($run_query){
        return $curriculum->db_fetch_all();
    }else{
        return false;
    }
}

function duplicate_curriculum($curriculum_id){
    $curriculum = new curriculum_class;

    $run_query = $curriculum->duplicate_curriculum($curriculum_id);

    if($run_query){
        return $run_query;
    }else{
        return false;
    }
}

function duplicate_curriculum_details($old_curriculum_id, $new_curriculum_id){
    $old_curriculum = select_curriculum_details_by_id($old_curriculum_id);

    $curriculum = new curriculum_class;
    foreach($old_curriculum as $new_curriculum){
        $run_query = $curriculum->duplicate_curriculum_details($new_curriculum_id, $new_curriculum["student_level"], $new_curriculum["semester_id"], $new_curriculum["course_id"], $new_curriculum["course_type"]);
    }
    if($run_query){
        return true;
    }else{
        return false;
    }

    
}