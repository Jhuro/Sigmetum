const express = require('express');
const router = express.Router();
const { getFileFromS3 } = require('../aws/awsS3connect.js');

router.get('/get-data/:fileName', async (req, res) => {
    try {
        const fileName = req.params.fileName;
        console.log(fileName);
        const jsonData = await getFileFromS3(fileName, "jsonFiles");
        res.json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving file content' });
    }
});

module.exports = router;