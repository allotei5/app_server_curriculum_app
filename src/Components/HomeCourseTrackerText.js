import React from 'react'
import Button from './Button'

export const HomeCourseTrackerText = () => {
    return (
        <div className=''>
            <h2 className='cs-fs-3 fw-bold'>A SIMPLER WAY TO TRACK YOUR COURSE PROGRESS AND CUMULATIVE GPA</h2>
            <p className='cs-fs-2 my-4'>Use this tool to track the courses you need to take in order to graduate from Ashesi. All you need to do is check the courses you have taken and choose the grade you got in it</p>
            <Button className='mt-2' ButtonName="Start Tracking" ButtonStyle="button secondary-button" ButtonSrc="/course-tracker" />
        </div>
    )
}
