import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Topo() {
    return (
        <header>
            <div className='limite-largura topo-content'>
                <Link to='/'><img src="assets/logo.png" /></Link>
                <nav className='itens-menu'>
                    <Link className='link-menu'  to='/'>Home</Link>
                    <Link className='link-menu' to='/sabores'>Sabores</Link>
                    <Link className='link-menu' to='/sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}

export default Topo;
