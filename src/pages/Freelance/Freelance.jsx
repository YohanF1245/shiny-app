import { useEffect } from 'react'
import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState } from 'react'
import { useFetch } from '../../utils/hooks'
// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         picture: DefaultPicture,
//     },
// ]



const StyledH1 = styled.h1`
    font-size:30px;
    font-weight:700;
    line-height: 40px;
    color:#2F2E41;
    text-align:center;
`
const StyledH2 = styled.h2`
    font-size:20px;
    font-weight:700;
    line-height: 26px;
    color:#8186A0;
    text-align:center;
    margin-bottom:70px;
`
const CardsContainer = styled.div`
width: 50%;
margin-left:25%;
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
function Freelance() {  
    
    // const [freelanceProfiles, setFreelanceProfiles] = useState([])
    // useEffect(() => {
        
    //     async function fetchFreelanceProfiles() {
    //         try{
    //             const response = await fetch('http://localhost:8000/freelances')
    //         const {freelancersList} = await response.json()
    //         setFreelanceProfiles(freelancersList)
    //         console.log(freelancersList)
    //         }
    //         catch(error) {  
    //             console.log(error)
    //         }
    //         finally {
    //             console.log('finally')
    //         }
    //     }
    //     fetchFreelanceProfiles()
    // }, [])

    const data = useFetch('http://localhost:8000/freelances')
    const freelanceProfiles = data;
    console.log(freelanceProfiles.data);
    
    return (
        <div>
            <StyledH1>Trouvez votre prestataire</StyledH1>
            <StyledH2>Chez Shiny nous réunissons des meilleurs profils pour vous.</StyledH2>
            <CardsContainer>

            {freelanceProfiles && freelanceProfiles.map((profile) => (
                <Card
                    key={profile.id}
                    label={profile.job}
                    title={profile.name}
                    picture={profile.picture}
                />
            ))}
            </CardsContainer>
        </div>
    )
}
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
export default Freelance