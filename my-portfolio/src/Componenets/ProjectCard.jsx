import React from 'react'

function ProjectCard({ project }) {
  const { title, description, img, repo, live } = project
  return (
      <div>
    <h1 className="title">{title}</h1>
    <div className="projects-container">
      <div className="projectCard">
        <div className="flip-card-front">
          <img src={img} alt={title} className='project-img' />
        </div>

        <div className="flip-card-back">
            <p>{description}</p>
            <span>
              <a className="ref" href={repo}><p>GitHub</p></a> 
              {/* <a className="ref" href={live}><p>Live</p></a> */}
              </span>
            </div>
          </div>
        </div>
        </div>
  )
}

export default ProjectCard