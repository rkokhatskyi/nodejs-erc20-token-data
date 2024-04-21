# Ethereum Token Data API

This project provides a simple API to fetch data from ERC-20 tokens on the Ethereum blockchain using Node.js, Express, and Web3.js. It offers endpoints to retrieve a token's balance, name, symbol, decimals, and total supply.

## Features

- Fetch balance for a given Ethereum address.
- Get token name, symbol, and decimals
- Error handling and address validation.

## Prerequisites

You need to have the following installed to run this application:
- Node.js (version 14.x or later recommended)
- npm (or Yarn as an alternative)
- Optionally set your own Ethereum node (e.g., via Infura, Alchemy) - default one provided


## Installation

To get started with this project, clone the repository to your local machine and install the required dependencies.

<br>

Clone repository
```bash
https://github.com/rkokhatskyi/nodejs-erc20-token-data.git
```
<br>

Navigate to the cloned directory
```bash
cd nodejs-erc20-token-data
```

<br>

Install dependencies
```bash
npm install
```

## Optional Configuration

#### RPC node

If you want to use your own node, create `.env` file in the root directory of your project and specify your Ethereum node URL:

```
RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

List of nodes can be fetched from [ChainList](https://chainlist.org/?search=Ethereum+Mainnet)

#### Token address

To modify token address add an entry in your `.env` file with the desired address: 

```
TOKEN_ADDRESS=0xdac17f958d2ee523a2206206994597c13d831ec7
```

## Running the Application

Start the server using the following command:

```bash
npm start
```

or using yarn: 

```bash
yarn start
```

This will launch the server http://localhost:3000


## API Endpoints

### Get Token Balance

#### Request - GET /api/token/balance/{address} 

> Fetches the balance of the specified Ethereum address for the token in wei.

Example:

```bash
curl -X GET http://localhost:3000/api/token/balance/0xdac17f958d2ee523a2206206994597c13d831ec7
```

#### Response sample

```json
{
  "balance":"826245378952"
}
```

**Note:** balance returned in Wei, if you need the balance normalized to Ether you can use some external services like https://www.eth-to-wei.com/ 



### Get Token Info
#### Request - GET /api/token/info

> Retrieves the token's name, symbol and decimals (Tether USDT is used by default)

Example:

```bash
curl -X GET http://localhost:3000/api/token/info
```

#### Response sample

```json
{
  "name":"Tether USD",
  "symbol":"USDT",
  "decimals":"6"
}
```