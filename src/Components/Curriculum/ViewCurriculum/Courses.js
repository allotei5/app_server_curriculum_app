import { useState, useEffect } from 'react'
import { fetchCoursesFromCurriculum } from '../../../serverRequests';

export const Courses = ({curriculum, year, semester}) => {
  const [ curriculumCourses, setCurriculumCourses ] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const courses = await fetchCoursesFromCurriculum(curriculum, semester, year);
      setCurriculumCourses(courses);
      console.log(curriculumCourses);
    }

    getCourses();
  }, [curriculum])
  return (
    <>
      
          {
            (curriculumCourses.length !== 0) ? 
            curriculumCourses.map((course, index) => (
              <div className="courses-grid" key={index}>
                <p className='headline-text'>{course.course_name}</p>
                <p className='headline-text'>Credits {course.course_unit}</p>
                <p className='headline-text'>Pass grade: {course.grade_letter}</p>
                <p className='headline-text'>{course.course_type_name}</p>
              </div>
            )): <p className='headline-text'>There are no courses for this semester</p>
          }
    </>
  )
}

