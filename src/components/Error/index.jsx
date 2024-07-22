import styled from "styled-components"
import {colors} from "../../utils/style/colors"
import img404 from "../../assets/404.svg"
const StyledError = styled.div`
padding-top: 50px;
    display: flex;
    flex-direction: column;
    margin: 0px 65px;
    align-items: center;
    gap: 50px;
    justify-content: flex-start;
    height: 100vh;
    background-color: ${colors.backgroundLight};
`
const ErrorText = styled.p`
    font-size: 30px;
    color: #2F2E41;
    line-height: 36px;
    font-weight: 700;
`
const StyledImg = styled.img`
    width: 400px;
`
function Error() {
    return (
        <StyledError>   
            <ErrorText>Oups</ErrorText>     
            <StyledImg  src={img404} alt="404"></StyledImg>
            <ErrorText>Il semblerait qu'il y ait un problème</ErrorText>  
        </StyledError>
    )
}

export default Error