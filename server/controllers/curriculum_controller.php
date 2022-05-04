<?php
require_once(dirname(__FILE__)."/../classes/curriculum_class.php");
require_once(dirname(__FILE__)."/./course_controller.php");

function select_academic_years(){
    // new object
    $year_group = new curriculum_class;

    // run query
    $run_query = $year_group->select_academic_years();

    if($run_query){
        return $year_group->db_fetch_all();
    }else{
        return false;
    }
}

function select_year_groups() {
    $year_group = new curriculum_class;

    $run_query = $year_group->select_year_groups();

    if($run_query) {
        return $year_group->db_fetch_all();
    }else {
        return false;
    }
}

function select_curriculums_by_year_group($year_group_id) {
    $year_group = new curriculum_class;

    $run_query = $year_group->select_curriculums_by_year_group($year_group_id);

    if($run_query) {
        return $year_group->db_fetch_all();
    }else {
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

function add_new_curriculum_detail($curriculum_id, $student_level, $semester_id) {
    $course = new course_class;

    $run_query = $course->select_all_courses();

    if($run_query) {
        $result = $course->db_fetch_one();
        $curriculum = new curriculum_class;
        $add_new_course = $curriculum->add_new_curriculum_detail($curriculum_id, $student_level, $semester_id, $result['course_id'], $result['course_type']);
        $new_curriculum_detail = $curriculum->select_curriculum_detail($add_new_course);
        return $curriculum->db_fetch_one();
    } else{
        return false;
    }
}

function remove_curriculum_detail($id) {
    $curriculum = new curriculum_class;

    $run_query = $curriculum->remove_curriculum_detail($id);

    if($run_query) {
        return $run_query;
    }else {
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

function select_curriculum_details_by_level_semester_and_id($level_id, $semester_id , $curriculum_id) {
    $curriculum = new curriculum_class;

    $run_query = $curriculum->select_curriculum_details_by_level_semester_and_id($level_id, $semester_id , $curriculum_id);

    if($run_query) {
        return $curriculum->db_fetch_all();
    }else {
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

    $run_query = $curriculum->edit_curriculum_details($curriculum_detail_id, $level_id, $semester_id, $course_id, $course_type);

    if($run_query) {
        $new_curriculum_detail = $curriculum->select_curriculum_detail($curriculum_detail_id);
        return $curriculum->db_fetch_one();
    }else {
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

// curriculum tracker functions
function insert_users_course_in_curriculum($user_id, $curriculum_detail_id, $completed, $grade_id) {
    $tracker = new curriculum_class;

    $run_query = $tracker->insert_users_course_in_curriculum($user_id, $curriculum_detail_id, $completed, $grade_id);

    if($run_query) {
        return $run_query;
    }else{
        return false;
    }
}

function update_users_course_in_curriculum($user_id, $curriculum_track_id, $curriculum_detail_id, $completed, $grade_id) {
    $tracker = new curriculum_class;

    $run_query = $tracker->update_users_course_in_curriculum_tracker($user_id, $curriculum_track_id, $curriculum_detail_id, $completed, $grade_id);

    if($run_query) {
        return $run_query;
    }else{
        return false;
    }
}

function select_student_courses_in_tracker_formatted($user_id) {
    $tracker = new curriculum_class;
    $grades = select_all_grades();


    $run_query = $tracker->select_student_courses_in_tracker($user_id);

    if($run_query) {
        $courses = $tracker->db_fetch_all();
        $result = [];
        foreach($courses as $course) {
            $course["grades"] = $grades;

            $result[$course["student_level_name"]][$course["semester_name"]][] = $course;
        }
        return $result;
    }else{
        return false;
    }
}

function select_student_courses_in_tracker_formatted_completed($user_id) {
    $tracker = new curriculum_class;
    $grades = select_all_grades();

    $run_query = $tracker->select_student_courses_in_tracker_completed($user_id);

    if($run_query) {
        $courses = $tracker->db_fetch_all();
        $result = [];
        foreach($courses as $course) {
            $course["grades"] = $grades;
            $result[$course["student_level_name"]][$course["semester_name"]][] = $course;
        }
        return $result;
    }else{
        return false;
    }
}

function select_student_courses_in_tracker_completed($user_id) {
    $tracker = new curriculum_class;

    $run_query = $tracker->select_student_courses_in_tracker_completed($user_id);

    if($run_query) {
        return $tracker->db_fetch_all();
    }else {
        return false;
    }
}

function select_student_courses_in_tracker_formatted_uncompleted($user_id) {
    $tracker = new curriculum_class;

    $run_query = $tracker->select_student_courses_in_tracker_uncompleted($user_id);

    if($run_query) {
        $courses = $tracker->db_fetch_all();
        $result = [];
        foreach($courses as $course) {
            $result[$course["student_level_name"]][$course["semester_name"]][] = $course;
        }
        return $result;
    }else{
        return false;
    }
}