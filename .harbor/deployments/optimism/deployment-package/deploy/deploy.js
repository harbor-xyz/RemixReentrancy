const { ethers } = require("hardhat");

module.exports = async (hre) => {
  console.log("IS THIS WORKING?");
  const {
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
} = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const bankResp = await deploy("Bank", {
    from: deployer,
    gasLimit: 500000,
  });
  const address = bankResp.receipt.contractAddress;

const signers = await hre.ethers.getSigners();
const bank =await  hre.ethers.getContractAt("Bank", address);
const contractWithWallet = bank.connect(signers[1])
await contractWithWallet.deposit({value: ethers.utils.parseEther("1")})
const contractWithWallet2 = bank.connect(signers[2])
await contractWithWallet2.deposit({value: ethers.utils.parseEther("1")})
const balance = await contractWithWallet.getBalance()

};
