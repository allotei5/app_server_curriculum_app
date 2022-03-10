<!-- get active page from the main page calling the header -->

<!--Top Navigation-->
<nav class="navbar navbar-expand-md navbar-dark" style="background-color: #923D41;">
	  <a class="navbar-brand" href="../../">App Sever Home</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="collapsibleNavbar">
	    <ul class="navbar-nav">

	    	<li class="nav-item <?php 
	    		echo ($activePage == 'dashboard') ? 'active':'';?>">
                    <a class="nav-link" href="dashboard.php">
                        <span>| </span>
                        <span class="fas fa-industry"></span>
                        <span>Dashboard</span>
                    </a>
	      	</li>

	    	<li class="nav-item dropdown <?php 
	    		echo ($activePage == 'manage_permission') ? 'active':'';?>">
		      	<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span>| </span><span class="fas fa-cog"></span> Manage Permissions</a>
			    
			    <div class="dropdown-menu" style="background-color: #923D41;">
				      <a class="dropdown-item" href="user_pending_request.php"><span class="fas fa-edit"></span> Pending Request</a>
				      
				      <a class="dropdown-item" href="user_assign_permission.php"><span class="fas fa-user-graduate"></span> Assign Permission</a>
			    </div>
		    </li>

	       <!--  <li class="nav-item dropdown <?php 
	    		//echo ($activePage == 'settings') ? 'active':'';
	    		//echo ($upm == 5 || $upm == 6)? 'd-none' : '';?>">
		      	<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span>| </span><span class="fas fa-cog"></span> Settings</a>
			    
			    <div class="dropdown-menu" style="background-color: #923D41;">
			      
			      <a class="dropdown-item" href="capstone_manage.php"><span class="fas fa-edit"></span> Add Class</a>
			      
			      <a class="dropdown-item" href="past_capstone.php"><span class="fas fa-user-graduate"></span> Manage Registration</a>
			      <div class="dropdown-divider"></div>

			      <a class="dropdown-item" href="capstone_manage.php"><span class="fas fa-edit"></span> Manage Class</a>
			      
			      <a class="dropdown-item" href="academic_year.php"><span class="fas fa-th-list"></span> Academic Year</a>
			      
			      <a class="dropdown-item" href="student_year_group.php"><span class="fas fa-th-list"></span> Student Year Group</a>

			    </div>
		    </li> -->

		    <li class="nav-item <?php 
                echo ($activePage == 'app_server_systems') ? 'active':'';
                ?>">
                <a class="nav-link" href="app_server_systems.php">
                    <span>| </span>
                    <span class="fas fa-cog"></span>
                    <span>Apps</span>
                </a>
	        </li>

		    <li class="nav-item <?php 
                echo ($activePage == 'user_account') ? 'active':'';
                ?>">
                <a class="nav-link" href="manage_users.php">
                    <span>| </span>
                    <span class="fas fa-users"></span>
                    <span>Manage Users</span>
                </a>
	        </li> 
    
            <li class="nav-item">
                    <a class="nav-link" href="../login/logout.php">
                        <span>| </span>
                        <span class="fas fa-sign-out-alt"></span>
                        <span>Logout</span>
                    </a>
	      	</li>
            
	    </ul>
	  </div>  
	</nav>
	<br>