import React from 'react';
import { Link } from 'react-router-dom';

export default function Comp(){
    return(
        <main>
            <section>
                <h1>Components II</h1>
                <Link to="/"><button>Voltar</button></Link>
            </section>
        </main>
    )
}