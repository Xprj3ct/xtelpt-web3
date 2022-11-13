const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

describe("XTELPT Unit Tests", function () {
    let xtelpt, xtelptContract, owner, allAccount, account // , deployer



    beforeEach(async () => {
        const accounts = await ethers.getSigners() // could also do with getNamedAccounts
        owner = accounts[0].address
        account = accounts[1].address
        xtelptContract = await ethers.getContractFactory("XTELPT")
        xtelpt = await xtelptContract.deploy()
        await xtelpt.deployed()
    })

    it("Checks the owner", async () => {
        try {
            let result = await xtelpt.owner()
            console.log("result working", result.toString())
            assert.equal(result.toString(), owner)
        } catch (e) {
            assert.fail(null, null, `${owner} is not owner`)
        }
    })

    it("Initial meeting num is 0", async () => {
        try {
            let result = await xtelpt.meetingNum()
            assert.equal(result.toString(), "0")
        } catch (e) {
            console.log("meeting num is not 0")
        }
    })

    it("Checks that Intial Accounts is an empty array", async () => {
        try {
            let result = await xtelpt.AllAccount()
            assert.equal(result, [])
        } catch (e) {
            console.log("Accounts is not an empty array")
        }
    })


})