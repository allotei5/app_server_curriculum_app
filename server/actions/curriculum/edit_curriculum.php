<?php
require_once(dirname(__FILE__) . "/../../controllers/curriculum_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$form_data = json_decode(file_get_contents("php://input"));

echo json_encode(edit_curriculum($form_data->curriculum_id, $form_data->year_group_id, $form_data->major_id));


// if(isset($_POST["submit"])){
//     // grab form data
//     $class = $_POST["class"];
//     $majors = $_POST["majors"];
//     $curriculum_detail_id = $_POST["curriculum_detail_id"];
//     $level = $_POST["level"];
//     $course = $_POST["course"];
//     $semester = $_POST["semester"];
//     $course_type = $_POST["course_type"];
//     $curriculum_id = $_POST["curriculum_id"];

//     // update curriculum table
//     $edit_curriculum = edit_curriculum($curriculum_id, $class, $majors);

//     if($edit_curriculum){
//         $edit_details = edit_curriculum_details($curriculum_detail_id, $level, $semester, $course, $course_type);

//         if($edit_details){
//             header("location: ../../view/curriculum.php");
//         }
//     }

//     // update curriculum details table
// }