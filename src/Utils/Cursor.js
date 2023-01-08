import React from 'react'
import Home from '../components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from '../components/Education';
import Project from '../components/Project';

function Cursor() {

    const handleClick = () => {
        // Your click event handler code goes here
      };
   
  return (
    <div className="custom-cursor" onClick={handleClick}>
            <Home/>
            <Education/>
            <Project/>
        
    </div>
  )
}

export default Cursor