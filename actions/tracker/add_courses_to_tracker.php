<?php
require_once("../../controllers/curriculum_controller.php");
print_r($_POST);
return;
if(isset($_POST["submit"])){
    // grab form data
    $curriculum_detail_id = $_POST["curriculum_detail_id"];
    $completed = $_POST["completed"];
    $grade = $_POST["grade"];

    for($i=0; $i<count($curriculum_detail_id); $i++) {
        $completed_value = (array_key_exists($i, $completed)) ? 1 : 0;
        $grade_value = (array_key_exists($i, $grade)) ? $grade[$i] : "''";
        //print_r($grade_value);
        echo insert_users_course_in_curriculum(1, $curriculum_detail_id[$i], $completed_value, $grade_value);
        
    }

    header("location: ../../view/curriculum-tracker.php");

}