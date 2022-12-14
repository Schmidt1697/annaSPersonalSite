import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Contact from './Contact'

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false)

    
    //open/close contact modal
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

  return (
    <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/my-work">MyWork</NavLink>
      <NavLink onClick={handleOpen}>Contact</NavLink>
      <Contact openModal={openModal} handleClose={handleClose}/>
      
    </div>
  )
}

export default NavBar