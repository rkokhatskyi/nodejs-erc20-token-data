const { getBalance, getTokenInfo } = require('../services/blockchainService');

exports.getBalance = async (req, res, next) => {
    try {
        const { address } = req.params;
        const balance = await getBalance(address);
        res.json({
            balance: balance.toString()
        }); // Converting BigInt to string here for serialization
    } catch (error) {
        next(error); // Pass errors to centralized error handling
    }
};

exports.getInfo = async (req, res, next) => {
    try {
        const info = await getTokenInfo();
        const serializedInfo = Object.fromEntries(
            Object.entries(info).map(([key, value]) => [key, value.toString()]) // Ensure all values are strings
        );
        res.json(serializedInfo);
    } catch (error) {
        next(error);
    }
};
