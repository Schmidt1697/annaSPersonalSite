import React from 'react';


const MyWorkCard = ({project}) => {

  return (
    <div className='project-card'>
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} />
      <p>{project.description}</p>
      
      <a href={project.gitHub} target="_blank">View GitHub Repo</a>
     
    </div>
  )
}

export default MyWorkCard