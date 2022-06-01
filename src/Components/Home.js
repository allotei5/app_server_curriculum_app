import React from 'react'
import { HomePageHero } from './HomePageHero/HomePageHero'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import { HomeCourseTrackerHero } from './HomeCourseTrackerHero'
import { Footer } from './Footer'
import { Loading } from './Loading/Loading'

function Home() {
    return (
        <div>
            <HomePageHero />
            <SectionOne/>
            {/* <SectionTwo/> */}
            <HomeCourseTrackerHero />
        </div>
    )
}

export default Home
