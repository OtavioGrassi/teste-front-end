import React from 'react'

interface TagsProps {
    text: string;
    tittleColor: boolean;
}

const Tags: React.FC<TagsProps> = ({ text, tittleColor }) => {
    return (
        <div className='tags'>
            <p className={`tag-tittle ${tittleColor ? 'tag-blue' : ''}`}>
                {text}
            </p>
        </div>
    )
}

export default Tags