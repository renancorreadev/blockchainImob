import { readContract } from "@wagmi/core";
import { BigNumber } from "ethers";

import { ConsultContractConfig as OracleContract } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/oracle-gov-abi";

const { oracledAddress } = OracleContract;
const address = oracledAddress;

interface ConsultGovReadsInterface {
  getConsultRegular: (_idImob: BigNumber) => Promise<boolean>;
  getConsultMap: (_registryRural: BigNumber) => Promise<boolean>;
}

export class ConsultGovReads implements ConsultGovReadsInterface {
  getConsultRegular = async (_idImobToken: BigNumber): Promise<boolean> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "ConsultRegular",
        args: [_idImobToken],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }

    return new Error() as never;
  };

  getConsultMap = async (_registryRural: BigNumber): Promise<boolean> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "consultMap",
        args: [_registryRural],
      });

      return txResult;
    } catch (e) {
      console.log(e);
    }

    return new Error() as never;
  };
}
