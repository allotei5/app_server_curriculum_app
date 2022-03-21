// const globalGrades = [];

// fetch("../actions/tracker/display_grades.php")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         let grades = data;
//         grades.forEach((value, index) =>{
//             globalGrades.push(value)
//         })
//     });

// //console.log(globalGrades);
// //let a = globalGrades;
// const gradeObject = {};

// // globalGrades.forEach( async (value) => {
// //    await console.log(value);
// // })

// console.log(JSON.stringify(globalGrades))

// window.onload = () => {
//     $.get("../actions/tracker/display_grades.php", function (data, success) {
//         //console.log(data);
//         const gradeObject = {};
//         data.forEach(value => {
//             gradeObject[value.grade_letter] = value;
//         });
//         const checkBoxes = Array.from(document.getElementsByClassName("custom-checkbox"));
//         let selectInput; 
//         checkBoxes.forEach(value => {
//             if(value.checked === true) {
//                 selectInput = document.getElementById("grade_id-"+value.id);
//                 console.log(selectInput)
//             }
//         })
//        // console.log(divs)
    
//     })
// }

// window.onload = () => {
//     $.get("../actions/tracker/get_user_cgpa.php", function (data, success) {
//         console.log(data);
//         let units = 0;
//         let credits = 0;
//         data.forEach(value => {
//             units += parseFloat(value.course_unit);
//             credits += parseFloat(value.grade_point);
//         });
//         let cgpa = credits/units;
//         console.log(cgpa.toFixed(2));
//         document.getElementById("cgpa").innerHTML = cgpa.toFixed(2);
//         // console.log(typeof());
//     })
// }


const displayCourses = (courses, completed=false) => {
    let string = ``;
    let accum = 0;
    courses.forEach((course, index) => {
        string += `
        <div class='list_item tracker__list_item' style='padding-bottom: 15px;'>
        <div class='columns-3 col_list w-row'>
        <div class='col w-col w-col-4 w-col-stack'>
            <h3 class='tracker_text_h3 couse' style='font-size: small;'>${course.course_name}</h3>
        </div>
        <div class='col w-col w-col-2 w-col-stack'>
            <h1 class='tracker_text_h3' style='font-size: small;'>Credit: 0.5</h1>
        </div>
        <div class='col w-col w-col-3 w-col-stack'>
          <div class='form-block checkbox w-form'>
              <div class='w-checkbox checkbox-field'>
                
                <input type='checkbox' ${(completed) ? "disabled" : "" } ${ (course.completed == 1) ? "checked" : "" } id='completed[]' oninput='return inputCheck(event,${course.curriculum_detail_id}, ${course.curriculum_track_id})' name='completed[]' class='w-checkbox-input checkbox-2'>
                <input type='hidden' name='curriculum_detail_id[]' value="${course.curriculum_detail_id}" >
                <input type='hidden' name='curriculum_track_id[]' value="${course.curriculum_track_id}" >
                <label class='checktext' style='font-size: small;'>Completed</label>
              </div>                         
          </div>
        </div>
            <div class='col w-col w-col-3 w-col-stack'>
        
                
                ${(course.completed == 1) ? updatedSelect(course.curriculum_detail_id, course.curriculum_track_id, course.grades, course.grade_id, completed) : showSelect(course.curriculum_detail_id) }
                <div>
                </div>
            </div>
        </div>
    </div>
        `;
    })
    //console.log(string);
    return string;   
}

const updatedSelect = (curriculum_detail_id, curriculum_track_id, grades, grade_id, completed=false) => {

    let userGrade = grades.filter(grade => {
        return grade.grade_id == grade_id 
    })
    // console.log(userGrade);
    let gradeOptions = `<option selected disabled value='${userGrade[0].grade_id}'> ${userGrade[0].grade_letter}</option>`;
    grades.forEach((grade) => {
        gradeOptions += `
        <option value='${grade.grade_id}'>${grade.grade_letter}</option>
        `;
    })
    // console.log(gradeOptions);
    return `<div id="show${curriculum_detail_id}">
    <select ${(completed) ? "disabled" : "" } required name='grade[]' class='grade_track_input w-select' style='display: block', id='grade_id-${curriculum_detail_id}' oninput='return chooseGrade(${curriculum_track_id}, ${curriculum_detail_id}, true, event)'>
        ${gradeOptions}
    </select>
</div>`
}

const showSelect = (curriculum_detail_id) => {
    
    return `<div id="show${curriculum_detail_id}">
    <select required name='grade[]' style='display: none'>
        <option selected>Grade</option>
    </select>
</div>`
}

const displaySemesters = (semesters, completed=false) => {
    let string = "";
    // semesters.forEach((semester, index) => {
    //     string += `
    //     <div class='list list_of_courses list_tracker' style='border:none';>
    //         <div class='data_heading_box'>
    //             <h3 class='heading-4'>".$semester_name."</h3>
    //         </div>
    //         ${displayCourses(semester)}
    //     </div>
    //     `
    // })
    for(let key of Object.keys(semesters)) {
        string += `
        <div class='list list_of_courses list_tracker' style='border:none';>
            <div class='data_heading_box'>
                <h3 class='heading-4'>${key}</h3>
            </div>
            ${displayCourses(semesters[key], completed)}
        </div>
        `
    }
    return string;

}

const displayYear = (years, completed=false) => {
    let string = "";
    for(let key of Object.keys(years)) {
        string += `
        <div class='' >
            <h1 class='heading-4 list list_of_courses list_tracker' style='border: none; margin-bottom: -15px'><strong>${key} year</strong></h1>
            ${displaySemesters(years[key], completed)}
        <div> 
        `
    }
    return string;
}

const windowOnload = event => {
    $.get("../actions/tracker/get_curriculum_tracker.php", function (data, status) {
        // console.log(data);
        // freshman year
        // const semester = () => {

        // }
        // console.log(data.filter((course) => {
        //     return course
        // }))
        // console.log(data.filter((value) => {
        //     return value.student_level_name == "senior";
        // }))
        

        if(data){
            let form = `
                    <form id='tracker' class='form' method='post' action='../actions/tracker/add_courses_to_tracker.php'>
                        ${displayYear(data)}
                    </form>
                    `;
            document.getElementById("all-courses").innerHTML = form
           // console.log(form);
        }

    })
    $.get("../actions/tracker/get_user_cgpa.php", function (data, success) {
        calculateCGPA(data)
    })
}

const tabTwo = event => {
    $.get("../actions/tracker/get_student_completed_courses.php", function (data, status) {
        // if(!data.isEmpty()){
            document.getElementById("completed-courses").innerHTML = displayYear(data, true);
        // }
    })
}

const tabThree = event => {
    $.get("../actions/tracker/get_student_uncompleted_courses.php", function (data, status) {
        // if(!data.isEmpty()){
            document.getElementById("uncompleted-courses").innerHTML = displayYear(data);
        // }
    })
}

window.addEventListener("onload", windowOnload(event))

document.getElementById("tab-1").addEventListener("onclick", windowOnload);

document.getElementById("tab-2").addEventListener("onclick", tabTwo(event));

document.getElementById("tab-3").addEventListener("onclick", tabThree(event));



//console.log(gradeObject);

// const divs = Array.from(document.getElementsByClassName("custom-checkbox"));
//console.log(divs);

const displayGrades = grades => {
    let accum = "<option selected disabled value=''> Grades</option>";
    grades.forEach((value, index) => {
        accum += `<option value=${value.grade_id}>${value.grade_letter}</option>`
        //console.log(value);
    });
    return accum;
}

const selectInput = (grades, style='display: block', curriculum_detail_id, completed, curriculum_track_id) => {

    const select = document.createElement("select");
    //select.setAttribute("required", true);
    select.required = true;
    select.setAttribute("name", "grade[]");
    select.setAttribute("class", "grade_track_input w-select");
    select.setAttribute("style", style);
    select.setAttribute("id", "grade_id-"+curriculum_detail_id);
    select.setAttribute("oninput", ` return chooseGrade(${curriculum_track_id}, ${curriculum_detail_id}, ${completed}, event)`);

    select.innerHTML = grades;
    // console.log(select);

    //console.log(select);

    // return `
    //     <select required name='grade[]' data-name='Field 4' class='grade_track_input w-select'>
    //         <option value='0' selected disabled>Grade</option>
    //         ${grades}
    //     </select>
    // `
    return select;
};

const inputCheck = (e, curriculum_detail_id, curriculum_track_id) => {
    e.preventDefault();
    // console.log(e.target.checked);
    // console.log(curriculum_detail_id);
    $.get("../actions/tracker/display_grades.php", function (data, success) {
        let gradeId = "show"+curriculum_detail_id;
        const gradeSelect = document.getElementById(gradeId);
        gradeSelect.removeChild(gradeSelect.firstChild);
        if(e.target.checked === true){
            //console.log(gradeSelect);
            // console.log(e.target.checked);
            let grades = displayGrades(data);
            //console.log(selectInput(grades))
            // if(gradeSelect.lastChild){
            //     gradeSelect.innerHTML = "";
            // }
            gradeSelect.appendChild(selectInput(grades, 'display: block', curriculum_detail_id, e.target.checked, curriculum_track_id));
            // console.log('yes')

            // document.getElementById(id).setAttribute("value", "on")
        }else{
            // const select = document.getElementById("grade_id-"+id);
            // console.log(select);
            // select.setAttribute("style", "display: none");
            // //gradeSelect.removeChild(gradeSelect.lastChild)
            // console.log('no')
            // document.getElementById(id).setAttribute("value", "off")
            gradeSelect.innerHTML = "<select required name='grade[]' style='display: none'><option selected value='0'>Grade</option></select>";
            // TODO update course in track list
            chooseGrade(curriculum_track_id, curriculum_detail_id, false, false);
        }
    })

    //console.log("value "+ e.target.value);
    
}

// by default eveything should show
// but then based on the check value show 

const inputCheckUncomplete = (e, id) => {
    e.preventDefault();
    // console.log(e.target.checked);
    // console.log(id);
    $.get("../actions/tracker/display_grades.php", function (data, success) {
        let gradeId = "uncompleteshow"+id;
        const gradeSelect = document.getElementById(gradeId);
        if(e.target.checked){
            //console.log(gradeSelect);
            //console.log(data);
            let grades = displayGrades(data);
            // console.log(selectInput(grades))
            gradeSelect.innerHTML=selectInput(grades);


        }else{
            gradeSelect.innerHTML="";
        }
    })

    
}

const calculateCGPA = courses => {
    // calculates user cgpa
    let units = 0;
    let grade_points = 0;
    courses.forEach(course => {
        units += parseFloat(course.course_unit);
        grade_points += (parseFloat(course.course_unit) === 0.5) ? parseFloat(course.grade_point)/2 : parseFloat(course.grade_point);
        
    })
    let cgpa = grade_points/units;
    const cgpaDisplay = document.getElementById("cgpa");
    cgpaDisplay.innerHTML = cgpa.toFixed(2);
    
    return cgpa.toFixed(2);
    // displays user cgpa
}

const chooseGrade = (curriculum_track_id, curriculum_detail_id, completed, grade) => {
    // takes the course and the grade the user chose
    // makes a post request to the backend to store in database
    // backend returns all the users completed courses
    // function calculates users cgpa and displays on screen
    //console.log(completed)
    $.post(
        "../actions/tracker/update_courses_in_tracker.php",
        {
            curriculum_detail_id,
            completed: (completed) ? 1 : 0,
            grade: (completed) ? grade.target.value : "",
            curriculum_track_id,
            submit: true
        },
        (data, status) => {
            // console.log(data)
            calculateCGPA(data);
        }
    )
}

