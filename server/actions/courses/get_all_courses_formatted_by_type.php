<?php
require_once(dirname(__FILE__)."/../../controllers/course_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

if(isset($_GET["course_type_id"])){
    $courses = select_all_courses_formatted_by_type($_GET["course_type_id"]);
    echo json_encode($courses);
}
