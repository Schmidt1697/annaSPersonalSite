import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import MyWork from "./components/MyWork"
import Footer from './components/Footer'



function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content-containter">
       <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="my-work" element={ <MyWork />} />
        <Route path="about" element={ <About />} />
       </Routes>
       <Footer/>
      </div>

    </div>
  )
}

export default App;
