import { useState, useEffect } from 'react'
import { fetchCourseTypes } from "../../serverRequests";
import { Courses } from './Courses';

export const CourseType = () => {
    const [ courseTypes, setCourseTypes ] = useState([]);

    useEffect(() => {
        const getCourseTypes = async () => {
            const courseTypesFromServer = await fetchCourseTypes();
            setCourseTypes(courseTypesFromServer);
        }

        getCourseTypes();
    }, [])

  return (
    <>
        {
            courseTypes.map((courseType, index) => (
                <div key={index}>
                    <h2>{courseType.course_type_name}</h2>
                    <Courses courseType={courseType.course_type_id} />
                </div>
            ))
        }
    </>
  )
}
