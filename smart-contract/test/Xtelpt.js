const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")


!developmentChains.includes(network.name)
    ? describe.skip
    : describe('Xtelpt', async () => {
        accounts = await ethers.getSigners() // could also do with getNamedAccounts
        //   deployer = accounts[0]
        player = accounts[1]
        let volunState, xtelpState
        xtelptContract = await ethers.getContract("XTELPT") // Returns a new connection to the Raffle contract
        xtelpt = xtelptContract.connect(player) // Returns a new instance of the xtelpt contract connected to player

        const xtelptState = (await xtelpt.meetingNum()).toString()

        assert.equal(xtelpState, "0")

    })