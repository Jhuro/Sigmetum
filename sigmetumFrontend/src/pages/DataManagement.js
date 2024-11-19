import { React, useState, useRef } from 'react';
import ButtonAlternative from '../components/ButtonAlternative.js'
import Table from '../components/Table.js'
import FileDropdown from '../components/FileDropdown.js';
import LoadSpinner from '../components/LoadSpinner.js';
import { downloadXLSX } from '../utilities/CSVfunctions.js';
import DialogAdvice from '../components/DialogAdvice';
import useTokenExpirationHandler from '../utilities/TokenExpiration.js';

const DataManagement = ({onFileDropdownSelect, filteredSpecies}) => {
  
  const [fileName, setFileName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const fileDropdownRef = useRef(null);
  const token = localStorage.getItem('token');

  useTokenExpirationHandler(token);

  const handleFileSelect = (jsonData, fileName) => {
    onFileDropdownSelect(jsonData);
    setFileName(fileName);
  };

  const resetDropdown = () => {
    onFileDropdownSelect([]);
    setFileName(null);
    if (fileDropdownRef.current) {
      fileDropdownRef.current.fetchFiles();
    }
  };

  const handleFileDelete = async () => {
    try {
      const response = await fetch('http://localhost:8000/delete-file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName }),
    });

      if (!response.ok) {
        setDialogMessage('Error al eliminar datos. Revisa tu conexión o inténtalo de nuevo.');
        setDialogType('error');
        setDialogVisible(true);
      }

      setDialogMessage('Datos eliminados correctamente.');
      setDialogType('success');
      setDialogVisible(true);
      resetDropdown();

    } catch (error) {
      setDialogMessage('Error al eliminar datos. Revisa tu conexión o inténtalo de nuevo.');
      setDialogType('error');
      setDialogVisible(true);
    }
  };

  const handleOnLoad = (state) => {
    setIsLoading(state);
  }

  const handleFileUpdate = async () => {

    try {
      const response = await fetch('http://localhost:8000/update-file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName }),
    });

      if (!response.ok) {
        setDialogMessage('Error al actualizar los datos. Revisa tu conexión o inténtalo de nuevo.');
      setDialogType('error');
      setDialogVisible(true);
      }

      if (fileDropdownRef.current) {
        fileDropdownRef.current.fetchFiles();
      }

      setDialogMessage('Datos atualizados correctamente.');
      setDialogType('success');
      setDialogVisible(true);

    } catch (error) {
      setDialogMessage('Error al actualizar los datos. Revisa tu conexión o inténtalo de nuevo.');
      setDialogType('error');
      setDialogVisible(true);
    }
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setDialogMessage('');
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
                <FileDropdown ref={fileDropdownRef} onLoad={handleOnLoad} onFileSelect={handleFileSelect} selectedFile={fileName}/>
            </label>
            {fileName && fileName !== "" && (
            <>
              <div className="flex gap-3 flex-wrap px-3 py-3 justify-end">
                <ButtonAlternative onClick={() => {downloadXLSX(filteredSpecies)}} text="Descargar excel" />
              </div>
              <div className="flex gap-3 flex-wrap px-3 py-3 justify-end">
                <ButtonAlternative onClick={handleFileDelete} text="Eliminar datos" />
              </div>
              <div className="flex gap-3 flex-wrap px-3 py-3 justify-end">
                <ButtonAlternative onClick={handleFileUpdate} text="Restablecer versión" />
              </div>
            </>
            )}
          </div>
          <div className="py-3 w-full overflow-hidden">
          {isLoading ?
            (
              <div className="flex bg-[#F9FBFA] justify-center items-center min-h-screen">
                <LoadSpinner />
              </div>
            ) : (
            <div className="flex w-full max-w-full overflow-hidden">
              <Table data={filteredSpecies}/>
            </div>
            )
          }
          </div>
        </div>
        {dialogVisible && (
          <DialogAdvice 
          dialogTitle={`${dialogType === 'success' ? 'Éxito' : 'Error'}`}
          dialogMessage={dialogMessage} 
          onClose={closeDialog}/>
        )}
      </div>
    )
};

export default DataManagement;