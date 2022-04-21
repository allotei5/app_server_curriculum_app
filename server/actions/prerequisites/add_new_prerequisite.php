<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once(dirname(__FILE__)."/../../controllers/prerequisite_controller.php");
//var_dump($_POST);

$form_data=json_decode(file_get_contents("php://input"));
//some code
// echo json_encode($form_data);
// return;
if($form_data->submit){
    // var_dump($_POST);
    // grab form data
    $course_id = $form_data->course_id;
    $prerequisite_course_id = $form_data->prerequisite_course_id;
    $min_grade_id = $form_data->min_grade_id;

    $add_prerequisite = add_new_prerequisite($course_id, $prerequisite_course_id, $min_grade_id);

    if($add_prerequisite){
        echo json_encode([
            "response" => true
        ]);
    }else {
        echo json_encode([
            "response" => false
        ]);
    }

    // for($i=0; $i<count($prerequisite_course_id); $i++) {
    //     $add_prerequisite = add_new_prerequisite($course_id, $prerequisite_course_id[$i], $min_grade_id[$i]);
    // }

    
    // if($add_prerequisite){
    //     header("location: ../../view/add-prerequisites.php?course=".$course_id);
    // }else {
    //     echo json_encode(([
    //         "response" => false
    //     ]));
    // }
}