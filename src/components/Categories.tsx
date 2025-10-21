import React from 'react'

interface CategoriesProps {
  image: string;
  alt: string;
  text: string;
  highlight?: boolean;
  tittleColor?: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ image, alt, text, highlight = false, tittleColor = false }) => {
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