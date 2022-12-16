/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEvent, act, render, screen, userEvent } from "@test/index";
import { beforeEach, describe, expect, vi } from "vitest";

import { Connect } from "@test/utils/connect";
import { mockReadcontract } from "@test/utils/mockReadContract";

import { abi } from "@utils/formatAbi/block-imob-abi";
import { BlockImobContractConfig } from "@utils/ContractConfigs/BlockImobContractConfig";

describe("ReadContractInteraction", () => {
  let user: UserEvent;
  let container: any;

  beforeEach(() => {
    user = userEvent.setup();

    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;

    vi.restoreAllMocks();
  });

  test("should return the correct contract name", async () => {
    render(<Connect />);

    /** Connect to get a Provider mock */
    const connect = screen.getByRole("button", { name: "Mock" });
    act(() => {
      user.click(connect);
    });
    expect(connect).toBeInTheDocument();

    /** Open the ReadContractInteraction  */
    const mockContractInstance = mockReadcontract();
    const address = BlockImobContractConfig.contractAddress as string;

    const fechContractName = mockContractInstance({
      address: address,
      abi: abi,
      functionName: "name",
    });

    expect(fechContractName).resolves.toEqual("BlockImob");
  });
});
