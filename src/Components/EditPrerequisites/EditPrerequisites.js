import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../Context/UserContext';
import { AccordionContainer } from './AccordionContainer';
import { CourseTypeAccordion } from './CourseTypeAccordion';
import { Navigate } from 'react-router-dom';



export const EditPrerequisites = () => {

    const { currentUser } = useContext(UserContext);

    const [courses, setCourses] = useState([]);
    const [courseType, setCourseType] = useState([]);

    useEffect(() => {
        const getCourseTypes = async () => {
            const courseTypes = await fetchCourseTypes();
            setCourseType(courseTypes);
        }
        getCourseTypes();
    }, []);

    // hi

    const fetchCourseTypes = async () => {
        const res = await fetch("http://localhost/app_server_curriculum_app/server/actions/courses/get_all_course_types.php");
        const data = await res.json();
        // console.log(data);
        return data;
    }


    // console.log(courseType);
    if (currentUser.permissions === undefined) {
        return <Navigate to="/" replace />
    } 

    if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) {
        return <Navigate to="/" replace />
    }

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
