import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
// import React, { useState } from 'react'


// const initialState = {
//   name: "",
//   email: "",
//   subject: "",
//   message: ""
// }

const Contact = ({openModal, handleClose}) => {

  // const [formData, setFormData] = useState(initialState)
  // const [isLoading, setIsLoading] = useState(false)

  //get values from user input into form
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData(formData =>{
  //     return {
  //       ...formData,
  //       [name]: value
  //     }
  //   })}

     
    //   fetch(`/.netlify/functions/send-email`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json"},
    //     body: JSON.stringify(formData)
    //   })
    //   .then((res) =>{
    //     setIsLoading(false)
    //     if (res.ok){
    //       res.json()
    //       setFormData(initialState)
    //       console.log(res);
    //       console.log(
    //         `If you're looking at the console, thanks for sending me an email!`
    //       );
    //       alert("Message Sent!");
    //     } else {
    //       setIsLoading(false)
    //       setFormData(initialState)
    //       console.error(res);
    //       alert('An error occurred; message not sent.');
    //       handleClose();
    //     }
    //   } )

    // }

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
                color: "",
                fontFamily: "var(--font-2)",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                flexDirection: "column",
                alignContent: "center",
                padding: "2rem",
                margin: "5vh auto",
                width: "30vw",
                maxWidth: "500px",
                borderRadius: "7px",
                boxShadow: 10,
                alignItems: "center",
                fontSize: "18px",
                }}>

        <>
        <div className='contact-container'>
        <h2>Contact Me</h2>
        <h4>I'd love to help you build something elegant and effecient!</h4>
        <form className="contact-form" autoComplete='off' name="contact" method="POST" data-netlify="true">
                  <label>Name</label>
                  <input type='text'id="name" name="name" required/>

                  <label>Email</label>
                  <input type='text'id="email" name="email" required/>

                  <label>Subject</label>
                  <input type='text'id="subject" name="subject" required/>

                  <label>Message</label>
                  <textarea type='text' id="message" name="message" rows="6" required/>

                  <button className='submit-btn' type="submit">Submit</button>
              </form>
      </div>
          </>
        </Box>
      </Modal>
     
    )
}

export default Contact