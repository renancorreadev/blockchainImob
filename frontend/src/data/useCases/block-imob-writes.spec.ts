import { vi } from "vitest";
import { BigNumber } from "ethers";
import { BlockImobWrites } from "./block-imob-writes";

import { TransactionError } from "@domain/errors/error-transaction";
import { ApproveArgsInterface, TransactionReceipType } from "@data/protocols";

const makeSut = () => {
  /** Constants values  */
  const _mock = new BlockImobWrites();
  const returnPromised: TransactionReceipType = {
    blockNumber: 1,
    gasUsed: BigNumber.from(30000000),
    transactionHash: "0x123",
    status: 1,
    type: 1,
    confirmations: 1,
  };

  const mockMintTest = vi.fn(() => {
    return _mock.mint({
      address: "0x123",
      oficio: "123",
      comarcaimovel: "123",
      registro: BigNumber.from(1),
    });
  });

  const mockApproveTest = vi.fn((approveArgs: ApproveArgsInterface) => {
    return _mock.approve(approveArgs);
  });

  return {
    _mock,
    returnPromised,
    mockMintTest,
    mockApproveTest,
  };
};

describe("Shold be callbacks contracts write transactions", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Should be call transaction to mint a NFT", async () => {
    const { returnPromised, mockMintTest } = makeSut();

    mockMintTest.mockResolvedValue(returnPromised);

    const result = await mockMintTest();
    expect(result).toStrictEqual(returnPromised);
  });

  test("Should be call transaction to approve a NFT transfer", async () => {
    const { returnPromised, mockApproveTest } = makeSut();
    const callMocked = mockApproveTest.mockResolvedValue(returnPromised);
    const _address =
      "0x431143aa81Aa54fB4157edcb8879d23c1eff9c77" as `0x${string}`;

    const fakeArgs = {
      spender: _address,
      id: BigNumber.from(1),
    };

    const result = await mockApproveTest(fakeArgs);

    expect(callMocked).toBeCalled();
    expect(callMocked).toBeCalledWith(fakeArgs);
    expect(result).toStrictEqual(returnPromised);
  });

  test("Should be Invalid call transaction to approve and return Error", async () => {
    const { mockApproveTest } = makeSut();

    const result = mockApproveTest.mockRejectedValueOnce(
      new TransactionError()
    );

    await expect(result).rejects.toThrowError(new TransactionError());
  });
});
