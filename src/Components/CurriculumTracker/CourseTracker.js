import { useContext, useEffect, useState } from 'react'
import { Cgpa } from './Cgpa'
import MyTabs from './MyTabs'

import { UserContext } from '../../Context/UserContext'
import { TrackerContext } from '../../Context/TrackerContext'
import { GradeContext } from '../../Context/GradeContext'

import error_illustion from '../../Images/error_illustration.svg';

import { fetchTrackerCourses, fetchGradeBreakDown } from '../../serverRequests'

const CourseTracker = () => {

    const { currentUser } = useContext(UserContext);
    const { courses, setCourses } = useContext(TrackerContext);
    const { grades, setGrades } = useContext(GradeContext);
    
    const [ userPrompt, setUserPrompt ] = useState(false);

    useEffect(() => {
        const getTrackerCourses = async () => {
            setUserPrompt(false);
            if (currentUser.student_details !== undefined) {
                const courses = await fetchTrackerCourses(currentUser.user_id, currentUser.student_details.student_year_group, currentUser.student_details.student_major);
                setCourses(courses);
                console.log(currentUser.user_id, currentUser.student_details.student_year_group, currentUser.student_details.student_major)
                console.log(currentUser.student_details);
            } else {
                setUserPrompt(true);
            }
        }
        getTrackerCourses();
        console.log("changed");
    }, [currentUser])

    useEffect(() => {
        const getGradeBreakDown = async () => {
            const grades = await fetchGradeBreakDown();
            setGrades(grades);
        }
        getGradeBreakDown();
    }, [])

    useEffect(() => {
        console.log(courses)
    }, [courses])

    return (
        <div className="course-tracker-page">
            {
                (!userPrompt) ?
                    <>
                        <div className="course-tracker-grid">
                            <div>
                                <h3 className='sub-title'>praesent auctor nulla nec fusce.</h3>
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
                            {/* {
                                (courses.response !== undefined) ? <div><img width="90%" src={error_illustion} alt="logo" /></div> : 
                            } */}
                            
                        </div>
                    </>
                :
                <div className="course-tracker-grid">Please set up your profile to continue using this feature</div>
            }
        </div>
    )
}

export default CourseTracker
