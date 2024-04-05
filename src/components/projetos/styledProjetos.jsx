import Styled from "styled-components"

export const projetos = Styled.img`
    width : 17rem;
    height : 38rem;
    @media(min-width: 320px) and (max-width: 768px){
        width : 21rem;
    }
    
`
export const styledDiv = Styled.div`
    display : flex;
    flex-direction : column;
    width : 18rem;
    height : 40rem;
    border : double 0.5rem black;
    align-items : center;
    button{
        width : 17rem;
        height : 3rem;
        font-size : 1.5rem;
        background-color : black;
        color : #F4A460;
    }
    h2{
        padding-top : 1rem;
    }
    @media(min-width: 320px) and (max-width: 768px){
        width : 22rem;
        button{
            width : 21rem;
        }
    }

`
export const styledSec = Styled.section`
    display : flex;
    justify-content :space-evenly;
    color : #F4A460;
    @media(min-width: 320px) and (max-width: 768px){
        flex-direction : column;
        justify-content : space-evenly;
        align-items : center;
        font-size : 1.2rem;
    }
    
`
