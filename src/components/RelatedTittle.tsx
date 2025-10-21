import React from 'react'


interface RelatedTittleProps {
    hidden: boolean;
}

const RelatedTittle: React.FC<RelatedTittleProps> = ({ hidden }) => {
    return (
        <section className='related-wrapper'>
            <article className='related-products'>
                <div className='line-secundary'></div>
                <h2 className='related-products-tittle'>Produtos relacionados</h2>
                <div className='line-secundary'></div>
            </article>
            <p className={`related-more ${hidden ? 'hidden' : ''}`}>Ver todos</p>
        </section>
    )
}

export default RelatedTittle
