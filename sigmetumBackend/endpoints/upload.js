const express = require('express');
const multer = require('multer');
const { convertExcelToJson } = require('../functions/convertExcelToJson');
const fs = require('fs');
const { uploadFileToS3 } = require('../aws/awsS3connect.js');
const { listFilesInS3Folder } = require('../aws/awsS3connect.js');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

function formatFileName(provincia, extension, version = 1) {
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}_${(date.getMonth() + 1).toString().padStart(2, '0')}_${date.getFullYear()}`;

    return `${provincia}_V${version}_${formattedDate}${extension}`;
}

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../uploads', req.file.filename);
        const jsonData = convertExcelToJson(filePath);

        if (!jsonData || typeof jsonData !== 'object') {
            throw new Error('La conversión a JSON falló. Los datos no son válidos.');
        }

        const provincia = jsonData[0]?.["Provincia"] || "Desconocido";
        const provinciaFolder = `backupFiles/${provincia}`;

        const filesInFolder = await listFilesInS3Folder(provinciaFolder);
        let version = 1;

        filesInFolder.forEach(file => {
            const match = file.name.match(/_V(\d+)_/);
            if (match) {
                const fileVersion = parseInt(match[1]);
                if (fileVersion >= version) {
                    version = fileVersion + 1;
                }
            }
        });

        const backupFileName = formatFileName(provincia, ".json", version);
        const jsonFileName = `${provincia}.json`;

        const jsonString = JSON.stringify(jsonData, null, 2);
        const jsonFilePath = path.join(__dirname, '../uploads', jsonFileName);
        fs.writeFileSync(jsonFilePath, jsonString, 'utf8');
        
        await uploadFileToS3(jsonFileName, jsonFilePath, `usedFiles`);
        await uploadFileToS3(backupFileName, jsonFilePath, provinciaFolder);

        fs.unlink(filePath, (err) => {
            if (err) console.error('Error al borrar el archivo temporal:', err);
        });
        fs.unlink(jsonFilePath, (err) => {
            if (err) console.error('Error al borrar el archivo JSON temporal:', err);
        });

        res.json({ message: 'Archivos subidos con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar el archivo' });
    }
});

module.exports = router;