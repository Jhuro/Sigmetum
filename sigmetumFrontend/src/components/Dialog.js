import React from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal.js';
import SpeciesAttribute from '../components/SpeciesAttribute.js';

const Dialog = ({ isOpen, onClose, species}) => {
  if (!isOpen) return null;

  const formattedQuery = encodeURIComponent(species.characteristicSpecies);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C1811] bg-opacity-70">
      <div className="bg-[#F9FBFA] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-center px-4 py-2 mx-auto">
          <h2 className="text-[#4B644A] text-4xl mb-4 italic font-bold">{species.characteristicSpecies}</h2>
        </div>
        <div
          className="bg-center bg-no-repeat bg-cover h-80 w-full"
          style={{
            backgroundImage: 'url("' + species.image + '")'
          }}
        ></div>
        <div className="p-4 grid grid-cols-2">
          <SpeciesAttribute title='Provincia' description={species.province}/>
          <SpeciesAttribute title='Municipio' description={species.municipality}/>
          <SpeciesAttribute title='Altitud media' description={species.averageAltitude}/>
          <SpeciesAttribute title='Sector biogeográfico' description={species.biogeographicSector}/>
          <SpeciesAttribute title='Piso bioclimático' description={species.bioclimaticFloor}/>
          <SpeciesAttribute title='Ombrotipo' description={species.ombrotype}/>
          <SpeciesAttribute title='Serie del sustrato' description={species.natureOfSubstrate}/>
          <SpeciesAttribute title='Tipo de serie' description={species.serieType}/>
          <SpeciesAttribute title='Serie de vegetación' description={species.vegetationSeries}/>
          <SpeciesAttribute title='Vegetación potencial' description={species.potentialVegetation}/>
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
        <div className="flex justify-center px-4 py-2 mx-auto">
          <ButtonPrincipal onClick={onClose} text='Cerrar'/>
        </div>
      </div>
    </div>
  );
};

export default Dialog;