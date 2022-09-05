import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <main>
            <section>
                <div className='titulo'>
                    <h1>Selecione a Página que deseja visitar</h1>
                </div>
            </section>

            <section className='bloco-1'>
                <div className="opcoes">
                    <Link to="/eventos"><button className="botao">Eventos</button></Link>
                    <Link to="/componentes"><button className="botao">Componentes</button></Link>
                    <Link to="/comp"><button className="botao">Componentes II</button></Link>
                    <Link to="/props"><button className="botao">Props</button></Link>
                </div>

                <div className="opcoes">
                    <Link to="/variavel"><button className="botao">Váriavel de Estado</button></Link>
                    <Link to="/efeito"><button className="botao">Efeito</button></Link>
                    <Link to="/renderizacao"><button className="botao">Renderização Condicional</button></Link>
                    <Link to="/api"><button className="botao">Api</button></Link>
                </div>
            </section>
        </main>
    )
}