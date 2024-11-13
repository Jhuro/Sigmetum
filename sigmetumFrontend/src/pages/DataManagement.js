import React from 'react';
import ButtonAlternative from '../components/ButtonAlternative.js'
import Table from '../components/Table.js'
import FileDropdown from '../components/FileDropdown.js';

const DataManagement = ({onFileDropdownSelect, filteredSpecies}) => {

  const handleFileSelect = (jsonData) => {
    onFileDropdownSelect(jsonData);
};

    return (
      <div className="w-full max-w-screen overflow-hidden px-2">
        <div className="layout-content-container flex flex-col w-full max-w-screen mx-auto">
          <div className="flex w-full flex-wrap justify-between gap-3 py-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h2 className="text-[#15B659] tracking-light text-[32px] font-bold leading-tight">
                Administrar datos
              </h2>
            </div>
          </div>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
            Elegir conjunto de datos
          </h3>
          <div className="flex justify-stretch w-full">
            <label className="flex flex-col w-full min-w-40 py-3 flex-1">
                <FileDropdown onFileSelect={handleFileSelect}/>
            </label>
            <div className="flex gap-3 flex-wrap px-4 py-3 justify-end">
              <ButtonAlternative text="Aplicar cambios" />
            </div>
          </div>
          <div className="flex justify-stretch w-full">
            
          </div>
          <div className="py-3 w-full overflow-hidden">
            <div className="flex w-full max-w-full overflow-hidden">
              <Table data={filteredSpecies}/>
            </div>
          </div>
        </div>
      </div>
    )
};

export default DataManagement;