import React from 'react';
import './index.css';


function Rodape() {
    return (
        <footer>
            <div className='limite-largura footer-content'>
                <img src='assets/logo.png' />
                <div className='agrupa-infos-footer'>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className='agrupa-infos-footer'>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className='agrupa-infos-footer'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className='limite-largura credits'>
                <p>Gelateria. Orgulhosamente desenvolvido por <span>João Carvalho.</span></p>
            </div>
        </footer>
    );
}

export default Rodape;
