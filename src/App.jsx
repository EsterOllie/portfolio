import React,{ useState} from 'react'
import Navegacao from "./components/Navegacao.jsx"

import {createGlobalStyle} from "styled-components"
const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }
`

function App() {

  return (
    <>
    <GlobalStyle/>
    <Navegacao/>
    </>
  )
}

export default App