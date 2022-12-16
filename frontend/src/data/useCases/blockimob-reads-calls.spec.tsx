import { describe, test, vi, beforeEach } from "vitest";
import { mockFetch } from "vi-fetch";

import { Connect } from "@test/utils/connect";
import { render } from "@test/index";
import { BlockImobContractConfig } from "@utils";

type SutTypes = {
  sut: BlockImobReadContractMock;
};

type GetUserAllowedIn = `0x${string}`;

type MockFetch = {
  getContractNameRequest(): Promise<string>;
  getUserAllowed(addressProvider: GetUserAllowedIn): Promise<boolean>;
};

const address = BlockImobContractConfig.contractAddress as GetUserAllowedIn;

class BlockImobReadContractMock implements MockFetch {
  address!: GetUserAllowedIn;
  resultGetAllowed = true;

  constructor(address?: GetUserAllowedIn) {
    if (address) {
      this.address = address;
    }
  }

  async getContractNameRequest(): Promise<string> {
    return new Promise<string>((resolve) => {
      resolve("BlockImob");
    });
  }

  async getUserAllowed(address: GetUserAllowedIn): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.address = address;
      resolve(this.resultGetAllowed);
    });
  }
}

const makeSut = (): SutTypes => {
  const blockImobReadInstance = new BlockImobReadContractMock();

  const sut = vi.mocked(blockImobReadInstance);
  return {
    sut,
  };
};

render(
  <>
    <Connect />
  </>
);

describe("Should Contract Name Callback is Success", () => {
  beforeEach(() => {
    // Reset the mock
    mockFetch.clearAll();
  });

  test("Shold function ContractName is called ", async () => {
    const { sut } = makeSut();
    const getContractNameSpy = vi.spyOn(sut, "getContractNameRequest");

    // Call the function for the check
    sut.getContractNameRequest();
    expect(getContractNameSpy).toHaveBeenCalled();
  });

  test("Shold the result of ContractName  returns is correct!", async () => {
    const { sut } = makeSut();

    const test = sut.getContractNameRequest();

    expect(await test).toBe("BlockImob");
  });
});

describe("Should getUserAllowed Callback is Success", () => {
  beforeEach(() => {
    // Reset the mock

    mockFetch.clearAll();
  });

  test("Shold the result of getUserAllowed returns is correct!", async () => {
    const { sut } = makeSut();

    const test = sut.getUserAllowed(address);

    expect(await test).toBe(true);
  });
});
