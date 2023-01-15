import React from 'react'
import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import SkillSection from './SkillSection'

function Home() {
  return (
      <div id='home'>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
  </div>
    
  )
}

export default Home