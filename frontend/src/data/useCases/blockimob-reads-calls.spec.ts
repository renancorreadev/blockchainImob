import { BlockImobReadContract } from "./blockimob-reads-calls";
import { describe, test, vi, beforeEach } from "vitest";

type SutTypes = {
  sut: BlockImobReadContract;
};

const makeSut = (): SutTypes => {
  const sut = new BlockImobReadContract();
  return {
    sut,
  };
};

describe("BlockImobReadContract", () => {
  beforeEach(() => {
    // Reset the mock
    vi.clearAllMocks();
  });

  test("Shold function ContractName is called ", () => {
    const { sut } = makeSut();
    const getContractNameSpy = vi.spyOn(sut, "getContractNameRequest");

    // Call the function for the check
    sut.getContractNameRequest();
    expect(getContractNameSpy).toHaveBeenCalled();
  });

  test("Should ensure to called times in contract", () => {
    const { sut } = makeSut();
    const getContractNameSpy = vi.spyOn(sut, "getContractNameRequest");

    sut.getContractNameRequest();
    sut.getContractNameRequest();
    //toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    expect(getContractNameSpy).toHaveBeenCalledTimes(2);
  });

  test("Shold the result is correct!", () => {
    const { sut } = makeSut();

    const resultMock = vi
      .fn()
      .mockImplementation(async () => sut.getContractNameRequest());

    resultMock.mockReturnValue("BlockImob");
  });
});
