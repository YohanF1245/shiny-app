import { Outlet,Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loader } from "../../utils/Atoms"
import  { SurveyContext } from "../../utils/context"
import { useFetch } from "../../utils/hooks"
import { useContext } from "react"


function Survey() {
    const {questionNumber} = useParams()
    // const [surveyData,setSurveyData] = useState({})
    // const [isDataLoading, setDataloading] = useState(false)
    let next =""
    let previous =""
    let results =""
    // useEffect(() => {
    //     setDataloading(true)
    //     fetch('http://localhost:8000/survey')
    //         .then(response => response.json())
    //         .then(({surveyData}) => {
    //             setSurveyData(surveyData)
    //             setDataloading(false)
    //         })
    //         .catch(error => console.log(error))

        
    // }, [])  
    const {data, isDataLoading, error} = useFetch('http://localhost:8000/survey');

    const { surveyData } = data;
    if(questionNumber > 1) {
        previous = <Link to={'/survey/' +(parseInt(questionNumber) - 1)}>Precedent</Link>
    }
    if(surveyData && surveyData[parseInt(questionNumber) + 1]) {
        next = <Link to={'/survey/' + (parseInt(questionNumber) + 1)} >Suivant</Link>
    }else {
        results = <Link to='/results'>Résultats</Link>
    }
    const { saveAnswers, answers  } = useContext(SurveyContext)

    

    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
      }
      if(error){
        return <span>Une erreur est survenue</span>
      }


    return (
        <>
            <h1>Question {questionNumber}</h1>
            {isDataLoading ? (
                <Loader />
                ) : (
                <h2>{surveyData && surveyData[questionNumber]}</h2>
                )}
            <button onClick={() => saveReply(true)}>oui</button>
            <button onClick={() =>  saveReply(false)}>non</button>
            <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <br></br>
            {previous} {next} {results}
            <Outlet />
            
        </>
    )
}
export default Survey