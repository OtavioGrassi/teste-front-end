import React from 'react'

const Categories = ({ image, text, alt, highlight, tittleColor }) => {
  return (
    <article className='categories'>
      <div className={`card-categories ${highlight ? 'highlight-bg' : ''}`}>
        <img src={image} alt={alt} className='img-categories' />
      </div>
      <h3 className={`tittle-categories ${tittleColor ? 'tittle-purple' : ''}`}>{text}</h3>
    </article>
  )
}

export default Categories