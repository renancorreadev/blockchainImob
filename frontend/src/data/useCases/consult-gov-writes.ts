import { writeContract } from "@wagmi/core";
import { ConsultContractConfig } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/oracle-gov-abi";
import { TransactionError } from "@domain/errors/error-transaction";
import { BigNumber } from "ethers";

const { oracledAddress } = ConsultContractConfig;

/**
 * `WriteCallbackPromise` is a type that represents a callback function that
 * returns a promise that resolves to an object with the following properties:
 * `transactionHash`, `status`, `blockNumber`, `gasUsed`, `type`, and
 * `confirmations`.
 * @property {string} transactionHash - The hash of the transaction that was sent.
 * @property {number | undefined} status - The status of the transaction. This is
 * only available for Ethereum.
 * @property {number} blockNumber - The block number that the transaction was mined
 * in.
 * @property {BigNumber} gasUsed - The amount of gas used by the transaction.
 * @property {number} type - The type of the transaction. This is a number that
 * represents the type of transaction.
 * @property {number} confirmations - The number of confirmations the transaction
 * has received.
 */
export type WriteCallbackPromise = {
  transactionHash: string;
  status?: number | undefined;
  blockNumber: number;
  gasUsed: BigNumber;
  type: number;
  confirmations: number;
};

/**
 * `TransactionReceipType` is an object with a `blockNumber`, `gasUsed`,
 * `transactionHash`, `status`, `type`, and `confirmations` property.
 * @property {number} blockNumber - The block number that the transaction was mined
 * in.
 * @property {BigNumber} gasUsed - The amount of gas used by the transaction.
 * @property {string} transactionHash - The hash of the transaction.
 * @property {number | undefined} status - 0 = failed, 1 = success, undefined =
 * pending
 * @property {number} type - The type of transaction. This is a number that
 * represents the type of transaction.
 * @property {number} confirmations - The number of confirmations the transaction
 * has.
 */
export type TransactionReceipType = {
  blockNumber: number;
  gasUsed: BigNumber;
  transactionHash: string;
  status: number | undefined;
  type: number;
  confirmations: number;
};

type setRegularArgs = {
  _idImob: BigNumber;
  _regular: boolean;
  _imobcontract: `0x${string}`;
};

type setMappingRuralArgs = {
  _registryRuralIPFS: string;
};

type confrontMapArgs = {
  _registryRuralIPFS: string;
  _registryRural: BigNumber;
};

export class ConsultGovWrites {
  setRegular = async (
    params: setRegularArgs
  ): Promise<TransactionReceipType> => {
    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: oracledAddress,
        abi: abi,
        functionName: "setRegular",
        args: [params._idImob, params._regular, params._imobcontract],
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

    return new Error() as never;
  };

  setMapRural = async (
    params: setMappingRuralArgs
  ): Promise<TransactionReceipType> => {
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

    return new Error() as never;
  };

  confrontMap = async (
    params: confrontMapArgs
  ): Promise<TransactionReceipType> => {
    try {
      const { wait } = await writeContract({
        mode: "recklesslyUnprepared",
        address: oracledAddress,
        abi: abi,
        functionName: "confrontMap",
        args: [params._registryRuralIPFS, params._registryRural],
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

    return new Error() as never;
  };
}
