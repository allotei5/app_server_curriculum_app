<?php
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");

if(isset($_POST["submit"])){
    // grab form data
    $course_id = $_POST["course_id"];
    $prerequisite_course_id = $_POST["prerequisite_course_id"];
    $min_grade_id = $_POST["min_grade_id"];

    // TODO clean data
    $add_prerequisite = add_new_prerequisite($course_id, $prerequisite_course_id, $min_grade_id);

    if($add_prerequisite){
        echo json_encode([
            "response" => true
        ]);
    }else {
        echo json_encode(([
            "response" => false
        ]));
    }
}