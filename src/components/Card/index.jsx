import styled from "styled-components"
import { colors } from "../../utils/style/colors"

const CardLabelTitle = styled.span`
    color: #5843e4;
    margin-left:20px;
    align-self: flex-start;
    font-size: 22px;
    font-weight: bold;
`
const CardLabelName = styled.span`
    color: #000;
    font-size: 25px;
    font-weight: bold;
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
function Card({label = "DefaultPicture",title = "",picture = ""}){

    return (
        <CardWrapper >
            <CardLabelTitle>{label}</CardLabelTitle>
            <CardImage src={picture} alt="freelancer"/>
            <CardLabelName>{title}</CardLabelName>
        </CardWrapper>
    )
}

export default Card