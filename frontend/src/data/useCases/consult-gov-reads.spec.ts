import { describe, expect, Mock, vi } from "vitest";
import { ConsultGovReads } from "./consult-gov-reads";
import { BigNumber } from "ethers";
import {
  getConsultRegular,
  getConsultMap,
  MockParams,
} from "../tests/mock-consult.reads";

type MakeSutTypes = {
  _mock: ConsultGovReads;
  fakeID: BigNumber;
  getConsultRegular: Mock<[mockParams: MockParams], Promise<boolean>>;
  getConsultMap: Mock<[mockParams: MockParams], Promise<boolean>>;
};

const makeSut = (): MakeSutTypes => {
  const _mock = new ConsultGovReads();
  const fakeID = BigNumber.from(1);

  return {
    _mock,
    fakeID,
    getConsultRegular,
    getConsultMap,
  };
};

describe("Should testing Read Contract Returns Consult Oracle", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should return the consult Map per ID is True or False", async () => {
    const { getConsultMap, _mock, fakeID } = makeSut();

    getConsultMap.mockResolvedValue(true);

    const fetchResponse = await getConsultMap({
      _mockGetConsultContract: _mock,
      args: fakeID,
    });

    expect(fetchResponse).toBe(true);
  });

  test("should return the consult Regular is True or False", async () => {
    const { getConsultRegular, _mock, fakeID } = makeSut();

    getConsultRegular.mockResolvedValue(true);

    const fetchResponse = await getConsultRegular({
      _mockGetConsultContract: _mock,
      args: fakeID,
    });

    expect(fetchResponse).toBe(true);
  });
});
