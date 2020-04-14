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
                <p>
                When i'm not coding you can often find me doing mini projects, arts and crafts with
                 my family or trying new foods. I also love putting together furniture, so ikea is heaven 
                 on earth me.
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