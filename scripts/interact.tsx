import { ethers } from "ethers";
import Web3 from "web3";
import { Detasker } from "../typechain-types";
import { Address } from "wagmi";

const API_KEY = process.env.API_KEY!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!;
const contract = require("../libs/Detasker.json");
console.log(JSON.stringify(contract.abi));

// Provider
const rpc = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, rpc);

// Contract
// @ts-ignore
export const detasker: Detasker = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);
