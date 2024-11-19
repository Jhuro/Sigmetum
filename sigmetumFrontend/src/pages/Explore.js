import React, { useEffect, useState } from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal';
import SpeciesCard from '../components/SpeciesCard';
import { downloadXLSX } from '../utilities/CSVfunctions';

const Explore = ({ data, filteredSpecies }) => {
  const [uniqueSpecies, setUniqueSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    const speciesArray = filteredSpecies
      .map((item) => item['Especies Características'])
      .flat();
    const uniqueSpeciesSet = new Set(speciesArray);
    setUniqueSpecies([...uniqueSpeciesSet]);
  }, [filteredSpecies]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = uniqueSpecies.slice(indexOfFirstItem, indexOfLastItem);


  const totalPages = Math.ceil(uniqueSpecies.length / itemsPerPage);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      {filteredSpecies.length === 0 ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <p className="text-[#0C1811] text-lg font-semibold">
            No hay datos disponibles.
          </p>
        </div>
      ) : (
        <div className="min-h-screen gap-1 px-6 flex flex-1 py-5">
          <div className="layout-content-container flex flex-col flex-1 whitespace-nowrap">
            <div className="flex items-center gap-4 px-4">
              <ButtonPrincipal
                onClick={() => {
                  downloadXLSX(filteredSpecies);
                }}
                text="Descargar Excel"
              />
            </div>
            <div className="grid gap-4 px-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4">
              {currentItems.map((species, index) => (
                <SpeciesCard
                  key={index}
                  data={data}
                  species={{ ...filteredSpecies, 'Especies Características': species }}
                />
              ))}
            </div>
            <div className="flex justify-center items-center mt-4">
            <ButtonPrincipal
                className="disabled:opacity-90"
                text="Anterior"
                onClick={() => handlePageChange('prev')}
                disabled={currentPage === 1}
              />
              <span className="text-[#0C1811] text-lg font-semibold mx-2">
                Página {currentPage} de {totalPages}
              </span>
              <ButtonPrincipal
                className="disabled:opacity-50"
                text="Siguiente"
                onClick={() => handlePageChange('next')}
                disabled={currentPage === totalPages}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Explore;