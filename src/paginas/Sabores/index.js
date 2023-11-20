import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import './index.css';


function Sabores() {
  return (
    <body>
      <Topo />
      <main>
        <section className='banner-sabores'>
          <div className='limite-largura banner-sabores-content'>
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>
        <section className='sabores-cards'>
          <div className='limite-largura sabores-cards-content'>
            <h1>SABORES DE SORVETE</h1>
            <div className='agrupa-cards'>
              <div className='card'>
                <img src='assets/sabor-oreo.png' />
                <h2>Sorvete de Oreo</h2>
                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
              </div>
              <div className='card'>
                <img src='assets/sabor-pistache.png' />
                <h2>Sorvete Pistache</h2>
                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
              </div>
              <div className='card'>
                <img src='assets/sabor-cookies-avela.png' />
                <h2>Sorvete Cookies & Avelã</h2>
                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
              </div>
              <div className='card'>
                <img src='assets/sorbet-kiwi.png' />
                <h2>Sorvete de Kiwi</h2>
                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
              </div>
              <div className='card'>
                <img src='assets/sorbet-morango.png' />
                <h2>Sorvete de Morango</h2>
                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
              </div>
              <div className='card'>
                <img src='assets/sorbet-limao.png' />
                <h2>Sorvete de Limão Siciliano</h2>
                <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </body>
  );
}

export default Sabores;
