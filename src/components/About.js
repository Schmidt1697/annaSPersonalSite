import React from 'react'
import AboutPhoto from '../profile-images/annaBoat.webp'


const About = () => {
  return (
    <div className='about container'>
      <div className="about-info">
      <img className="about-img" src={AboutPhoto} alt="Anna" />
        <h3 className='san-serif-font'>
        A bit about me. . . 
        </h3>
        <p>
        I'm a full stack software engineer passionate about developing creative solutions to improve lives. I completed the software engineering bootcamp at Flatiron School in December 2022. I love that learning is a continuous and integral part of programming and thoroughly enjoy growing my programming skills. I am currently learning Node.js, Express.js and MongoDB. 
        </p>
        <p>
        My unconventional path to software development started while working as an emergency room and critical-care nurse. I love to help others, and have a lot of hands-on experience doing so. Before enrolling in the Flatiron School coding bootcamp, I completed multiple online courses/projects, and read books on HTML, CSS, and JavaScript. I'm in awe of the infinite possibilities this career field allows in terms of collaborating and creating programs that have the potential to reach and help numerous people.
        </p>
        <p>
        Aside from coding, I LOVE exploring outside! I'm fortunate to call Colorado my home. High alpine lakes, technical ridgelines, and running many miles on trails overgrown with wildflowers are a few of my favorite things.
        </p>
      </div>

    </div>
  )
}

export default About