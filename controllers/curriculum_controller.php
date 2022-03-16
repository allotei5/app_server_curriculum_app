<?php

use LDAP\Result;

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

function select_course_type() {
    $course_type = new curriculum_class;

    $run_query = $course_type->select_course_type();

    if($run_query){
        return $course_type->db_fetch_all();
    }else{
        return false;
    }
}

function select_student_level() {
    $student_level = new curriculum_class;

    $run_query = $student_level->select_student_level();

    if($run_query){
        return $student_level->db_fetch_all();
    }else{
        return false;
    }
}
function select_semesters() {
    $semester = new curriculum_class;

    $run_query = $semester->select_semesters();

    if($run_query){
        return $semester->db_fetch_all();
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

function select_curriculum_by_year_group_and_major($year_group_id, $major_id){
    $curriculum = new curriculum_class;

    $run_query = $curriculum->select_curriculum_by_year_group_and_major($year_group_id, $major_id);

    if($run_query){
        return $curriculum->db_fetch_one();
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

function select_one_curriculum_and_its_details($curriculum_id){
    $curriculum = new curriculum_class;

    $run_query = $curriculum->select_one_curriculum_by_id($curriculum_id);

    if($run_query){
        $result = $curriculum->db_fetch_one();

        //new curriculum details object
        $curriculum_details = new curriculum_class;
        $run_query_2  = $curriculum_details->select_curriculum_details_by_id($curriculum_id);
        if($run_query_2){
            $result["courses"] = $curriculum_details->db_fetch_all();
            return $result;
        }
    }
    return false;
}

function select_one_curriculum_and_its_details_formatted($curriculum_id){
    $curriculum = new curriculum_class;

    $run_query = $curriculum->select_curriculum_details_by_id($curriculum_id);

    if($run_query) {
        $courses = $curriculum->db_fetch_all();
        $result = [];
        foreach($courses as $course) {
            $result[$course["student_level_name"]][$course["semester_name"]][] = $course;
        }

    }

    return $result;
}



function edit_curriculum($curriculum_id, $year_group_id, $major_id){
    $curriculum = new curriculum_class;

    $run_query = $curriculum->edit_curriculum($curriculum_id, $year_group_id, $major_id);
    if($run_query){
        return $run_query;
    }else{
        return false;
    }
}

function edit_curriculum_details($curriculum_detail_id, $level_id, $semester_id, $course_id, $course_type){
    $curriculum = new curriculum_class;

    for($i=0; $i<count($curriculum_detail_id); $i++){
        $run_query = $curriculum->edit_curriculum_details($curriculum_detail_id[$i], $level_id[$i], $semester_id[$i], $course_id[$i], $course_type[$i]);
    }

    if($run_query){
        return $run_query;
    }else{
        return false;
    }
}


function select_major_by_id($id){
    $major = new curriculum_class;

    $run_query = $major->select_major_by_id($id);

    if($run_query) {
        return $major->db_fetch_one();
    }else{
        return false;
    }
}

function select_year_group_by_id($id){
    $year_group = new curriculum_class;

    $run_query = $year_group->select_year_group_by_id($id);

    if($run_query) {
        return $year_group->db_fetch_one();
    }else{ 
        return false;
    }
}


function select_student_major_and_year_group($student_id) {
    $student_object = new curriculum_class;

    $run_query = $student_object->select_student_major_and_year_group($student_id);

    if($run_query){
        return $student_object->db_fetch_one();
    }else {
        return false;
    }
}

function select_users_courses_in_curriculum($student_id) {
    $object = new curriculum_class;

    $run_query = $object->select_users_courses_in_curriculum($student_id);

    if($run_query) {
        $details = $object->db_fetch_all();
        if(empty($details)) {
            return false;
        }else{
            return $details;
        }
    }
}