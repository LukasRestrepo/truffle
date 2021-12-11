import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";

const options = {
  web3: {
    block: false,
    //customProvider: new Web3("ws://localhost:8545"),
    customProvider: new Web3(Web3.givenProvider),
  },
  // contracts: [SimpleStorage, ComplexStorage, TutorialToken],
  contracts: [SimpleStorage],
  syncAlways: false,
  events: {
    SimpleStorage: ["StorageSet"],
  }
};

export default options;
