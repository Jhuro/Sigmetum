import React from 'react';
import UploadButton from '../components/UploadButton.js';

const DataManagement = () => {
    return (
      <div className="bg-[#F9FBFA] layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Subir un archivo</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Seleccionar un archivo</p>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dce0e5] px-6 py-14">
                <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Seleccionar un archivo</p>
                <UploadButton/>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Cargar archivo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DataManagement;