import { ethers } from "hardhat";

import {
  BlockImobContractConfig, 
  ConsultContractConfig, 
  PaymentsdContractConfig
} from '../config/ContractConfigs'

/**
 * It deploys the BlockImob, OracleGov, ConsultImob and PaymentsManagement
 * contracts to the blockchain
 */
async function main() {
  const Blockimobd = await ethers.getContractFactory("BlockImob")
  const blockimobd = await Blockimobd.deploy(
    BlockImobContractConfig.contractName,
    BlockImobContractConfig.ContractSymbol,
  )
  await blockimobd.deployed()
  BlockImobContractConfig.contractAddress = blockimobd.address
  console.log("--- BlockImob Deployed to ----",BlockImobContractConfig.contractAddress)

  //oracle deploy
  const Oracled = await ethers.getContractFactory("OracleGov")
  const oracled = await Oracled.deploy()
  await oracled.deployed()
  ConsultContractConfig.oracledAddress = oracled.address
  console.log("---OracleGov Deployed to ----", oracled.address)


  //deploy consult
  // const oracleAddress = ConsultContractConfig.oracledAddress
  const oracleAddress = ConsultContractConfig.oracledAddress
  const Consultd = await ethers.getContractFactory("ConsultImob")
  const consultd = await Consultd.deploy(oracleAddress)
  await consultd.deployed()

  ConsultContractConfig.contractAddress = consultd.address
  console.log("--- ConsultImob Deployed to ----", ConsultContractConfig.contractAddress)

  //Payments
  const Paymentsd = await ethers.getContractFactory("PaymentsManagement")
    
  const blockImobContractAddress = BlockImobContractConfig.contractAddress
  const consultContractAddress = ConsultContractConfig.contractAddress

  const paymentsd = await Paymentsd.deploy(blockImobContractAddress,consultContractAddress)

  PaymentsdContractConfig.contractAddress = paymentsd.address
  await paymentsd.deployed()
  console.log("--- Payments Management Deployed to ----",PaymentsdContractConfig.contractAddress)
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
