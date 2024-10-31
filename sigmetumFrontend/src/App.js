import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Explore from './pages/Explore.js';
import { Link } from 'react-router-dom';
import DataManagement from './pages/DataManagement.js';

function App() {
  return (
    <Router>
      <header className="bg-[#F9FBFA] border-b-2 border-[#99BBA8] flex items-center justify-between whitespace-nowrap px-5 py-2">
        <Link to="/">
          <div className="flex items-center gap-4">
            <img src='https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png' alt='logo' className="h-14"/>
            <p className="font-bold text-[#0C1811] text-xl ml-4">SIGMETUM</p>
          </div>
        </Link>
          <div className="flex flex-1 justify-end gap-8">
            <Navbar/>
          </div>
      </header>
      <main className='flex-grow bg-[#F9FBFA]'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/explorar" element={<Explore/>}/>
          <Route path="/sobre-nosotros" element={<About/>}/>
          <Route path="/datos" element={<DataManagement/>}/>
        </Routes>
      </main>
      <footer className='bg-[#0C1811] flex justify-center relative'>
        <Footer/>
        <span className='text-[#F9FBFA] absolute bottom-2 right-2'>V 1.0.0</span>
      </footer>
    </Router>
  );
}

export default App;