const {Web3} = require('web3');
const config = require('../../config');

const web3 = new Web3(config.rpcUrl);
const tokenContract = new web3.eth.Contract(require('../utils/tokenAbi.json'), config.tokenAddress);

module.exports = {
    getBalance: async (address) => tokenContract.methods.balanceOf(address).call(),
    getTokenInfo: async () => {
        const name = await tokenContract.methods.name().call();
        const symbol = await tokenContract.methods.symbol().call();
        const decimals = await tokenContract.methods.decimals().call();
        return {name, symbol, decimals};
    }
};
