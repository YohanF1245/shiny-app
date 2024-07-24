import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors } from "../../utils/style/colors"
import HomeIllustration from "../../assets/home-illustration.svg"

const StyledHomeWrapper = styled.div`
  margin:65px;
  padding: 65px;
  display: flex;
  background-color: ${colors.backgroundLight};
`
const StyledHomeImage = styled.img`
  
`

const StyledLink = styled(Link)`
    padding: 15px 70px;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
      color: white;
      border-radius: 30px;
      background-color: #5843E4;
      width:fit-content;
`

const StyledHomeLeft = styled.div`
  width: 50%;
  padding: 0 65px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 24px;
  color: ${colors.primary};
`
const StyledHomeText = styled.p`
  font-size: 50px;
  font-weight: 700;
  line-height: 80px;
  color: ${colors.text};
`
export function sum (a, b) {
  return a + b;
}
function App() {

  return (
    <>
      <StyledHomeWrapper>
        {sum(40, 2)}
        <StyledHomeLeft>
          <StyledHomeText>Repérez vos besoins,
          on s’occupe du reste, avec les meilleurs talents</StyledHomeText>
          <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </StyledHomeLeft>
        <StyledHomeImage src={HomeIllustration} alt="logo" />
      </StyledHomeWrapper>
    </>
  )
}

export default App
