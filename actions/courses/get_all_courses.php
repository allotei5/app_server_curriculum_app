<?php
require_once(dirname(__FILE__)."/../../controllers/course_controller.php");
header("Content-Type:application/json");

$courses = select_all_courses();
echo json_encode($courses);