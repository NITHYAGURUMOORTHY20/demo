import React from "react";
import Navbar from "./Navigator/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Work from "./Components/Work"
import Todolist from "./Components/Todolist";


const App = () => {
  return(
    <div>
      <Router>
        <div>
          <Navbar />
        </div>
        <div style={{padding:'50px'}}>
      <Routes>
        <Route path="/" element = { <Home />}/>
        <Route path="/work" element = { <Work />}/>
        <Route path="/contact" element = { <Contact />}/>
        <Route path="/todolist" element = { <Todolist/>}/>
      </Routes>
      </div>
      </Router>
    </div>
    
  )
}

export default App;