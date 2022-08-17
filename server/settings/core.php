<?php
//start session
session_start(); 

//for header redirection
ob_start();

//set app server application id
$app_id = 8;

//funtion to check for login
function core_check_login()
{
	//check if login session exit
	if (!isset($_SESSION['app_server_user_id'])) 
	{
		//set current page as session
		$_SESSION["app_pre_page"] = $_SERVER['SCRIPT_NAME'];

		//redirect to login page
    	header('Location: ../../app_server/login/login.php');

    	//to stop the rest of the code from executing
    	exit();
	}
}

//funtion to check for login react
function core_react_check_login()
{
	// //response array 
	$loginResponse = array('isLogedin' => false);

	//check if login session exit
	if (!isset($_SESSION['app_server_user_id'])) 
	{
		//set current page as session
		$_SESSION["app_pre_page"] = $_SERVER['SCRIPT_NAME'];

		// //redirect to login page
		// header('Location: ../../app_server/login/login.php');

		// //to stop the rest of the code from executing
		// exit();

		return $loginResponse;

	}else
	{

		$loginResponse['isLogedin'] = true;

		return $loginResponse;
	}
}

//function to get user ID
function core_get_user_id()
{
	//get session id
	if (isset($_SESSION['app_server_user_id'])) 
	{
		
		//return user id
		return $_SESSION['app_server_user_id'];
	}
}

//function to check for role (faculty, student, etc)
function core_get_role()
{
	//get session role
	if (isset($_SESSION['app_server_user_role'])) 
	{
		
		//return user role
		return $_SESSION['app_server_user_role'];
	}
}

//get user permission
//takes system id and user id
//redirects to permission denied or allow to view page
function core_get_user_permission($a, $b)
{
	//get user permission
	$item_list = get_user_permission_ctr($a, $b);

	//check if any user permission was found
	if ($item_list) 
	{
		//get permission status
		$permission_status = $item_list['permission_status'];

		//check if status is approved, else give appropriate response
		//1 is approved, any other number is non approved
		if($permission_status != 1){

			//awaiting permission to be granted
			header('Location: ../../app_server/view/user_access_request_pending.php');

			//to stop the rest of the code from executing
			exit();
			
		}else{
			
			//return the permission for the user
			return $item_list['user_permission_id'];
		}		

	}else
	{
		//request for permission
		header("Location: ../../app_server/view/user_request_access.php?asys=$a");
	}
}


?>