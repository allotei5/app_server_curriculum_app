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
          return course.student_level === courseType
        }else {
          return course.student_level === courseType && course.completed == completeFilter
        }
      }));
    } else {
      setFilteredCourses([]);
    }

    // console.log(courses)
  }, [courses])

  return (
    <>
      {
        (filteredCourses.length !== 0) ? filteredCourses.map((course, index) => (<CourseInTracker course={course} key={course.curriculum_tracker_id} />))
        : "No courses in this year"
      }
    </>
  )
}
