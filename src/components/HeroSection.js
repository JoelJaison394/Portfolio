import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'

function HeroSection() {
  const name = "< Joel Jaison />"
  return (
    <div className='HeroSection'>
        <header>
        <h1>{name}</h1>
        <div className="menu-list">
          <ul>           
              <li >Home</li>
            <li>Education</li>
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