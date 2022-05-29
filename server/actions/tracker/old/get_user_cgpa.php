<?php
require_once("../../controllers/curriculum_controller.php");
header("Content-Type:application/json");

// TODO change user id
echo json_encode(select_student_courses_in_tracker_completed(1));
