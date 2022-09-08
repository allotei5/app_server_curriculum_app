<?php
require_once(dirname(__FILE__)."/../../controllers/user_controller.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

if($_GET['term']) {
    $name = '%'.$_GET['term'].'%';
    echo json_encode(search_student($name));
} else {
    echo json_encode([]);
}
