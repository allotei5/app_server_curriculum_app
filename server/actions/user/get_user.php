<?php
require_once(dirname(__FILE__)."/../../controllers/user_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

// session_start();

// TODO wrap around logged in user

$user = 5;

echo json_encode(get_user_details($user));

