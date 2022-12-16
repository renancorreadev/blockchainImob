import { readContract } from "@wagmi/core";
import { MockedFunction } from "vitest";

export const mockReadcontract = (): MockedFunction<typeof readContract> => {
  const mock = readContract as MockedFunction<typeof readContract>;

  return mock;
};
