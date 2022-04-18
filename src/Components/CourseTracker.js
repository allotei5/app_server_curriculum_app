import React from 'react'
import { Cgpa } from './Cgpa'
import MyTabs from './MyTabs'


function CourseTracker() {
    return (
        <div className="course-tracker-page">
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
        </div>
    )
}

export default CourseTracker
