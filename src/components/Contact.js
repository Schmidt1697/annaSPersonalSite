import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import React, { useState } from 'react'

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
}

const Contact = ({openModal, handleClose}) => {
  const [formData, setFormData] = useState(initialState)

  //get values from user input into form
  const handleOnChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setFormData(formData =>{
      return {
        ...formData,
        [name]: value
      }
    })}

    //send form data
    const submitForm = (e) => {
      e.preventDefault()
      console.log(formData)

      // fetch('someUrl', {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json"},
      //   body: JSON.stringify(formData)
      // })
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      //   setFormData(initialState)
      // })
    }
    
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
        <form className="contact-form" autoComplete='off' onSubmit={submitForm}>
                  <label>Name</label>
                  <input type='text'id="name" name="name" value={formData.name} onChange={handleOnChange} required/>

                  <label>Email</label>
                  <input type='text'id="email" name="email" value={formData.email} onChange={handleOnChange} required/>

                  <label>Subject</label>
                  <input type='text'id="subject" name="subject" value={formData.subject} onChange={handleOnChange} required/>

                  <label>Message</label>
                  <textarea type='text' id="message" name="message" value={formData.message} onChange={handleOnChange} rows="6" required/>

                  <button className='submit-btn' type="submit">Send</button>
              </form>
      </div>
          </>
        </Box>
      </Modal>
     
    )
}

export default Contact