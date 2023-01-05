import { readContract } from "@wagmi/core";
import { BigNumber } from "ethers";

/** Contract configuration */
import { ConsultContractConfig as OracleContract } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/oracle-gov-abi";

//errors class
import { ConsultGovError } from "@infra/errors";

//protocols
import { ConsultGovReadsInterface } from "@data/protocols/consult-gov-reads-protocol";

const { oracledAddress } = OracleContract;
const address = oracledAddress;

export class ConsultGovReads implements ConsultGovReadsInterface {
  getConsultRegular = async (_idImobToken: number): Promise<boolean> => {
    const idImobToken = BigNumber.from(Number(_idImobToken));
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "ConsultRegular",
        args: [idImobToken],
      });

      return txResult;
    } catch (e) {
      throw new ConsultGovError();
    }
  };

  getConsultMap = async (_registryRural: number): Promise<boolean> => {
    const registryRural = BigNumber.from(Number(_registryRural));
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "consultMap",
        args: [registryRural],
      });

      return txResult;
    } catch (e) {
      throw new ConsultGovError();
    }
  };
}
