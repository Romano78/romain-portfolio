import React, { useState } from 'react'
import { AnimationSpan } from './styles'

const SplitText = ({copy , role}) => {
    const [animation, setAnimation ] = useState(false)
    const animationHandler = (e) => {
        if (e.currentTarget.className === "styles__AnimationSpan-imzgJI") {
            e.currentTarget.classList.add("bouncing-animation") 
            setAnimation(!animation)
        } else {
            e.currentTarget.classList.remove("bouncing-animation") 
            setAnimation(!animation)
        }
    }
    return (
        <span aria-label={copy} role={role}>
            {copy.split("").map((char, index) => {
                return <AnimationSpan aria-hidden="true" key={index} onMouseEnter={(e) => animationHandler(e)} animation={animation}>{char}</AnimationSpan>
            })}        
        </span>
    )
}

export default SplitText
