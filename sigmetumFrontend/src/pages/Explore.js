import React from 'react';
import SpeciesCard from '../components/SpeciesCard.js';
import ButtonPrincipal from '../components/ButtonPrincipal.js';
import { downloadCSV } from '../utilities/CSVfunctions.js';

const Explore = ({filteredSpecies}) => {

  return (
    <div className="min-h-screen gap-1 px-6 flex flex-1 py-5">


      <div className="layout-content-container flex flex-col flex-1 whitespace-nowrap">
        <div className="flex items-center gap-4 px-4">
          <ButtonPrincipal onClick={() => downloadCSV(filteredSpecies)} text='Descargar CSV'/>

        </div>
        <div className="grid gap-4 px-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {filteredSpecies.map((species, index) => (
            <SpeciesCard key={index} species={species} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;