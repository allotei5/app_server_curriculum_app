import React from 'react'
import Button from './Button'

export const HomeCourseTrackerText = () => {
    return (
        <div className=''>
            <h2 className='cs-fs-3 fw-bold'>A SIMPLER WAY TO TRACK YOUR COURSE PROGRESS AND CUMULATIVE GPA</h2>
            <p className='cs-fs-2 my-4'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. </p>
            <Button className='mt-2' ButtonName="Start Tracking" ButtonStyle="button secondary-button" ButtonSrc="/" />
        </div>
    )
}
