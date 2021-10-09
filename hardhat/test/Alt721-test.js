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

        // Create Mocks
        const MockFactory = await ethers.getContractFactory("MockERC721", deployer)
        this.MockRoot721 = await MockFactory.deploy("Root", "ROOT")
        this.MockOther721 = await MockFactory.deploy("Other", "OTHER")

        // Mint mocks
        await this.MockRoot721.connect(deployer).mint(this.signers[1].address)
        await this.MockOther721.connect(deployer).mint(this.signers[2].address)

        // Create Alt721
        const Alt721Factory = await ethers.getContractFactory("Alt721", deployer)
        this.Alt721 = await Alt721Factory.deploy(this.MockRoot721.address, "Alt721", "ALT", oneEther, "")
    })

    it('only allows root owner to mint', async () => {
        await expect(
            this.Alt721.connect(this.signers[2]).mint(zero, {value: oneEther})
        ).to.be.revertedWith("Only root NFT owner can mint")

        await this.Alt721.connect(this.signers[1]).mint(zero)
    })
})
