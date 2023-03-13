import React from 'react';
import MyWorkCard from './MyWorkCard';
import myProjects from '../myProjects'; 

const MyWork = () => {  

  const renderMyProjects = myProjects.map(project => {
    return(
    <MyWorkCard key={project.id} project={project}/>
    )
  })

  return (
    <div className='project-container'>
      <div className="layer-project-page"></div>
      <h1>Projects</h1>
      {renderMyProjects}
    </div>
  )
}

export default MyWork
