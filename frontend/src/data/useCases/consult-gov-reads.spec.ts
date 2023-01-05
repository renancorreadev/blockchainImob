import { describe, expect, Mock, vi } from "vitest";
import { ConsultGovReads } from "./consult-gov-reads";
import {
  getConsultRegular,
  getConsultMap,
  MockParams,
} from "../tests/mock-consult.reads";

import { ConsultGovError } from "@infra/errors";

type MakeSutTypes = {
  _mock: ConsultGovReads;
  fakeID: number;
  getConsultRegular: Mock<[MockParams], Promise<boolean>>;
  getConsultMap: Mock<[MockParams], Promise<boolean>>;
};

const makeSut = (): MakeSutTypes => {
  const _mock = new ConsultGovReads();
  const fakeID = 1;

  return {
    _mock,
    fakeID,
    getConsultRegular,
    getConsultMap,
  };
};

describe("Should testing Read Contract Returns Consult Database", () => {
  let _mock: ConsultGovReads;
  let fakeID: number;
  let getConsultRegular: Mock<[MockParams], Promise<boolean>>;
  let getConsultMap: Mock<[MockParams], Promise<boolean>>;

  beforeEach(() => {
    ({ _mock, fakeID, getConsultRegular, getConsultMap } = makeSut());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should return the consult Regular is True or False", async () => {
    getConsultRegular.mockResolvedValue(true);

    const fetchResponse = await getConsultRegular({
      _mockGetConsultContract: _mock,
      args: fakeID,
    });

    expect(fetchResponse).toBe(true);
  });

  test("should throw an error if getConsultRegular fails", async () => {
    getConsultRegular.mockRejectedValue(new ConsultGovError());

    try {
      await getConsultRegular({
        _mockGetConsultContract: _mock,
        args: fakeID,
      });
    } catch (e) {
      expect(e).toBeInstanceOf(ConsultGovError);
    }
  });

  test("should return the consult Map per ID is True or False", async () => {
    getConsultMap.mockResolvedValue(true);

    const fetchResponse = await getConsultMap({
      _mockGetConsultContract: _mock,
      args: fakeID,
    });

    expect(fetchResponse).toBe(true);
  });

  test("should throw an error if getConsultMap fails", async () => {
    getConsultMap.mockRejectedValue(new ConsultGovError());

    try {
      await getConsultMap({
        _mockGetConsultContract: _mock,
        args: fakeID,
      });
    } catch (e) {
      expect(e).toBeInstanceOf(ConsultGovError);
    }
  });
});
