const hre = require('hardhat')
const ethers = hre.ethers

const main = async () => {
    const [signer] = await ethers.getSigners()
    const CampaignFactory = await ethers.getContractFactory('CampaingFactory', signer)
    const campaignFactory = await CampaignFactory.deploy()
    await campaignFactory.deployed()
    console.log(await campaignFactory.address)
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })