<?php
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");
var_dump($_POST);

if(isset($_POST["submit"])){
    var_dump($_POST);
    // grab form data
    $course_id = $_POST["course_id"];
    $prerequisite_course_id = $_POST["prerequisite_course_id"];
    $min_grade_id = $_POST["min_grade_id"];

    for($i=0; $i<count($prerequisite_course_id); $i++) {
        $add_prerequisite = add_new_prerequisite($course_id, $prerequisite_course_id[$i], $min_grade_id[$i]);
    }

    
    if($add_prerequisite){
        header("location: ../../view/curriculum/add-prerequisites.php?course=".$course_id);
    }else {
        echo json_encode(([
            "response" => false
        ]));
    }
}