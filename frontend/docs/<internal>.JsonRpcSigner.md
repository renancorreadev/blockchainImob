# Class: JsonRpcSigner

[<internal>](../wiki/%3Cinternal%3E).JsonRpcSigner

## Hierarchy

- [`Signer`](../wiki/%3Cinternal%3E.Signer)

  ↳ **`JsonRpcSigner`**

  ↳↳ [`UncheckedJsonRpcSigner`](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner)

## Implements

- [`TypedDataSigner`](../wiki/%3Cinternal%3E.TypedDataSigner)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.JsonRpcSigner#constructor)

### Properties

- [\_address](../wiki/%3Cinternal%3E.JsonRpcSigner#_address)
- [\_index](../wiki/%3Cinternal%3E.JsonRpcSigner#_index)
- [\_isSigner](../wiki/%3Cinternal%3E.JsonRpcSigner#_issigner)
- [provider](../wiki/%3Cinternal%3E.JsonRpcSigner#provider)

### Methods

- [\_checkProvider](../wiki/%3Cinternal%3E.JsonRpcSigner#_checkprovider)
- [\_legacySignMessage](../wiki/%3Cinternal%3E.JsonRpcSigner#_legacysignmessage)
- [\_signTypedData](../wiki/%3Cinternal%3E.JsonRpcSigner#_signtypeddata)
- [call](../wiki/%3Cinternal%3E.JsonRpcSigner#call)
- [checkTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#checktransaction)
- [connect](../wiki/%3Cinternal%3E.JsonRpcSigner#connect)
- [connectUnchecked](../wiki/%3Cinternal%3E.JsonRpcSigner#connectunchecked)
- [estimateGas](../wiki/%3Cinternal%3E.JsonRpcSigner#estimategas)
- [getAddress](../wiki/%3Cinternal%3E.JsonRpcSigner#getaddress)
- [getBalance](../wiki/%3Cinternal%3E.JsonRpcSigner#getbalance)
- [getChainId](../wiki/%3Cinternal%3E.JsonRpcSigner#getchainid)
- [getFeeData](../wiki/%3Cinternal%3E.JsonRpcSigner#getfeedata)
- [getGasPrice](../wiki/%3Cinternal%3E.JsonRpcSigner#getgasprice)
- [getTransactionCount](../wiki/%3Cinternal%3E.JsonRpcSigner#gettransactioncount)
- [populateTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#populatetransaction)
- [resolveName](../wiki/%3Cinternal%3E.JsonRpcSigner#resolvename)
- [sendTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#sendtransaction)
- [sendUncheckedTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#senduncheckedtransaction)
- [signMessage](../wiki/%3Cinternal%3E.JsonRpcSigner#signmessage)
- [signTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#signtransaction)
- [unlock](../wiki/%3Cinternal%3E.JsonRpcSigner#unlock)
- [isSigner](../wiki/%3Cinternal%3E.JsonRpcSigner#issigner)

## Constructors

### constructor

• **new JsonRpcSigner**(`constructorGuard`, `provider`, `addressOrIndex?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `provider` | [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider) |
| `addressOrIndex?` | `string` \| `number` |

#### Overrides

[Signer](../wiki/%3Cinternal%3E.Signer).[constructor](../wiki/%3Cinternal%3E.Signer#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:13

## Properties

### \_address

• **\_address**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:12

___

### \_index

• **\_index**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:11

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[_isSigner](../wiki/%3Cinternal%3E.Signer#_issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### provider

• `Readonly` **provider**: [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider)

#### Overrides

[Signer](../wiki/%3Cinternal%3E.Signer).[provider](../wiki/%3Cinternal%3E.Signer#provider)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:10

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation?` | `string` |

#### Returns

`void`

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[_checkProvider](../wiki/%3Cinternal%3E.Signer#_checkprovider)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

___

### \_legacySignMessage

▸ **_legacySignMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| [`Bytes`](../wiki/%3Cinternal%3E#bytes) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:21

___

### \_signTypedData

▸ **_signTypedData**(`domain`, `types`, `value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`TypedDataDomain`](../wiki/%3Cinternal%3E.TypedDataDomain) |
| `types` | [`Record`](../wiki/%3Cinternal%3E#record)<`string`, [`TypedDataField`](../wiki/%3Cinternal%3E.TypedDataField)[]\> |
| `value` | [`Record`](../wiki/%3Cinternal%3E#record)<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Implementation of

[TypedDataSigner](../wiki/%3Cinternal%3E.TypedDataSigner).[_signTypedData](../wiki/%3Cinternal%3E.TypedDataSigner#_signtypeddata)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:22

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

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[call](../wiki/%3Cinternal%3E.Signer#call)

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

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[checkTransaction](../wiki/%3Cinternal%3E.Signer#checktransaction)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

___

### connect

▸ **connect**(`provider`): [`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](../wiki/%3Cinternal%3E.Provider) |

#### Returns

[`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Overrides

[Signer](../wiki/%3Cinternal%3E.Signer).[connect](../wiki/%3Cinternal%3E.Signer#connect)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:14

___

### connectUnchecked

▸ **connectUnchecked**(): [`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Returns

[`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:15

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[estimateGas](../wiki/%3Cinternal%3E.Signer#estimategas)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Overrides

[Signer](../wiki/%3Cinternal%3E.Signer).[getAddress](../wiki/%3Cinternal%3E.Signer#getaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:16

___

### getBalance

▸ **getBalance**(`blockTag?`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[getBalance](../wiki/%3Cinternal%3E.Signer#getbalance)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[getChainId](../wiki/%3Cinternal%3E.Signer#getchainid)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Returns

`Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[getFeeData](../wiki/%3Cinternal%3E.Signer#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[getGasPrice](../wiki/%3Cinternal%3E.Signer#getgasprice)

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

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[getTransactionCount](../wiki/%3Cinternal%3E.Signer#gettransactioncount)

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

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[populateTransaction](../wiki/%3Cinternal%3E.Signer#populatetransaction)

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

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[resolveName](../wiki/%3Cinternal%3E.Signer#resolvename)

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

#### Overrides

[Signer](../wiki/%3Cinternal%3E.Signer).[sendTransaction](../wiki/%3Cinternal%3E.Signer#sendtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:19

___

### sendUncheckedTransaction

▸ **sendUncheckedTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:17

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| [`Bytes`](../wiki/%3Cinternal%3E#bytes) |

#### Returns

`Promise`<`string`\>

#### Overrides

[Signer](../wiki/%3Cinternal%3E.Signer).[signMessage](../wiki/%3Cinternal%3E.Signer#signmessage)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:20

___

### signTransaction

▸ **signTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Signer](../wiki/%3Cinternal%3E.Signer).[signTransaction](../wiki/%3Cinternal%3E.Signer#signtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:18

___

### unlock

▸ **unlock**(`password`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:23

___

### isSigner

▸ `Static` **isSigner**(`value`): value is Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Signer

#### Inherited from

[Signer](../wiki/%3Cinternal%3E.Signer).[isSigner](../wiki/%3Cinternal%3E.Signer#issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
