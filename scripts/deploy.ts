const hre = require("hardhat");
const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Leo", "Aang", "Pikachu"], // Names
    [
      "https://i.imgur.com/pKd5Sdk.png", // Images
      "https://i.imgur.com/xVu4vFL.png",
      "https://i.imgur.com/WMB6g9u.png",
    ],
    [101, 200, 300], // HP values
    [100, 50, 25],
    "Spring",
    "https://i.imgur.com/adXiAp1.jpeg",
    1000,
    100
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted the #1!");
  txn = await gameContract.attackBoss();
  await txn.wait;
  console.log('done');
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();