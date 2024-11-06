import React, { useState } from 'react';
import ButtonPrincipal from '../components/ButtonPrincipal.js'
import ButtonAlternative from '../components/ButtonAlternative.js'
import Table from '../components/Table.js'
import FileDropdown from '../components/FileDropdown.js';
import FilterSearchBar from '../components/FilterSearchBar.js';

const DataManagement = () => {

  const [data, setData] = useState([]);

  const handleFileSelect = (jsonData) => {
    setData(jsonData);
};
    return (
      <div className="w-full max-w-screen overflow-hidden px-2">
        <div className="layout-content-container flex flex-col w-full max-w-screen mx-auto">
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
          <label className="flex flex-col w-full min-w-40 flex-1">
              <FileDropdown onFileSelect={handleFileSelect}/>
          </label>
          <div className="flex justify-stretch w-full">
          <div className="flex w-full gap-3 flex-wrap py-3">
            <FilterSearchBar placeholderText="Buscar"/>
          </div>
            <div className="flex w-full gap-3 flex-wrap px-4 py-3 justify-end">
              <ButtonAlternative text="Aplicar cambios" />
              <ButtonPrincipal text="Ordenar A-Z" dropdownOptions={["Ordenar A-Z", "Ordenar Z-A"]} />
            </div>
          </div>
          <div className="px-4 py-3 w-full overflow-hidden">
            <div className="flex w-full max-w-full overflow-hidden rounded-xl border border-[#dce0e5] bg-[#F9FBFA]">
              <Table data={data}/>
            </div>
          </div>
        </div>
      </div>
    )
};

export default DataManagement;