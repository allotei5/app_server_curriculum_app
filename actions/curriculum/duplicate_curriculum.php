<?php
require_once(dirname(__FILE__)."/../../controllers/curriculum_controller.php");
//header("Content-Type:application/json");

function duplicate_curriculum_fxn($arr) {
    if(isset($arr["submit"])){
        $old_curriculum_id = $arr["old_curriculum_id"];
        
        // select old curriculum details
        // duplicate old curriculum
        // duplicate old curriculum details
    
        $old_curriculum = select_curriculum_details_by_id($old_curriculum_id);
        $duplicated_curriculum = duplicate_curriculum($old_curriculum_id);
        $duplicated_curriculum_details = duplicate_curriculum_details($old_curriculum_id, $duplicated_curriculum);
    
        if($duplicated_curriculum_details){
            return $duplicated_curriculum;
        }else{
            return 2;
        }
    }
}

echo duplicate_curriculum_fxn($_POST);