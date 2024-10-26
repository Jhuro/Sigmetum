import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Explore from './pages/Explore.js';
import DataManagement from './pages/DataManagement.js';

function App() {
  return (
    <Router>
      <header>
          <Navbar/>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/explorar" element={<Explore/>}/>
          <Route path="/sobre-nosotros" element={<About/>}/>
          <Route path="/datos" element={<DataManagement/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
