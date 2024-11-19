import React from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal.js';
import SpeciesAttribute from '../components/SpeciesAttribute.js';

const Dialog = ({ isOpen, onClose, data, species}) => {
  if (!isOpen) return null;

  const formattedQuery = encodeURIComponent(species["Especies Características"]);

  const fileterdEspecies = data.filter((item) =>
    item["Especies Características"].includes(species["Especies Características"])
  );

  const uniqueAttributes = {
    province: [...new Set(fileterdEspecies.map((item) => item["Provincia"]))].join(', '),
    municipality: [...new Set(fileterdEspecies.map((item) => item["Municipio"]))].join(', '),
    averageAltitude: [...new Set(fileterdEspecies.map((item) => item["Altitud Media"]))].join(', '),
    biogeographicSector: [...new Set(fileterdEspecies.map((item) => item["Sector Biogeográfico"]))].join(', '),
    bioclimaticFloor: [...new Set(fileterdEspecies.map((item) => item["Piso Bioclimático"]))].join(', '),
    ombrotype: [...new Set(fileterdEspecies.map((item) => item["Ombrotipo"]))].join(', '),
    natureOfSubstrate: [...new Set(fileterdEspecies.map((item) => item["Naturaleza del Sustrato"]))].join(', '),
    serieType: [...new Set(fileterdEspecies.map((item) => item["Tipo de Serie"]))].join(', '),
    vegetationSeries: [...new Set(fileterdEspecies.map((item) => item["Serie de Vegetación"]))].join(', '),
    potentialVegetation: [...new Set(fileterdEspecies.map((item) => item["Vegetación Potencial"]))].join(', '),
  };

  return (
  <div className="fixed inset-0 z-50 flex overflow-auto items-center justify-center bg-[#0C1811] bg-opacity-70">
    <div className="bg-[#F9FBFA] max-h-screen overflow-auto rounded-lg p-6 w-full max-w-md flex flex-col">
      <div className="flex justify-center px-4 py-2 mx-auto w-full">
        <h2 className="text-[#4B644A] text-4xl mb-4 italic font-bold text-center break-words whitespace-normal">
          {species["Especies Características"]}
        </h2>
      </div>
      
      {species.image ?
        (
        <div
          className="bg-center bg-no-repeat bg-cover h-80 w-full mb-4"
          style={{
            backgroundImage: 'url("' + species.image + '")'
          }}
        ></div>
        ) : (
          <div className="bg-center bg-no-repeat bg-cover h-80 w-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <rect width="64" height="64" fill="#B5E4A5" rx="10" />
              <path
                d="M32 44c6.627 0 12-5.373 12-12S38.627 20 32 20s-12 5.373-12 12 5.373 12 12 12z"
                fill="#4CAF50"
              />
              <path
                d="M32 44V18M36 22s6 2 6 10c0 6-6 10-6 10M28 22s-6 2-6 10c0 6 6 10 6 10"
                stroke="#2E7D32"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )
      }

      <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto flex-grow">
        <SpeciesAttribute title="Provincia" description={uniqueAttributes.province} />
        <SpeciesAttribute title="Municipio" description={uniqueAttributes.municipality} />
        <SpeciesAttribute title="Altitud media" description={uniqueAttributes.averageAltitude} />
        <SpeciesAttribute title="Sector biogeográfico" description={uniqueAttributes.biogeographicSector} />
        <SpeciesAttribute title="Piso bioclimático" description={uniqueAttributes.bioclimaticFloor} />
        <SpeciesAttribute title="Ombrotipo" description={uniqueAttributes.ombrotype} />
        <SpeciesAttribute title="Serie del sustrato" description={uniqueAttributes.natureOfSubstrate} />
        <SpeciesAttribute title="Tipo de serie" description={uniqueAttributes.serieType} />
        <SpeciesAttribute title="Serie de vegetación" description={uniqueAttributes.vegetationSeries} />
        <SpeciesAttribute title="Vegetación potencial" description={uniqueAttributes.potentialVegetation} />
      </div>

      <div className="flex justify-center px-4 py-2 mx-auto">
        <a
          href={`https://www.ipni.org/?q=${formattedQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0C1811] font-bold hover:underline"
        >
          Leer más
        </a>
      </div>

      <div className="flex justify-center px-4 py-2 mx-auto mt-4">
        <ButtonPrincipal onClick={onClose} text="Cerrar" />
      </div>
    </div>
  </div>
  );
};

export default Dialog;