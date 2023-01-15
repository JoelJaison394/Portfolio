import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'
import {motion} from 'framer-motion'

function HeroSection() {
  const name = "< Joel Jaison />"
  return (
    <div className='HeroSection'>
        <header>
        <h1>{name}</h1>
        <div className="menu-list">
          <ul> 
            <a href="#home"><li >Home</li></a>          
              
            <a href="#education"><li>Education</li></a> 

            <a href="#projects"><li>Projects</li></a>

            <li>Contact</li>
          </ul>
        </div>
        </header>
        <div className="main-section">
            <motion.div 
              initial = {{x: '-100vw'}}
              animate = {{x:0}}
                transition = {{type: 'spring' ,duration: 1 ,}}>
              < LeftHeroSection/>
            </motion.div>
            <motion.div 
              initial = {{x: '100vw'}}
              animate = {{x:0}}
                transition = {{type: 'spring' ,duration: 1 ,}}>
                  <RightHeroSection/>
            </motion.div>
            

            


            
        </div>
        
        
    </div>
  )
}

export default HeroSection