const hre = require('hardhat')
const ethers = hre.ethers
const CampaingFactoryArtifact = require('./artifacts/contracts/Campaing.sol/CampaingFactory.json')

const main = async () => {
    const [signer, signer2] = await ethers.getSigners()
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const campaingFactoryContract = new ethers.Contract(contractAddress, CampaingFactoryArtifact.abi, signer2)
    const result = await campaingFactoryContract.createCampaing('nameCampaign', 'descriptionCampaign', 1)
    console.log('createCampaing: ' + result['name'])
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })