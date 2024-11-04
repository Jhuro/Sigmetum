import React, { useState } from 'react';
import ButtonAlternative from './ButtonAlternative';

const FileUploadForm = () => {
  const [files, setFiles] = useState([]);

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  return (
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
  );
};

export default FileUploadForm;