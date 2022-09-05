import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Even from '../../components/Eventos';

export default function Eventos(){
    

    return(
        <main>
            <section>
                <div className='cabecalho'>
                    <h1>Estudando ReactJS | Eventos</h1>
                </div>
            </section>

            <section className='componente'>
                <div className='caixa'>
                    <Even />
                    <Link to="/"><button className='botao-voltar'>Voltar</button></Link>
                </div>

            </section>
        </main>
            
    )
}