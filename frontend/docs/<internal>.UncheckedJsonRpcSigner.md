# Class: UncheckedJsonRpcSigner

[<internal>](../wiki/%3Cinternal%3E).UncheckedJsonRpcSigner

## Hierarchy

- [`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

  ↳ **`UncheckedJsonRpcSigner`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#constructor)

### Properties

- [\_address](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#_address)
- [\_index](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#_index)
- [\_isSigner](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#_issigner)
- [provider](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#provider)

### Methods

- [\_checkProvider](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#_checkprovider)
- [\_legacySignMessage](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#_legacysignmessage)
- [\_signTypedData](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#_signtypeddata)
- [call](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#call)
- [checkTransaction](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#checktransaction)
- [connect](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#connect)
- [connectUnchecked](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#connectunchecked)
- [estimateGas](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#estimategas)
- [getAddress](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#getaddress)
- [getBalance](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#getbalance)
- [getChainId](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#getchainid)
- [getFeeData](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#getfeedata)
- [getGasPrice](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#getgasprice)
- [getTransactionCount](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#gettransactioncount)
- [populateTransaction](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#populatetransaction)
- [resolveName](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#resolvename)
- [sendTransaction](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#sendtransaction)
- [sendUncheckedTransaction](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#senduncheckedtransaction)
- [signMessage](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#signmessage)
- [signTransaction](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#signtransaction)
- [unlock](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#unlock)
- [isSigner](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner#issigner)

## Constructors

### constructor

• **new UncheckedJsonRpcSigner**(`constructorGuard`, `provider`, `addressOrIndex?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `provider` | [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider) |
| `addressOrIndex?` | `string` \| `number` |

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[constructor](../wiki/%3Cinternal%3E.JsonRpcSigner#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:13

## Properties

### \_address

• **\_address**: `string`

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[_address](../wiki/%3Cinternal%3E.JsonRpcSigner#_address)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:12

___

### \_index

• **\_index**: `number`

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[_index](../wiki/%3Cinternal%3E.JsonRpcSigner#_index)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:11

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[_isSigner](../wiki/%3Cinternal%3E.JsonRpcSigner#_issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### provider

• `Readonly` **provider**: [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider)

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[provider](../wiki/%3Cinternal%3E.JsonRpcSigner#provider)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[_checkProvider](../wiki/%3Cinternal%3E.JsonRpcSigner#_checkprovider)

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

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[_legacySignMessage](../wiki/%3Cinternal%3E.JsonRpcSigner#_legacysignmessage)

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

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[_signTypedData](../wiki/%3Cinternal%3E.JsonRpcSigner#_signtypeddata)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[call](../wiki/%3Cinternal%3E.JsonRpcSigner#call)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[checkTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#checktransaction)

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

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[connect](../wiki/%3Cinternal%3E.JsonRpcSigner#connect)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:14

___

### connectUnchecked

▸ **connectUnchecked**(): [`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Returns

[`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[connectUnchecked](../wiki/%3Cinternal%3E.JsonRpcSigner#connectunchecked)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[estimateGas](../wiki/%3Cinternal%3E.JsonRpcSigner#estimategas)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[getAddress](../wiki/%3Cinternal%3E.JsonRpcSigner#getaddress)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[getBalance](../wiki/%3Cinternal%3E.JsonRpcSigner#getbalance)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[getChainId](../wiki/%3Cinternal%3E.JsonRpcSigner#getchainid)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Returns

`Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[getFeeData](../wiki/%3Cinternal%3E.JsonRpcSigner#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[getGasPrice](../wiki/%3Cinternal%3E.JsonRpcSigner#getgasprice)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[getTransactionCount](../wiki/%3Cinternal%3E.JsonRpcSigner#gettransactioncount)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[populateTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#populatetransaction)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[resolveName](../wiki/%3Cinternal%3E.JsonRpcSigner#resolvename)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[sendTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#sendtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:26

___

### sendUncheckedTransaction

▸ **sendUncheckedTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[sendUncheckedTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#senduncheckedtransaction)

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

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[signMessage](../wiki/%3Cinternal%3E.JsonRpcSigner#signmessage)

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

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[signTransaction](../wiki/%3Cinternal%3E.JsonRpcSigner#signtransaction)

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

#### Inherited from

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[unlock](../wiki/%3Cinternal%3E.JsonRpcSigner#unlock)

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

[JsonRpcSigner](../wiki/%3Cinternal%3E.JsonRpcSigner).[isSigner](../wiki/%3Cinternal%3E.JsonRpcSigner#issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
