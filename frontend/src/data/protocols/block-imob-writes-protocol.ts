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

/*@note export all Interfaces of Arguments to write transactions */
/* Defining an interface for the arguments that are passed to the
`mint` function. */
export interface MintArgsInterface {
  address: `0x${string}`;
  tokenURI: string;
  comarcaimovel: string;
  registro: BigNumber;
}

/**
 * `ApproveArgsInterface` is an object with two properties, `spender` and `id`,
 * where `spender` is a string that starts with `0x` and `id` is a BigNumber.
 * @property {spender} - The address of the account that will be able to spend the
 * funds.
 * @property {BigNumber} id - The id of the transaction.
 */
export interface ApproveArgsInterface {
  spender: `0x${string}`;
  id: BigNumber;
}
