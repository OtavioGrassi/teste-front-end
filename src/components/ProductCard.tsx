import React, { useState } from 'react';
import Modal from './Modal';

interface Produto {
  photo: string;
  productName: string;
  price: number;
}

interface ProductCardProps {
  produto: Produto;
}

function ProductCard({ produto }: ProductCardProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <article
      onClick={() => {
        if (!isModalOpen) {
          setIsModalOpen(true);
        }
      }}
      className='card'
    >
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img src={produto.photo} alt={produto.productName} className='modal-image' />
        <article className='modal-infos'>
          <div className='modal-tittle-wrapper'>
            <h2 className='tittle-product-modal'>{produto.productName}</h2>
            <p className='modal-price'>R$ {produto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          </div>
          <div className='modal-description-wrapper'>
            <p className='modal-description'>Many desktop publishing packages and web page <br /> editors now many desktop publishing</p>
            <p className='modal-details'>Veja mais detalhes do produto &gt;</p>
          </div>
          <section className='amount-buy'>
            <div className="quantity-box">
              <button className="btn" aria-label='Botão remover unidade' onClick={decrease}>-</button>
              <span className="quantity">{String(quantity).padStart(2, '0')}</span>
              <button className="btn" aria-label='Botão adicionar unidade' onClick={increase}>+</button>
            </div>
            <button className='modal-buy'>COMPRAR</button>
          </section>
        </article>
      </Modal>
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