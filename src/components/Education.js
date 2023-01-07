import React from 'react'
import { Link } from "react-router-dom";

import  GraduationHat  from '../assets/Graduation-hat.png';
import Sahrdaya from '../assets/education/Sahrdaya-logo.png';

function Education() {
    const name = "< Joel Jaison />"
  return (
    <div>
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
        <div className="hero-section">
            <img src={GraduationHat}/>
            <div className="left">
                <h2> Education </h2> 
                <p>I have acquired most of my skills through self-study using various online and offline resources such as books, articles, documentation, and online tutorials and courses. My education has also helped me develop important life skills that are necessary for a professional career. I have used my self-study resources to continuously improve my knowledge and skills in order to excel in my career.</p>              
            </div>          
        </div>
        <div className="content-section">
        <div className="edu-1 edu">
                    <div className="edu-header">
                        <div className="edu-logo">
                        {/* <img src={Sahrdaya}/> */}
                        </div>
                        <div className="course-info">
                            <h3 className="edu-name">Sahrdaya College of Engineering And Technology</h3>
                            <h4>Bachelor in computer science enginerring <br /> <span>  2021-present</span></h4>
                        </div>
                    </div>                  
                    <div className="edu-des">                     
                        <p className="edu-details">
                            ⚡ I'm currently pursuing my bachelors in Computer Science Engineering<br />
                            ⚡ I have studied core subjects like Data Structures  ,  Fundamentals of Opps Programming language.<br />
                            ⚡ I have also completed various online courses for Backend , Web , Desktop Applications, etc. <br />

                            ⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. <br />
                        </p>
                    </div>
                    <div className="list-skils">
                        
                    </div>
                </div>
                <div className="edu-2 edu">
                <div className="edu-header">
                        <div className="edu-logo"></div>
                        <div className="course-info">
                            <h3 className="edu-name">Don Bosco Higher Secondary School, Irinjalakuda</h3>
                            <h4>Higher Secondary<br /> <span>  2019-2021</span></h4>
                        </div>
                    </div>                  
                    <div className="edu-des">                     
                        <p className="edu-details">
                            ⚡ I have studied core subjects like C++ , html ,css.<br />
                        </p>
                    </div>
                    <div className="list-skils">
                        
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Education