/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readContract } from "@wagmi/core";
import { BlockImobContractConfig } from "../../../../utils/ContractConfigs";
import { abi } from "../../abis/block-imob-abi";
import { BigNumber } from "ethers";

type GetIsApproveForAllType = `0x${string}`[];
const address = BlockImobContractConfig.contractAddress as string;

export const getContractName = async (): Promise<string | undefined> => {
  try {
    const txResult = await readContract({
      address,
      abi,
      functionName: "name",
    });

    return txResult;
  } catch (e) {
    console.log(e);
  }

  return;
};

export const getUserAllowed = async (
  addressProvider: `0x${string}`
): Promise<boolean | undefined> => {
  try {
    const txResult = await readContract({
      address,
      abi,
      functionName: "allowed",
      args: [addressProvider],
    });

    return txResult;
  } catch (e) {
    console.log(e);
  }

  return;
};

export const getBalanceOf = async (
  addressProvider: `0x${string}`
): Promise<BigNumber | undefined> => {
  try {
    const txResult = await readContract({
      address,
      abi,
      functionName: "balanceOf",
      args: [addressProvider],
    });
    return txResult;
  } catch (e) {
    console.log(e);
  }
};

export const getApproved = async (
  numberToApproval: BigNumber
): Promise<`0x${string}` | undefined> => {
  try {
    const txResult = await readContract({
      address,
      abi,
      functionName: "getApproved",
      args: [numberToApproval],
    });

    return txResult;
  } catch (e) {
    console.log(e);
  }
};

export const getTokenURI = async (
  tokenURI: BigNumber
): Promise<string | undefined> => {
  try {
    const txResult = await readContract({
      address,
      abi,
      functionName: "tokenURI",
      args: [tokenURI],
    });

    return txResult;
  } catch (e) {
    console.log(e);
  }
};

export const getIsApproveForAll = async (
  addresstoVerify: GetIsApproveForAllType
): Promise<boolean | undefined> => {
  try {
    const txResult = await readContract({
      address,
      abi,
      functionName: "isApprovedForAll",
      args: [addresstoVerify[0], addresstoVerify[1]],
    });
    return txResult;
  } catch (e) {
    console.log(e);
  }
};
