import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import './index.css'

function Sobre() {
  return (
    <body>
      <Topo />
      <main>
        <section className='banner-sobre'>
          <div className='limite-largura banner-sobre-content'>
            <h1>A GELATERIA</h1>
          </div>
        </section>
        <section className='sobre-text'>
          <div className='limite-largura sobre-text-content'>
            <h1>Sobre Nós</h1>
            <p className='p-subtitle'>Nós simplesmente amamos sorvete!</p>
            <p className='conteudo-sobre'>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido.
              Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as
              melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
            <p className='conteudo-sobre'>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência
              e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário,
              formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar
              o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
          </div>
        </section>
        <section className='flex-img-sobre'>
          <img src='assets/sobre-image.jpg' />
          <img src='assets/sorveteria.jpg' />
        </section>
      </main>
      <Rodape />
    </body>
  );
}

export default Sobre;
