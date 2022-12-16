/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readContract } from "@wagmi/core";
import { BigNumber } from "ethers";
import { BlockImobContractConfig } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/block-imob-abi";

type GetIsApproveForAllType = {
  firstAddress: `0x${string}`;
  secondAddress: `0x${string}`;
};

const address = BlockImobContractConfig.contractAddress as string;

export namespace BlockImobReadCalls {
  export const getContractName = async (): Promise<string> => {
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

  export const getUserAllowed = async (
    addressProvider: `0x${string}`
  ): Promise<boolean> => {
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

  export const getBalanceOf = async (
    addressProvider: `0x${string}`
  ): Promise<BigNumber> => {
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

  export const getApproved = async (
    numberToApproval: BigNumber
  ): Promise<`0x${string}`> => {
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

  export const getTokenURI = async (tokenURI: BigNumber): Promise<string> => {
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

  export const getIsApproveForAll = async ({
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

  export const getBaseURI = async (): Promise<string> => {
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

  export const getOwnerOf = async (
    AddressToQuery: BigNumber
  ): Promise<`0x${string}`> => {
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

  export const getNextTokenId = async (): Promise<BigNumber> => {
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

  export const getQueryFromTokenId = async (tokenID: BigNumber) => {
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

  export const getQueryToTokenId = async (
    TokenAddress: string,
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

  export const getReturnAllowed = async (
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

  export const uriFromQuery = async (
    uriToQuery: string,
    ID: BigNumber
  ): Promise<string> => {
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

  export const userExpires = async (
    tokenIDUser: BigNumber
  ): Promise<BigNumber> => {
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

  export const userOf = async (
    tokenIDUser: BigNumber
  ): Promise<`0x${string}`> => {
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
