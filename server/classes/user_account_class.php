<?php
/**
*User account class to handle everything user account related
*/
/**
 *@author David Sampah
 *
 */

class user_account_class extends db_connection
{

	//--- INSERT -------//
        

    //--- SELECT -------//

    /**
	*method for get user permission for a system
	*takes system id and user id
	*/
	public function get_user_permission_cls($a, $b){
		//a query to get user permission for a system
		$sql = "SELECT * FROM apps_user_permission WHERE `app_id`='$a' AND `user_id`='$b'";

		//execute the query
		return $this->db_query($sql);
	}


    //--- UPDATE -------//


    //--- DELETE -------//
    
    
}