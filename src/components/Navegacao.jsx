import Reacte,{useState} from "react"
import Styled from "styled-components"
import Inicio from "./Inicio.jsx"
import Sobre from "./sobre.jsx"
import Projetos from "./Projetos.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

// BrowserRouter : sempre será o prmeiro, a função dele é ser caixa que vai englobar
// envolver todo o nosso caminho 
// Routes : dentro dessa caixa é onde começaremos a arquitetar nossos caminho. Determina para onde cada rota vai
// Route :  Especifico para cada rota, uma route para cada arquivo navegável
// link quando eu clicar em um lugar
function Navegacao(){
    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li> <Link to="/">Inicio</Link></li>
                    <li><Link to="/Sobre"> Sobre</Link></li>
                    <li><Link to="/Projetos">Projetos</Link></li>
                </ul>
            </nav>
            <Routes>
                /*path(caminho) : configura os dois, link to="/"*/
                {/* element : configura para qual componente quero ir, element ={<sobre></>} */}
                <Route path="/" element={<Inicio/>}/>
                <Route path="Sobre" element={<Sobre/>}/>
                <Route path="Projetos" element={<Projetos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacao