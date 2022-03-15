<?php
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");
if(isset($_GET["prereq_id"])) {
    if(remove_prerequisite($_GET["prereq_id"])) {
        header("location: javascript://history.go(-1)");
    }
}