# Class: Signer

[<internal>](../wiki/%3Cinternal%3E).Signer

## Hierarchy

- **`Signer`**

  ↳ [`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Signer#constructor)

### Properties

- [\_isSigner](../wiki/%3Cinternal%3E.Signer#_issigner)
- [provider](../wiki/%3Cinternal%3E.Signer#provider)

### Methods

- [\_checkProvider](../wiki/%3Cinternal%3E.Signer#_checkprovider)
- [call](../wiki/%3Cinternal%3E.Signer#call)
- [checkTransaction](../wiki/%3Cinternal%3E.Signer#checktransaction)
- [connect](../wiki/%3Cinternal%3E.Signer#connect)
- [estimateGas](../wiki/%3Cinternal%3E.Signer#estimategas)
- [getAddress](../wiki/%3Cinternal%3E.Signer#getaddress)
- [getBalance](../wiki/%3Cinternal%3E.Signer#getbalance)
- [getChainId](../wiki/%3Cinternal%3E.Signer#getchainid)
- [getFeeData](../wiki/%3Cinternal%3E.Signer#getfeedata)
- [getGasPrice](../wiki/%3Cinternal%3E.Signer#getgasprice)
- [getTransactionCount](../wiki/%3Cinternal%3E.Signer#gettransactioncount)
- [populateTransaction](../wiki/%3Cinternal%3E.Signer#populatetransaction)
- [resolveName](../wiki/%3Cinternal%3E.Signer#resolvename)
- [sendTransaction](../wiki/%3Cinternal%3E.Signer#sendtransaction)
- [signMessage](../wiki/%3Cinternal%3E.Signer#signmessage)
- [signTransaction](../wiki/%3Cinternal%3E.Signer#signtransaction)
- [isSigner](../wiki/%3Cinternal%3E.Signer#issigner)

## Constructors

### constructor

• **new Signer**()

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:30

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### provider

• `Optional` `Readonly` **provider**: [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:24

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

___

### checkTransaction

▸ **checkTransaction**(`transaction`): [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

[`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

___

### connect

▸ `Abstract` **connect**(`provider`): [`Signer`](../wiki/%3Cinternal%3E.Signer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](../wiki/%3Cinternal%3E.Provider) |

#### Returns

[`Signer`](../wiki/%3Cinternal%3E.Signer)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:28

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ `Abstract` **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:25

___

### getBalance

▸ **getBalance**(`blockTag?`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Returns

`Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:37

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

___

### populateTransaction

▸ **populateTransaction**(`transaction`): `Promise`<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:41

___

### resolveName

▸ **resolveName**(`name`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

___

### sendTransaction

▸ **sendTransaction**(`transaction`): `Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:35

___

### signMessage

▸ `Abstract` **signMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| [`Bytes`](../wiki/%3Cinternal%3E#bytes) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:26

___

### signTransaction

▸ `Abstract` **signTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:27

___

### isSigner

▸ `Static` **isSigner**(`value`): value is Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Signer

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
