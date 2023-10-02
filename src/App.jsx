import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import FirstWeb from './Pages/PageNo1/FirstWeb';
import SecondWeb from './Pages/PageNo2/SecondWeb';
import ThirdWeb from './Pages/PageNo3/ThirdWeb';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <FirstWeb/>}/> 
        <Route path="/Services" element={ <SecondWeb/>}/> 
        <Route path="/Team" element={<ThirdWeb/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
