import React, { useState } from 'react';
import ButtonAlternative from './ButtonAlternative';
import ButtonPrincipal from './ButtonPrincipal';
import DialogAdvice from './DialogAdvice';

const FileUploadForm = ({onLoad}) => {
  const [files, setFiles] = useState([]);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogType, setDialogType] = useState('');

  function normalizeFileName(fileName) {

    const lastDotIndex = fileName.lastIndexOf('.');
    const name = fileName.substring(0, lastDotIndex);
    const extension = fileName.substring(lastDotIndex);

    const normalizedFileName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9-_]/g, '');

    return normalizedFileName + extension;
  }

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const newFiles = selectedFiles.filter(
      (newFile) => !files.some(
        (existingFile) => existingFile.name === newFile.name && existingFile.size === newFile.size
      )
    );
  
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  
    event.target.value = null;
  };

  const handleSubmit = async (e) => {
    onLoad(true);
    let allFilesUploadedSuccessfully = true;

    for (const file of files) {
      if (!file) continue;

      const normalizedFileName = normalizeFileName(file.name);
      const formData = new FormData();
      formData.append('file', new File([file], normalizedFileName));

      try {
        const response = await fetch('http://localhost:8000/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          allFilesUploadedSuccessfully = false;
          setDialogMessage(`Error en la subida: ${result.message || 'Inténtalo de nuevo'}`);
          setDialogType('error');
          setDialogVisible(true);
          break;
        }
      } catch (error) {
        allFilesUploadedSuccessfully = false;
        setDialogMessage('Error al subir un archivo. Revisa tu conexión o inténtalo de nuevo.');
        setDialogType('error');
        setDialogVisible(true);
        setFiles([]);
        break;
      } finally {
        onLoad(false);
      }
    }

    if (allFilesUploadedSuccessfully) {
      setDialogMessage('¡Todos los archivos se subieron con éxito!');
      setDialogType('success');
      setDialogVisible(true);
      setFiles([]);
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setDialogMessage('');
  };

  return (

    <>
      <div className="flex flex-col items-center gap-4 p-4 border border-[#99BBA8] rounded">
        
        <input
          type="file"
          multiple
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleFileSelect}
          className="hidden"
          id="fileInput"
        />
        
        <ButtonAlternative text="Seleccionar archivos" onClick={() => document.getElementById('fileInput').click()}/>
        
        <div className="mt-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between text-gray-700 mb-2">
            <p>{file.name}</p>
            <button
              onClick={() => handleRemoveFile(index)}
              className="text-[#15B659] cursor-pointer"
            >
            <span className="material-symbols-outlined text-3xl mx-auto">
              delete
            </span>
          </button>
          </div>
        ))}
        </div>
      </div>
      <div className="flex px-4 py-3 justify-center">
        {files.length > 0 && (
          <ButtonPrincipal text="Cargar archivos" onClick={handleSubmit} />
        )}
          
        {dialogVisible && (
          <DialogAdvice 
          dialogTitle={`${dialogType === 'success' ? 'Éxito' : 'Error'}`}
          dialogMessage={dialogMessage} 
          onClose={closeDialog}/>
        )}
      </div>
      </>
  );
};

export default FileUploadForm;