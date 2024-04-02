import Styled from "styled-components"

export const StyledMain = Styled.main`
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    font-size : 2rem;
    background-color : black;
    height : 38.5rem;
    color : #FFDEAD;
    #ajuste{
        width : 2rem;
        height : 3rem;
        margin-top : 0.5rem;
    }
    @media(min-width: 320px) and (max-width: 768px){
        flex-direction : column;
        justify-content : space-evenly;
        align-items : center;
        font-size : 1.2rem;
    }
`
export const imgPerfil = Styled.img`
    width : 13rem;
    height : 13rem;
    border-radius : 20%;
`
export const imgRedes = Styled.img`
    width : 5rem;
    height : 4rem;
`
export const sec = Styled.section`
    width : 20rem;
    display : flex;
    justify-content :  space-evenly;
    @media(min-width: 320px) and (max-width: 768px){
        width : 5rem;
    }
`

