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
    <div id='projects'>
        
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
                <h3>Netflix-Clone</h3>
                <p ><span className='project-des'>Netflix clone built with React on the frontend and Firebase on the backend. This project features a sleek and intuitive interface, allowing users to easily browse and watch their favorite movies and TV shows. The movies are fetched from TMDB using their API with Axios making API requests. Utilizing Firebase authentication, users can securely create an account and log in to access their personalized content.</span> 
                    
                </p>
                <div className="extra">
                    <a href="https://github.com/JoelJaison394/Netflix_Clone"><p>view code</p></a>
                    <a href="https://netflix-clone-fb10a.web.app/home"><p>Live</p></a>
                </div>
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