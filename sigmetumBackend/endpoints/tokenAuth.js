const express = require('express');
const router = express.Router();
const { tokenAuth } = require('../functions/tokenAuthentication');


router.get('/auth', tokenAuth, (req, res) => {
    res.json({ message: 'Bienvenido a la sección de administración' });
});

module.exports = router;