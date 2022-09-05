import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Componentes from '../../components/Componentes';

export default function Compo(){
    return(
        <main>
            <section>
                <div className='page-container-1'>
                    <h1>Estudando ReactJS | Componentes</h1>
                </div>
            </section>

            <section className='container'>
                <div className='bloco-fundo'><Componentes nome="Seção 1" alinhamento="direita" posicionamento="Right"/> </div>
                <div className='bloco-fundo'><Componentes nome="Seção 2" alinhamento="esquerda" posicionamento="Left"/> </div>
                <div className='bloco-fundo'><Componentes nome="Seção 3" alinhamento="coluna" posicionamento="Sob"/> </div>
            </section>

            <section className='parte-final'>
                <div className='alinha'>
                    <Link to="/"><button>Voltar</button></Link>
                </div>

            </section>
        </main>
    )
}