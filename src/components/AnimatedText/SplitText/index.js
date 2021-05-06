import React from 'react'

const SplitText = ({copy, role}) => {
    return (
        <span aria-label={copy} role={role}>
            {copy.split("").map((char, index) => {
                return <span aria-hidden="true" key={index} >{char}</span>
            })}        
        </span>
    )
}

export default SplitText
