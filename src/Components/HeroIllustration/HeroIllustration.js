import React from 'react'
import hero_image from "../../Images/hero_image.svg"
import graduation from "../../Images/graduation.svg"


export const HeroIllustration = () => {
    return (
        <div style={{justifySelf: "end", width: "500px"}}>
            <img width="90%" src={graduation} alt="logo" />
        </div>
    )
}
