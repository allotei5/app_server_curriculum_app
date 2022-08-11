<?php
// header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once(dirname(__FILE__)."/../../controllers/course_controller.php");

$form_data=json_decode(file_get_contents("php://input"));
echo $form_data;

if(isset($form_data->submit)) {

    $add_course = add_new_course($form_data->dept, $form_data->code, $form_data->name, $form_data->unit, $form_data->grade, 1);

    if ($add_course) {
        echo json_encode(["response" => true]);
    } else {
        echo json_encode(["response" => false]);
    }
}