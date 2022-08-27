import { ethers } from "hardhat";
import { abi } from "../artifacts/contracts/MyEpicGame.sol/MyEpicGame.json";

const attackBossTxn = async (): Promise<void> => {
  const connectedContract = new ethers.Contract(
    "0x22B9a033BDe86dAf280Fc6b01530deF6d65F72c5",
    abi
  );
};
