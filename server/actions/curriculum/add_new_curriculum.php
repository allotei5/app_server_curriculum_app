<?php
require_once(dirname(__FILE__) . "/../../controllers/curriculum_controller.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$form_data = json_decode(file_get_contents("php://input"));

echo json_encode(create_new_curriculum($form_data->year_group_id, $form_data->major_id, $form_data->user_id));