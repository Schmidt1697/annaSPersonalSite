import { Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-containter">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  exact path="/about">
              <About />
            </Route>
            <Route  exact path="/my-work">
              <MyWork />
            </Route>
            <Route  path="/contact">
              <Contact />
            </Route>
          </Switch>
          
      </div>
      
  
    </div>
  )
}

export default App;
