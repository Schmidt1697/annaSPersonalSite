import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"


const ProjectDemoModal = ({openModal, handleClose, demoUrl}) => {
    console.log(demoUrl)
    
  return (
  <Modal
  open={openModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box 
        sx={{backgroundColor: "var(--white-see-through)",
          backdropFilter: "blur(5px)",
          color: "white",
					display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          alignContent: "center",
					padding: "3rem",
					margin: "10vh auto",
					width: "50%",
					borderRadius: "7px",
					boxShadow: 10,
					alignItems: "center",
          fontSize: "25px",
          }}>

    <div className="project-demo-modal">
        {demoUrl ? <iframe title="project-demo" width="800px" height="600px" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        src={demoUrl}>
        </iframe> : "Demo not available at this time."}
        
    </div>
  </Box>
</Modal>
  )
}

export default ProjectDemoModal