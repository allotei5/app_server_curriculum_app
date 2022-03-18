<?php
require_once("../../controllers/curriculum_controller.php");

print_r($_POST);

if(isset($_POST["submit"])) {
    $curriculum_detail_id = $_POST["curriculum_detail_id"];
    $completed = $_POST["completed"];
    $grade = $_POST["grade"];
    $curriculum_track_id = $_POST["curriculum_track_id"];

    for($i=0; $i<count($curriculum_track_id); $i++) {
        $completed_value = (array_key_exists($i, $completed)) ? 1 : 0;
        $grade_value = (array_key_exists($i, $grade)) ? $grade[$i] : "''";

        update_users_course_in_curriculum(1, $curriculum_track_id[$i], $curriculum_detail_id[$i], $completed_value, $grade_value);
    }

    header("location: ../../view/curriculum-tracker.php");

}