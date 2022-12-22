import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import React, { useEffect, useState } from 'react'


const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
}

const Contact = ({openModal, handleClose}) => {
  const [formData, setFormData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // get values from user input into form
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData(formData =>{
      return {
        ...formData,
        [name]: value
      }
    })}

    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
    
      // create a URLParamObject
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("email", formData.email);
      params.append("subject", formData.subject);
      params.append("message", formData.message);
      params.append("form-name", "contact"); // the name of your form in Netlify
      const urlEncodedData = params.toString();
    
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // sending URL encoded data
        },
        body: urlEncodedData,
      })
        .then((response) => {
          if (response.ok) {
            console.log(response)
            setShowSuccess(true);
            setIsLoading(false);
          } else {
            setShowError(true);
            console.error("Form Submission Error:", response);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Form Submission Error:", error);
          setShowError(true);
          setIsLoading(false);
        });
    }

    // let success/error message show for 6 seconds, then reset form
  useEffect(() => {
    setTimeout(() => {
      setFormData(initialState);
      setShowSuccess(false);
      setShowError(false);
      handleClose();
    }, 4000);
  }, [showError, showSuccess]);

  // render an error or success msg after submit
  const errorMsg = showError ? <li>There was an error sending your message. Please try again later.</li> : "";
  
  const successMsg = showSuccess ? <li>Thank you for your message!</li> : "";
 
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
        <form className="contact-form" onSubmit={handleSubmit}>

                  <label>Name</label>
                  <input type='text'id="name" name="name" value={formData.name} onChange={handleOnChange}  required/>

                  <label>Email</label>
                  <input type='email'id="email" name="email" value={formData.email} onChange={handleOnChange} required/>

                  <label>Subject</label>
                  <input type='text'id="subject" name="subject" value={formData.subject} onChange={handleOnChange} required/>

                  <label>Message</label>
                  <textarea type='text' id="message" name="message" rows="6" value={formData.message} onChange={handleOnChange} required/>

                  <button className='submit-btn' type="submit">{isLoading ? "Loading..." : "Submit" }</button>
          </form>

          <ul>{errorMsg}</ul>
          <ul>{successMsg}</ul>

        </div>
          </>
        </Box>
      </Modal>
     
    )
}

export default Contact