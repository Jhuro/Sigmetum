import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <div className="flex min-w-screen flex-1 flex-col">
                <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
                    <Link to="/" className="text-[#FFFFFF] text-base font-normal leading-normal min-w-40 hover:underline">Inicio</Link>
                    <Link to="/explorar" className="text-[#FFFFFF] text-base font-normal leading-normal min-w-40 hover:underline">Exlporar</Link>
                    <Link to="/sobre-nosotros" className="text-[#FFFFFF] text-base font-normal leading-normal min-w-40 hover:underline">Sobre nosotros</Link>
                </div>
                <p className="text-[#FFFFFF] text-base font-normal leading-normal">&copy; 2024 Sigmetum. Todos los derechos reservados.</p>
                </footer>
            </div>
    );
  };
  
  export default Footer;