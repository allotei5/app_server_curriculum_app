<?php
require_once(dirname(__FILE__)."/../../controllers/course_controller.php");
header("Content-Type:application/json");

if(isset($_GET["course"])) {
    $courses = select_courses_by_name($_GET["course"]);
    echo json_encode($courses);
}
