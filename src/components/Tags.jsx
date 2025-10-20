import React from 'react'

function Tags({text, tittleColor }) {
    return (
        <div className='tags'>
            <p className={`tag-tittle ${tittleColor ? 'tag-blue' : ''}`}>
                {text}
            </p>
        </div> 
  )
}

export default Tags