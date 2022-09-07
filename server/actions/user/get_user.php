<?php
require_once(dirname(__FILE__)."/../../settings/core.php");
require_once(dirname(__FILE__)."/../../controllers/user_controller.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

// session_start();

// TODO wrap around logged in user

echo json_encode(get_user_details(166));

return;

$outp = core_react_check_login();

if($outp['isLogedin'] == true){
    $user = core_get_user_id();

    echo json_encode(get_user_details($user));
}else{
    echo json_encode($outp);
}



