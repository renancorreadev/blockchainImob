import { BigNumber } from "ethers";
import { ConsultImobRead } from "@data/useCases/consult-imob-reads";
import { vi } from "vitest";

export type MockParams = {
  _mockGetConsultContract: ConsultImobRead;
  args: BigNumber;
};

export const getConsultRegular = vi.fn((mockParams: MockParams) => {
  return mockParams._mockGetConsultContract.getConsultRegular(mockParams.args);
});

export const getConsultMap = vi.fn((mockParams: MockParams) => {
  return mockParams._mockGetConsultContract.getConsultMap(mockParams.args);
});
