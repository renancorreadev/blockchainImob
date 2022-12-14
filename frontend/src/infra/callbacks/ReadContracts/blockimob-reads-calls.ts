

import {getContractName} from './ReadFunctions/blockImobCallBacks'
import {ImobReadContractInterface} from './protocols/blockimob-read-calls-protocols'

export class BlockImobReadContract implements ImobReadContractInterface {

  async getContractName() {
    const contractName = await getContractName()
    return contractName
  }
}
