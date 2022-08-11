<?php
require_once(dirname(__FILE__) . "/../../controllers/curriculum_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$form_data = json_decode(file_get_contents("php://input"));

$remove = remove_curriculum_detail($form_data->curriculum_detail_id);

if($remove) {
    echo json_encode([
        'response' => true
    ]);
}else {
    echo json_encode([
        'response' => false
    ]);
}