import React from 'react'
import hero_image from "../../Images/hero_image.svg"


export const HeroIllustration = () => {
    return (
        <div style={{textAlign: "right"}}>
            <img width="100%" src={hero_image} alt="logo" />
        </div>
    )
}
