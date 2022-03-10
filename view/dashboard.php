<!DOCTYPE html>
<html>
<head>
	<title>App Server - Dashboard</title>
	<link rel="icon" href="images/favicon.ico" type="image/ico" sizes="64x64">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="App Server - Ashesi">
    <meta name="author" content="David Sampah - Learning Technologist">
	
	<!--CDN Bootstrap and Jquery-->
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<script type="text/javascript" src="../js/jquery-3.4.1.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>

    <!--Font awesome for icons-->
	<link rel="stylesheet" href="../fontawesome/css/all.css">

	<!--Custom CSS-->
	<style type="text/css" media="screen">
		a:link { color:white; text-decoration: none; }
		a:visited { color:white; text-decoration: none; }
		a:hover { color:white; text-decoration: none; }
		a:active { color:white; text-decoration: none; }
	</style>
</head>
<body>

	<!--Core and setting-->
	<?php
		//set app server application id
		$app_id = 1;

		//include the core file and controllers
		require("../controllers/general_controller.php");
		require("../controllers/user_account_controller.php");
		require('../settings/core.php');

		//check for login
		//this function redirects if the user is not logged in
		core_check_login();

		//get user id
		$logged_in_user = core_get_user_id();

		//get user role as well 
		// roles are staff, faculty, student, fi, alumni
		$get_user_role = core_get_role();

		//check and set user permission (takes system id and userid)
		//read, write and execute
		//edit this function if you only need the user permission, but not redirect (contact )
		$user_permission = core_get_user_permission($app_id, $logged_in_user);
	?>
		
	<!--Top Navigation-->
	<?php
		//set active page to css active status
		$activePage = 'dashboard';
		require('header.php');		
	?>
	<br>
			
	<!--Main Body Content-->
	  
	<div class="container">

		<div class="jumbotron">
		  <h1>Welcome to App Server Management Portal </h1> 
		  <p>The disruptive effects of COVID-19 have catalyzed all aspects of higher education institutions to consider some form of digitization. “Higher education systems and institutions are particularly affected by digital transformation” (OECD, 2019, para. 1). Automation of Higher Education Institutes, specifically HEIs automated infrastructure, such as a management information system (MIS) facilitates faculty and student administrative processes. A digitally transformed HEI information system can provide a panoramic scope, enable new services, and provide new opportunities for innovation and accessibility. “Higher education institutions (HEIs) embracing digital technologies can become drivers of growth and development for their own ecosystems” (OECD, 2019, para. 1)</p> 
		</div>

		<!--First Row-->
		<div class="row mb-3">

                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card bg-success text-white h-100">
                        <div class="card-body bg-success">
                        	<a href="user_pending_request.php">
	                            <div class="rotate">
	                                <span class="fa fa-graduation-cap fa-4x"></span>
	                            </div>
	                            <h6 class="text-uppercase">Pending Requests</h6>
	                            <h1 class="display-4">
	                            	<?php
	                            		//get pending request
	                            		$pen_req = count_pending_perm_request_ctr();

	                            		$get_req = $pen_req['totalpendrequest'];

	                            		echo $get_req;
	                            	?>
	                            </h1>
                        	</a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-info h-100">
                        <div class="card-body bg-info">
                        	<a href="">
	                            <div class="rotate">
	                                <span class="fa fa-book-reader fa-4x"></span>
	                            </div>
	                            <h6 class="text-uppercase">Apps</h6>
	                            <h1 class="display-4">
	                            	<?php
	                            		//get number of apps
	                            		$all_apps = count_all_apps_ctr();

	                            		$get_apps = $all_apps['totalapps'];

	                            		echo $get_apps;
	                            	?>
	                            </h1>
	                        </a>
                        </div>
                    </div>
                </div> 

                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-warning h-100">
	                    <div class="card-body">
                        	<a href="">
	                            <div class="rotate">
	                                <span class="fa fa-users fa-4x"></span>
	                            </div>
	                            <h6 class="text-uppercase">Users</h6>
	                            <h1 class="display-4">
	                            	<?php
	                            		//count all users
	                            		$all_users = count_all_users_ctr();

	                            		$get_users = $all_users['totalusers'];

	                            		echo $get_users;
	                            	?>
	                            </h1>
                        	</a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 py-2">
                    <div class="card text-white bg-secondary h-100">
                        <div class="card-body" style="background-color: #7B68EE; color: white;">
                        	<a href="">
	                            <div class="rotate">
	                                <span class="fa fa-cog fa-4x"></span>
	                            </div>
	                            <h6 class="text-uppercase">Assign Permissions</h6>
	                            <h1 class="display-4">...</h1>
	                        </a>
                        </div>
                    </div>
                </div>

        </div>
        <!--2nd Row if Any-->
	</div>
		
</body>
</html>