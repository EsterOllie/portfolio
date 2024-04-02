import Styled from "styled-components"

export const styledNav = Styled.nav`
    background-color : black;
    height : 5rem;
    font-family: "Fuggles", cursivo; peso da fonte: 400; estilo de fonte: normal;
    @media(max-width : 1010px){
        ;
    }
`
export const styleUl = Styled.ul`
    display : flex;
    justify-content : space-evenly;
    font-size : 2rem;
    a{
        text-decoration : none;
        color : #FFDEAD;
    }
    a:hover{
        background-color :#F4A460;
        color :black ;
    }

    
`