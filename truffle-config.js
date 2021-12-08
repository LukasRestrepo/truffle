const path = require("path");

const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = "a9718dbcf53941049cd23a2de2eef408";
const endpointUrl = "https://kovan.infura.io/v3/cadbb59d66f24264a74b8861c1154f57";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777"
    },
    kovan: {
      provider: () => new HDWalletProvider([privateKey], endpointUrl),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    }
  }
};
