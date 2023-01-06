import React from 'react'
import Home from '../components/Home';

function Cursor() {

    const handleClick = () => {
        // Your click event handler code goes here
      };
   
  return (
    <div className="custom-cursor" onClick={handleClick}>
        <Home/>
    </div>
  )
}

export default Cursor