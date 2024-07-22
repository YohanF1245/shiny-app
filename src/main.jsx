import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/Home/App.jsx'
import Survey from './pages/Survey/Survey.jsx'
import Header from './components/Header/index.jsx'
import ClientForm from './components/ClientForm/index.jsx'
import FreelanceForm from './components/FreelanceForm/index.jsx'
import Error from './components/Error/index.jsx'
import Freelance from './pages/Freelance/Freelance.jsx'
import Results from './Results/index.jsx'
import {createGlobalStyle} from 'styled-components'
import './index.css'
import Footer from './components/Footer/index.jsx'
import ThemeProvider, { SurveyProvider } from './utils/context/index.jsx'
import GlobalStyle from './utils/style/GlobalStyle.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <ThemeProvider>
          <SurveyProvider>
        <GlobalStyle />
        <Header />
         <Routes>
            <Route path="/" element={<App />} />
            <Route path='/survey/:questionNumber' element={<Survey />}>
              <Route path='client' element={<ClientForm />} />
              <Route path='freelance' element={<FreelanceForm />} />
            </Route>
            <Route path='/results' element={<Results />} />
            <Route path='/freelance' element={<Freelance />} />
            <Route path='*' element={<Error />} />
         </Routes>
         <Footer />
         </SurveyProvider>
        </ThemeProvider>
      </Router>
  </React.StrictMode>,
)
