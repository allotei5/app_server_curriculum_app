<?php
require_once(dirname(__FILE__)."/../../controllers/curriculum_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

echo json_encode(select_curriculum_details_by_level_semester_and_id($_GET['level_id'], $_GET['semester_id'], $_GET['curriculum_id']));