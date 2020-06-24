import React from 'react'
import '../CSS/Projects.css'
// import {Link} from 'react-router-dom'


const Projects = () => {
    return (
        <div className='mainContainer'>
            <div className='projects-container'>
            <h1 className='title'>Youtube Replica</h1>
                <div className='projectCard'>
                    <div className='flip-card-front'>
                        <img src={require('../images/youtube_replica.png')} alt="youtube screenshot" className='project-img' />
                    </div>
                    <div className='flip-card-back'>
                        <p> This app is a replica of the website youtube.
                        I used the youtube API to fetch the data(videos) that
                        the user is searching for. Users are allowed to watch
                        the videos and leave comments.
                    </p>
                    <a href='https://github.com/KadijahW/Pursuit-Core-Web-Unit-4-Assessment' target='_blank' rel="noopener noreferrer"> <button>Github</button></a>    
                    </div>
                </div>
            </div>

            <div className='projects-container'>
            <h1 className='title'>Shutter</h1>
                <div className='projectCard'>
                    <div className='flip-card-front'>
                        <img src={require('../images/Shutter.png')} alt="shutter screenshot" className='project-img' />
                    </div>
                    <div className='flip-card-back'>
                        <p>
                            Shutter is a social media web app that concentrates
                            in sharing high quality snapshots of our users interests
                            and experiences.
                    </p>
                    <a href='https://github.com/KadijahW/Shutter' target='_blank' rel="noopener noreferrer"> <button>Github</button></a>    
                    </div>
                </div>
            </div>

            <div className='projects-container'>
            <h1 className='title'>Simple 21</h1>
                <div className='projectCard'>
                    <div className='flip-card-front'>
                        <img src={require('../images/Simple21.png')} alt="shutter screenshot" className='project-img' />
                    </div>
                    <div className='flip-card-back'>
                        <p>
                            Developed a web based game app that allows users to play against the computer.
                            The web app allows users to draw cards, hit or stay, and draws cards for the computer.
                            Whoever scores 21 or is closer to 21 wins.
                    </p>
                        <a href='https://github.com/KadijahW/21-web-game' target='_blank' rel="noopener noreferrer"> <button>Github</button></a>    
                    </div>
                </div>
            </div>

            <div className='projects-container'>
            <h1 className='title'>Tekpack</h1>
                <div className='projectCard'>
                    <div className='flip-card-front'>
                        <img src={require('../images/Tekpack.png')} alt="tekpack screenshot" className='project-img' />
                    </div>
                    <div className='flip-card-back'>
                        <p>
                        TekPack is your one stop shop to manage and keep track of product specifications and its 
                        related content seamlessly, between both designers and manufacutures.
                    </p>
                    <a href='https://github.com/KadijahW/Tekpack' target='_blank' rel="noopener noreferrer"> <button>Github</button></a>  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;