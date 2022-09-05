import React from 'react';
import { Link } from 'react-router-dom';

export default function Props(){
    return(
        <main>
            <section>
                <h1>Props</h1>
                <Link to="/"><button>Voltar</button></Link>
            </section>
        </main>
    )
}