const { ethers } = require("hardhat");
const BN = ethers.BigNumber.from
const hundredthEther = BN("10000000000000000")

async function main() {
    const contractName = "Alt721"
    const [deployer] = await ethers.getSigners();
    console.log(`${contractName} is being deployed by ${deployer.address}`)

    // TODO: use real NFT for production instead of mock
    const MockFactory = await ethers.getContractFactory("MockERC721", deployer)
    const MockRoot721 = await MockFactory.deploy("Bored Ape Yacht Club", "BAYC")
    await MockRoot721.connect(deployer).mint(deployer.address)

    const contractFactory = await ethers.getContractFactory(contractName)
    const contract = await contractFactory.deploy(MockRoot721.address, "Noir Apes", "NOIR", hundredthEther, "")

    console.log(`${contractName} address: `, contract.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })