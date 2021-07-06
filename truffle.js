// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider');
const NETWORK_ID = '1001';
const GASLIMIT = '20000000';
const URL = 'https://api.baobab.klaytn.net:8651';
const PRIVATE_KEY = '0x1064f60d6fc1fc5867aa97d8a724229f5a6820ed2d78db137808a66862e57fa0';

module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null
    }
  }
}