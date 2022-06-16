import { useState, useEffect } from 'react'
import { fetchLevels } from "../../serverRequests";
import { Courses } from './Courses';

export const CourseType = ({ completeFilter }) => {
    const [ courseTypes, setCourseTypes ] = useState([]);

    useEffect(() => {
        const getCourseTypes = async () => {
            const courseTypesFromServer = await fetchLevels();
            setCourseTypes(courseTypesFromServer);
        }

        getCourseTypes();
    }, [])

  return (
    <>
        {
            courseTypes.map((courseType, index) => (
                <div key={index}>
                    <h2>{courseType.student_level_name}</h2>
                    <Courses courseType={courseType.student_level_id} completeFilter={completeFilter} />
                </div>
            ))
        }
    </>
  )
}
