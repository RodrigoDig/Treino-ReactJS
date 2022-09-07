import React from "react";
import './index.scss';

export default function ComponentesII(){
    return(
        <main>
            <section>
                <div className="bloco-1-comp">
                    <img alt="" src='group.png' />
                    <p>Rodrigo</p>
                </div>

                <div className=" bloco-2">
                    <h1>Idade:</h1>
                    <p>18</p>
                </div>

                <div className="bloco-2">
                    <h1>Nascimento:</h1>
                    <p>2004</p>
                </div>

                <div className="bloco-final">
                    <button>Hobby</button>
                </div>
            </section>
        </main>
    )
}