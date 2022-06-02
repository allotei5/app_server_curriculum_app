<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once(dirname(__FILE__)."/../../controllers/user_controller.php");

$form_data = json_decode(file_get_contents("php://input"));

// echo json_encode($form_data->student_details);

if($form_data->user_id) {
    // grab form data
    $user_id = $form_data->user_id;
    $student_id = $form_data->student_details->student_id;
    $student_dept = $form_data->student_details->student_dept;
    $student_year_group = $form_data->student_details->student_year_group;
    $student_major = $form_data->student_details->student_major;


    $update = update_student_details($user_id, $student_id, $student_dept, $student_year_group, $student_major);

    if($update) {
        echo json_encode([
            "response" => true
        ]);
    } else {
        echo json_encode([
            "response" => false
        ]); 
    }
}