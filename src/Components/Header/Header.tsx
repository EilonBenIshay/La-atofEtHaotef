// import IconButton from '@mui/material/IconButton';
import * as S from "./Header.styles";
import NavIcon from '../../assets/NavIcon.svg'


export default function Header() {
    return (
        <>
            <S.NavBar>
                <S.NavToolBar>
                    <img src={NavIcon} width={60} height={60} />
                    <S.NavTitle>לעטוף את העוטף</S.NavTitle>
                    <div></div>
                </S.NavToolBar>
            </S.NavBar>
        </>
    );
}