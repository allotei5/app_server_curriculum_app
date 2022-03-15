<?php
require_once(dirname(__FILE__)."/../../controllers/curriculum_controller.php");
header("Content-Type:application/json");
print_r(select_one_curriculum_and_its_details_formatted(63));