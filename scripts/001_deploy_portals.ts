import { ethers } from "hardhat";

async function main() {
	const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Portals = await ethers.getContractFactory("Portals");
  const portals = await Portals.deploy("1000000000000000000");

  console.log("Token address:", portals.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
