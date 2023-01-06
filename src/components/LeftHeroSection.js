import React from 'react'


import { ReactComponent as Linkedin } from '../assets/social-media-icons/linkedin.svg';
//
import { ReactComponent as Youtube } from '../assets/social-media-icons/youtube.svg';
import { ReactComponent as Instagram } from '../assets/social-media-icons/instagram.svg';
import { ReactComponent as Google } from '../assets/social-media-icons/google-plus.svg';
import { ReactComponent as Github } from '../assets/social-media-icons/github.svg'

function LeftHeroSection() {
  return (
    <div>
        <div className="content">
            <p> <span className='hello'>  Hello</span> <span className='dots'>.</span><span className='dots'>.</span><span className='dots'>.</span> <br />I'm <span className='name'>Joel Jaison</span> Full Stack Developer <br />
            Ui/Ux Desginer , Compitive codder . <br />
            other than these am a Student <br />
            Always learning and updating 
            </p>
        </div>
        <div className="contact-icons">
            <label ><Linkedin className='icons'/></label>
            <label ><Youtube className='icons'/></label>
            <label ><Instagram className='icons'/></label>
            <label ><Google className='icons'/></label>
            <label ><Github className='icons'/></label>
        </div>
    </div>
  )
}

export default LeftHeroSection