//function to request for system access
function request_access(){
	//all good. alert success
    event.preventDefault();
    
	//disable button
	document.getElementById('requestaccessbutton').disabled = true;
	
	//grab form data
	var selsys = document.getElementById('whsys').value;

    //leslie loading spinner.
    Loader();

	//show spinner
	Loader.show();
    
    $.post("../actions/user_request_system_access",
        {
            onesys:selsys
        },
        function(data, status)
        {
            if (data == "failed") 
            {
                //hide spinner
                Loader.hide();
                //alert and return false
                $("#request_failed").fadeTo(10000, 50).slideUp(500, function(){
                    $("#request_failed").slideUp(500);
                });
                document.getElementById('requestaccessbutton').disabled = false;
                return false;
            }
            else
            {
                //hide spinner
                Loader.hide();
                //redirect to notification
                window.location.href = "user_request_access_in_progress";
            }
        });
	
}

//function to approve pending permission request
function approvePermissionRequest(a,b){
    //confirm delete
    if (confirm("Do you want to APPROVE permission request for "+a)) 
    {
        //leslie loading spinner.
        Loader();

        //show spinner
        Loader.show();

        //run ajax to approve permission request
        $.post("../actions/user_request_approved", {pid:b}, function(data, status){
            
            //hide spinner
            Loader.hide();
            
            //alert and relod after hiding the modal
            swal("Request Approved", a+" notified", "success").then(function(){
                location.reload();
            });
        });
    }
}

//function to reject pending permission request
function rejectPermissionRequest(a,b){
    //confirm delete
    if (confirm("Do you want to REJECT permission request for "+a)) 
    {
        //leslie loading spinner.
        Loader();

        //show spinner
        Loader.show();

        //run ajax to approve permission request
        $.post("../actions/user_request_rejected", {pid:b}, function(data, status){
            
            //hide spinner
            Loader.hide();

            //alert and relod after hiding the modal
            swal("Request Rejected", a+" notified", "success").then(function(){
                location.reload();
            });
        });
    }
}
