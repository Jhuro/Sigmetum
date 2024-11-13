const express = require('express');
const router = express.Router();
const { userAuth } = require('../functions/userAuthentication');

router.post('/log', userAuth);

module.exports = router;