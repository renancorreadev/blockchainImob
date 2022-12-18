import { describe, expect, vi } from "vitest";
import { accounts } from "@test/utils/mockProvider";
import { BlockImobReadCalls } from "./read-contract-interaction";
import { BigNumber } from "ethers";

type getQueryFromTokenIdPromiseReturnType = {
  district: string;
  registry: BigNumber;
};

type MakeSutTypes = {
  _mock: BlockImobReadCalls;
  fakeAddress: `0x${string}`;
  fakeBalance: BigNumber;
  fakeIDApprove: BigNumber;
  fakeTokenUri: string;
  fakeTokenID: BigNumber;
  fakeApproveTwoAddress: {
    0: `0x${string}`;
    1: `0x${string}`;
  };
  baseURIToken: string;
  userExpiredReturn: BigNumber;
};

const makeSut = (): MakeSutTypes => {
  const _mock = new BlockImobReadCalls();
  const fakeAddress = accounts[0]?.address as `0x${string}`;
  const fakeBalance = BigNumber.from(100000);
  const fakeIDApprove = BigNumber.from(1);
  const fakeTokenUri = "https://ipfs.io/ipfs/QmZ9Z";
  const fakeTokenID = BigNumber.from("442");
  const fakeApproveTwoAddress = {
    0: fakeAddress,
    1: fakeAddress,
  };
  const baseURIToken = "https://ipfs.io/ipfs/";
  const fakeNextToken = BigNumber.from(2);

  const queryTokenIDResult: getQueryFromTokenIdPromiseReturnType = {
    district: "São Paulo",
    registry: BigNumber.from(1),
  };
  const userExpiredReturn = BigNumber.from(23);

  vi.spyOn(_mock, "getContractName").mockResolvedValue("BlockImob");
  vi.spyOn(_mock, "getUserAllowed").mockResolvedValue(false);
  vi.spyOn(_mock, "getBalanceOf").mockResolvedValue(fakeBalance);
  vi.spyOn(_mock, "getApproved").mockResolvedValue(fakeAddress);
  vi.spyOn(_mock, "getTokenURI").mockResolvedValue(fakeTokenUri);
  vi.spyOn(_mock, "getIsApproveForAll").mockResolvedValue(true);
  vi.spyOn(_mock, "getBaseURI").mockResolvedValue(baseURIToken);
  vi.spyOn(_mock, "getOwnerOf").mockResolvedValue(fakeAddress);
  vi.spyOn(_mock, "getNextTokenId").mockResolvedValue(fakeNextToken);
  vi.spyOn(_mock, "getQueryFromTokenId").mockResolvedValue(queryTokenIDResult);
  vi.spyOn(_mock, "getQueryToTokenId").mockResolvedValue(fakeTokenID);
  vi.spyOn(_mock, "getReturnAllowed").mockResolvedValue(true);
  vi.spyOn(_mock, "uriFromQuery").mockResolvedValue(fakeTokenUri);
  vi.spyOn(_mock, "userExpires").mockResolvedValue(userExpiredReturn);
  vi.spyOn(_mock, "userOf").mockResolvedValue(fakeAddress);

  return {
    _mock,
    fakeAddress,
    fakeBalance,
    fakeIDApprove,
    fakeTokenUri,
    fakeTokenID,
    fakeApproveTwoAddress,
    baseURIToken,
    userExpiredReturn,
  };
};

describe("ReadContractInteraction", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should return the correct contract name", async () => {
    const { _mock } = makeSut();

    const tx = await _mock.getContractName();
    expect(tx).toBe("BlockImob");
  });

  test("should return the correct getUserAllowed it false", async () => {
    const { _mock, fakeAddress } = makeSut();

    const result = await _mock.getUserAllowed(fakeAddress);

    expect(result).toBe(false);
  });

  test("should return the correct getUserAllowed it true", async () => {
    const { _mock, fakeAddress } = makeSut();

    vi.spyOn(_mock, "getUserAllowed").mockResolvedValue(true);

    const result = await _mock.getUserAllowed(fakeAddress);

    expect(result).toBe(true);
  });

  test("should call GetBalanceOf function callBack", async () => {
    const { _mock, fakeAddress, fakeBalance } = makeSut();

    const result = await _mock.getBalanceOf(fakeAddress);

    expect(result).toBe(fakeBalance);
  });

  test("should call getApprove  function callBack", async () => {
    const { _mock, fakeAddress, fakeIDApprove } = makeSut();

    const result = await _mock.getApproved(fakeIDApprove);

    expect(result).toBe(fakeAddress);
  });

  test("should call getTokenURI  function callBack", async () => {
    const { _mock, fakeTokenUri } = makeSut();

    const fakeTokenId = BigNumber.from(1);
    const result = await _mock.getTokenURI(fakeTokenId);

    expect(result).toBe(fakeTokenUri);
  });

  test("should call getIsApproveForAll  function callBack", async () => {
    const { _mock, fakeApproveTwoAddress } = makeSut();

    const result = await _mock.getIsApproveForAll({
      firstAddress: fakeApproveTwoAddress[0],
      secondAddress: fakeApproveTwoAddress[1],
    });

    expect(result).toBe(true);
  });

  test("should call getBaseUriToken  function callBack", async () => {
    const { _mock, baseURIToken } = makeSut();

    const result = await _mock.getBaseURI();

    expect(result).toBe(baseURIToken);
  });

  test("should call getOwnerOf  function callBack", async () => {
    const { _mock, fakeIDApprove, fakeAddress } = makeSut();

    const result = await _mock.getOwnerOf(fakeIDApprove);

    expect(result).toBe(fakeAddress);
  });

  test("should call getNextTokenId  function callBack", async () => {
    const { _mock } = makeSut();

    const result = await _mock.getNextTokenId();
    expect(result).toStrictEqual(BigNumber.from(2));
  });

  test("should call getQueryFromTokenId  function callBack", async () => {
    const { _mock, fakeIDApprove } = makeSut();

    const result = await _mock.getQueryFromTokenId(fakeIDApprove);
    expect(result).toStrictEqual({
      district: "São Paulo",
      registry: BigNumber.from(1),
    });
  });

  test("should call getQueryToTokenId  function callBack", async () => {
    const { _mock, fakeIDApprove, fakeTokenID, fakeAddress } = makeSut();

    const result = await _mock.getQueryToTokenId(fakeAddress, fakeIDApprove);
    expect(result).toEqual(fakeTokenID);
  });

  test("should call getReturnAllowed  function callBack", async () => {
    const { _mock, fakeAddress } = makeSut();

    const result = await _mock.getReturnAllowed(fakeAddress);
    expect(result).toEqual(true);
  });

  test("should call uriFromQuery  function callBack", async () => {
    const { _mock, fakeTokenUri } = makeSut();

    const fakeURiToQuery = "https://blockimob.com/api/v1/properties/";
    const fakeID = BigNumber.from(3213);

    const result = await _mock.uriFromQuery(fakeURiToQuery, fakeID);
    expect(result).toEqual(fakeTokenUri);
  });

  test("should call userExpires  function callBack", async () => {
    const { _mock, userExpiredReturn } = makeSut();

    const tokenIdUser = BigNumber.from(23213);
    const result = await _mock.userExpires(tokenIdUser);

    expect(result).toEqual(userExpiredReturn);
  });

  test("should call userOf  function callBack", async () => {
    const { _mock, fakeAddress } = makeSut();

    const tokenIdUser = BigNumber.from(332);
    const result = await _mock.userOf(tokenIdUser);

    expect(result).toEqual(fakeAddress);
  });
});
