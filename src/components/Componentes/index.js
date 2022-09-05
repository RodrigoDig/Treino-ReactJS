import React from 'react';
import './index.scss';

export default function Componentes(props){
    return(
        <main>
            <section className='cards'>
                <div className={props.posicionamento}>
                    <h1>{props.nome}</h1>
                </div>

                <div className={props.alinhamento}>    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>
                    <img alt='' src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg"/>
                </div>

            </section>
        </main>
    )
}