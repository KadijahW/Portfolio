import React from 'react'
import '../CSS/Projects.css'
import ProjectCard from './ProjectCard'
// import {Link} from 'react-router-dom'

const projects = [
{
    title: "Youtube Replica", 
    description: "This app is a replica of the website youtube I used the youtube API to fetch the data(videos) that the user is searching for. Users are allowed to watch the videos and leave comments.",
    img: "/images/youtube_replica.png",
    repo: "https://github.com/KadijahW/Pursuit-Core-Web-Unit-4-Assessment",
    live: "https://youtubereplica.online/"
},
{
    title: "Shutter",
    description: "Shutter is a social media web app that concentrates in sharing high quality snapshots of our users interests and experiences.",
    img: "../images/Shutter.png",
    repo: "https://github.com/KadijahW/Shutter",
    // live: "https://shutter-app.herokuapp.com/"
},
{
    title: "Simple 21",
    description: "Developed a web based game app that allows users to play against the computer. The web app allows users to draw cards, hit or stay, and draws cards for the computer. Whoever scores 21 or is closer to 21 wins.",
    img: "../images/Simple21.png",
    repo: "https://github.com/KadijahW/21-web-game",
    live: "https://kadijahw.github.io/21-web-game/"
},
{
    title: "Tekpack",
    description: "TekPack is your one stop shop to manage and keep track of product specifications and its related content seamlessly, between both designers and manufacutures.",
    img: "../images/Tekpack.png",
    repo: "https://github.com/KadijahW/Tekpack",
    
},
{
    title: "Remote Theater",
    description: "Remote Theater is a web app that replicates a physical movie theater. Allows users to watch movies at a specified showtime and also has a chat feature that allows users to communicate while the movie is playing.",
    img: "../images/Remote-Theater.png",
    repo: "https://github.com/KadijahW/remote-theater",
    live: "https://remotetheater.herokuapp.com/"
},
{
    title: "Amazon Clone",
    description: "This web app replicates the website Amazon. Firebase for user authorization for users to log in and out, Users are able to add and remove products to their baskets and see the subtotal of items in basket.",
    img: "../images/AmazonClone.png",
    repo: "https://github.com/KadijahW/AmazonClone",
    live: "https://cloneofamazon.netlify.app"
}

]


const Projects = () => {
    return (
        <div className='projectContainer'>
            <div id='pj'>
            {projects.map(p => <ProjectCard project={p} /> )}

            </div>

        </div>
    )
}

export default Projects;