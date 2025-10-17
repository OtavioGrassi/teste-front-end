import React from 'react';

function ProductCard({ produto }) {
  return (
    <article className="card">
      <img src={produto.photo} alt={produto.productName} className="card-image" />
      <h2>{produto.productName}</h2>
      <p>{produto.descriptionShort}</p>
      <p className="price">R$ {produto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      <button className="buy-button">Comprar</button>
    </article>
  );
}

export default ProductCard;