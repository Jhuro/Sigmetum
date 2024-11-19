import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { FormatFileName } from '../utilities/FormatFileName.js';

const FileDropdown = forwardRef(({ onLoad, onFileSelect, selectedFile }, ref) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const response = await fetch('http://localhost:8000/list-files');
            const data = await response.json();
            setFiles(data.files);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    const handleChange = async (event) => {
        onLoad(true);
        const selectedFileName = event.target.value;

        if (selectedFileName && files.some(file => file.key === selectedFileName)) {
            try {
                const response = await fetch(`http://localhost:8000/get-data/${selectedFileName}`);
                const jsonData = await response.json();
                onFileSelect(jsonData, selectedFileName);
            } catch (error) {
                console.error('Error fetching file data:', error);
            } finally {
                onLoad(false);
            }
        } else {
            onFileSelect([], null);
            onLoad(false);
        }
    };

    useImperativeHandle(ref, () => ({
        fetchFiles,
    }));

    useEffect(() => {
        if (selectedFile && !files.some(file => file.key === selectedFile)) {
            onFileSelect([], null);
        }
    }, [files, selectedFile, onFileSelect]);

    return (
        <select
            className="form-input bg-[#F9FBFA] w-full resize-none rounded-xl text-[#111418] focus:outline-0 border border-[#15B659] h-14 p-[15px] text-base"
            value={selectedFile || ""}
            onChange={handleChange}>
            <option value="">Elegir conjunto de datos</option>
            {files.map((file, index) => (
                <option key={index} value={file.key}>
                    {FormatFileName(file.name)}
                </option>
            ))}
        </select>
    );
});

export default FileDropdown;