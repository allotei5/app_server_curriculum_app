import React from 'react'
import { HeroText } from '../HeroText/HeroText'
import { HeroIllustration } from '../HeroIllustration/HeroIllustration'

export const HomePageHero = () => {
    return (
        <div className="HomePageHero">
            <HeroText />
            <HeroIllustration />
        </div>
    )
}
