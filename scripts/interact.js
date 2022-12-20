require("dotenv").config();
var fs = require("fs");
const util = require("util");
var ethers = require("ethers");
const fsPromises = fs.promises;

// The path to the contract ABI
const ABI_FILE_PATH = "../artifacts/contracts/Bank.sol/Bank.json";
// The address from the deployed smart contract
const DEPLOYED_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const DEPLOYER = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

// load ABI from build artifacts
async function getAbi() {
  const data = await fsPromises.readFile(ABI_FILE_PATH, "utf8");
  const abi = JSON.parse(data)["abi"];
  //console.log(abi);
  return abi;
}

async function main() {
  let provider = ethers.getDefaultProvider(`http://localhost:8545`);
  const abi = await getAbi();

  /* 
    // READ-only operations require only a provider.
    // Providers allow only for read operations.
    let contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
    const greeting = await contract.greet();
    console.log(greeting);
    */

  const Bank = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
