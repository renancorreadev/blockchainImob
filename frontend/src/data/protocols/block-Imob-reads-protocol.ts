import { BigNumber } from "ethers";

export type getQueryFromTokenIdPromiseReturnType = {
  district: string;
  registry: BigNumber;
};

export type GetIsApproveForAllType = {
  firstAddress: `0x${string}`;
  secondAddress: `0x${string}`;
};

export type BlockImobReadCallsInterface = {
  getContractName: () => Promise<string>;
  getUserAllowed: (addressProvider: `0x${string}`) => Promise<boolean>;
  getBalanceOf: (addressProvider: `0x${string}`) => Promise<BigNumber>;
  getApproved: (numberToApproval: BigNumber) => Promise<`0x${string}`>;
  getIsApproveForAll({
    firstAddress,
    secondAddress,
  }: GetIsApproveForAllType): Promise<boolean>;
  getTokenURI(tokenURI: BigNumber): Promise<string>;
  getBaseURI(): Promise<string>;
  getOwnerOf(AddressToQuery: BigNumber): Promise<`0x${string}`>;
  getNextTokenId(): Promise<BigNumber>;
  getQueryFromTokenId(
    tokenID: BigNumber
  ): Promise<getQueryFromTokenIdPromiseReturnType>;
  getQueryToTokenId(
    TokenAddress: string,
    TokenId: BigNumber
  ): Promise<BigNumber>;
  getReturnAllowed(addressToQuery: `0x${string}`): Promise<boolean>;
  uriFromQuery(uriToQuery: string, ID: BigNumber): Promise<string>;
  userExpires(tokenIDUser: BigNumber): Promise<BigNumber>;
  userOf(tokenIDUser: BigNumber): Promise<`0x${string}`>;
};
