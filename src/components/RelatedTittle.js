import React from 'react'

const RelatedTittle = ({hidden}) => {
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
