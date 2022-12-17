/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEvent, act, render, screen, userEvent } from "@test/index";
import { beforeEach, describe, expect, vi } from "vitest";
import { accounts } from "@test/utils/mockProvider";

import { Connect } from "@test/utils/connect";
import { mockReadcontract } from "@test/utils/mockReadContract";

import { abi } from "@utils/formatAbi/block-imob-abi";
import { BlockImobContractConfig } from "@utils/ContractConfigs/BlockImobContractConfig";

describe("ReadContractInteraction", () => {
  render(<Connect />);

  /** Open the ReadContractInteraction  */
  const mockReadContractInstance = mockReadcontract();
  const address = BlockImobContractConfig.contractAddress as string;
  const fakeUserAddress = accounts[0]?.address;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should return the correct contract name", async () => {
    const fechContractName = mockReadContractInstance({
      address: address,
      abi: abi,
      functionName: "name",
    });

    expect(fechContractName).resolves.toEqual("BlockImob");
  });

  test("should return the correct contract name", async () => {
    const fechContractName = mockReadContractInstance({
      address: address,
      abi: abi,
      functionName: "name",
    });

    expect(fechContractName).resolves.toEqual("BlockImob");
  });

  test("should testing getUserAllowed function", async () => {
    const fechContractName = mockReadContractInstance({
      address: address,
      abi: abi,
      functionName: "allowed",
      args: [fakeUserAddress],
    });

    expect(fechContractName).resolves.toEqual(true);
  });
});
