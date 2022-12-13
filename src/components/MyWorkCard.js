import { useState } from 'react';
import ProjectDemoModal from './ProjectDemoModal';


const MyWorkCard = ({project}) => {
const [showDetails, setShowDetails] = useState(false)
const [openModal, setOpenModal] = useState(false)

    
//open/close contact modal
const handleOpen = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);

const handleMouseOver = () => {
  setShowDetails(true)
}
const handleMouseOut = () => {
  setShowDetails(false)
}

const showDetailsClass = showDetails ? "" : "hidden"

  return (
    <div className='project-card'>
      <h2>{project.name}</h2>
      <div className="img-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img src={project.image} alt={project.name} >
        </img>
        <p className={showDetailsClass}>{project.description}</p>
      </div>

      <div className="project-links">
        <a id="project-link" href={project.gitHub} rel="noreferrer" target="_blank">Github</a>
        <button className='demo-btn' onClick={handleOpen}>Demo</button>
      </div>

      <ProjectDemoModal openModal={openModal} handleClose={handleClose} demoUrl={project.demo_url}/>
     
    </div>
  )
}

export default MyWorkCard