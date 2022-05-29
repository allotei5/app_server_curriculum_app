import { useContext, useEffect, useState } from 'react'
import { Cgpa } from './Cgpa'
import MyTabs from './MyTabs'

import { UserContext } from '../../Context/UserContext'
import { TrackerContext } from '../../Context/TrackerContext'
import { GradeContext } from '../../Context/GradeContext'

import { fetchTrackerCourses, fetchGradeBreakDown } from '../../serverRequests'

const CourseTracker = () => {

    const { currentUser } = useContext(UserContext);
    const { courses, setCourses } = useContext(TrackerContext);
    const { grades, setGrades } = useContext(GradeContext);
    
    const [ userPrompt, setUserPrompt ] = useState(false);

    useEffect(() => {
        const getTrackerCourses = async () => {
            if (currentUser.student_details !== undefined) {
                const courses = await fetchTrackerCourses(currentUser.user_id, currentUser.student_details.student_year_group, currentUser.student_details.student_major);
                setCourses(courses);
            } else {
                setUserPrompt(true);
            }
        }
        getTrackerCourses();
        console.log(currentUser)
    }, [currentUser])

    useEffect(() => {
        const getGradeBreakDown = async () => {
            const grades = await fetchGradeBreakDown();
            setGrades(grades);
        }

        getGradeBreakDown();
    }, [])

    // useEffect(() => {
    //     console.log(grades);
    // }, [grades])

    return (
        <div className="course-tracker-page">
            {
                (!userPrompt) ?
                    <>
                        <div className="course-tracker-grid">
                            <div>
                                <h3 className='sub-title'>praesent auctor nulla nec fusce.</h3>
                                <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Convallis pretium tempus in neque lobortis.</p>
                            </div>
                            <Cgpa />
                        </div>
                        
                        <div className="">
                            <MyTabs/>
                        </div>
                    </>
                :
                <>Please set up your profile to continue using this feature</>
            }
            
            
        </div>
    )
}

export default CourseTracker
