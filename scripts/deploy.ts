const hre = require("hardhat");
const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tooth", "Aang", "Pikachu"], // Names
    [
      "https://i.imgur.com/GDRW9Ax.jpeg", // Images
      "https://i.imgur.com/https://i.imgur.com/xYUGJLA.jpeg",
      "https://i.imgur.com/lLG3TQf.jpeg",
    ],
    [
      "No money, no working.CreditTo:Tsabo6",
      "Welcom, my guest from another dystopia. CreditTo:AndreeWallin",
      "Declare yourself. CreditTo:ianllanas",
    ],
    [301, 200, 300], // HP values
    [400, 50, 75],
    "Spring",
    "https://i.imgur.com/adXiAp1.jpeg",
    1000,
    100
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  // let txn;
  // txn = await gameContract.defaultCharacters(1);
  // console.log(txn);
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted the #1!");
  // txn = await gameContract.attackBoss();
  // await txn.wait;
  // console.log("done");
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
