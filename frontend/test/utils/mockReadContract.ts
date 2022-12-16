import { readContract } from "@wagmi/core";
import { Mocked, vi } from "vitest";

export const mockReadcontract = (): Mocked<typeof readContract> => {
  vi.fn().mockClear().getMockImplementation();

  const readContractMockInstance = readContract as Mocked<typeof readContract>;

  const mockReadContract = readContractMockInstance.bind(
    readContract as unknown as Mocked<typeof readContract>
  );

  return mockReadContract;
};
