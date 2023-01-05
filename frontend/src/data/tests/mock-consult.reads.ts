import { ConsultGovReads } from "@data/useCases/consult-gov-reads";
import { vi } from "vitest";

export type MockParams = {
  _mockGetConsultContract: ConsultGovReads;
  args: number;
};

export const getConsultRegular = vi.fn((mockParams: MockParams) => {
  return mockParams._mockGetConsultContract.getConsultRegular(mockParams.args);
});

export const getConsultMap = vi.fn((mockParams: MockParams) => {
  return mockParams._mockGetConsultContract.getConsultMap(mockParams.args);
});
