import React from 'react'
import {FaAdobe, FaGitAlt, FaReact} from 'react-icons/fa'
import{DiPostgresql} from 'react-icons/di'
import {IoLogoJavascript, IoLogoHtml5, IoLogoCss3} from 'react-icons/io'
import '../CSS/About.css';

const About = () => {
    return(
<div className= 'main-container'>
    <div className='firstSection'>
<p>Random Text</p>
    </div>
    <div className='secSection'>
    <h1>ABOUT</h1>

    </div>
    <div className='thirdSection'>
<h1>Some skills that I know</h1>
    </div>
    <div className='fourthSection'>
        <IoLogoJavascript className='skill-icon'/>
        <p>Javascript</p>
        <IoLogoHtml5  className='skill-icon'/>
        <p>HTML</p>
        <IoLogoCss3  className='skill-icon'/>
        <p>CSS</p>
        <FaAdobe  className='skill-icon'/>
        <p>Adobe</p>
        <DiPostgresql  className='skill-icon'/>
        <p>PostGres</p>
        <FaGitAlt  className='skill-icon'/>
        <p>GitHub</p>
        <FaReact className='skill-icon' />
        <p>React</p>
    </div>

</div>
    );
}

export default About;