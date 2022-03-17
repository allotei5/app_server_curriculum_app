const displayGrades = grades => {
    let accum = "";
    grades.forEach((value, index) => {
        accum += `<option value=${value.grade_id}>${value.grade_letter}</option>`
        //console.log(value);
    });
    return accum;
}





const selectInput = grades => {return `
<select required name='grade[]' data-name='Field 4' class='grade_track_input w-select'>
<option value='' selected disabled>Grade</option>
${grades}
</select>`};

const inputCheck = (e, id) => {
    e.preventDefault();
    console.log(e.target.checked);
    console.log(id);
    $.get("../actions/tracker/display_grades.php", function (data, success) {
        let gradeId = "show"+id;
        const gradeSelect = document.getElementById(gradeId);
        if(e.target.checked){
            //console.log(gradeSelect);
            //console.log(data);
            let grades = displayGrades(data);
            console.log(selectInput(grades))
            gradeSelect.innerHTML=selectInput(grades);


        }else{
            gradeSelect.innerHTML="";
        }
    })

    
}