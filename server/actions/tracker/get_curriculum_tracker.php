<?php
require_once("../../controllers/curriculum_controller.php");
header("Content-Type:application/json");

// TODO wrap around user session
$student_id = 1;

// gets user details
$student_details = select_student_major_and_year_group($student_id);

// display based on user id
$curriculum_tracker = select_student_courses_in_tracker_formatted($student_id);


if(empty($curriculum_tracker)){
    // do something
    
    $curriculum = select_curriculum_by_year_group_and_major($student_details["student_year_group"], $student_details["student_major"]);
    $curriculum_details = select_one_curriculum_and_its_details($curriculum["curriculum_id"]);
    foreach($curriculum_details["courses"] as $course) {
        insert_users_course_in_curriculum($student_id, $course["curriculum_detail_id"], 0, "''");
    }

}

$four_year_plan = select_student_courses_in_tracker_formatted($student_id);

echo json_encode($four_year_plan);