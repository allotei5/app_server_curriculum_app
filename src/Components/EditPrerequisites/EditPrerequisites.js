import { useState, useEffect } from 'react';
import { AccordionContainer } from './AccordionContainer';
import { CourseTypeAccordion } from './CourseTypeAccordion';


export const EditPrerequisites = () => {

    const [courses, setCourses] = useState([]);
    const [courseType, setCourseType] = useState([{"course_type_id": 1, "course_type_name": "hello"}]);

    useEffect(() => {
        const getCourseTypes = async () => {
            const courseTypes = await fetchCourseTypes();
            setCourseType(courseTypes);
        }
        getCourseTypes();
    }, []);

    

    const fetchCourseTypes = async () => {
        const res = await fetch("http://localhost/app_server_curriculum_app/server/actions/courses/get_all_course_types.php");
        const data = await res.json();
        console.log(data);
        return data;
    }


    console.log(courseType);

  return (
    <div className="edit-prerequisite-page">
        <h3 className='headline-title'>
            praesent auctor nulla nec fusce.
        </h3>
        <p>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. </p>
        <AccordionContainer courseTypes={courseType} />
        
       
        
    </div>
  )
}
