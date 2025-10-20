import React from 'react';

function ProductCard({ produto }) {
  return (
    <article className='card'>
      <img src={produto.photo} alt={produto.productName} className='card-image' />
      <div className='product-infos'>
        <p className='tittle-product'>{produto.productName}</p>
        <p className='discount-product'>R$30,00</p>
        <p className='price'>R$ {produto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        <p className='credit-card'>ou 2x de 49,95 sem juros</p>
        <p className='free-delivery'>Frete grátis</p>
      </div>
      <button className='buy-button'>COMPRAR</button>
    </article>
  );
}

export default ProductCard;