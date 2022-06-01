import React from 'react'
import Button from './Button'

export const HomeCourseTrackerText = () => {
    return (
        <div className='HomeCourseTrackerText'>
            <h2 className='sub-title'>A SIMPLER WAY TO TRACK YOUR COURSE PROGRESS AND CUMULATIVE GPA</h2>
            <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. </p>
            <Button ButtonName="Start Tracking" ButtonStyle="button secondary-button" ButtonSrc="/" />
        </div>
    )
}
