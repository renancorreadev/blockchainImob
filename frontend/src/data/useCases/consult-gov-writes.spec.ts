import { BigNumber } from "ethers";
import { vi } from "vitest";
import { ConsultGovWrites } from "./consult-gov-writes";

import { ConsultGovError } from "@infra/errors";
import {
  setMappingRuralArgs,
  confrontMapArgs,
} from "@data/protocols/consult-gov-write-protocol";

type setRegularParams = {
  _idImob: BigNumber;
  _regular: boolean;
};

interface SutTypes {
  mockConsultGovWriteClass: ConsultGovWrites;
  params: setRegularParams;
  setMapaRuralParams: setMappingRuralArgs;
  confrontMapParams: confrontMapArgs;
}

const makeSut = (): SutTypes => {
  const mockConsultGovWriteClass = new ConsultGovWrites();
  const params = {
    _idImob: BigNumber.from(123),
    _regular: true,
  };

  const setMapaRuralParams = {
    _registryRuralIPFS:
      "https://bafkreie7ylmkqhbixuz7svqv6wsw5atitzcuij7m4iqrvvu3bc4re2p3qy.ipfs.nftstorage.link/",
  };
  const confrontMapParams = {
    _registryRuralIPFS: "",
    _registryRural: 1,
  };
  return {
    mockConsultGovWriteClass,
    params,
    setMapaRuralParams,
    confrontMapParams,
  };
};

describe("ConsultGovWrites", () => {
  let mockConsultGovWriteClass: ConsultGovWrites;
  let params: setRegularParams;
  let setMapaRuralParams: setMappingRuralArgs;
  let confrontMapParams: confrontMapArgs;

  beforeEach(() => {
    ({
      mockConsultGovWriteClass,
      params,
      setMapaRuralParams,
      confrontMapParams,
    } = makeSut());
  });

  test("Should testing setRegular function", () => {
    it("should send a transaction and return a transaction receipt", async () => {
      // Mock the `writeContract` method to return a dummy transaction receipt
      mockConsultGovWriteClass.setRegular = vi.fn().mockResolvedValue({
        wait: vi.fn().mockResolvedValue({
          transactionHash: "0x123",
          blockNumber: 123,
          gasUsed: BigNumber.from(123),
          type: 1,
          confirmations: 123,
        }),
      });

      const receipt = await mockConsultGovWriteClass.setRegular(params);
      expect(receipt).toEqual({
        transactionHash: "0x123",
        blockNumber: 123,
        gasUsed: BigNumber.from(123),
        type: 1,
        confirmations: 123,
      });
    });

    it("should throw an error if the transaction fails", async () => {
      // Mock the `setMapRural` method to return a dummy transaction receipt with status 0 (failed)
      mockConsultGovWriteClass.setMapRural = vi.fn().mockResolvedValue({
        wait: vi.fn().mockResolvedValue({
          transactionHash: "0x123",
          blockNumber: 123,
          gasUsed: BigNumber.from(123),
          type: 1,
          confirmations: 123,
          status: 0,
        }),
      });

      await expect(mockConsultGovWriteClass.setRegular(params)).rejects.toThrow(
        ConsultGovError
      );
    });
  });

  test("Should testing setMapRural function", () => {
    it("should send a transaction and return a transaction receipt", async () => {
      // Mock the `writeContract` method to return a dummy transaction receipt
      mockConsultGovWriteClass.setMapRural = vi.fn().mockResolvedValue({
        wait: vi.fn().mockResolvedValue({
          transactionHash: "0x123",
          blockNumber: 123,
          gasUsed: BigNumber.from(123),
          type: 1,
          confirmations: 123,
        }),
      });

      const receipt = await mockConsultGovWriteClass.setMapRural(
        setMapaRuralParams
      );
      expect(receipt).toEqual({
        transactionHash: "0x123",
        blockNumber: 123,
        gasUsed: BigNumber.from(123),
        type: 1,
        confirmations: 123,
      });
    });

    it("should throw an error if the transaction fails", async () => {
      // Mock the `setMapRural` method to return a dummy transaction receipt with status 0 (failed)
      mockConsultGovWriteClass.setMapRural = vi.fn().mockResolvedValue({
        wait: vi.fn().mockResolvedValue({
          transactionHash: "0x123",
          blockNumber: 123,
          gasUsed: BigNumber.from(123),
          type: 1,
          confirmations: 123,
          status: 0,
        }),
      });

      await expect(
        mockConsultGovWriteClass.setMapRural(setMapaRuralParams)
      ).rejects.toThrow(ConsultGovError);
    });
  });

  test("Should testing confrontMap function", () => {
    it("should send a transaction and return a transaction receipt", async () => {
      // Mock the `writeContract` method to return a dummy transaction receipt
      mockConsultGovWriteClass.confrontMap = vi.fn().mockResolvedValue({
        wait: vi.fn().mockResolvedValue({
          transactionHash: "0x123",
          blockNumber: 123,
          gasUsed: BigNumber.from(123),
          type: 1,
          confirmations: 123,
        }),
      });

      const receipt = await mockConsultGovWriteClass.confrontMap(
        confrontMapParams
      );
      expect(receipt).toEqual({
        transactionHash: "0x123",
        blockNumber: 123,
        gasUsed: BigNumber.from(123),
        type: 1,
        confirmations: 123,
      });
    });

    it("should throw an error if the transaction fails", async () => {
      // Mock the `setMapRural` method to return a dummy transaction receipt with status 0 (failed)
      mockConsultGovWriteClass.confrontMap = vi.fn().mockResolvedValue({
        wait: vi.fn().mockResolvedValue({
          transactionHash: "0x123",
          blockNumber: 123,
          gasUsed: BigNumber.from(123),
          type: 1,
          confirmations: 123,
          status: 0,
        }),
      });

      await expect(
        mockConsultGovWriteClass.setMapRural(confrontMapParams)
      ).rejects.toThrow(ConsultGovError);
    });
  });
});
