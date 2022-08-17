<?php
require_once(dirname(__FILE__)."/../../controllers/user_controller.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

echo json_encode(count_all_students());

