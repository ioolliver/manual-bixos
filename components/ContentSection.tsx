import { RevealWrapper } from "next-reveal";

import { ReactNode } from "react"

interface IContentSection {
    children: ReactNode
    animationType: "from-left" | "fade" | "from-left-delay" | "rotate-delay",
    center? : boolean
}

export default function ContentSection({ children, animationType, center } : IContentSection) {
    let distance = "0px"
    let duration = 500
    let delay = 0
    let opacity = 0.3
    let origin = "top"
    let rotate = {x: 0, y: 0, z: 0}

    if(animationType == "from-left") {
        origin = "left"
        distance = "400px"
    }else if(animationType == "from-left-delay") {
        origin = "left"
        distance = "400px"
        delay = 200
    }else if(animationType == "fade") {
        origin = "top"
        distance = "0px"
        opacity = 0
        duration = 800
    }else if(animationType == "rotate-delay") {
        origin = "left"
        distance = "400px"
        delay = 1000
        rotate = {x: 200, y: 0, z: 200}
        duration = 1200
    }

    return <RevealWrapper 
    className={`section-box ${center ? "center" : ""}`} 
    distance={distance} rotate={rotate} duration={duration} delay={delay} opacity={opacity} origin={origin}>
        {children}
    </RevealWrapper>
}