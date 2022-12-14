import  {BlockImobReadContract} from './blockimob-reads-calls'
import {jest} from '@jest/globals'

type SutTypes = {
  sut: BlockImobReadContract
}

const makeSut = (): SutTypes => {
  const sut = new BlockImobReadContract()
  return {
    sut
  }
}

describe('BlockImobReadContract', () => {
  test('Shold function ContractName is called ',() => {
    const {sut} = makeSut()
    const getContractNameSpy = jest.spyOn(sut, 'getContractNameRequest')
    sut.getContractNameRequest()
    expect(getContractNameSpy).toHaveBeenCalled()
  });

  test('should to called times in contract', () => {
    const {sut} = makeSut()
    const getContractNameSpy = jest.spyOn(sut, 'getContractNameRequest')
    sut.getContractNameRequest()
    expect(getContractNameSpy).toHaveBeenCalledTimes(1)
   })

   test('Shold the result is correct!', () => {
    const {sut} = makeSut()

    const getContractNameSpy = jest.spyOn(sut, 'getContractNameRequest')

    getContractNameSpy.mockImplementationOnce(() => {
      return new Promise(resolve => resolve('BlockImob'))
    })
   })
});
