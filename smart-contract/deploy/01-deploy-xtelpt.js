const { getNamedAccounts, deployments, network, run } = require("hardhat")
const {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    log("----------------------------------------------------")
    const arguments = [
    ]

    const xtelpt = await deploy("XTELPT", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: network.config.waitBlockConfirmations || 1,
    })

    // // Verify the deployment
    // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    //     log("Verifying...")
    //     await verify(xtelpt.address, arguments)
    // }

    const networkName = network.name == "hardhat" ? "localhost" : network.name

    log("----------------------------------------------------")
}

module.exports.tags = ["all", "xtelpt"]
