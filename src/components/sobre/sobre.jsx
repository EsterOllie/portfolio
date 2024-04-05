import Reacte,{useState} from "react"
import Styled from "styled-components"
import HTML from "./imgSobre/html.png"
import CSS from "./imgSobre/css.png"
import JS from "./imgSobre/js.png"
import * as S from "./styledSobre"
function Sobre(){
    return(
        <S.styledMain>
            <div>
                <S.styledImg src={HTML} alt="Logo HTML" />
                <S.styledImg src={CSS} alt="Logo CSS" />
                <S.styledImg src={JS} alt="Logo JAVA SCRIPT" />
            </div>
        </S.styledMain>
    )
}
export default Sobre