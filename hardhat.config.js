require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const environment = require('./env')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${environment.alchemyAPIKey}`,
      accounts: [environment.deployerPK]
    }
  },
  etherscan: {
    apiKey: environment.etherscanAPIKey
  }
};
