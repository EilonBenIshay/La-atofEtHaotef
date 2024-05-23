import * as S from "./Header.styles";
import NavIcon from '../../assets/NavIcon.svg'
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <>
            <S.NavBar>
                <S.NavToolBar>
                    <Link to={'/'}>
                    <img src={NavIcon} width={60} height={60} />
                    </Link>
                    <S.NavTitle>לעטוף את העוטף</S.NavTitle>
                    <div></div>
                </S.NavToolBar>
            </S.NavBar>
        </>
    );
}