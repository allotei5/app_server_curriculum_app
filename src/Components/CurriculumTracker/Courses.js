import { useContext, useState, useEffect } from 'react'
import { TrackerContext } from '../../Context/TrackerContext'
import { CourseInTracker } from './CourseInTracker';


export const Courses = ({ courseType }) => {

  const { courses } = useContext(TrackerContext);
  const [ filteredCourses, setFilteredCourses ] = useState([]);

  useEffect(() => {

    if(courses !== null) {
      setFilteredCourses(courses.filter((courses) => (courses.course_type === courseType)));
    }

  }, [courses])

  return (
    <>
      {
        (filteredCourses.length !== 0) ? filteredCourses.map((course) => (<CourseInTracker course={course} key={course.course_id} />))
        : ""
      }
    </>
  )
}
