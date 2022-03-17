<?php
require_once("../../controllers/grade_controller.php");
header("Content-Type:application/json");

echo json_encode(select_all_grades());