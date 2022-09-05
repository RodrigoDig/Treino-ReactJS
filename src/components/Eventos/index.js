import './index.scss';

export default function Even() {

    function usuarioClicou(){
        alert("O usuário clicou");
    }

    
    function usuarioMexeu(){
        alert("O usuário passou o mouse");
    }

    
    function usuarioAlterou(){
        alert("O usuário alterou");
    }

    return (
        <section className='page-container'>
            <div className='area'>
                <h1 onMouseMove={usuarioMexeu}>Olá, seja bem-vindo!</h1>
            </div>

            <div className='Textos'>
                <input type="text" placeholder='Digite Aqui' onChange={usuarioAlterou}/>
                <select>
                    <option>Selecione</option>
                </select>
            </div>

            <div className='selecionar-1'>
                <input type="radio" onClick={usuarioClicou}/>Opção 1
                <input type="radio" onClick={usuarioClicou}/>Opção 2
            </div>

            <div className='selecionar-2'>
                <input type="checkbox" onClick={usuarioClicou}/>Opção 1
                <input type="checkbox" onClick={usuarioClicou}/>Opção 2
            </div>

            <div className='botao'>
                <button onClick={usuarioClicou}>Okay</button>
            </div>
        </section>
    )
}        