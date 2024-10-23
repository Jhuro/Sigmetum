import React from 'react';

const Home = () => {
  return (
    <div>
        <div className="@container">
          <div
             className="flex min-h-screen w-full flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 items-start justify-end px-4 pb-20 md:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://papers.co/wallpaper/papers.co-au35-nature-sunset-simple-minimal-illustration-art-red-29-wallpaper.jpg")`
            }}
          >
              <div className="flex flex-col gap-5 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                  Sigmetum - Explora la biodiversidad por regiones
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal sm:text-2xl sm:font-normal sm:leading-normal">
                Descubre y visualiza la riqueza de la vegetación y las especies en diversas zonas geográficas, explorando la biodiversidad de nuestro planeta de manera interactiva
                </h2>
              </div>
              <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] sm:h-16">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#648778] flex border border-[#dce5e1] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                  id="buscar"
                    placeholder="¿Qué especie desea buscar?"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111715] focus:outline-0 focus:ring-0 border border-[#dce5e1] bg-white focus:border-[#dce5e1] h-full placeholder:text-[#648778] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal"
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dce5e1] bg-white pr-[7px]">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#1dd384] text-[#111715] text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em]"
                    >
                      <span className="truncate">Buscar</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
        </div>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dce5e1] py-5">
            <p className="text-[#648778] text-sm font-normal leading-normal">Sobre nosotros</p>
            <p className="text-[#111715] text-sm font-normal leading-normal">Descripción</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dce5e1] py-5">
            <p className="text-[#648778] text-sm font-normal leading-normal">Contactenos</p>
            <p className="text-[#111715] text-sm font-normal leading-normal">Email: example@example.com</p>
          </div>
        </div>
    </div>
  );
};

export default Home;