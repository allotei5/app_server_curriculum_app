//html card

const prerequisiteComponent = courses => {
    let accum = "";
    courses.forEach((course, index) => {
        accum+=`<div class="requisit start">
                    <h4>${course.course_name}</h4>
                    <h4 class="under_head">Pass Mark: C</h4>
                </div>`
    });
    return accum;
}

const cardComponent = course => {
    return `
    <div class="search_card" style="margin-bottom:10px">
        <div class="w-row">
        <div class="w-col w-col-9 w-col-stack">
            <h3 class="search_head">${course.course_name}</h3>
            <h4 class="heading-2 credit">Credits: ${course.course_unit}</h4>
        </div>
        <div class="w-col w-col-3 w-col-stack">
            <div class="search_passmark_box">
            <div class="inside_grade">
                <h4 class="pass_mar">pass grade</h4>
                <h3 class="search_grade">:<span class="text-span-2">${course.grade_letter}</span></h3>
            </div>
            </div>
        </div>
        </div>
        <div class="search_credit"></div>
        <div class="search_prerequisit">
            <h4 class="heading-2 prereq">Prerequisites</h4>
        </div>
        ${(course.prerequisites.length!==0) ? prerequisiteComponent(course.prerequisites) : "There are no prerequisites for this course"}
    </div>
`;
}

const div = document.getElementById("default_search");



$("#search").keyup(e => {
    $.get("../actions/courses/search_courses.php?course_name="+e.target.value, function(data, status){
        console.log(data)
        div.innerHTML=``;
        if(e.target.value !=="") {
            

            let accum="";
            data.forEach((course, index) => {
                let card = cardComponent(course);
                //div.appendChild(card);
                accum += card
                div.innerHTML = accum;

            console.log(course);
            })
            //console.log(data);
        }
      });
})