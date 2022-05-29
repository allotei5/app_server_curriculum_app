import { useContext, useEffect, useState } from 'react'
import { TrackerContext } from '../../Context/TrackerContext'
import { GradeContext } from '../../Context/GradeContext';



export const Cgpa = () => {

    const { courses } = useContext(TrackerContext);
    const { grades } = useContext(GradeContext);

    const [ gpa, setGpa ] = useState(0);

    const calculateCGPA = () => {

        if(grades && courses) {
            const newGrades = {};
            grades.forEach((grade) => {
                newGrades[grade.grade_id] = grade.grade_point
            });

            let units = 0;
            let gradePoints = 0;

            courses.forEach(course => {

                if(course.completed == 1) {
                    units += parseFloat(course.course_unit)
                    gradePoints += (parseFloat(course.course_unit) === 0.5) ? parseFloat(newGrades[course.grade_id])/2 : parseFloat(newGrades[course.grade_id]);
                }

                
            })

            return (gradePoints / units).toFixed(2);

        }
        
    }

    useEffect(() => {

        setGpa(calculateCGPA());
        console.log('hi')
    }, [grades, courses])

    return (
        <div className='cgpa'>
            <h4>CGPA:</h4>
            <p>
                {
                    (isNaN(parseFloat(gpa))) ? "0" : gpa
                }
            </p>
        </div>
    )
}
