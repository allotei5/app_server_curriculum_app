import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import Button from '../Button'

export const HeroText = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <div>
            <h2 className='headline-title'>A PLATFORM TO HELP YOU KEEP TRACK OF YOUR CURRICULUM</h2>
            <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. </p>
            {
                (currentUser.user_role == 4) ? <Button ButtonName="Course Tracker" ButtonStyle="button primary-button" ButtonSrc="/"/> : ""
            }
            {
                (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) ? <Button ButtonName="Course Tracker" ButtonStyle="button primary-button" ButtonSrc="/"/> : ""
            }
            <Button ButtonName="View Curriculum" ButtonStyle="button secondary-button" ButtonSrc="/view-curriculum" />
        </div>
    )
}
