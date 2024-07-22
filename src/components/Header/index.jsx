import { Link } from 'react-router-dom'
import DarkLogo from '../../assets/dark-logo.png'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    padding: 10px 20px;
    color: #8186a0;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: #5843E4;`}
`

const StyledNav = styled.nav`
    display: flex;
    gap: 24px;          
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 30px;   
`
const StyledLogo = styled.img`
        height: 70px;
`
const StyledHeader = styled.header`
        display : flex;
        padding: 40px;
        justify-content: space-between;
    `
function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={DarkLogo} alt="logo" />
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelance">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}
export default Header