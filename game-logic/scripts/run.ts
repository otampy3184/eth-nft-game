import hre from "hardhat"

const main = async() => {
    const gameLogicContractFactory = await hre.ethers.getContractFactory("GameLogic")
    const gameLogicContract = await gameLogicContractFactory.deploy()
    await gameLogicContract.deployed()

    console.log("contract deployed at:", gameLogicContract.address)
}

const runMain = async() => {
    try {
        await main()
        process.exit(0)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()