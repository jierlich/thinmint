const { expect } = require("chai")
const { ethers } = require("hardhat")

const BN = ethers.BigNumber.from
// Note: The ether number can represent any 18 decimal token
const oneEther = BN("1000000000000000000")
const zero = BN("0")

describe("Alt721", () => {
    beforeEach(async () => {
        this.signers = await ethers.getSigners();
        const deployer = this.signers[0]
    })

    it('', async () => {
    })
})


// mint function
//