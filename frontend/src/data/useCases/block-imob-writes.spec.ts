import { vi } from "vitest";
import { BigNumber } from "ethers";
import { BlockImobWrites } from "./block-imob-writes";

import { TransactionError } from "@domain/errors/error-transaction";
import { mockApproveTest, mockMintTest, returnPromisedMocked } from "../tests";

const makeSut = () => {
  /** Constants values  */
  const _mock = new BlockImobWrites();

  return {
    _mock,
    mockMintTest,
    mockApproveTest,
    returnPromisedMocked,
  };
};

describe("Shold be callbacks contracts write transactions", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Should be call transaction to mint a NFT", async () => {
    const { returnPromisedMocked, mockMintTest, _mock } = makeSut();

    mockMintTest.mockResolvedValue(returnPromisedMocked);

    const result = await mockMintTest(_mock);
    expect(result).toStrictEqual(returnPromisedMocked);
  });

  test("Should be call transaction to approve a NFT transfer", async () => {
    const { returnPromisedMocked, mockApproveTest, _mock } = makeSut();
    const callMocked = mockApproveTest.mockResolvedValue(returnPromisedMocked);
    const _address =
      "0x431143aa81Aa54fB4157edcb8879d23c1eff9c77" as `0x${string}`;
    const fakeArgs = {
      spender: _address,
      id: BigNumber.from(1),
    };

    const result = await mockApproveTest(_mock, fakeArgs);

    expect(callMocked).toBeCalled();
    expect(callMocked).toBeCalledWith(_mock, fakeArgs);
    expect(result).toStrictEqual(returnPromisedMocked);
  });

  test("Should be Invalid call transaction to approve and return Error", async () => {
    const { mockApproveTest } = makeSut();

    const result = mockApproveTest.mockRejectedValueOnce(
      new TransactionError()
    );

    await expect(result).rejects.toThrowError(new TransactionError());
  });
});
