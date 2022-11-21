import hre from "hardhat"

const main = async () => {
    const gameLogicContractFactory = await hre.ethers.getContractFactory("GameLogic")
    const gameLogicContract = await gameLogicContractFactory.deploy(
        ["ZORO", "NAMI", "USOPP"], // キャラクターの名前
        [
            "https://i.imgur.com/TZEhCTX.png", // キャラクターの画像
            "https://i.imgur.com/WVAaMPA.png",
            "https://i.imgur.com/pCMZeiM.png",
        ],
        [100, 200, 300], // キャラクターのHP
        [100, 50, 25] // キャラクターの攻撃力
    )
    await gameLogicContract.deployed()

    console.log("contract deployed at:", gameLogicContract.address)
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()