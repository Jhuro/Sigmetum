import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="flex space-x-4 ml-auto justify-end">

        <div className="flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-[#0C1811] font-bold hover:underline">Inicio</Link>
            </li>
            <li>
              <Link to="/explorar" className="text-[#0C1811] font-bold hover:underline">Explorar</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros" className="text-[#0C1811] font-bold hover:underline">Sobre nosotros</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;