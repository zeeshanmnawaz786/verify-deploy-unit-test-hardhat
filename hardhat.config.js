require("@nomicfoundation/hardhat-toolbox");

const privateKey = "private key"; // my wallet private key sepolia testnework

const INFURA_API_KEY_SEPOLIA = "infura key"; //Infura apikey

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY_SEPOLIA}`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.19",
  },
  etherscan: {
    apiKey: "etherscan api key",
  },
};
