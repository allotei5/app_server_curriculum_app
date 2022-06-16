import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../Context/UserContext';
import { AccordionContainer } from './AccordionContainer';
import { CourseTypeAccordion } from './CourseTypeAccordion';
import { Navigate } from 'react-router-dom';
import { getDepartments } from '../../serverRequests';



export const EditPrerequisites = () => {

    const { currentUser } = useContext(UserContext);

    const [courses, setCourses] = useState([]);
    const [ departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            const depts = await getDepartments()
            setDepartments(depts);
        }
        fetchDepartments();
    }, []);


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
        <AccordionContainer departments={departments} />
        
       
        
    </div>
  )
}
