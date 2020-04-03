import React from 'react'
import { FaAdobe, FaGitAlt, FaReact } from 'react-icons/fa'
import { DiPostgresql, DiNodejs } from 'react-icons/di'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import '../CSS/About.css';

const About = () => {
    return (
        <div className='main-container'>

            <div className='firstSection'>
            <h1>More about me</h1>
            </div>

            <div className='secSection'>
                <p> While I gained majority of my technical experience through my college career, 
                    my passion for tech began at the age of 16. The very first time I dissected a 
                    computer I knew that I wanted to know more about computers and its functions. 
                    My hunger to learn more is how I found Pursuit, an intensive 12 month program 
                    where I gained hands-on experience with JavaScript, Express, APIs, Data Structures, 
                    Algorithms and much more. Through the program I also learned tech principles and culture 
                    via team and individual projects, how to code, review and pair programming.
                     Thanks to everyone at Pursuit I can confidently say today I am a software engineer.
                </p>
            </div>

            <div className='thirdSection'>
                <h1>Skills that I know</h1>
            </div>

            <div className='fourthSection'>
                <div>
                    <IoLogoJavascript className='skill-icon' style={{ color: "Yellow" }} />
                    <p>Javascript</p>
                </div>
                <div>
                    <IoLogoHtml5 className='skill-icon' style={{ color: "OrangeRed" }} />
                    <p>HTML</p>
                </div>
                <div>
                    <IoLogoCss3 className='skill-icon' style={{ color: "Blue" }} />
                    <p>CSS</p>
                </div>
                <div>
                    <DiNodejs className='skill-icon' style={{ color: "LimeGreen" }}/>
                    <p>Node JS</p>
                </div>
                <div>
                    <FaAdobe className='skill-icon' style={{ color: "Red" }} />
                    <p>Adobe</p>
                </div>
                <div>
                    <DiPostgresql className='skill-icon' style={{ color: "Navy" }} />
                    <p>PostGres</p>
                </div>
                <div>
                    <FaGitAlt className='skill-icon' style={{ color: "OrangeRed" }} />
                    <p>GitHub</p>
                </div>
                <div>
                    <FaReact className='skill-icon' style={{ color: "CornflowerBlue" }}/>
                    <p>React</p>
                </div>

            </div>

        </div>
    );
}

export default About;