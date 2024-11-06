import React, { useState } from 'react';
import ButtonAlternative from './ButtonAlternative';
import ButtonPrincipal from './ButtonPrincipal';

const FileUploadForm = () => {
  const [files, setFiles] = useState([]);

  function normalizeFileName(fileName) {

    const lastDotIndex = fileName.lastIndexOf('.');
    const name = fileName.substring(0, lastDotIndex);
    const extension = fileName.substring(lastDotIndex);

    const normalizedFileName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9-_]/g, '');

    return normalizedFileName + extension;
  }

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {

    for (const file of files) {
      if (!file) return;

      const normalizedFileName = normalizeFileName(file.name);
      const formData = new FormData();
      formData.append('file', new File([file], normalizedFileName));

      try {
        const response = await fetch('http://localhost:8000/upload', {
          method: 'POST',
          body: formData,
        });

        console.log(await response.json());
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (

    <>
      <div className="flex flex-col items-center gap-4 p-4 border rounded">
        
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
            <p key={index} className="text-gray-700">{file.name}</p>
          ))}
        </div>
      </div>
      <div className="flex px-4 py-3 justify-center">
          <ButtonPrincipal text="Cargar archivos" onClick={handleSubmit}/>
      </div>
      </>
  );
};

export default FileUploadForm;