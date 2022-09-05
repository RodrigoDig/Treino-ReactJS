import React from 'react';
import { Link } from 'react-router-dom';

export default function Efeito(){
    return(
        <main>
            <section>
                <h1>Efeito</h1>
                <Link to="/"><button>Voltar</button></Link>
            </section>
        </main>
    )
}