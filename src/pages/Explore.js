import React from 'react';
import Filter from '../components/Filter.js';
import SpeciesCard from '../components/SpeciesCard.js';
import MainSearcher from '../components/SearchBar.js';
import SpeciesData from '../test/TestData.js';

const Explore = () => {
  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <h2 className="text-[#111813] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filtros</h2>
            <div className="flex px-4 py-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-gray-200 text-black text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Limpiar todo</span>
              </button>
            </div>
            <div className="flex px-4 py-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#14b83a] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Aplicar todo</span>
              </button>
            </div>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
          </div>
          
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <MainSearcher/>
            <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {SpeciesData.map((species, index) => (
                <SpeciesCard
                  key={index}
                  image={species.image}
                  usualName={species.usualName}
                  scientificName={species.scientificName}
                />
              ))}
            </div>
          </div>
        </div>
  );
};

export default Explore;