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