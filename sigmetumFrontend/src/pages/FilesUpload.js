import {React, useState} from 'react';
import FileUpload from '../components/FileUpload.js';
import LoadSpinner from '../components/LoadSpinner.js';
import useTokenExpirationHandler from '../utilities/TokenExpiration.js';

const FilesUpload = () => {
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(false);
  useTokenExpirationHandler(token);

  const handleOnLoad = (state) => {
    setIsLoading(state);
  }

    return (
      <div className="bg-[#F9FBFA] min-h-screen layout-container flex h-full grow flex-col px-2">
        <div className="flex w-full flex-wrap justify-between gap-3 py-4">
          <div className="flex min-w-72 flex-col gap-3">
            <h2 className="text-[#15B659] tracking-light text-[32px] font-bold leading-tight">
              Cargar archivos
            </h2>
          </div>
        </div>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-col p-4">
              <FileUpload onLoad={handleOnLoad}/>
            </div>
          </div>
        </div>
        {isLoading && (<LoadSpinner/>)}
      </div>
    );
};

export default FilesUpload;