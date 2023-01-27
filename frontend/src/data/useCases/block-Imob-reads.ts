import { readContract } from "@wagmi/core";
import { BigNumber } from "ethers";
import { BlockImobContractConfig } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/block-imob-abi";

import {
  GetApprovedReturn,
  GetBaseURIPromiseReturn,
  GetIsApproveForAllReturn,
  GetNextTokenIdPromiseReturn,
  UriFromQueryPromiseReturn,
  GetQueryFromTokenIdPromiseReturn,
  GetQueryToTokenIdPromiseReturn,
  GetReturnAllowedPromiseReturn,
  GetOwnerOfPromiseReturn,
  GetBalanceOfReturn,
  GetUserAllowedReturn,
  GetContractNameReturn,
  getTokenURIReturn,
  UserExpiresPromiseReturn,
  UserOfPromiseReturn,
} from "@data/models";

import {
  BlockImobReadCallsInterface,
  GetIsApproveForAllType,
} from "../protocols/block-imob-reads-protocol";
import { BlockImobError } from "@infra/errors/block-imob-error";

const address = BlockImobContractConfig.contractAddress as string;

export class BlockImobReadCalls implements BlockImobReadCallsInterface {
  getContractName = async (): GetContractNameReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "name",
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getUserAllowed = async (
    addressProvider: `0x${string}`
  ): GetUserAllowedReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "allowed",
        args: [addressProvider],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getBalanceOf = async (addressProvider: `0x${string}`): GetBalanceOfReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "balanceOf",
        args: [addressProvider],
      });
      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getApproved = async (numberToApproval: BigNumber): GetApprovedReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "getApproved",
        args: [numberToApproval],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getTokenURI = async (tokenURI: BigNumber): getTokenURIReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "tokenURI",
        args: [tokenURI],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getIsApproveForAll = async ({
    firstAddress,
    secondAddress,
  }: GetIsApproveForAllType): GetIsApproveForAllReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "isApprovedForAll",
        args: [firstAddress, secondAddress],
      });
      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getBaseURI = async (): GetBaseURIPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "baseURI",
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getOwnerOf = async (AddressToQuery: BigNumber): GetOwnerOfPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "ownerOf",
        args: [AddressToQuery],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getNextTokenId = async (): GetNextTokenIdPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "nextTokenId",
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getQueryFromTokenId = async (
    tokenID: BigNumber
  ): GetQueryFromTokenIdPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "queryFromTokenId",
        args: [tokenID],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getQueryToTokenId = async (
    TokenAddress: `0x${string}`,
    TokenId: BigNumber
  ): GetQueryToTokenIdPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "queryToTokenId",
        args: [TokenAddress, TokenId],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  getReturnAllowed = async (
    addressToQuery: `0x${string}`
  ): GetReturnAllowedPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "returnAllowed",
        args: [addressToQuery],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  uriFromQuery = async (
    uriToQuery: string,
    ID: BigNumber
  ): UriFromQueryPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "uriFromQuery",
        args: [uriToQuery, ID],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  userExpires = async (tokenIDUser: BigNumber): UserExpiresPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "userExpires",
        args: [tokenIDUser],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };

  userOf = async (tokenIDUser: BigNumber): UserOfPromiseReturn => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "userOf",
        args: [tokenIDUser],
      });

      return txResult;
    } catch (e) {
      new BlockImobError();
    }
  };
}
