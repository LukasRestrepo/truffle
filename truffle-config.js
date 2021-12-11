const path = require("path");

const fs = require('fs');
const secrets = JSON.parse(fs.readFileSync(path.join(__dirname, '.secrets.json')).toString().trim());

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    kovan: {
      provider: () => new HDWalletProvider({
        mnemonic: { phrase: secrets.mnemonic },
        providerOrUrl: `https://kovan.infura.io/v3/${secrets.projectId}`
      }),
      gas: 4712388,
      gasPrice: 100000000000,
      network_id: 42
    }
  }
}