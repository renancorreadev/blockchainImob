import {PaymentsdContractConfig} from '../ContractConfigs/'

const PaymentsContractArguments = [
  PaymentsdContractConfig.blockImobAddress,
  PaymentsdContractConfig.consultAddress
] as const

export default PaymentsContractArguments