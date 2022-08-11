<?php
require_once(dirname(__FILE__)."/../../controllers/tracker_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

$form_data=json_decode(file_get_contents("php://input"));

echo json_encode(select_student_courses_in_tracker($_GET["user_id"], $_GET["major"], $_GET["year_group"]));