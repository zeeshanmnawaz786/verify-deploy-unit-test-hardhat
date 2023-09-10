const { ethers } = require("hardhat");

describe("Greet Smart Contract", function () {
  let greet, owner, a1, a2, a3, a4, a5, a6;

  before(async function () {
    [owner, a1, a2, a3, a4, a5, a6] = await ethers.getSigners();

    const Greet = await ethers.getContractFactory("Greet");
    greet = await Greet.deploy();
    await greet.waitForDeployment();
    console.log("greet address: ", await greet.getAddress());
  });

  it("setGreet", async function () {
    await greet.connect(owner).setGreet("Hello");
    const get = await greet.connect(owner).greet();
    console.log("🚀 ~ file: Greet.test.js:18 ~ get:", get);
  });
});
