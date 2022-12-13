import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import MyWork from "./components/MyWork"
import Contact from "./components/Contact"
import Footer from './components/Footer'



function App() {
  const [openModal, setOpenModal] = useState(false)

    
  //open/close contact modal
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="App">
      <NavBar />
      <div className="content-containter">
       <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="my-work" element={ <MyWork />} />
        <Route path="about" element={ <About />} />
       </Routes>
       <Contact openModal={openModal} handleClose={handleClose} />

       <p>Interested in collaborating?</p>
       <button className='contact-btn' onClick={handleOpen}>Get in touch!</button>
       <Footer/>
      </div>

    </div>
  )
}

export default App;
