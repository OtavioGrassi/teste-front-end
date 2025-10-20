import React, { useState, useEffect } from 'react';
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
import Tags from './components/Tags';
import Partners from './components/Partners';
import Brands from './components/Brands';
import ProductCarousel from './components/ProductCarousel';
import RelatedTittle from './components/RelatedTittle';
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'

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
    <>
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
      <main className='app'>
        <section className='tabs'>
          <p>TODAS CATEGORIAS</p>
          <p>SUPERMERCADO</p>
          <p>LIVROS</p>
          <p>MODA</p>
          <p>LANÇAMENTOS</p>
          <p className='tab-highlight'>OFERTAS DO DIA</p>
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
            text='Supermercado'
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
            text='Esportes e Fitness'
            alt='Ícone de esporte'
          />
          <Categories
            image={Fashion}
            text='Moda'
            alt='Ícone de moda'
          />
        </section>
        <RelatedTittle
          hidden={true} />
        <section className='tags-wrapper'>
          <Tags
            text='CELULAR'
            tittleColor={true}
          />
          <Tags
            text='ACESSÓRIOS'
          />
          <Tags
            text='TABLETS'
          />
          <Tags
            text='NOTEBOOKS'
          />
          <Tags
            text='TVS'
          />
          <Tags
            text='VER TODOS'
          />
        </section>
        <ProductCarousel produtos={produtos} />
        <section className='partners-section'>
          <Partners />
          <Partners />
        </section>
        <RelatedTittle
          hidden={false} />
        <ProductCarousel produtos={produtos} />
        <section className='partners-section'>
          <Partners />
          <Partners />
        </section>
        <section className='brands'>
          <h2 className='brands-tittle'>Navegue por marcas</h2>
          <article className='brands-wrapper'>
            <Brands />
            <Brands />
            <Brands />
            <Brands />
            <Brands />
          </article>
        </section>
        <RelatedTittle
          hidden={false} />
        <ProductCarousel produtos={produtos} />
      </main>
      <footer>
        <section className='newsletter'>
          <article className='newsletter-info'>
            <h2 className='tittle-newsletter'>Inscreva-se na nossa newsletter</h2>
            <p className='text-newsletter'>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse.</p>
          </article>
          <article className='newsletter-form'>
            <div className='input-data'>
              <input className='input-newsletter' type='text' placeholder='Digite seu nome' aria-label='Caixa para digitar seu nome'></input>
              <input className='input-newsletter' type='text' placeholder='Digite seu e-mail' aria-label='Caixa para digitar seu email'></input>
              <button className='newsletter-btn'>INSCREVER</button>
            </div>
            <div className='checkbox-newsletter'>
              <input type='checkbox'></input>
              <p>Aceito os termos e condições</p>
            </div>
          </article>
        </section>
        <section className='footer'>
          <article>
            <img src={Logo} />
            <p className='footer-phrase'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p>
            <div className='footer-icons'>
              <img src={instagram} />
              <img src={facebook}/>
              <img src={linkedin}/>
            </div>
          </article>
          <div className='footer-line'></div>
          <article className='articles-footer'>
            <div>
              <h3 className='tittle-articles'>Institucional</h3>
              <p className='text-articles'>Sobre Nós</p>
              <p className='text-articles'>Movimento</p>
              <p className='text-articles'>Trabalhe conosco</p>
            </div>
            <div>
              <h3 className='tittle-articles'>Ajuda</h3>
              <p className='text-articles'>Suporte</p>
              <p className='text-articles'>Fale conosco</p>
              <p className='text-articles'>Perguntas Frequentes</p>
            </div>
            <div>
              <h3 className='tittle-articles'>Termos</h3>
              <p className='text-articles'>Termos e condições</p>
              <p className='text-articles'>Política de Privacidade</p>
              <p className='text-articles'>Troca e Devolução</p>
            </div>
          </article>
        </section>
        <p className='copyright'>Desenvolvido por Otávio Grassi.</p>
      </footer>
    </>
  );
}
export default App;
