import Reacte,{useState} from "react"
import * as S from "./styledProjetos.jsx"
import Cartoon from "./imgProjetos/cartoon.png"
import Fantastika from "./imgProjetos/proj2.png"
import Spa from "./imgProjetos/proj3.png"
function Projetos(){
    return(
        <S.styledSec>
            <S.styledDiv>
                <S.projetos src={Cartoon} alt="" />
                <a href="https://github.com/EsterOllie/cartoon.git" target="_blank"><button>Repositório</button></a>
                <a href="https://cartoon-sooty.vercel.app/" target="_blank"><button>Vercel</button></a>
                <h2>Cartoon</h2>
            </S.styledDiv>

            <S.styledDiv>
                <S.projetos src={Fantastika} alt="" />
                <a href="https://github.com/EsterOllie/cartoon.git" target="_blank" ><button>Repositório</button></a>
                <a href="https://esterollie.github.io/fantastika/" target="_blank"><button>Página</button></a>
                <h2>Fantastika</h2>
            </S.styledDiv>

            <S.styledDiv>
                <S.projetos src={Spa} alt="" />
                <a href="https://github.com/EsterOllie/spa.git" target="_blank" ><button>Repositório</button></a>
                <a href="https://spa-esters-projects-d733fe50.vercel.app/" target="_blank"><button>Vercel</button></a>
                <h2>spa</h2>
            </S.styledDiv>
        </S.styledSec>
    )
}
export default Projetos