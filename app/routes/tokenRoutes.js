const express = require('express');
const {getBalance, getInfo} = require('../controllers/tokenController');
const validateAddress = require('../utils/validateAddress');

const router = express.Router();

router.get('/balance/:address', validateAddress, getBalance);
router.get('/info', getInfo);

module.exports = router;
