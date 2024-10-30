import React from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal.js';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="@container">
          <div
             className="bg-[#F9FBFA] flex min-h-screen w-full flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 items-start justify-end px-4 pb-20 md:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.alphacoders.com/862/862181.jpg")`
            }}
          >
              <div className="flex flex-col gap-5 text-left">
                <h1 className="text-[#F9FBFA] text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                  Sigmetum - Explora la biodiversidad por regiones
                </h1>
                <h2 className="text-[#F9FBFA] text-sm font-normal leading-normal sm:text-2xl sm:font-normal sm:leading-normal">
                Descubre y visualiza la riqueza de la vegetación y las especies en diversas zonas geográficas, explorando la biodiversidad de nuestro planeta de manera interactiva
                </h2>
                <Link to="/explorar">
                  <ButtonPrincipal text='Buscar'/>
                </Link>
              </div>
            </div>
        </div>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#14281D] py-5">
            <p className="text-[#4B644A] text-sm font-normal leading-normal">Sobre nosotros</p>
            <p className="text-[#0C1811] text-sm font-normal leading-normal">Descripción</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#14281D] py-5">
            <p className="text-[#4B644A] text-sm font-normal leading-normal">Contactenos</p>
            <p className="text-[#0C1811] text-sm font-normal leading-normal">Email: example@example.com</p>
          </div>
        </div>
    </div>
  );
};

export default Home;