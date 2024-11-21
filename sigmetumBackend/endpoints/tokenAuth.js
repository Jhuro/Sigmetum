const express = require('express');
const router = express.Router();
const { tokenAuth } = require('../functions/tokenAuthentication');


router.get('/auth', tokenAuth, (req, res) => {
    res.status(200).send("Usuario autorizado");
});

module.exports = router;