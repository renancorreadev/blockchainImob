import { BigNumber } from "ethers";

export type getQueryFromTokenIdPromiseReturnType = {
  district: string;
  registry: BigNumber;
};

export type UserOfPromiseReturn = Promise<`0x${string}` | undefined>;

export type UserExpiresPromiseReturn = Promise<BigNumber | undefined>;

export type UriFromQueryPromiseReturn = Promise<string | undefined>;

export type GetReturnAllowedPromiseReturn = Promise<boolean | undefined>;

export type GetQueryToTokenIdPromiseReturn = Promise<BigNumber | undefined>;

export type GetQueryFromTokenIdPromiseReturn = Promise<
  getQueryFromTokenIdPromiseReturnType | undefined
>;

export type GetNextTokenIdPromiseReturn = Promise<BigNumber | undefined>;

export type GetOwnerOfPromiseReturn = Promise<`0x${string}` | undefined>;

export type GetBaseURIPromiseReturn = Promise<string | undefined>;

export type GetIsApproveForAllReturn = Promise<boolean | undefined>;

export type getTokenURIReturn = Promise<string | undefined>;

export type GetApprovedReturn = Promise<`0x${string}` | undefined>;

export type GetBalanceOfReturn = Promise<BigNumber | undefined>;

export type GetUserAllowedReturn = Promise<boolean | undefined>;

export type GetContractNameReturn = Promise<string | undefined>;
