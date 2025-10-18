import React, { useState, useEffect } from 'react';
import ProductCard from '../src/components/ProductCard';
import ShieldCheck from './assets/ShieldCheck.png'
import Truck from './assets/Truck.png'
import CreditCard from './assets/CreditCard.png'
import Logo from './assets/Logo.png'
import Vector from './assets/Vector.png'
import Heart from './assets/Heart.png'
import UserCircle from './assets/UserCircle.png'
import ShoppingCart from './assets/ShoppingCart.png'
import TrustInfo from './components/TrustInfo';
import CrownSimple from './assets/CrownSimple.png'
import MagnifyingGlass from './assets/MagnifyingGlass.png'
import Categories from './components/Categories';
import Technology from './assets/Technology.png';
import Supermercados from './assets/Supermercados.png';
import Whiskey from './assets/Whiskey.png';
import Tools from './assets/Tools.png';
import Health from './assets/Health.png';
import Sports from './assets/Sports.png';
import Fashion from './assets/Fashion.png';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Acessa a API fornecida para o teste. Tive de adicionar um proxy em meu package.json pois o CORS estava bloqueado o acesso da API.
    fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => {
        setProdutos(data.products);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <main className='app'>
      <header>
        <section className='header-infos'>
          <TrustInfo
            image={ShieldCheck}
            text='Compra'
            highlight='100% segura'
            alt='Ícone de segurança'
          />
          <TrustInfo
            image={Truck}
            text='Frete grátis'
            highlight='acima de R$200'
            alt='Ícone de frete grátis'
          />
          <TrustInfo
            image={CreditCard}
            text='Parcele'
            highlight='suas compras'
            alt='Ícone de cartão de crédito'
          />
        </section>
        <div className='line'></div>
        <section className='header-search'>
          <img src={Logo} />
          <div className='search-wrapper'>
            <input
              className='search-bar'
              type='text'
              placeholder='O que você está buscando?'
              aria-label='Barra pesquisar produtos'
            />
            <img src={MagnifyingGlass} alt='Ícone de lupa' className='search-icon' />
          </div>
          <div className='icons-header'>
            <img className='img-icons-header' src={Vector} alt='Ícone de pedidos' />
            <img className='img-icons-header' src={Heart} alt='Ícone de produtos salvos' />
            <img className='img-icons-header' src={UserCircle} alt='Ícone de perfil' />
            <img className='img-icons-header' src={ShoppingCart} alt='Ícone de carrinho de compras' />
          </div>
        </section>
      </header>
      <section className='tabs'>
        <p>TODAS AS CATEGORIAS</p>
        <p>SUPERMERCADO</p>
        <p>LIVROS</p>
        <p>MODA</p>
        <p>LANÇAMENTOS</p>
        <p>OFERTAS DO DIA</p>
        <div className='tabs-subscribe'><img className='img-subscribe' src={CrownSimple} /><p>ASSINATURA</p></div>
      </section>
      <section className='banner-promotions'>
        <h2 className='promotional-tittle'>Venha conhecer nossas <br />promoções</h2>
        <p className='promotional-phrase'><span className='promotional-phrase-highlight '>50% off</span> nos produtos</p>
        <button className='button-promotional'>Ver produto</button>
      </section>
      <section className='section-categories'>
        <Categories
          image={Technology}
          text='Tecnologia'
          alt='Ícone de tecnologia'
          highlight={true}
          tittleColor={true}
        />
        <Categories
          image={Supermercados}
          text='Supermercados'
          alt='Ícone de supermercados'
        />
        <Categories
          image={Whiskey}
          text='Bebidas'
          alt='Ícone de bebidas'
        />
        <Categories
          image={Tools}
          text='Ferramentas'
          alt='Ícone de ferramentas'
        />
        <Categories
          image={Health}
          text='Saúde'
          alt='Ícone de saúde'
        />
        <Categories
          image={Sports}
          text='Esporte'
          alt='Ícone de esporte'
        />
        <Categories
          image={Fashion}
          text='Moda'
          alt='Ícone de moda'
        />
      </section>
      <section className='related-products'>
        <div className='line-secundary'></div>
        <h2 className='related-products-tittle'>Produtos relacionados</h2>
        <div className='line-secundary'></div>
      </section>
      <section className='product-list' aria-label='Lista de produtos disponíveis'>
        {produtos.map((produto, index) => (
          <ProductCard key={index} produto={produto} />
        ))}
      </section>
    </main>
  );
}

export default App;
