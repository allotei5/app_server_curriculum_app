<?php
require_once(dirname(__FILE__)."/../../controllers/course_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json; charset=utf-8");

if(isset($_GET["department_id"])){
    $courses = select_all_courses_by_department($_GET["department_id"]);
    echo json_encode($courses);
}
