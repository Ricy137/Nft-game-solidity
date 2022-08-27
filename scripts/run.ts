import * as dotenv from "dotenv";
import { ethers } from "hardhat";
import { abi } from "../artifacts/contracts/MyEpicGame.sol/MyEpicGame.json";

const attackBossTxn = async (): Promise<void> => {
  const connectedContract = new ethers.Contract(
    `${process.env.CONTRACT_ADDRESS}`,
    abi
  );
};
