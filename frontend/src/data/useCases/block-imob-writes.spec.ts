import { BigNumber } from "ethers";
import { vi } from "vitest";
import { BlockImobWrites, MintDataReturnType } from "./block-imob-writes";

const makeSut = () => {
  const _mock = new BlockImobWrites();

  const returnPromised: MintDataReturnType = {
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

  return {
    _mock,
    returnPromised,
    mockMintTest,
  };
};

describe("Shold be call transaction", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Should be call transaction to mint a NFT", async () => {
    const { returnPromised, mockMintTest } = makeSut();

    mockMintTest.mockResolvedValue(returnPromised);

    const result = await mockMintTest();
    expect(result).toStrictEqual(returnPromised);
  });
});
