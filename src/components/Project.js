import React from 'react'

import  Projectimg  from '../assets/Project/project.gif';
import { ReactComponent as Reactjs } from '../assets/Skills-icons/react.svg'
import {ReactComponent as Firebase} from '../assets/Skills-icons/firebase.svg'
import { ReactComponent as Javascript } from '../assets/Skills-icons/javascript.svg'
import { ReactComponent as Css } from '../assets/Skills-icons/css.svg'
import { ReactComponent as MongoDb } from '../assets/Skills-icons/mongodb.svg'
import { ReactComponent as Node } from '../assets/Skills-icons/node-js.svg'
import {ReactComponent as Saaas} from '../assets/Skills-icons/saas.svg'
import {ReactComponent as Tailwind} from '../assets/Skills-icons/tailwind-css.svg'

function Project() {
  return (
    <div>
        
        <div className="section-heading education-section">
            <h1>projects</h1>
        </div>
        <div className="hero-section">
            <img src={Projectimg} alt="" height={"440px"}/>
            <div className="left">
                <p>My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, and React Project. Below are some of my projects.</p>              
            </div>          
        </div>

        <div className=" project-collections">
        <div className="certificate-boxes project-box">
                <h3>React-twitter-clone</h3>
                <p ><span className='project-des'>A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.</span> 
                </p>
                <div className="techs">
                    <Reactjs height={'50px'}/>
                    <Firebase height={'50px'}/>
                    <Css height={'50px'}/>

            </div>
            </div>
            
        <div className="certificate-boxes project-box">
                <h3>React-twitter-clone</h3>
                <p ><span className='project-des'>A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.</span> 
                </p>
                <div className="techs">
                    <Reactjs height={'50px'}/>
                    <Firebase height={'50px'}/>
                    <Css height={'50px'}/>

            </div>
            

        </div>
        
        <div className="certificate-boxes project-box">
                <h3>React-twitter-clone</h3>
                <p ><span className='project-des'>A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.</span> 
                </p>
                <div className="techs">
                    <Reactjs height={'50px'}/>
                    <Firebase height={'50px'}/>
                    <Css height={'50px'}/>

            </div>
            

        </div>
        
        <div className="certificate-boxes project-box">
                <h3>React-twitter-clone</h3>
                <p ><span className='project-des'>A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.</span> 
                </p>
                <div className="techs">
                    <Reactjs height={'50px'}/>
                    <Firebase height={'50px'}/>
                    <Css height={'50px'}/>

            </div>
            

        </div>

        </div>

    </div>
  )
}

export default Project