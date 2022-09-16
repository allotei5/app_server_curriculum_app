import React from 'react'
import { HomePageHero } from './HomePageHero/HomePageHero'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import { HomeCourseTrackerHero } from './HomeCourseTrackerHero'
import { Footer } from './Footer'
import { Loading } from './Loading/Loading'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Home() {
    const { currentUser } = useContext(UserContext);

    return (
        <div>
            <HomePageHero />
            <SectionOne/>
            {/* <SectionTwo/> */}
            {
                (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 2) ? <HomeCourseTrackerHero /> : ""
            }
            {
                (currentUser.user_role == 4) ? <HomeCourseTrackerHero /> : ""
            }
        </div>
    )
}

export default Home
