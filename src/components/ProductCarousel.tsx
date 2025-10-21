import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Left from '../assets/Left.png';
import Right from '../assets/Right.png';

interface Produto {
  photo: string;
  productName: string;
  price: number;
}

interface ProductCarouselProps {
  produtos: Produto[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ produtos }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < produtos.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <section className='carousel-wrapper' aria-label='Carrossel de produtos'>
      <button className='carousel-button left' onClick={prevSlide} disabled={startIndex === 0}>
        <img src={Left} alt='Anterior' />
      </button>
      <div className='carousel-container'>
        <div
          className='carousel-track'
          style={{
            transform: `translateX(-${startIndex * (304 + 20)}px)`,
          }}
        >
          {produtos.map((produto, index) => (
            <ProductCard key={index} produto={produto} />
          ))}
        </div>
      </div>
      <button
        className='carousel-button right'
        onClick={nextSlide}
        disabled={startIndex + itemsPerPage >= produtos.length}
      >
        <img src={Right} alt='Próximo' />
      </button>
    </section>
  );
};

export default ProductCarousel;