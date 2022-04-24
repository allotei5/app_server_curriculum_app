<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");

$form_data=json_decode(file_get_contents("php://input"));
// echo json_encode($form_data);
// return;
if(isset($form_data->course_id)) {
    if(remove_prerequisite($form_data->course_id)) {
        echo json_encode([
            "response" => true
        ]);
    }else {
        echo json_encode([
            "response" => false
        ]);
    }
}