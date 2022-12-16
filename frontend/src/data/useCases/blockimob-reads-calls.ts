import { BlockImobReadCalls } from "@main/adapters";
import { BlockImobReadContractInterface } from "./blockimob-reads-calls-protocol";

export interface GetUserAllowedIn {
  addressProvider: `0x${string}`;
}

export class BlockImobReadContract implements BlockImobReadContractInterface {
  async getContractNameRequest(): Promise<string> {
    const contractName = await BlockImobReadCalls.getContractName();
    return contractName;
  }

  async getUserAllowed({
    addressProvider,
  }: GetUserAllowedIn): Promise<boolean> {
    const userIsAllowed = await BlockImobReadCalls.getUserAllowed(
      addressProvider
    );

    return userIsAllowed;
  }
}
