<?php
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");
header("Content-Type:application/json");

if(isset($_GET["course_name"])){
    echo json_encode(search_for_a_course('%'.$_GET["course_name"].'%'));
}else if(empty($_GET["course_name"])){
    echo json_encode([]);
}