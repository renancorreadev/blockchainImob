import {
  ApproveArgsInterface,
  TransactionReceipType,
} from "@data/protocols/block-imob-writes-protocol";

import { BlockImobWrites } from "@data/useCases";
import { BigNumber } from "ethers";
import { vi } from "vitest";

export const mockMintTest = vi.fn((_mockBlockImobWrites: BlockImobWrites) => {
  return _mockBlockImobWrites.mint({
    address: "0x123",
    oficio: "123",
    comarcaimovel: "123",
    registro: BigNumber.from(1),
  });
});

export const mockApproveTest = vi.fn(
  (
    _mockBlockImobWrites: BlockImobWrites,
    approveArgs: ApproveArgsInterface
  ) => {
    return _mockBlockImobWrites.approve(approveArgs);
  }
);

export const returnPromisedMocked: TransactionReceipType = {
  blockNumber: 1,
  gasUsed: BigNumber.from(30000000),
  transactionHash: "0x123",
  status: 1,
  type: 1,
  confirmations: 1,
};
