import React, { useEffect, useState } from 'react';

const FileDropdown = ({ onFileSelect }) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('http://localhost:8000/list-files');
                const data = await response.json();
                setFiles(data.files);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };
        
        fetchFiles();
    }, []);

    const handleChange = async (event) => {
        const selectedFileName = event.target.value;
        if (selectedFileName) {
            try {
                const response = await fetch(`http://localhost:8000/get-data/${selectedFileName}`);
                const jsonData = await response.json();
                onFileSelect(jsonData);
            } catch (error) {
                console.error('Error fetching file data:', error);
            }
        }
    };

    return (
        <select 
        className="form-input bg-[#F9FBFA] w-full flex resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#15B659] focus:border-[#15B659] h-14 placeholder:text-[#0C1811] p-[15px] text-base font-normal leading-normal"
        onChange={handleChange}>
            <option value="">Elegir conjunto de datos</option>
            {files.map((file, index) => (
                <option key={index} value={file.name}>{file.name}</option>
            ))}
        </select>
    );
};

export default FileDropdown;