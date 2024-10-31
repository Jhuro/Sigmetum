import React, { useState } from 'react';

const UploadButton = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const validFileTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
                               'application/vnd.ms-excel'];

      if (validFileTypes.includes(fileType)) {
        setFile(selectedFile);
      } else {
        alert('Por favor, sube un archivo Excel válido.');
      }
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log('Archivo a subir:', file);
    } else {
      alert('Por favor, selecciona un archivo antes de subir.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded"
      >
        Buscar archivo
      </button>
    </div>
  );
};

export default UploadButton;