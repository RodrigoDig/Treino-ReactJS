import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Eventos from './Pages/Eventos';
import Compo from './Pages/Componentes';
import Comp from './Pages/Componentes II';
import Props from './Pages/Props';
import Variavel from './Pages/Variavel de estado';
import Efeito from './Pages/Efeito';
import Renderizacao from './Pages/Renderizacao Condicional';
import Api from './Pages/Api';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/componentes" element={<Compo />} />
                <Route path="/comp" element={<Comp />} />
                <Route path="/props" element={<Props />} />
                <Route path="/variavel" element={<Variavel/>} />
                <Route path="/efeito" element={<Efeito />} />
                <Route path="/renderizacao" element={<Renderizacao />} />
                <Route path="/api" element={<Api/>}/>

            </Routes>
        </BrowserRouter>
    )
}