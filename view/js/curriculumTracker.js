

const form = document.getElementById("tracker");
form.addEventListener("change", function(e){
    e.preventDefault();
    console.log($("#tracker").serializeArray());
})