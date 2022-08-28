import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";
describe("MyEpicGame", function () {
  async function preSetUp(): Promise<Contract> {
    const gameContractFactory = await hre.ethers.getContractFactory(
      "MyEpicGame"
    );
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
    return gameContract;
  }

  it("Should mint a character", async function (): Promise<void> {
    let gameContract = await preSetUp();
    let txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
  });
});
