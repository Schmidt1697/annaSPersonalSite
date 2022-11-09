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
    <div className='project-container container'>
      <h1>My Work</h1>
      {renderMyProjects}
    </div>
  )
}

export default MyWork
