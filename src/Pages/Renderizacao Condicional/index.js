import React from 'react';
import { Link } from 'react-router-dom';

export default function Renderizacao(){
    return(
        <main>
            <section>
                <h1>Renderização</h1>
                <Link to="/"><button>Voltar</button></Link>
            </section>
        </main>
    )
}