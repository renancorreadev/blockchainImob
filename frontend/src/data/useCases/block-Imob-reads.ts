import { readContract } from "@wagmi/core";
import { BigNumber } from "ethers";
import { BlockImobContractConfig } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/block-imob-abi";

import {
  BlockImobReadCallsInterface,
  GetIsApproveForAllType,
  getQueryFromTokenIdPromiseReturnType,
} from "../protocols/block-Imob-reads-protocol";

const address = BlockImobContractConfig.contractAddress as string;

export class BlockImobReadCalls implements BlockImobReadCallsInterface {
  getContractName = async (): Promise<string> => {
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

    return new Error() as never;
  };

  getUserAllowed = async (addressProvider: `0x${string}`): Promise<boolean> => {
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

    return new Error() as never;
  };

  getBalanceOf = async (addressProvider: `0x${string}`): Promise<BigNumber> => {
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

    return new Error() as never;
  };

  getApproved = async (numberToApproval: BigNumber): Promise<`0x${string}`> => {
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

    return new Error() as never;
  };

  getTokenURI = async (tokenURI: BigNumber): Promise<string> => {
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

    return new Error() as never;
  };

  getIsApproveForAll = async ({
    firstAddress,
    secondAddress,
  }: GetIsApproveForAllType): Promise<boolean> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "isApprovedForAll",
        args: [firstAddress, secondAddress],
      });
      return txResult;
    } catch (e) {
      console.log(e);
    }

    return new Error() as never;
  };

  getBaseURI = async (): Promise<string> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "baseURI",
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }

    return new Error() as never;
  };

  getOwnerOf = async (AddressToQuery: BigNumber): Promise<`0x${string}`> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "ownerOf",
        args: [AddressToQuery],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };

  getNextTokenId = async (): Promise<BigNumber> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "nextTokenId",
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };

  getQueryFromTokenId = async (
    tokenID: BigNumber
  ): Promise<getQueryFromTokenIdPromiseReturnType> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "queryFromTokenId",
        args: [tokenID],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };

  getQueryToTokenId = async (
    TokenAddress: `0x${string}`,
    TokenId: BigNumber
  ): Promise<BigNumber> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "queryToTokenId",
        args: [TokenAddress, TokenId],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };

  getReturnAllowed = async (
    addressToQuery: `0x${string}`
  ): Promise<boolean> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "returnAllowed",
        args: [addressToQuery],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };

  uriFromQuery = async (uriToQuery: string, ID: BigNumber): Promise<string> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "uriFromQuery",
        args: [uriToQuery, ID],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };

  userExpires = async (tokenIDUser: BigNumber): Promise<BigNumber> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "userExpires",
        args: [tokenIDUser],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };

  userOf = async (tokenIDUser: BigNumber): Promise<`0x${string}`> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "userOf",
        args: [tokenIDUser],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }
    return new Error() as never;
  };
}
