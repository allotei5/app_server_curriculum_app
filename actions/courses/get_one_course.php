<?php
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");
header("Content-Type:application/json");

if(isset($_GET["course_id"])){
    echo json_encode(select_one_course_and_its_prerequisites($_GET["course_id"]));
}