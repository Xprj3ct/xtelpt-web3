const hre = require("hardhat");
const { verify } = require("../utils/verify")

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const Xtelpt = await hre.ethers.getContractFactory("XTELPT");
    const xtelpt = await Xtelpt.deploy();

    console.log("----------------------------------------------------")

    const arguments = [

    ]

    await xtelpt.deployed();

    await verify(xtelpt.address, arguments)

    console.log("Xtelpt address:", xtelpt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
