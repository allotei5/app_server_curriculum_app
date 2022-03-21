<?php
require_once("../../controllers/curriculum_controller.php");
header("Content-Type:application/json");


// print_r($_POST);
// return;

if(isset($_POST["submit"])) {
    $curriculum_detail_id = $_POST["curriculum_detail_id"];
    $completed = $_POST["completed"];
    $grade = $_POST["grade"];
    $curriculum_track_id = $_POST["curriculum_track_id"];
    $user_id = 1;
    // print_r($grade);


    $update_users_course_in_curriculum = update_users_course_in_curriculum($user_id, $curriculum_track_id, $curriculum_detail_id, $completed, $grade);

    if($update_users_course_in_curriculum) {
        echo json_encode(select_student_courses_in_tracker_completed($user_id));
    }
    

    // for($i=0; $i<count($curriculum_track_id); $i++) {
    //     $completed_value = (array_key_exists($i, $completed)) ? 1 : 0;
    //     $grade_value = (array_key_exists($i, $grade)) ? $grade[$i] : "0";

    //     // $update_users_course_in_curriculum = update_users_course_in_curriculum(1, $curriculum_track_id[$i], $curriculum_detail_id[$i], $completed_value, $grade_value);
    //     //echo $curriculum_track_id;
    //     // echo $update_users_course_in_curriculum." ";
    //     echo $curriculum_track_id[$i]." ".$curriculum_detail_id[$i]." ".$completed_value." ".$grade_value."<br>";
    // }

    // header("location: ../../view/curriculum-tracker.php");

    // grab data from form
    // insert data in database
    // return all the courses the user has completed
    

}