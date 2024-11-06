const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./endpoints/upload.js');
const listFiles = require('./endpoints/listFiles.js');
const getData = require('./endpoints/getData.js');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use(uploadRoutes);
app.use(listFiles);
app.use(getData);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});