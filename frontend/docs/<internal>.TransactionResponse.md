# Interface: TransactionResponse

[<internal>](../wiki/%3Cinternal%3E).TransactionResponse

## Hierarchy

- [`Transaction`](../wiki/%3Cinternal%3E.Transaction)

  ↳ **`TransactionResponse`**

## Table of contents

### Properties

- [accessList](../wiki/%3Cinternal%3E.TransactionResponse#accesslist)
- [blockHash](../wiki/%3Cinternal%3E.TransactionResponse#blockhash)
- [blockNumber](../wiki/%3Cinternal%3E.TransactionResponse#blocknumber)
- [chainId](../wiki/%3Cinternal%3E.TransactionResponse#chainid)
- [confirmations](../wiki/%3Cinternal%3E.TransactionResponse#confirmations)
- [data](../wiki/%3Cinternal%3E.TransactionResponse#data)
- [from](../wiki/%3Cinternal%3E.TransactionResponse#from)
- [gasLimit](../wiki/%3Cinternal%3E.TransactionResponse#gaslimit)
- [gasPrice](../wiki/%3Cinternal%3E.TransactionResponse#gasprice)
- [hash](../wiki/%3Cinternal%3E.TransactionResponse#hash)
- [maxFeePerGas](../wiki/%3Cinternal%3E.TransactionResponse#maxfeepergas)
- [maxPriorityFeePerGas](../wiki/%3Cinternal%3E.TransactionResponse#maxpriorityfeepergas)
- [nonce](../wiki/%3Cinternal%3E.TransactionResponse#nonce)
- [r](../wiki/%3Cinternal%3E.TransactionResponse#r)
- [raw](../wiki/%3Cinternal%3E.TransactionResponse#raw)
- [s](../wiki/%3Cinternal%3E.TransactionResponse#s)
- [timestamp](../wiki/%3Cinternal%3E.TransactionResponse#timestamp)
- [to](../wiki/%3Cinternal%3E.TransactionResponse#to)
- [type](../wiki/%3Cinternal%3E.TransactionResponse#type)
- [v](../wiki/%3Cinternal%3E.TransactionResponse#v)
- [value](../wiki/%3Cinternal%3E.TransactionResponse#value)

### Methods

- [wait](../wiki/%3Cinternal%3E.TransactionResponse#wait)

## Properties

### accessList

• `Optional` **accessList**: [`AccessList`](../wiki/%3Cinternal%3E#accesslist)

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[accessList](../wiki/%3Cinternal%3E.Transaction#accesslist)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:40

___

### blockHash

• `Optional` **blockHash**: `string`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

___

### blockNumber

• `Optional` **blockNumber**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

___

### chainId

• **chainId**: `number`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[chainId](../wiki/%3Cinternal%3E.Transaction#chainid)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:35

___

### confirmations

• **confirmations**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

___

### data

• **data**: `string`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[data](../wiki/%3Cinternal%3E.Transaction#data)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:33

___

### from

• **from**: `string`

#### Overrides

[Transaction](../wiki/%3Cinternal%3E.Transaction).[from](../wiki/%3Cinternal%3E.Transaction#from)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

___

### gasLimit

• **gasLimit**: [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[gasLimit](../wiki/%3Cinternal%3E.Transaction#gaslimit)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:31

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[gasPrice](../wiki/%3Cinternal%3E.Transaction#gasprice)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:32

___

### hash

• **hash**: `string`

#### Overrides

[Transaction](../wiki/%3Cinternal%3E.Transaction).[hash](../wiki/%3Cinternal%3E.Transaction#hash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[maxFeePerGas](../wiki/%3Cinternal%3E.Transaction#maxfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:42

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[maxPriorityFeePerGas](../wiki/%3Cinternal%3E.Transaction#maxpriorityfeepergas)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:41

___

### nonce

• **nonce**: `number`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[nonce](../wiki/%3Cinternal%3E.Transaction#nonce)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:30

___

### r

• `Optional` **r**: `string`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[r](../wiki/%3Cinternal%3E.Transaction#r)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:36

___

### raw

• `Optional` **raw**: `string`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

___

### s

• `Optional` **s**: `string`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[s](../wiki/%3Cinternal%3E.Transaction#s)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:37

___

### timestamp

• `Optional` **timestamp**: `number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

___

### to

• `Optional` **to**: `string`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[to](../wiki/%3Cinternal%3E.Transaction#to)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:28

___

### type

• `Optional` **type**: ``null`` \| `number`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[type](../wiki/%3Cinternal%3E.Transaction#type)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:39

___

### v

• `Optional` **v**: `number`

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[v](../wiki/%3Cinternal%3E.Transaction#v)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:38

___

### value

• **value**: [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Inherited from

[Transaction](../wiki/%3Cinternal%3E.Transaction).[value](../wiki/%3Cinternal%3E.Transaction#value)

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:34

## Methods

### wait

▸ **wait**(`confirmations?`): `Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:31
