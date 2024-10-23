import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
                <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
                    <Link to="/" className="text-[#648778] text-base font-normal leading-normal min-w-40">Inicio</Link>
                    <Link to="/sobre-nosotros" className="text-[#648778] text-base font-normal leading-normal min-w-40">Sobre nosotros</Link>
                    <Link to="/explorar" className="text-[#648778] text-base font-normal leading-normal min-w-40">Exlporar</Link>
                </div>
                
                <p className="text-[#648778] text-base font-normal leading-normal">©2024 Sigmetum. All rights reserved.</p>
                </footer>
            </div>
        </footer>
    );
  };
  
  export default Footer;