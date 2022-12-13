import React from 'react'
import AboutPhoto from '../profile-images/annaRunning.jpeg'


const About = () => {
  return (
    <div className='about container'>
      <img className="about-img" src={AboutPhoto} alt="Anna" />
      <h3 className='san-serif-font'>
      A bit about me. . . 
      </h3>
      <p>
      I'm a software developer with experience building fullstack applications with React.js and Ruby on Rails. I completed the software engineering bootcamp at Flatiron School in December 2022. My favorite part about programming is that learning is a continuous and integral part of the experience. I thoroughly enjoy growing my programming skills and am currently learning to build with Node.js and Python. 
      </p>
      <p>
      My unconventional path to software development started while working as a critical-care nurse. I love to help others, and have a lot of hands-on experience doing so. Before enrolling in the Flatiron coding bootcamp, I completed multiple online courses (mostly through Udemy), reading books on html, css, and javascript and building projects. I learned my side-interest was something I wanted to pursue full-time. I'm in awe of the infinite possibilities this career field allows in terms of collaborating and creating programs that have the potential to reach and help numerous people. 
      </p>
      <p>
      Aside from work, I LOVE being outside! I'm fortunate to call Colorado my home. High alpine lakes, technical ridgelines, and running many miles on trails overgrown with wildflowers are a few of my favorite things.
      </p>

    </div>
  )
}

export default About