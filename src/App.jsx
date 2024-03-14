import React from 'react'
import MainPage from './components/MainPage'
import "./pages/ThankYouPage/ThankYou"
import { Route,Routes } from "react-router-dom";
import ThankYou from './pages/ThankYouPage/ThankYou';
const App = () => {
  return (
   <Routes >
   <Route path='/' element={<MainPage />} /> 
   <Route path="/thankyou" element={<ThankYou />}></Route>
  </Routes>
 
  )
}

export default App;