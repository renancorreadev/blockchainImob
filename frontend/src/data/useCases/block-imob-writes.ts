import { writeContract } from "@wagmi/core";
import { BlockImobContractConfig } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/block-imob-abi";
import { TransactionError } from "@domain/errors/error-transaction";
import {
  MintArgsInterface,
  ApproveArgsInterface,
  TransactionReceipType,
  WriteCallbackPromise,
} from "@data/protocols";

const { contractAddress } = BlockImobContractConfig;

export class BlockImobWrites {
  mint = async ({
    address,
    oficio,
    comarcaimovel,
    registro,
  }: MintArgsInterface): Promise<TransactionReceipType | undefined> => {
    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: contractAddress,
        abi: abi,
        functionName: "mint",
        args: [address, oficio, comarcaimovel, registro],
      });

      const txResult = await wait().then((txResult: WriteCallbackPromise) => {
        const data: TransactionReceipType = {
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

  approve = async ({
    spender,
    id,
  }: ApproveArgsInterface): Promise<TransactionReceipType | undefined> => {
    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: contractAddress,
        abi: abi,
        functionName: "approve",
        args: [spender, id],
      });

      const txResult = await wait().then((txResult: WriteCallbackPromise) => {
        const data: TransactionReceipType = {
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

      switch (txResult.data.status) {
        case 0:
          throw new TransactionError();
        default:
          return txResult.data;
      }
    } catch (errorTx) {
      console.log(errorTx);
    }

    return;
  };
}
