import React,{useState} from "react"
import Perfil from "./imgInicio/perfil.png"
import * as S from "./StyledInicio.jsx"
import Instagram  from "./imgInicio/instagram.png"
import Git from "./imgInicio/git.png"
import Linkedin from "./imgInicio/linkedin.png"
//import {createGlobalStyle} from "styled-components"

/*const GlobalStyle = createGlobalStyle`
    margin : 0;
    paddiing : 0;
    box-sizing : border-box;
`
*/

function Inicio(){
    return(
        <S.StyledMain>
            <S.imgPerfil src={Perfil} alt="" />
            <div>
                <h2>Olá! Sou a Ester</h2>
                <S.sec>
                    <a href="https://www.instagram.com/ester__marques_/" target="_blank"><S.imgRedes src={Instagram}alt="" /></a>
                    <a href="https://github.com/EsterOllie/" target="_blank"><S.imgRedes src={Git} alt="" /></a>
                    <a href="https://www.linkedin.com/in/ester-rocha-a92139254/" target="_blank"><S.imgRedes id="ajuste"src={Linkedin} alt="" /></a>
                </S.sec>
            </div>
        </S.StyledMain>
    )
}
export default Inicio