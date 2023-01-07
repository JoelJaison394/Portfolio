import React from 'react'
import { useState } from 'react';

import { ReactComponent as Aboutimg } from '../assets/hero-section-svg/Aboutmeimg.svg'

function AboutSection() {
    const [menuprofile, setmenuProfile] = React.useState(false);
    const [more , setMore] = useState("");

    const changeMenuP = (e) => {
        if(menuprofile===true){
            setmenuProfile(false)
        }else{
            setmenuProfile(true)
        }

      }

    
  return (
    <div>
        <div className="section-heading">
            <h1>More About  Myself</h1>
        </div>
        <div className="about-section">
        <div className="left-section">
            <Aboutimg/>
        </div>
        <div className="right-setion">
            <p>As a computer science engineering student from Thrissur, Kerala in India, I have always been fascinated by the world of technology and how it can be used to solve problems and improve people's lives. During the lockdown in 2020, I decided to take advantage of the extra time that I had and began learning more about web development and other computer-related skills at Sahrdaya College of Engineering and Technology. To further my knowledge and skills in this field, I have used a variety of resources such as freeCodeCamp, online courses on Coursera and Udemy, and tutorials on YouTube. I have also participated in online and offline webinars to stay up-to-date with the latest trends and best practices in web development. <br/></p>


            <button className='readmoreBtn' onClick={changeMenuP}>{menuprofile ? "Readless": "Readmore" }</button>

            {menuprofile  &&(
                    <div className="extra">

                    <p>
                            <span className="read-more">
                        Since then, I have been working hard to improve my knowledge and skills in web development and other areas of computer science. I am always seeking out new opportunities to learn and grow, whether it be through online courses, internships, or personal projects. I am a very hardworking and determined individual, and I am committed to achieving my goals and making a meaningful contribution to the IT sector.<br/>
       
                        In addition to my technical skills, I am also an open-minded and collaborative person. I enjoy working with others and am always willing to listen to different perspectives and ideas. I believe that my combination of technical expertise and strong interpersonal skills make me an asset to any team or project.<br/>
       
                        Overall, I am excited to start my career in the IT sector and contribute my skills and passion to the industry. I am confident that with my dedication and hard work, I will be able to make a positive impact and achieve my long-term goals.
                        </span>
                    </p>
                </div>       
            )}
        </div>
        </div>
        
    </div>
  )
}

export default AboutSection