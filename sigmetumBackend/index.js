const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./endpoints/upload.js');
const listFiles = require('./endpoints/listFiles.js');
const getData = require('./endpoints/getData.js');
const login = require('./endpoints/login.js');
const auth = require('./endpoints/tokenAuth.js');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use(uploadRoutes);
app.use(listFiles);
app.use(getData);
app.use(login);
app.use(auth);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});