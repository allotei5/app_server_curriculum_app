<?php
require_once(dirname(__FILE__)."/../../controllers/curriculum_controller.php");
//print_r($_POST);
echo json_encode($_POST);

if(isset($_POST["submit"])){
    // grab form data
    $class = $_POST["class"];
    $majors = $_POST["majors"];
    $curriculum_detail_id = $_POST["curriculum_detail_id"];
    $level = $_POST["level"];
    $course = $_POST["course"];
    $semester = $_POST["semester"];
    $course_type = $_POST["course_type"];
    $curriculum_id = $_POST["curriculum_id"];

    // update curriculum table
    $edit_curriculum = edit_curriculum($curriculum_id, $class, $majors);

    if($edit_curriculum){
        $edit_details = edit_curriculum_details($curriculum_detail_id, $level, $semester, $course, $course_type);

        if($edit_details){
            header("location: ../../view/curriculum/curriculum.php");
        }
    }

    // update curriculum details table
}