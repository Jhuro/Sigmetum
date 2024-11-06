const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const fs = require('fs');
const { uploadFileToS3 } = require('../aws/awsS3connect.js');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const convertExcelToJson = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    return XLSX.utils.sheet_to_json(worksheet);
};

function formatFileName(originalName) {
    let cleanName = originalName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}_${(date.getMonth() + 1).toString().padStart(2, '0')}_${date.getFullYear()}_${date.getHours().toString().padStart(2, '0')}_${date.getMinutes().toString().padStart(2, '0')}_${date.getSeconds().toString().padStart(2, '0')}`;
    
    const ext = path.extname(originalName);

    return `${path.basename(cleanName, ext)}_${formattedDate}${ext}`;
}

router.post('/upload', upload.single('file'), async (req, res) => {
    try {

        console.log(path.parse(req.file.originalname).name);

        const filePath = path.join(__dirname, '../uploads', req.file.filename);
        const jsonData = convertExcelToJson(filePath);

        if (!jsonData || typeof jsonData !== 'object') {
            throw new Error('La conversión a JSON falló. Los datos no son válidos.');
        }

        const jsonFileName = `${formatFileName(path.parse(req.file.originalname).name)}.json`;
        const jsonString = JSON.stringify(jsonData, null, 2);
        const jsonFilePath = path.join(__dirname, '../uploads', jsonFileName);
        
        fs.writeFileSync(jsonFilePath, jsonString, 'utf8');
        
        await uploadFileToS3(jsonFileName, jsonFilePath, 'jsonFiles');
        await uploadFileToS3(req.file.originalname, filePath,'xlsxFiles');

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error al borrar el archivo temporal:', err);
            } else {
                console.log('Archivo temporal borrado correctamente');
            }
        });

        fs.unlink(jsonFilePath, (err) => {
            if (err) {
                console.error('Error al borrar el archivo temporal:', err);
            } else {
                console.log('Archivo temporal borrado correctamente');
            }
        });

        res.json({ 
            message: 'Archivos subidos con éxito'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error processing file' });
    }
});

module.exports = router;