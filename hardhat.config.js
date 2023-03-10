// require("./hardhat-harbor.js");
require("@nomiclabs/hardhat-ethers");
// require("hardhat-deploy");

require("harbor-hardhat-deploy");
// require("harbor-hardhat-anvil");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  namedAccounts: {
    deployer: 0,
  },
  // defaultNetwork: "anvil",

  networks: {
    hardhat: {
		loggingEnabled: true,
		saveDeployments: true,
		allowUnlimitedContractSize: true,
    },
    harbor: {
      url: "http://3.81.89.209:4002",
      saveDeployments: true,
      loggingEnabled: true,
      allowUnlimitedContractSize: true,

    },
    harbor1: {
      url: "http://54.88.59.205:4001",
      saveDeployments: true,
      loggingEnabled: true,
      allowUnlimitedContractSize: true,

    },
    harbor2: {
      url: "http://54.88.59.205:4002",
      saveDeployments: true,
      loggingEnabled: true,
      allowUnlimitedContractSize: true,

    },
    harbor3: {
      url: "http://54.88.59.205:4003",
      saveDeployments: true,
      loggingEnabled: true,
      allowUnlimitedContractSize: true,

    },
    harbor4: {
      url: "http://54.88.59.205:4004",
      launch: false, 
      saveDeployments: true,
      loggingEnabled: true,
      allowUnlimitedContractSize: true,

    },
    harbor5: {
      url: "http://54.88.59.205:4005",
      launch: false, 
      saveDeployments: true,
      loggingEnabled: true,
      allowUnlimitedContractSize: true,
    },
  },
};