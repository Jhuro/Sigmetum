import React, { useState, useEffect, useRef } from 'react';
import ButtonPrincipal from './ButtonPrincipal';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { t } = useTranslation();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav className="flex space-x-4 ml-auto justify-end relative">
      <div className="flex space-x-4">
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-[#0C1811] font-bold hover:underline">
              {t('navbar.homeOption')}
            </Link>
          </li>
          <li>
            <Link to="/explorar" className="text-[#0C1811] font-bold hover:underline">
              {t('navbar.exploreOption')}
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" className="text-[#0C1811] font-bold hover:underline">
              {t('navbar.aboutUsOption')}
            </Link>
          </li>
        </ul>

        <ButtonPrincipal icon="Menu" onClick={toggleDropdown} className={"block md:hidden"}/>

        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-20 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <Link to="/" onClick={closeDropdown} className="block px-4 py-2 text-[#0C1811] font-bold hover:bg-gray-100">
              {t('navbar.homeOption')}
            </Link>
            <Link to="/explorar" onClick={closeDropdown} className="block px-4 py-2 text-[#0C1811] font-bold hover:bg-gray-100">
              {t('navbar.exploreOption')}
            </Link>
            <Link to="/sobre-nosotros" onClick={closeDropdown} className="block px-4 py-2 text-[#0C1811] font-bold hover:bg-gray-100">
              {t('navbar.aboutUsOption')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;