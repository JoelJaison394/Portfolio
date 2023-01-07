import React from 'react'
import { ReactComponent as Skillsimg } from '../assets/hero-section-svg/Skillsimg.svg'
import { ReactComponent as Skillsimg2 } from '../assets/hero-section-svg/Skillsimg2.svg'
import { ReactComponent as Skillsimg3 } from '../assets/hero-section-svg/Skillsimg3.svg'
import { ReactComponent as C } from '../assets/Skills-icons/c.svg'
import { ReactComponent as Css } from '../assets/Skills-icons/css.svg'
import { ReactComponent as Git } from '../assets/Skills-icons/git.svg'
import { ReactComponent as Html } from '../assets/Skills-icons/html.svg'
import { ReactComponent as Javascript } from '../assets/Skills-icons/javascript.svg'
import { ReactComponent as MongoDb } from '../assets/Skills-icons/mongodb.svg'
import { ReactComponent as Node } from '../assets/Skills-icons/node-js.svg'
import { ReactComponent as Npm } from '../assets/Skills-icons/npm.svg'
import { ReactComponent as Postman } from '../assets/Skills-icons/postman.svg'
import { ReactComponent as Reactjs } from '../assets/Skills-icons/react.svg'
import {ReactComponent as Saaas} from '../assets/Skills-icons/saas.svg'
import {ReactComponent as Tailwind} from '../assets/Skills-icons/tailwind-css.svg'
import {ReactComponent as Aws} from '../assets/Skills-icons/aws.svg'
import {ReactComponent as Code} from '../assets/Skills-icons/code.svg'
import {ReactComponent as Docker} from '../assets/Skills-icons/docker.svg'
import {ReactComponent as Firebase} from '../assets/Skills-icons/firebase.svg'
import {ReactComponent as Heroku} from '../assets/Skills-icons/heroku.svg'
import {ReactComponent as Netlify} from '../assets/Skills-icons/netlify.svg'
import {ReactComponent as Figma} from '../assets/Skills-icons/figma.svg'
import {ReactComponent as Illustrator} from '../assets/Skills-icons/adobe-illustrator.svg'
import {ReactComponent as Xd} from '../assets/Skills-icons/adobe-xd.svg'

function SkillSection() {
  return (
    <div >
        <div className="section-heading">
            <h1>Areas of expertise</h1>
        </div>
        <div className="skillSection">
        <div className="left-section skilset-1">
                <h2 className='section-sub-title'>Full StackDevelopment</h2>
                <div className="skill-icons">
                    {/* <label className='skills' ><C/></label> */}
                    <label className='skills' ><Css/></label>
                    <label className='skills' ><Html/></label>
                    <label className='skills' ><MongoDb/></label>
                    <label className='skills' ><Git/></label>
                    <label className="skills"><Saaas/></label>
                    <label className='skills' ><Javascript/></label>

                    <label className='skills' ><Node/></label>
                    <label className='skills' ><Npm/></label>
                    <label className='skills' ><Postman/></label>
                    <label className='skills'  ><Reactjs/></label>
                    <label className="skills"><Tailwind/></label>
                </div>
                <div className="skill-des">

                    <p>⚡ Full stack web developer with expertise in MERN stack .</p>
                    <p>⚡ Expertise in building highly interactive and user-friendly web  application</p>
                    <p>⚡ Proficient in ReactJS and building responsive websites.</p>
                    <p>⚡ Experienced in creating and maintaining backends with Node, Express.</p>
                    <p>⚡ Capable of integrating third party services like Firebase, AWS, and Digital Ocean.</p>
                    <p>⚡ Strong understanding of MERN stack capabilities.</p>
                </div>
        </div>
        <div className="right-section">
            <Skillsimg />
        </div>
        </div>
        <div className="skillSection">
        <div className="left-section skilset-1">
        <Skillsimg2 />
        </div>
        <div className="right-section ">

            <h2 className='section-sub-title'>Cloud-Infra Architecture</h2>
                <div className="skill-icons">
                    {/* <label className='skills' ><C/></label> */}
                    <label className='skills' ><Aws/></label>
                    <label className='skills' ><Firebase/></label>
                    <label className='skills' ><MongoDb/></label>
                    <label className='skills' ><Code/></label>
                    <label className="skills"><Docker/></label>
                    <label className='skills' ><Heroku/></label>
                    <label className='skills' ><Netlify/></label>
                </div>
                <div className="skill-des">

                    <p>⚡ Expert in designing cloud infrastructure using AWS, Heroku, Firebase, MongoDB, Docker, and GitHub Actions.</p>
                    <p>⚡ Experienced in deploying and managing apps on cloud platforms like AWS and Heroku.</p>
                    <p>⚡ Skilled in using Docker and GitHub Actions for automation.</p>
                    <p>⚡ Proficient in using MongoDB and other databases in the cloud.</p>
                    <p>⚡ Informed decision-maker on which cloud platforms and technologies to use.</p>
                </div>
        </div>
        </div>
        <div className="skillSection">
        <div className="left-section skilset-1">
                <h2 className='section-sub-title'>Ui / Ux Desgining</h2>
                <div className="skill-icons">
                    {/* <label className='skills' ><C/></label> */}
                    <label className='skills ' ><Figma/></label>
                    <label className='skills ' ><Xd/></label>
                    <label className='skills' ><Illustrator/></label>

                </div>
                <div className="skill-des">

                    <p>⚡ Proficient in UI/UX design for web and mobile apps using Figma, Adobe XD, and Illustrator.</p>
                    <p>⚡ Experienced in user research and testing.</p>
                    <p>⚡ Skilled in creating wireframes, prototypes, and mockups.</p>
                    <p>⚡ Proficient in using design principles and best practices to create functional and aesthetically pleasing user flows and layouts.</p>
                    <p>⚡ Strong understanding of design process and ability to work with cross-functional teams.</p>
                </div>
        </div>
        <div className="right-section">
            <Skillsimg3 />
        </div>
        </div>
        
    </div>
  )
}

export default SkillSection