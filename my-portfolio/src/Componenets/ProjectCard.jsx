import React from 'react'

function ProjectCard({ project }) {
  const { title, description, img, repo, live } = project
  return (
      <div>
    <h1>{title}</h1>
    <div className="projects-container">
      <div className="projectCard">
        <div className="flip-card-front">
          <img src={img} alt={title} className='project-img' />
        </div>

        <div className="flip-card-back">
            <p>{description}</p>
              <a href={repo}><p>GitHub</p></a>
              <a href={live}><p>Live</p></a>
            </div>
          </div>
        </div>
        </div>
  )
}

export default ProjectCard