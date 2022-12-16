import { GetUserAllowedIn } from "./blockimob-reads-calls";

export type BlockImobReadContractInterface = {
  getContractNameRequest: () => Promise<string>;
  getUserAllowed({ addressProvider }: GetUserAllowedIn): Promise<boolean>;
};
