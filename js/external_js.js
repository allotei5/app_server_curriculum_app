//function to validate registeration form for student
function registervalidation(){
	
	//disable button
	document.getElementById('registerbutton').disabled = true;

	//leslie loading spinner.
    Loader();

    //show loader;
    Loader.show();
	
	//grab form data
	var ftname = document.getElementById('ufname').value;
	var ltname = document.getElementById('ulname').value;
	var usegen = document.getElementById('ugender').value;
	var uselevel = document.getElementById('ulevel').value;
	var useremail = document.getElementById('uemail').value;
	var fpass = document.getElementById('upass').value;
	var spass = document.getElementById('usecpass').value;

	//define regex for name and email
	var namefname = /^[a-zA-Z]{2,50}/gm;
	var namelname = /^[a-zA-Z]{2,50}/gm;
	var emailreg = /^[a-zA-Z]{1,20}[\.\-\_]{0,1}[a-zA-Z]{0,20}[\.\-\_]{0,1}[a-zA-Z]{0,20}@ashesi.edu.gh$/gm;
	//var passreg = /\A(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9].*[^a-zA-Z0-9])/gm;

	//test for first name
	if (!namefname.test(ftname)) {

		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		//alert error
		$("#inva_fn").fadeTo(5000, 50).slideUp(500, function(){
		    $("#inva_fn").slideUp(500);
		});

		//enable button
		document.getElementById('registerbutton').disabled = false;

	}//check for last name
	else if(!namelname.test(ltname)){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		$("#inva_ln").fadeTo(5000, 50).slideUp(500, function(){
		    $("#inva_ln").slideUp(500);
		});
		//enable button
		document.getElementById('registerbutton').disabled = false;

	}//check for email format
	else if(!emailreg.test(useremail)){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		$("#inva_em").fadeTo(5000, 50).slideUp(500, function(){
		    $("#inva_em").slideUp(500);
		});

		//enable button
		document.getElementById('registerbutton').disabled = false;

	}//check if password is enpty
	else if(fpass==""){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		$("#inva_pd").fadeTo(5000, 50).slideUp(500, function(){
		    $("#inva_pd").slideUp(500);
		});

		//enable button
		document.getElementById('registerbutton').disabled = false;

	}
	//check if password is enpty
	else if(spass==""){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		$("#inva_pdm").fadeTo(5000, 50).slideUp(500, function(){
		    $("#inva_pdm").slideUp(500);
		});

		//enable button
		document.getElementById('registerbutton').disabled = false;

	}//check is password matches
	else if(!fpass.match(spass)){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		$("#inva_pdmm").fadeTo(5000, 50).slideUp(500, function(){
		    $("#inva_pdmm").slideUp(500);
		});

		//enable button
		document.getElementById('registerbutton').disabled = false;
	}
	else{
		
		//prevent form submission and alert error
		event.preventDefault();

		$.post("regproc",
		  {
		    ufname:ftname,
			ulname:ltname,
			ugender:usegen,
			ulevel:uselevel,
			uemail:useremail,
			upass:fpass
		  },
		  function(data, status)
		  {
		
		    	if (data == "exist") 
		    	{
					//hide spinner
					Loader.hide();
					//alert and return false
					$("#user_exist").fadeTo(10000, 50).slideUp(500, function(){
					    $("#user_exist").slideUp(500);
					});
					//enable button
					document.getElementById('registerbutton').disabled = false;
					return false;
				}
				else if (data == "failed") {
					//hide spinner
					Loader.hide();
					//alert and return false
					$("#user_reg_fail").fadeTo(10000, 50).slideUp(500, function(){
					    $("#user_reg_fail").slideUp(500);
					});
					//enable button
					document.getElementById('registerbutton').disabled = false;
					return false;
				}
				else if (data == "emailfailed") {
					//hide spinner
					Loader.hide();
					//alert and return false
					$("#user_reg_em").fadeTo(10000, 50).slideUp(500, function(){
					    $("#user_reg_em").slideUp(500);
					});
					//enable button
					document.getElementById('registerbutton').disabled = false;
					return false;
				}
				else{
					//hide spinner
					Loader.hide();
					
					//redirect to success page
					window.location.href = "../view/user_account_created";
				}
		  });
	}
}

//function to validate user login
function loginvalidation(){
	
	//diable button
	document.getElementById('loginbutton').disabled = true;

	//leslie loading spinner.
    Loader();

    //show loader;
    Loader.show();
	
	//grab form data
	var useEmail = document.getElementById('umail').value;
	var usePass = document.getElementById('upass').value;
	var ckbox = document.getElementById('logrem');
	var remMe;

	//set remember me
	if (ckbox.checked) {
		remMe = "checked";
	}else{
		remMe = "forget";
	}

	//email regular expression
	//var emailreg = /^\S+@\S+$/gm;
	var emailreg = /^[a-zA-Z]{1,20}[\.\-\_]{0,1}[a-zA-Z]{0,20}[\.\-\_]{0,1}[a-zA-Z]{0,20}@ashesi.edu.gh$/gm;

	//check for empty fields
	if (!emailreg.test(useEmail)) {

		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		//alert error
		$("#incorrect_em").fadeTo(5000, 50).slideUp(500, function(){
		    $("#incorrect_em").slideUp(500);
		});

		//enable button
		document.getElementById('loginbutton').disabled = false;

	}//check for password
	else if(usePass==""){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();

		//alert error
		$("#pass_emp").fadeTo(5000, 50).slideUp(500, function(){
		    $("#pass_emp").slideUp(500);
		});

		//enable button
		document.getElementById('loginbutton').disabled = false;
	}
	else{
			
		//all good. alert success
		event.preventDefault();

		$.post("loginproc",
		  {
		    umail:useEmail,
			upass:usePass,
			urem:remMe
		  },
		  function(data, status){
		    	if (data == "inactive") 
		    	{
					//hide spinner
					Loader.hide();
					//alert, enable button and return false
					$("#user_inactive").fadeTo(10000, 50).slideUp(500, function(){
					    $("#user_inactive").slideUp(500);
					});
					document.getElementById('loginbutton').disabled = false;
					return false;
				}
				else if (data == "pending") {
					//hide spinner
					Loader.hide();
					//alert, enable button and return false
					$("#user_pending").fadeTo(10000, 50).slideUp(500, function(){
					    $("#user_pending").slideUp(500);
					});
					document.getElementById('loginbutton').disabled = false;
					return false;
				}
				else if (data == "failed") {
					//hide spinner
					Loader.hide();
					//alert, enable button and return false
					$("#incorrect_up").fadeTo(10000, 50).slideUp(500, function(){
					    $("#incorrect_up").slideUp(500);
					});
					document.getElementById('loginbutton').disabled = false;
					return false;
				}
				else{
					//hide spinner
					Loader.hide();
		
					//redirect to dashboard or last user page before session ended
					window.location.href = data;
				}
		  });
	}
}

//function to validate forgot password
function forgotpassvalid(){
	
	//disable button 
	document.getElementById('forgotbutton').disabled = true;

	//leslie loading spinner.
    Loader();

    //show loader;
    Loader.show();
	
	//grab form data
	var useEmail = document.getElementById('umail').value;

	//email regular expression
	//var emailreg = /^\S+@\S+$/gm;
	var emailreg = /^[a-zA-Z]{1,20}[\.\-\_]{0,1}[a-zA-Z]{0,20}[\.\-\_]{0,1}[a-zA-Z]{0,20}@ashesi.edu.gh$/gm;

	//check for empty fields
	if (!emailreg.test(useEmail)) {

		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();
		//alert error
		$("#forgot_em").fadeTo(5000, 50).slideUp(500, function(){
		    $("#forgot_em").slideUp(500);
		});
		document.getElementById('forgotbutton').disabled = false;
	}
	else{
			
		//all good. alert success
		event.preventDefault();

		$.post("forgotpassproc",
		  {
		    umail:useEmail
		  },
		  function(data, status){
		    	if (data == "failed") 
		    	{
					//hide spinner
					Loader.hide();
					//alert and return false
					$("#forgot_em_reg").fadeTo(10000, 50).slideUp(500, function(){
					    $("#forgot_em_reg").slideUp(500);
					});
					document.getElementById('forgotbutton').disabled = false;
					return false;

				}else if (data == "pending") {
					//hide spinner
					Loader.hide();
					//alert and return false
					$("#forgot_em_pend").fadeTo(10000, 50).slideUp(500, function(){
					    $("#forgot_em_pend").slideUp(500);
					});
					document.getElementById('forgotbutton').disabled = false;
					return false;
				}
				else if (data == "inactive") {
					//hide spinner
					Loader.hide();
					//alert and return false
					$("#forgot_em_inact").fadeTo(10000, 50).slideUp(500, function(){
					    $("#forgot_em_inact").slideUp(500);
					});
					document.getElementById('forgotbutton').disabled = false;
					return false;
				}
				else{
					//hide spinner
					Loader.hide();
					//redirect to dashboard
					window.location.href = "../view/user_forgot_password";
				}
		  });
	}
}

//function to validate password reset
function resetpassvalidation(){
	
	//disable button
	document.getElementById('resetpassbutton').disabled = true;

	//leslie loading spinner.
    Loader();

	//show spinner
	Loader.show();
	
	//grab form data
	var fpass = document.getElementById('repass').value;
	var spass = document.getElementById('upass').value;
	var upasid = document.getElementById('passid').value;

	//check for empty fields
	if(fpass==""){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();
		$("#pass_set_pe").fadeTo(5000, 50).slideUp(500, function(){
		    $("#pass_set_pe").slideUp(500);
		});
		document.getElementById('resetpassbutton').disabled = false;

	}else if (spass=="") {
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();
		$("#pass_set_pm").fadeTo(5000, 50).slideUp(500, function(){
		    $("#pass_set_pm").slideUp(500);
		});
		document.getElementById('resetpassbutton').disabled = false;
	}
	//check is password matches
	else if(fpass != spass){
		//hide spinner
		Loader.hide();

		//prevent form submission and alert error
		event.preventDefault();
		$("#pass_set_ppm").fadeTo(5000, 50).slideUp(500, function(){
		    $("#pass_set_ppm").slideUp(500);
		});
		document.getElementById('resetpassbutton').disabled = false;
	}
	else{	
		//all good. alert success
		event.preventDefault();
		
		$.post("../login/resetpassproc",
		  {
		    useid:upasid,
			upass:fpass
		  },
		  function(data, status){
		    	if (data == "failed") 
		    	{
					//hide spinner
					Loader.hide();
					//alert and return false
					$("#pass_set_pf").fadeTo(10000, 50).slideUp(500, function(){
					    $("#pass_set_pf").slideUp(500);
					});
					document.getElementById('resetpassbutton').disabled = false;
					return false;
				}
				else{
					//hide spinner
					Loader.hide();
					//redirect to notification
					window.location.href = "user_account_password_changed";
				}
		  });
	}
}