import React from 'react'
import { FaAdobe, FaGitAlt, FaReact } from 'react-icons/fa'
import { DiPostgresql } from 'react-icons/di'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import '../CSS/About.css';

const About = () => {
    return (
        <div className='main-container'>

            <div className='firstSection'>
                <p>Random Text</p>
            </div>

            <div className='secSection'>
                <h1>Incase you wanted to read more about me</h1>
            </div>

            <div className='thirdSection'>
                <h1>Some skills that I know</h1>
            </div>

            <div className='fourthSection'>
                <div>
                    <IoLogoJavascript className='skill-icon' style={{ color: "yellow" }} />
                    <p>Javascript</p>
                </div>
                <div>
                    <IoLogoHtml5 className='skill-icon' style={{ color: "orangered" }} />
                    <p>HTML</p>
                </div>
                <div>
                    <IoLogoCss3 className='skill-icon' style={{ color: "blue" }} />
                    <p>CSS</p>
                </div>
                <div>
                    <FaAdobe className='skill-icon' style={{ color: "red" }} />
                    <p>Adobe</p>
                </div>
                <div>
                    <DiPostgresql className='skill-icon' style={{ color: "darkblue" }} />
                    <p>PostGres</p>
                </div>
                <div>
                    <FaGitAlt className='skill-icon' style={{ color: "orange" }} />
                    <p>GitHub</p>
                </div>
                <div>
                    <FaReact className='skill-icon' />
                    <p>React</p>
                </div>

            </div>

        </div>
    );
}

export default About;