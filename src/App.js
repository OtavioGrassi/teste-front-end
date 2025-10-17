import React, { useState, useEffect } from 'react';
import ProductCard from '../src/components/ProductCard';
import ShieldCheck from './assets/ShieldCheck.png'
import Truck from './assets/Truck.png'
import CreditCard from './assets/CreditCard.png'

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
    <main className="app">
      <header>
        <section className='header-infos'>
          <div className='trust-info'>
            <img className='trust-images' src={ShieldCheck} />
            <p className='trust-messages'>Compra<span className='trust-messages-span'> 100% segura</span></p>
          </div>
          <div className='trust-info'>
            <img className='trust-images' src={Truck} />
            <p className='trust-messages'><span className='trust-messages-span'>Frete grátis</span> acima de R$200</p>
          </div>
          <div className='trust-info'>
            <img className='trust-images' src={CreditCard} />
            <p className='trust-messages'><span className='trust-messages-span'>Parcele</span> suas compras</p>
          </div>
        </section>
        <div className='line'></div>
        <h1>Lista de Produtos</h1>
      </header>
      <section className="product-list" aria-label="Lista de produtos disponíveis">
        {produtos.map((produto, index) => (
          <ProductCard key={index} produto={produto} />
        ))}
      </section>
    </main>
  );
}

export default App;
