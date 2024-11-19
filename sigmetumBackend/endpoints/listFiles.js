const express = require('express');
const router = express.Router();
const { listFilesInS3Folder } = require('../aws/awsS3connect.js');

router.get('/list-files', async (req, res) => {
    try {
        const folderName = 'backupFiles';
        const files = await listFilesInS3Folder(folderName);
        res.json({ files });
    } catch (error) {
        res.status(500).json({ error: 'Error al listar archivos' });
    }
});

module.exports = router;