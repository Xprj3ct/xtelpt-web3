const { assert, expect } = require("chai")


describe("Xtelpt Unit Tests", function () {
    let xtelpt, xtelptContract, profile, allAccount // , deployer
    beforeEach(async () => {
        accounts = await ethers.getSigners() // could also do with getNamedAccounts
        profile = accounts[1]
        xtelptContract = await ethers.getContract("XTELPT") // Returns a new connection to the xtelpt contract
        xtelpt = xtelptContract.connect(profile) // Returns a new instance of the xtelpt contract connected to profile
        allAccount = await xtelpt.AllAccount()
    })


})
