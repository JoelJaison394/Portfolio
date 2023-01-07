import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'
import { Link } from "react-router-dom";

function HeroSection() {
  const name = "< Joel Jaison />"
  return (
    <div className='HeroSection'>
        <header>
        <h1>{name}</h1>
        <div className="menu-list">
          <ul>
            <Link to="/" style={{ textDecoration: 'none' , color:' #13274F' }}>
              <li >Home</li>
            </Link>
            <Link to="/education" style={{ textDecoration: 'none' , color:' #13274F' }}>
            <li>Education</li>
            </Link>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        </header>
        <div className="main-section">
            < LeftHeroSection/>
            <RightHeroSection/>
            
        </div>
        
        
    </div>
  )
}

export default HeroSection