import { useContext, useEffect, useState } from 'react'
import { TrackerContext } from '../../Context/TrackerContext'
import { GradeContext } from '../../Context/GradeContext';



export const Cgpa = () => {

    const { courses } = useContext(TrackerContext);
    const { grades } = useContext(GradeContext);

    const [ gpa, setGpa ] = useState(0);

    // useEffect(() => {

    //     if(courses) {
    //         let units = 0;
    //         let gradePoints = 0;

    //         courses.forEach(course => {
    //             units += parseFloat(course.course_unit);
    //             // gradePoints += (parseFloat(course.course_unit) === 0.5) ? parseFloat(course.grade_point)/2 : parseFloat(course.grade_point);
    //         })

    //     }
    //     console.log(grades)

    // }, [courses])

    return (
        <div className='cgpa'>
            <h4>CGPA:</h4>
            <p>{gpa}</p>
        </div>
    )
}
