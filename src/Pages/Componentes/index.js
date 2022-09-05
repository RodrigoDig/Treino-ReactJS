import React from 'react';
import { Link } from 'react-router-dom';

export default function Componentes(){
    return(
        <main>
            <section>
                <h1>Componentes</h1>
                <Link to="/"><button>Voltar</button></Link>
            </section>
        </main>
    )
}