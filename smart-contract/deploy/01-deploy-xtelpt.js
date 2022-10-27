const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const Xtelpt = await hre.ethers.getContractFactory("XTELPT");
    const xtelpt = await Xtelpt.deploy();

    await xtelpt.deployed();

    console.log("Xtelpt address:", xtelpt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
