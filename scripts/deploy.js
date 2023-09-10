// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Greet = await hre.ethers.deployContract("Greet");

  await Greet.waitForDeployment();

  console.log(`************************************************************`);
  console.log(`Greet Contract Deployer Address: `);
  console.log(
    "Deploying contracts with the account:",
    await deployer.getAddress()
  );
  console.log(`************************************************************`);
  console.log(`Greet Smart Contract Address:`);
  console.log(`Greet with deployed to ${Greet.target}`, "\n");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
