

import {getContractName} from './ReadFunctions/blockImobCallBacks'
// import {ImobReadContractInterface} from './protocols/blockimob-read-calls-protocols'

export class BlockImobReadContract {

  async getContractNameRequest(): Promise<string | undefined> {
    const contractName = await getContractName()
    return contractName
  }
}
