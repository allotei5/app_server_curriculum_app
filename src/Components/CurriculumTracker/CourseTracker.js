import { useContext, useEffect, useState } from 'react'
import { Cgpa } from './Cgpa'
import MyTabs from './MyTabs'

import { UserContext } from '../../Context/UserContext'
import { TrackerContext } from '../../Context/TrackerContext'
import { GradeContext } from '../../Context/GradeContext'

import { fetchTrackerCourses, fetchGradeBreakDown, getOneStudentDetails } from '../../serverRequests'
import { Navigate, Link, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const CourseTracker = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { courses, setCourses } = useContext(TrackerContext);
    const { setGrades } = useContext(GradeContext);

    const [ userPrompt, setUserPrompt ] = useState(false);

    const params = useParams();
    useEffect(() => {
        const getTrackerCourses = async () => {
            setUserPrompt(false);
            if (currentUser.student_details !== undefined) {
                try {
                    const courses = await fetchTrackerCourses((currentUser.user_role == 1) ? currentUser.student_details.user_id : currentUser.user_id, currentUser.student_details.student_year_group, currentUser.student_details.student_major);
                    setCourses(courses);
                    console.log(courses) 
                } catch (error) {
                    console.log(error)
                }
                
            }else {
                setUserPrompt(true);
            }
        }
        // console.log(currentUser);
       
        getTrackerCourses();
    }, [currentUser])

    useEffect(() => {
        const getGradeBreakDown = async () => {
            const grades = await fetchGradeBreakDown();
            setGrades(grades);
        }        
        getGradeBreakDown();
    }, [])

    useEffect(() => {
        const fetchStudentDetails = async (id) => {
            const student = await getOneStudentDetails(id);
            console.log(student);
            const updatedUser = {
                ...currentUser,
                student_details: student
            }
            setCurrentUser(updatedUser);
        }

        if (params.user_id !== undefined) {
            fetchStudentDetails(params.user_id)
        }
    }, [])

    


    // only be available to students and admins and staff
    // if (currentUser.user_role != 4 && currentUser.user_role != 1 && currentUser.user_role != 2) {
    //     return <Navigate to="/" replace />
    // } 

    // if (currentUser.permissions == undefined) {
    //     return <Navigate to="/" replace />
    // }

    // if (Object.keys(params).length !== 0 && currentUser.user_role != 4) {
    //     return <Navigate to="/course-tracker" replace />
    // }
    console.log('cccc', currentUser)
    return (
        <div className="course-tracker-page">
            {
                (!userPrompt) ?
                    <>
                        <Container>
                            <Row>
                                <Col md={9}>
                                    {
                                        (currentUser.user_role == 1 || currentUser.permissions?.user_permission_id == 1) ? <h3 className='cs-fs-3 fw-bold'>{currentUser?.student_details?.user_fname} {currentUser?.student_details?.user_lname}'s 4 year curriculum</h3>
                                        : <h3 className='cs-fs-3 fw-bold'>Your 4 year curriculum</h3>
                                    }
                                    <p className='cs-fs-2'>Welcome to the course tracking tool! Use this page to track the courses you need to take in order to graduate from Ashesi. All you need to do is check the courses you have taken and choose the grade you got in it</p>
                                    {
                                        (courses !== null) ? (courses.response !== undefined) ? <div className='cs-fs-2'>No curriculum available for this user</div> : "" : ""
                                    }
                                </Col>
                                <Col>
                                    <Cgpa />
                                </Col>
                            </Row>
                        </Container>
                        
                        <div>
                            {
                                (courses !== null) ? (courses.response !== undefined) ? "" : <MyTabs/> : ""
                            }                            
                        </div>
                    </>
                : (currentUser.user_role == 1 || currentUser.permissions?.user_permission_id == 1) ? 
                <div className="course-tracker-grid">
                    <div> 
                        <h3 className='sub-title'>4 year curriculum tracker</h3>
                        <p className='headline-text'>Welcome to the course tracking tool! Use this page to track the courses a student needs to take in order to graduate from Ashesi. All you need to do is check the courses they have taken and choose the grade they got in them</p>
                        <Link to="/students" className="button primary-button">Choose student</Link>            
                    </div>
                    <Cgpa />
                    
                </div>
                :<div className="course-tracker-grid">Please set up your profile to continue using this feature</div>
            }
        </div>
    )
}

export default CourseTracker
