<?php
require_once(dirname(__FILE__)."/../../controllers/course_controller.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

$courses = select_all_courses_from_course_table_only();
echo json_encode($courses);