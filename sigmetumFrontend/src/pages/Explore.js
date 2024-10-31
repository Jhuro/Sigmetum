import React, { useState } from 'react';
import Filter from '../components/Filter.js';
import SpeciesCard from '../components/SpeciesCard.js';
import SpeciesData from '../test/TestData.js';
import ButtonPrincipal from '../components/ButtonPrincipal.js';
import { downloadCSV } from '../utilities/CSVfunctions.js';

const Explore = () => {

  const [filteredSpecies, setFilteredSpecies] = useState(SpeciesData);

  const handleFilterChange = (filteredData) => {
    setFilteredSpecies((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(filteredData)) {
        return filteredData;
      }
      return prev;
    });
  };

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <h2 className="text-[#0C1811] sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filtros</h2>
            <Filter data={SpeciesData} onFilterChange={handleFilterChange}/>
          </div>

          <div className="layout-content-container flex flex-col flex-1 whitespace-nowrap">
            <div className="flex items-center gap-4">
              <ButtonPrincipal onClick={() => downloadCSV(filteredSpecies)} text='Descargar CSV'/>
              <ButtonPrincipal text='Ordenar A-Z'/>
            </div>
            <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-4">
              {filteredSpecies.map((species, index) => (
                <SpeciesCard key={index} species={species} />
              ))}
            </div>
          </div>
        </div>
  );
};

export default Explore;