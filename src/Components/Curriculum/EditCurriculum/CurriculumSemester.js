import { useState, useEffect } from 'react'
import { AddCurriculumCourse } from './AddCurriculumCourse'
import { CurriculumCourse } from './CurriculumCourse'

export const CurriculumSemester = ({semester, academicYear}) => {

  const [ coursesFromServer, setCoursesFromServer ] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const courses = await fetchCourses();
      setCoursesFromServer(courses);
    }

    getCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}actions/curriculum/select_curriculum_details_by_level_semester_and_id.php?curriculum_id=1&semester_id=${semester.semester_id}&level_id=${academicYear}`);
    const data = await res.json();
    return data;
  }

  return (
    <div style={{marginBottom: "20px"}}>
        <h6>{semester.semester_name}</h6>
        {
          coursesFromServer.map((value, index) => (
            <CurriculumCourse key={index} course={value} />
          ))
        }
        
        <AddCurriculumCourse />
    </div>
  )
}
