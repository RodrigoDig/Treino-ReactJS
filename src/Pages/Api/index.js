import React from 'react';
import { Link } from 'react-router-dom';

export default function Api(){
    return(
        <main>
            <section>
                <h1>Api</h1>
                <Link to="/"><button>Voltar</button></Link>
            </section>
        </main>
    )
}