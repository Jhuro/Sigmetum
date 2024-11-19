const express = require('express');
const router = express.Router();
const { getMergedDataInS3Folder } = require('../aws/awsS3connect.js');

router.get('/get-merged-data', async (req, res) => {
    try {
        const jsonData = await getMergedDataInS3Folder('usedFiles');
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving file content' });
    }
});

module.exports = router;