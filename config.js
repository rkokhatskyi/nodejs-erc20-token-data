require('dotenv').config();

module.exports = {
    rpcUrl: process.env.RPC_URL || 'wss://ethereum-rpc.publicnode.com',
    tokenAddress: process.env.TOKEN_ADDRESS || '0xdac17f958d2ee523a2206206994597c13d831ec7'
};
