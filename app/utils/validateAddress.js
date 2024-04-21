const Web3 = require('web3');

function validateAddress(req, res, next) {
    const {address} = req.params;
    if (!Web3.utils.isAddress(address)) {
        return res.status(400).json({error: 'Invalid Ethereum address'});
    }
    next();
}

module.exports = validateAddress;
