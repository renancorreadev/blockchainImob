import { BlockImobReadCalls } from "@main/adapters";

export class BlockImobReadContract {
  async getContractNameRequest(): Promise<string> {
    const contractName = await BlockImobReadCalls.getContractName();
    return contractName;
  }
}
