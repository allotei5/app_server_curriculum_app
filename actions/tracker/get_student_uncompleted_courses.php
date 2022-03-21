<?php
require_once("../../controllers/curriculum_controller.php");
header("Content-Type:application/json");

// TODO wrap around if user id is set
echo json_encode(select_student_courses_in_tracker_formatted_uncompleted(1));