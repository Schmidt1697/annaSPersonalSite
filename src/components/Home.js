import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home container">
      <div className="layer"></div>
      <div className="layer2"></div>
      <div className="layer3"></div>
      <div className="home-page-info-container">
          <p>Hello, my name is</p>
          <h1 className='san-serif-font'>Anna.</h1>
          <p>I'm a Software Engineer.</p>
          <Link to={"/my-work"}>Portfolio</Link>
      </div>
      
   </div>
  )
}

export default Home