import { useContext, useEffect, useState } from 'react'
import { Cgpa } from './Cgpa'
import MyTabs from './MyTabs'

import { UserContext } from '../../Context/UserContext'
import { TrackerContext } from '../../Context/TrackerContext'
import { GradeContext } from '../../Context/GradeContext'

import { fetchTrackerCourses, fetchGradeBreakDown, getOneStudentDetails } from '../../serverRequests'
import { Navigate, Link, useParams } from 'react-router-dom'

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
                const courses = await fetchTrackerCourses((currentUser.user_role == 1) ? currentUser.student_details.user_id : currentUser.user_id, currentUser.student_details.student_year_group, currentUser.student_details.student_major);
                setCourses(courses);
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

    


    // only be available to students and admins
    if (currentUser.user_role != 4 && currentUser.user_role != 1 && currentUser.user_role != 2) {
        return <Navigate to="/" replace />
    } 

    if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) {
        return <Navigate to="/" replace />
    }

    if (Object.keys(params).length !== 0 && currentUser.user_role == 4) {
        return <Navigate to="/course-tracker" replace />
    }

    return (
        <div className="course-tracker-page">
            {
                (!userPrompt) ?
                    <>
                        <div className="course-tracker-grid">
                            <div>
                                <h3 className='sub-title'>Your 4 year curriculum</h3>
                                <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Convallis pretium tempus in neque lobortis.</p>
                                {
                                    (courses !== null) ? (courses.response !== undefined) ? <div>No curriculum available for this user</div> : "" : ""
                                }
                            </div>
                            <Cgpa />
                        </div>
                        
                        <div className="">
                            {
                                (courses !== null) ? (courses.response !== undefined) ? "" : <MyTabs/> : ""
                            }                            
                        </div>
                    </>
                : (currentUser.user_role == 1) ? 
                <div className="course-tracker-grid">
                    <div> 
                        <h3 className='sub-title'>lipsum</h3>
                        <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Convallis pretium tempus in neque lobortis.</p>
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
