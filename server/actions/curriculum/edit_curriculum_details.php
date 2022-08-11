<?php
require_once(dirname(__FILE__) . "/../../controllers/curriculum_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$form_data = json_decode(file_get_contents("php://input"));

echo json_encode(edit_curriculum_details($form_data->curriculum_detail_id, $form_data->student_level, $form_data->semester_id, $form_data->course_id, $form_data->course_type));