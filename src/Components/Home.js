import React from 'react'
import { HomePageHero } from './HomePageHero/HomePageHero'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import { HomeCourseTrackerHero } from './HomeCourseTrackerHero'
import { SectionFour } from './SectionFour'

function Home() {
    return (
        <div>
            <HomePageHero />
            <SectionOne/>
            <SectionTwo/>
            <HomeCourseTrackerHero />
            <SectionFour />
        </div>
    )
}

export default Home
