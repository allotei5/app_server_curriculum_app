<?php
//connect to the user account class
require_once(dirname(__FILE__)."/../classes/user_account_class.php");

//--INSERT--//


//--SELECT--//


//get user permission for a system
//takes system id and user id
function get_user_permission_ctr($a, $b)
{
	//create an instance of the class
	$item_object = new user_account_class();

	//run the get all user roles method
	$item_records = $item_object->get_user_permission_cls($a, $b);

	//check if the method worked
	if ($item_records) {
		
		//return all the data
		return $item_object->db_fetch_one();
		
	}else{
		//no data found
		return false;
	}
}


//--UPDATE--//


//--DELETE--//


?>