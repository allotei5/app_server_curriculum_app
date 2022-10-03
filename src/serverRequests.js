const backendServer = `https://apps.ashesi.edu.gh/curriculum/server/actions`;
// const backendServer = `http://localhost/app_server_curriculum_app/server/actions`;

export const fetchYearGroups = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_year_groups`);
    const data = await res.json();
    return data;
}

export const fetchCurriculumByYearGroup = async year_group_id => {
    const res = await fetch(`${backendServer}/curriculum/fetch_curriculums_by_year_group?year_group_id=${year_group_id}`);
    const data = await res.json();
    return data;
}

export const fetchCoursesFromCurriculum = async (curriculum_id, semester_id, academic_year) => {
    const res = await fetch(`${backendServer}/curriculum/select_curriculum_details_by_level_semester_and_id?curriculum_id=${curriculum_id}&semester_id=${semester_id}&level_id=${academic_year}`);
    const data = await res.json();
    return data;
}

export const fetchMajors = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_majors`);
    const data = await res.json();
    return data;
}

export const createNewCurriculum = async (curriculum) => {
    const res = await fetch(`${backendServer}/curriculum/add_new_curriculum`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ...curriculum
        })
    });
    const data = await res.json();
    return data;
}

export const editCurriculum = async (curriculum) => {
    const res = await fetch(`${backendServer}/curriculum/edit_curriculum`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ...curriculum
        })
    })

    const data = await res.json();
    return data;
}

export const fetchCurriculums = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_curriculums`);
    const data = await res.json();
    return data;
}

export const fetchAcademicYears = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_academic_years`);
    const data = await res.json();
    return data;
}

export const fetchLevels = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_student_levels`);
    const data = await res.json();
    return data;
}

export const fetchSemesters = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_semesters`);
    const data = await res.json();
    return data;
}

export const fetchCourseTypes = async () => {
    const res = await fetch(`${backendServer}/courses/get_all_course_types`);
    const data = await res.json();
    return data;
}

export const fetchLoggedInUser = async () => {
    const prevAddress = window.location.href;
    const res = await fetch(`${backendServer}/user/get_user?page=${prevAddress}`);
    const data = await res.json();
    return data;
}

export const fetchDepartments = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_departments`);
    const data = await res.json();
    return data;
}

export const fetchTrackerCourses = async (user, year, major) => {
    const date = new Date();
    const time = date.getTime();
    const res = await fetch(`${backendServer}/tracker/get_student_courses_in_tracker?user_id=${user}&major=${major}&year_group=${year}&nocache=${time}`);
    const data = await res.json();
    return data;
}

export const fetchGradeBreakDown = async () => {
    const res = await fetch(`${backendServer}/courses/get_grade_breakdown`);
    const data = await res.json();
    return data;
}

export const updateCourseInTracker = async (trackerCourse) => {
    const res = await fetch(`${backendServer}/tracker/update_course_in_tracker`, {
        method: 'PUT', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ...trackerCourse
        })
    });

    const data = await res.json();
    return data;
}

export const fetchCourses = async () => {
    const res = await fetch(`${backendServer}/courses/get_all_courses`);
    const data = await res.json();
    return data;
}

//Stephane  Nwolley <snwolley@ashesi.edu.gh>;

export const fetchCoursesOnly = async () => {
    const res = await fetch(`${backendServer}/courses/get_all_courses_without_min_grades`);
    const data = await res.json();
    return data;
}

export const fetchCoursesByName = async (term) => {
    const res = await fetch(`${backendServer}/courses/get_courses_by_name?course=${term}`);
    const data = await res.json();
    return data;
}
 
export const updateProfile = async (currentUser) => {
    const res = await fetch(`${backendServer}/user/update_student_details`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ...currentUser
        })
    })

    const data = await res.json();
    return data;
}

export const getAllStudents = async (start) => {
    const res = await fetch(`${backendServer}/user/get_students?page=${start}`);
    const data = await res.json();
    return data;
}

export const searchStudents = async (name) => {
    const res = await fetch(`${backendServer}/user/search_students?term=${name}`);
    // console.log(`${backendServer}/user/search_students?term=${name}`)
    const data = await res.json();
    return data;
}

export const getOneStudentDetails = async (id) => {
    const res = await fetch(`${backendServer}/user/get_student?user_id=${id}`);
    const data = await res.json();
    return data;
}

export const getStudentCount = async () => {
    const res = await fetch(`${backendServer}/user/get_student_count`);
    const data = await res.json();
    return data;
}

export const getDepartments = async () => {
    const res = await fetch(`${backendServer}/courses/get_all_departments`);
    const data = await res.json();
    return data;
}

export const fetchCoursesByDepartment = async (id) => {
    const res = await fetch(`${backendServer}/courses/get_all_courses_by_department?department_id=${id}`);
    const data = await res.json();
    return data;
    // console.log(`${backendServer}/courses/get_all_courses_by_department?department_id=${id}`)
}

export const createNewCourse = async (course) => {
    // console.log(`${backendServer}/courses/add_new_course`)
    // console.log(course);
    const res = await fetch(`${backendServer}/courses/add_new_course`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ...course
        })
    });

    const data = await res.json();
    return data;
}

export const fetchCourse = async (id) => {
    const res = await fetch(`${backendServer}/courses/get_one_course?course_id=${id}`);
    const data = await res.json();
    return data;
}

export const updateCourse = async (course) => {
    const res = await fetch(`${backendServer}/courses/update_course`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ...course
        })
    })

    const data = await res.json();
    // console.log(data);
    return data;
}

export const removeCourseFromCurriculum = async (id) => {
    const res = await fetch(`${backendServer}/curriculum/remove_curriculum_detail`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          curriculum_detail_id: id
        })
      });
      const data = await res.json();
      return data
}

export const fetchOneCourseForCurriculumFromServer = async (curriculum_id, student_level, semester_id) => {
    const res = await fetch(`${backendServer}/curriculum/add_new_course_to_curriculum`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          curriculum_id,
          student_level,
          semester_id
        })
      });
    
    const data = await res.json();
    return data;
}

export const updateCourseInCurriculum = async (course) => {
    const res = await fetch(`${backendServer}/curriculum/edit_curriculum_details`, {
        method: "PUT",
        body: JSON.stringify({
          ...course
        })
    });

    const data = await res.json();
    return data;
}

export const fetchPrerequisites = async (course_id) => {
    const res = await fetch(`${backendServer}/prerequisites/get_one_course_prerequisites?course_id=${course_id}`);
    const data = await res.json();
    return data;
}

export const addNewPrerequisite = async (newPrerequisite) => {
    const res = await fetch(`${backendServer}/prerequisites/add_new_prerequisite`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newPrerequisite)
    });
    // console.log(newPrerequisite);
    const data = await res.json();
    return data;
}

export const removePrerequisiteFromServer = async (pre_requisite_id) => {
    const res = await fetch(`${backendServer}/prerequisites/delete_prerequisite`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            course_id: pre_requisite_id
        })
    });

    const data = await res.json();
    return data;
}