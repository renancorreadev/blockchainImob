import  {BlockImobReadContract} from './blockimob-reads-calls'

type SutTypes = {
  getContractName: Promise<string | undefined>
}

const makeSut = (): SutTypes => {
  const sut = new BlockImobReadContract()

  return {
    getContractName: sut.getContractName()
  }
}

describe('BlockImobReadContract', () => {
  test('Shold function ContractName is called ', () => {
    const {getContractName} = makeSut()
    expect(getContractName).toHaveBeenCalled()
  });
});
