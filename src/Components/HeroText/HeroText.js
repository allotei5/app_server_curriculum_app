import React from 'react'
import Button from '../Button'

export const HeroText = () => {
    return (
        <div>
            <h2 className='headline-title'>A PLATFORM TO HELP YOU KEEP TRACK OF YOUR CURRICULUM</h2>
            <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. </p>
            {/* <button>main call to action</button> */}
            {/* <button>second call to action</button> */}
            <Button ButtonName="Course Tracker" ButtonStyle="button primary-button" ButtonSrc="/"/>
            <Button ButtonName="View Curriculum" ButtonStyle="button secondary-button" ButtonSrc="/view-curriculum" />
        </div>
    )
}
