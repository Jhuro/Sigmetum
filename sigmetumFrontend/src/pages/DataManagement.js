import React from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal.js'
import ButtonAlternative from '../components/ButtonAlternative.js'
import Table from '../components/Table.js'
import SpeciesData from '../test/TestData.js';

const DataManagement = () => {

    return (
      <div className="w-full max-w-screen overflow-hidden px-2">
        <div className="layout-content-container flex flex-col w-full max-w-screen-lg mx-auto">
          <div className="flex w-full flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                Administrar datos
              </p>
            </div>
          </div>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Elegir conjunto de datos
          </h3>
          
          <div className="flex justify-stretch w-full">
            <div className="flex w-full gap-3 flex-wrap px-4 py-3 justify-end">
              <label className="flex flex-col w-full min-w-40 flex-1">
                <select
                  className="form-input w-full flex resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Elegir conjunto de datos</option>
                  <option value="two">Data_3_11_2024.csv</option>
                  <option value="three">Data_4_11_2024.csv</option>
                </select>
              </label>
              <ButtonAlternative text="Aplicar cambios" />
              <ButtonPrincipal text="Ordenar A-Z" dropdownOptions={["Ordenar A-Z", "Ordenar Z-A"]} />
            </div>
          </div>
          <div className="px-4 py-3 w-full overflow-hidden">
            <div className="flex w-full max-w-full overflow-hidden rounded-xl border border-[#dce0e5] bg-[#F9FBFA]">
              <Table data={SpeciesData}/>
            </div>
          </div>
        </div>
      </div>
    )
};

export default DataManagement;