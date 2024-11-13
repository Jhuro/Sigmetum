import React, { useState, useEffect, useRef } from 'react';
import ButtonPrincipal from './ButtonPrincipal';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);

  useEffect(() => {
    // Función para cerrar el dropdown al hacer clic fuera
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    // Agrega el evento si el dropdown está abierto
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Limpia el evento cuando el componente se desmonte o el dropdown se cierre
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav className="flex space-x-4 ml-auto justify-end relative">
      <div className="flex space-x-4">
        <ul className="hidden md:flex space-x-4">
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

        {/* Botón para mostrar el dropdown en pantallas pequeñas */}
        <ButtonPrincipal icon="Menu" onClick={toggleDropdown} className={"block md:hidden"}/>

        {/* Dropdown */}
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-20 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <Link to="/" onClick={closeDropdown} className="block px-4 py-2 text-[#0C1811] font-bold hover:bg-gray-100">
              Inicio
            </Link>
            <Link to="/explorar" onClick={closeDropdown} className="block px-4 py-2 text-[#0C1811] font-bold hover:bg-gray-100">
              Explorar
            </Link>
            <Link to="/sobre-nosotros" onClick={closeDropdown} className="block px-4 py-2 text-[#0C1811] font-bold hover:bg-gray-100">
              Sobre nosotros
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;