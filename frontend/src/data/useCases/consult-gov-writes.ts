import { writeContract } from "@wagmi/core";
import {
  ConsultContractConfig,
  BlockImobContractConfig,
} from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/oracle-gov-abi";
import { TransactionError } from "@domain/errors/error-transaction";
import { BigNumber } from "ethers";

const { oracledAddress } = ConsultContractConfig;
const { contractAddress } = BlockImobContractConfig;

/** Protocols */
import {
  confrontMapArgs,
  setMappingRuralArgs,
  setRegularArgs,
  TransactionReceipType,
  WriteCallbackPromise,
} from "@data/protocols/consult-gov-write-protocol";

export class ConsultGovWrites {
  setRegular = async (
    params: setRegularArgs
  ): Promise<TransactionReceipType | undefined> => {
    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: oracledAddress,
        abi: abi,
        functionName: "setRegular",
        args: [params._idImob, params._regular, contractAddress],
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
  };

  setMapRural = async (
    params: setMappingRuralArgs
  ): Promise<TransactionReceipType | undefined> => {
    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: oracledAddress,
        abi: abi,
        functionName: "setMapRural",
        args: [params._registryRuralIPFS],
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
  };

  confrontMap = async (
    params: confrontMapArgs
  ): Promise<TransactionReceipType | undefined> => {
    const registryRural = BigNumber.from(params._registryRural);

    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: oracledAddress,
        abi: abi,
        functionName: "confrontMap",
        args: [params._registryRuralIPFS, registryRural],
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
  };
}
