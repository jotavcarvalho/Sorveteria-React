import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import './index.css';


function Home() {
  return (
    <body>
      <Topo />
      <main>
        <section className='banner'>
          <div className='limite-largura banner-section'>
            <h1>SORVETE ARTESANAL</h1>
          </div>
        </section>
        <section className='sabores'>
          <img src='assets/banner-sabores.jpg' />
          <div className='flex-apresentacao'>
            <h2>NOSSOS SABORES</h2>
            <p className='p-subtitle'>Novos e deliciosos!</p>
            <p className='conteudo-section'>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos
              são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar.
              Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
          </div>
        </section>
        <section className='eventos'>
          <div className='flex-apresentacao'>
            <h2>NOSSOS EVENTOS</h2>
            <p className='p-subtitle-eventos'>Delicias com sorvete!</p>
            <p className='conteudo-section'>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer
              os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </div>
          <img src='assets/eventos-image.jpg' />
        </section>
        <section className='sobre'>
          <img src='assets/sobre-image.jpg' />
          <div className='flex-apresentacao'>
            <h2>SOBRE NÓS</h2>
            <p className='p-subtitle'>Alegria em cada casquinha!</p>
            <p className='conteudo-section'>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que 
              tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite
              o melhor atendimento e o melhor sorvete da cidade.!</p>
          </div>
        </section>
      </main>
      <Rodape/>
    </body>
  );
}

export default Home;
