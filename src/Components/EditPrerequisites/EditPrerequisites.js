import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../Context/UserContext';
import { AccordionContainer } from './AccordionContainer';
import { Navigate } from 'react-router-dom';
import {  getDepartments } from '../../serverRequests';
import { AddCourseModal } from './AddCourseModal';
import { UpdateCourseModal } from './UpdateCourseModal';


export const EditPrerequisites = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ updateShow, setUpdateShow ] = useState(false);
    const updateHandleClose = () => setUpdateShow(false)
    const updateHandleShow = () => setUpdateShow(true)


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
    // if (currentUser.permissions === undefined) {
    //     return <Navigate to="/" replace />
    // } 

    // if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) {
    //     return <Navigate to="/" replace />
    // }

  return (
    <div className="edit-prerequisite-page">
        <h3 className='headline-title'>
            Edit Prerequisites
        </h3>
        <p>Use this page to add prerequisites to a course. You can also use it to update courses</p>
        <div style={{marginBottom: "10px"}}>
            <button onClick={() => handleShow()} className='btn btn-primary' style={{marginRight: "10px"}}>Add Course</button>
            <button onClick={() => updateHandleShow() } className='btn btn-success'>Update Course</button>
        </div>
        <AddCourseModal show={show} handleClose={handleClose} departments={departments}/>
        <UpdateCourseModal show={updateShow} handleClose={updateHandleClose} departments={departments} />
        <AccordionContainer departments={departments} />
        
       
        
    </div>
  )
}
