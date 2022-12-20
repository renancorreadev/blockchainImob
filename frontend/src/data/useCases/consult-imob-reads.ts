import { readContract } from "@wagmi/core";
import { BigNumber } from "ethers";
import { ConsultContractConfig } from "@utils/ContractConfigs";
import { abi } from "@utils/formatAbi/oracle-gov-abi";

const address = ConsultContractConfig.contractAddress as string;

interface ConsultImobReadInterface {
  getConsultRegular: (_idImob: BigNumber) => Promise<boolean>;
  getConsultMap: (_registryRural: BigNumber) => Promise<boolean>;
}

export class ConsultImobRead implements ConsultImobReadInterface {
  getConsultRegular = async (_idImob: BigNumber): Promise<boolean> => {
    try {
      const txResult = await readContract({
        address,
        abi,
        functionName: "ConsultRegular",
        args: [_idImob],
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
