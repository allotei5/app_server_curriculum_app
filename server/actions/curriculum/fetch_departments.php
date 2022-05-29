<?php
require_once(dirname(__FILE__)."/../../controllers/curriculum_controller.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

echo json_encode(select_departments());