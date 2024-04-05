import React,{useState} from "react"
import Inicio from "../inicio/Inicio.jsx"
import Sobre from "../sobre/sobre.jsx"
import Projetos from "../projetos/Projetos.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import * as S from "./Stylednav.jsx"
// BrowserRouter : sempre será o prmeiro, a função dele é ser caixa que vai englobar
// envolver todo o nosso caminho 
// Routes : dentro dessa caixa é onde começaremos a arquitetar nossos caminho. Determina para onde cada rota vai
// Route :  Especifico para cada rota, uma route para cada arquivo navegável
// link quando eu clicar em um lugar
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    margin : 0;
    paddiing : 0;
    box-sizing : border-box;
`

function Navegacao(){
    return(
        <BrowserRouter>
            <S.styledNav>
                <button><img src="" alt="" /></button>
                <S.styleUl>
                    <li> <Link to="/">Inicio</Link></li>
                    <li><Link to="/Sobre"> Sobre</Link></li>
                    <li><Link to="/Projetos">Projetos</Link></li>
                </S.styleUl>
            </S.styledNav>
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