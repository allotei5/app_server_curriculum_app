import { useContext, useState, useEffect } from 'react'
import { TrackerContext } from '../../Context/TrackerContext'
import { CourseInTracker } from './CourseInTracker';


export const Courses = ({ courseType, completeFilter }) => {

  const { courses } = useContext(TrackerContext);
  const [ filteredCourses, setFilteredCourses ] = useState([]);

  useEffect(() => {

    if(courses !== null && courses.response === undefined) {
      // Filter courses by type
      setFilteredCourses(courses.filter((course) => {
        if(completeFilter === null) {
          return course.course_type === courseType
        }else {
          return course.course_type === courseType && course.completed == completeFilter
        }
      }));
    } else {
      setFilteredCourses([]);
    }

  }, [courses])

  return (
    <>
      {
        (filteredCourses.length !== 0) ? filteredCourses.map((course) => (<CourseInTracker course={course} key={course.course_id} />))
        : "No courses in this course type"
      }
    </>
  )
}
