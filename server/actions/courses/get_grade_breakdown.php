<?php
require_once(dirname(__FILE__)."/../../controllers/grade_controller.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json; charset=utf-8");

$courses = select_all_grades();
echo json_encode($courses);
// var_dump($courses);
// print_r($courses);