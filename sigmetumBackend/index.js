const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./endpoints/upload.js');
const updateFile = require('./endpoints/updateFile.js');
const listFiles = require('./endpoints/listFiles.js');
const getData = require('./endpoints/getMergedData.js');
const deleteFile = require('./endpoints/deleteFile.js');
const getMergedData = require('./endpoints/getData.js');
const login = require('./endpoints/login.js');
const auth = require('./endpoints/tokenAuth.js');
const sendMail = require('./endpoints/sendMail.js');

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/healthcheck", (req, res) => {
    res.status(200).send("ok");
})

app.use(cors());
app.use(express.json());

app.use(sendMail);
app.use(deleteFile);
app.use(updateFile);
app.use(uploadRoutes);
app.use(listFiles);
app.use(getData);
app.use(login);
app.use(auth);
app.use(getMergedData);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});