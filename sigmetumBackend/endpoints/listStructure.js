const express = require('express');
const router = express.Router();
const { listFilesWithHierarchy } = require('../aws/awsS3connect.js');

router.get('/list-files-structured', async (req, res) => {
    (async () => {
        try {
            const result = await listFilesWithHierarchy('backupFiles');
            console.log(result);
        } catch (error) {
            console.error("Error:", error);
        }
    })();
});

module.exports = router;