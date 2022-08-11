<?php
require_once(dirname(__FILE__)."/../../controllers/user_controller.php");
// header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$start = ($page - 1) * 5;
echo json_encode(get_all_students($start));

