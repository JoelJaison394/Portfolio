import React from 'react'
import Home from '../components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from '../components/Education';

function Cursor() {

    const handleClick = () => {
        // Your click event handler code goes here
      };
   
  return (
    <div className="custom-cursor" onClick={handleClick}>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {<Home/>}  />
           <Route exact path="/education" element = {<Education/>}  />
            {/* <Route exact path="/home" element = {<Home/>}  />
            <Route exact path="/verify" element = {<Verification/>}  /> */} 
        </Routes>
    </BrowserRouter>
        
    </div>
  )
}

export default Cursor