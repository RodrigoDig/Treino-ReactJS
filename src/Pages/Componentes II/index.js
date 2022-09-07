import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import ComponentesII from '../../components/Componentes II';

export default function Comp(){
    return(
        <main>
            <section>
                <div className='titulo-comp'>
                    <h1>Estudando ReactJS | Components II</h1>
                </div>
            </section>

            <section className='page-comp'>
                <div className='espacamento-card'>
                    <div className='card'>
                        <ComponentesII />
                    </div>

                    <div className='card'>
                        <ComponentesII />
                    </div>
                </div>

                <div className='espacamento-card'>
                    <div className='card'>
                        <ComponentesII />
                    </div>

                    <div className='card'>
                        <ComponentesII />
                    </div>
                </div>
                
                <div className='espacamento-botao'>
                    <Link to="/"><button>Voltar</button></Link>
                </div>

            </section>
        </main>
    )
}