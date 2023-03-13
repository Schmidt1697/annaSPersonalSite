import React from 'react'
import AboutPhoto from '../profile-images/annaBoat.webp'


const About = () => {
  return (
    <div className='about container'>
      <div className="about-info">
      <img className="about-img" src={AboutPhoto} alt="Anna" />
        <h3 className='san-serif-font'>
        A BIT ABOUT ME. . . 
        </h3>
        <p>
        I'm a software engineer with experience building front-end, back-end, and full stack applications using JavaScript, React.js, Node.js and Ruby on Rails. Software engineering inspires me with the outstanding possibilities to collaborate and create technology to positively impact numerous lives.
        </p>
        <p>
        My unconventional path to software development started while working as an emergency room and critical-care nurse. started learning to code in 2020 and completed multiple online courses/projects, and read books on HTML, CSS, and JavaScript. In addition to teaching myself front-end development, I completed an intensive, full stack software engineering bootcamp at Flatiron School to solidify my understanding of building full stack applications. I'm in awe of the infinite possibilities this career field allows in terms of collaborating and creating technology that have the potential to reach and help countless others.
        </p>
        <p>
        When I’m not coding, I LOVE adventuring outside, and reading/watching most things sci-fi! I'm fortunate to call Colorado my home. High alpine lakes, technical ridgelines, and running many miles on trails overgrown with wildflowers are a few of my favorite things.
        </p>
      </div>

    </div>
  )
}

export default About