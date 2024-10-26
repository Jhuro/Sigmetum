import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-black hover:underline">Inicio</Link>
          </li>
          <li>
            <Link to="/explorar" className="text-black hover:underline">Explorar</Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" className="text-black hover:underline">Sobre nosotros</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;