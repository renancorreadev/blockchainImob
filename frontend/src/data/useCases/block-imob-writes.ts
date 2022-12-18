import { writeContract } from "@wagmi/core";
import { BlockImobContractConfig } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/block-imob-abi";
import { BigNumber } from "ethers";

const { contractAddress } = BlockImobContractConfig;

interface MintArgsInterface {
  address: `0x${string}`;
  oficio: string;
  comarcaimovel: string;
  registro: BigNumber;
}
type MintPromiseReturn = {
  transactionHash: string;
  status?: number | undefined;
  blockNumber: number;
  gasUsed: BigNumber;
  type: number;
  confirmations: number;
};
export type MintDataReturnType = {
  blockNumber: number;
  gasUsed: BigNumber;
  transactionHash: string;
  status: number | undefined;
  type: number;
  confirmations: number;
};

export class BlockImobWrites {
  mint = async ({
    address,
    oficio,
    comarcaimovel,
    registro,
  }: MintArgsInterface): Promise<MintDataReturnType | undefined> => {
    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: contractAddress,
        abi: abi,
        functionName: "mint",
        args: [address, oficio, comarcaimovel, registro],
      });

      const txResult = await wait().then((txResult: MintPromiseReturn) => {
        const data: MintDataReturnType = {
          blockNumber: txResult.blockNumber,
          gasUsed: txResult.gasUsed,
          transactionHash: txResult.transactionHash,
          status: txResult.status,
          type: txResult.type,
          confirmations: txResult.confirmations,
        };

        return {
          data,
        };
      });

      return txResult.data;
    } catch (errorTx) {
      console.log(errorTx);
    }

    return;
  };
}
