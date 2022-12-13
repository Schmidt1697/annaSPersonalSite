import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home container">
          <p>Hello, my name is</p>
          <h1 className='san-serif-font'>Anna.</h1>
          <p>I'm a Fullstack Software Engineer.</p>
          <Link to={"/my-work"}>Check out my work!</Link>
   </div>
  )
}

export default Home