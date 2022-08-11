<?php
// header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once(dirname(__FILE__)."/../../controllers/tracker_controller.php");

$form_data=json_decode(file_get_contents("php://input"));

if($form_data->curriculum_tracker_id) {
    // grab form data
    $tracker_id = $form_data->curriculum_tracker_id;
    $completed = $form_data->completed;
    $grade_id = $form_data->grade_id;

    $update = update_course_in_tracker($tracker_id, $completed, $grade_id);

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