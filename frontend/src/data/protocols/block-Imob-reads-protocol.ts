import { BigNumber } from "ethers";

/** Models */
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

export type GetIsApproveForAllType = {
  firstAddress: `0x${string}`;
  secondAddress: `0x${string}`;
};

export type BlockImobReadCallsInterface = {
  getContractName: () => GetContractNameReturn;
  getUserAllowed: (addressProvider: `0x${string}`) => GetUserAllowedReturn;
  getBalanceOf: (addressProvider: `0x${string}`) => GetBalanceOfReturn;
  getApproved: (numberToApproval: BigNumber) => GetApprovedReturn;
  getIsApproveForAll({
    firstAddress,
    secondAddress,
  }: GetIsApproveForAllType): GetIsApproveForAllReturn;
  getTokenURI(tokenURI: BigNumber): getTokenURIReturn;
  getBaseURI(): GetBaseURIPromiseReturn;
  getOwnerOf(AddressToQuery: BigNumber): GetOwnerOfPromiseReturn;
  getNextTokenId(): GetNextTokenIdPromiseReturn;
  getQueryFromTokenId(tokenID: BigNumber): GetQueryFromTokenIdPromiseReturn;
  getQueryToTokenId(
    TokenAddress: string,
    TokenId: BigNumber
  ): GetQueryToTokenIdPromiseReturn;
  getReturnAllowed(
    addressToQuery: `0x${string}`
  ): GetReturnAllowedPromiseReturn;
  uriFromQuery(uriToQuery: string, ID: BigNumber): UriFromQueryPromiseReturn;
  userExpires(tokenIDUser: BigNumber): UserExpiresPromiseReturn;
  userOf(tokenIDUser: BigNumber): UserOfPromiseReturn;
};
