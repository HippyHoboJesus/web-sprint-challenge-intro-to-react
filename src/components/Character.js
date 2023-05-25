// Write your Character component here
import React from "react"

const Character = (props) => {
    
    return (
        <div className='characters'>
            {props.chars.map(char => {
               return <p>{char.name}</p>
            })}
        </div>
    )
}



export default Character