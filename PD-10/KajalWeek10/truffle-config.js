const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = "proud waste okay ostrich chunk loop arena actress either embrace sustain observe";
const infuraKey = "b1d9c048902b47a6af683d4d1e0ff389";

module.exports = {
	compilers: {
		solc: {
			version: "^0.6"
		}
	},

  networks: {
    //development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    //},
	
	rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/b1d9c048902b47a6af683d4d1e0ff389'),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
};