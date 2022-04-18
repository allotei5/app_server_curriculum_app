<!DOCTYPE html>
<html>
<head>
	<title>App Server - Request Permission</title>
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

	<!--Custom js, spinner and alert-->
	<script type="text/javascript" src="../js/Leslie_Loader.js"></script>
	<script type="text/javascript" src="../js/standard_js.js"></script>

    <!--Font awesome for icons-->
	<link rel="stylesheet" href="../fontawesome/css/all.css">

	<style type="text/css" media="screen">
		a:link { color:white; text-decoration: none; }
		a:visited { color:white; text-decoration: none; }
		a:hover { color:white; text-decoration: none; }
		a:active { color:white; text-decoration: none; }
	</style>
</head>
<body>
	<?php
		//check post data
		if(!isset($_GET['asys'])){
			//redirect to App Home if there is no post/get
			header('Location: ../../');
		}
		//system id and user id
		$system_id = $_GET['asys'];

		//declare system variable name
		$sysname;

		//get system name

		switch ($system_id) {
		case 1:
			$sysname = "Adminstrator";
			break;
		case 2:
			$sysname = "Calendar";
			break;
		case 3:
			$sysname = "Faculty";
			break;
		case 4:
			$sysname = "Accreditation";
			break;
		
		}
	?>
		
		<div class="alert alert-danger fade collapse" id="request_failed">
		    <strong>Failed!</strong> request process failed. Try again another time or report to admin. <a href="mailto:csis@ashesi.edu.gh?subject=App%20Server%20Reporting%20Permission" class="alert-link"> report to admin.</a> 
	    </div>

		

		<div class="jumbotron" style="text-align: center; background-color: #923D41; color: white;">
		  <h1>Request permission to use the <b style="color:yellow;"><i><?php echo $sysname?></i></b> feature of the App Server portal</h1>

		<form method="post">
			<div class="form-group d-none">
				<input type="password" value="<?php echo $system_id ?>" id="whsys">
			</div>
			<p>
				<button class="btn btn-secondary" type="Submit" class="btn btn-block" id="requestaccessbutton" onclick="request_access()"><span class="fas fa-universal-access"></span> Request Access</button>
			</p>
		</form>
	
		  <p><a href="../../">OR back to App Home</a></p>
		</div>	
</body>
</html>