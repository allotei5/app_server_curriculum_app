import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import Button from '../Button'

export const HeroText = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <div>
            <h2 className='cs-fs-1 fw-bolder' style={{color: "#554343"}}>A PLATFORM TO HELP YOU KEEP TRACK OF YOUR CURRICULUM</h2>
            <p className='cs-fs-2 my-4'>As a student, it's important to keep track of your academic progress. The CS department built this tool to help you stay on top of your academic progress towards graduation. You can also use it to look up the prerequisites for courses</p>
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
