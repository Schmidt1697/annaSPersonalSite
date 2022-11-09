import React, { useState } from 'react'

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
}
const Contact = () => {
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
      <div className='contact-container container'>
        <h1>Contact Me</h1>
        <h3>I'd love to help you build something effecient and elegant!</h3>
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

            <div className="social-media">
              <a href="https://www.linkedin.com/in/annaschmidt1697/"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/Schmidt1697" target ="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/nana_marsh/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          </div>
        
      </div>
    )
}

export default Contact