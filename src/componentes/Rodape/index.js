import React from 'react';
import './index.css';


function Rodape() {
    return (
        <footer>
            <div className='limite-largura footer-content'>
                <img src='assets/logo.png' />
                <div className='agrupa-infos-footer'>
                    <h3>ENDEREÇO</h3>
                    <p>Rua Inácia Alves, 312</p>
                    <p>São Paulo, SP 08559-050</p>
                </div>
                <div className='agrupa-infos-footer'>
                    <h3>CONTATO</h3>
                    <p>gelateria@email.com</p>
                    <p>Tel: (11) 99956-2490</p>
                </div>
                <div className='agrupa-infos-footer'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>08:00 - 20:00</p>
                </div>
            </div>
            <div className='limite-largura credits'>
                <p>Gelateria. Orgulhosamente desenvolvido por <span>João Carvalho.</span></p>
            </div>
        </footer>
    );
}

export default Rodape;
