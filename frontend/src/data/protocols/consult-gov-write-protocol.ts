import { BigNumber } from "ethers";

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

export type setRegularArgs = {
  _idImob: BigNumber;
  _regular: boolean;
};

export type setMappingRuralArgs = {
  _registryRuralIPFS: string;
};

export type confrontMapArgs = {
  _registryRuralIPFS: string;
  _registryRural: number;
};
