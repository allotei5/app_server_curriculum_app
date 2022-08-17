<?php
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

$courses = select_one_course_and_its_prerequisites($_GET["course_id"]);
echo json_encode($courses);