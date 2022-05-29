const backendServer = `http://localhost/app_server_curriculum_app/server/actions`;

export const fetchYearGroups = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_year_groups.php`);
    const data = await res.json();
    return data;
}

export const fetchCurriculumByYearGroup = async year_group_id => {
    const res = await fetch(`${backendServer}/curriculum/fetch_curriculums_by_year_group.php?year_group_id=${year_group_id}`);
    const data = await res.json();
    return data;
}

export const fetchCoursesFromCurriculum = async (curriculum_id, semester_id, academic_year) => {
    const res = await fetch(`${backendServer}/curriculum/select_curriculum_details_by_level_semester_and_id.php?curriculum_id=${curriculum_id}&semester_id=${semester_id}&level_id=${academic_year}`);
    const data = await res.json();
    return data;
}

export const fetchMajors = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_majors.php`);
    const data = await res.json();
    return data;
}

export const createNewCurriculum = async (curriculum) => {
    const res = await fetch(`${backendServer}/curriculum/add_new_curriculum.php`, {
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

export const fetchCurriculums = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_curriculums.php`);
    const data = await res.json();
    return data;
}

export const fetchAcademicYears = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_academic_years.php`);
    const data = await res.json();
    return data;
}

export const fetchSemesters = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_semesters.php`);
    const data = await res.json();
    return data;
}

export const fetchCourseTypes = async () => {
    const res = await fetch(`${backendServer}/courses/get_all_course_types.php`);
    const data = await res.json();
    return data;
}

export const fetchLoggedInUser = async () => {
    const res = await fetch(`${backendServer}/user/get_user.php`);
    const data = await res.json();
    return data;
}

export const fetchDepartments = async () => {
    const res = await fetch(`${backendServer}/curriculum/fetch_departments.php`);
    const data = await res.json();
    return data;
}

export const fetchTrackerCourses = async (user, year, major) => {
    const res = await fetch(`${backendServer}/tracker/get_student_courses_in_tracker.php?user_id=${user}&major=${major}&year_group=${year}`);
    const data = await res.json();
    return data;
}

export const fetchGradeBreakDown = async () => {
    const res = await fetch(`${backendServer}/courses/get_grade_breakdown.php`);
    const data = await res.json();
    return data;
}

export const updateCourseInTracker = async (trackerCourse) => {
    const res = await fetch(`${backendServer}/tracker/update_course_in_tracker.php`, {
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