# Class: Provider

[<internal>](../wiki/%3Cinternal%3E).Provider

## Hierarchy

- **`Provider`**

  ↳ [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

## Implements

- [`OnceBlockable`](../wiki/%3Cinternal%3E.OnceBlockable)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Provider#constructor)

### Properties

- [\_isProvider](../wiki/%3Cinternal%3E.Provider#_isprovider)

### Methods

- [addListener](../wiki/%3Cinternal%3E.Provider#addlistener)
- [call](../wiki/%3Cinternal%3E.Provider#call)
- [emit](../wiki/%3Cinternal%3E.Provider#emit)
- [estimateGas](../wiki/%3Cinternal%3E.Provider#estimategas)
- [getBalance](../wiki/%3Cinternal%3E.Provider#getbalance)
- [getBlock](../wiki/%3Cinternal%3E.Provider#getblock)
- [getBlockNumber](../wiki/%3Cinternal%3E.Provider#getblocknumber)
- [getBlockWithTransactions](../wiki/%3Cinternal%3E.Provider#getblockwithtransactions)
- [getCode](../wiki/%3Cinternal%3E.Provider#getcode)
- [getFeeData](../wiki/%3Cinternal%3E.Provider#getfeedata)
- [getGasPrice](../wiki/%3Cinternal%3E.Provider#getgasprice)
- [getLogs](../wiki/%3Cinternal%3E.Provider#getlogs)
- [getNetwork](../wiki/%3Cinternal%3E.Provider#getnetwork)
- [getStorageAt](../wiki/%3Cinternal%3E.Provider#getstorageat)
- [getTransaction](../wiki/%3Cinternal%3E.Provider#gettransaction)
- [getTransactionCount](../wiki/%3Cinternal%3E.Provider#gettransactioncount)
- [getTransactionReceipt](../wiki/%3Cinternal%3E.Provider#gettransactionreceipt)
- [listenerCount](../wiki/%3Cinternal%3E.Provider#listenercount)
- [listeners](../wiki/%3Cinternal%3E.Provider#listeners)
- [lookupAddress](../wiki/%3Cinternal%3E.Provider#lookupaddress)
- [off](../wiki/%3Cinternal%3E.Provider#off)
- [on](../wiki/%3Cinternal%3E.Provider#on)
- [once](../wiki/%3Cinternal%3E.Provider#once)
- [removeAllListeners](../wiki/%3Cinternal%3E.Provider#removealllisteners)
- [removeListener](../wiki/%3Cinternal%3E.Provider#removelistener)
- [resolveName](../wiki/%3Cinternal%3E.Provider#resolvename)
- [sendTransaction](../wiki/%3Cinternal%3E.Provider#sendtransaction)
- [waitForTransaction](../wiki/%3Cinternal%3E.Provider#waitfortransaction)
- [isProvider](../wiki/%3Cinternal%3E.Provider#isprovider)

## Constructors

### constructor

• **new Provider**()

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:153

## Properties

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

___

### call

▸ `Abstract` **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:133

___

### emit

▸ `Abstract` **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:144

___

### estimateGas

▸ `Abstract` **estimateGas**(`transaction`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:134

___

### getBalance

▸ `Abstract` **getBalance**(`addressOrName`, `blockTag?`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:128

___

### getBlock

▸ `Abstract` **getBlock**(`blockHashOrBlockTag`): `Promise`<[`Block`](../wiki/%3Cinternal%3E.Block)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<[`Block`](../wiki/%3Cinternal%3E.Block)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:135

___

### getBlockNumber

▸ `Abstract` **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:125

___

### getBlockWithTransactions

▸ `Abstract` **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<[`BlockWithTransactions`](../wiki/%3Cinternal%3E.BlockWithTransactions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<[`BlockWithTransactions`](../wiki/%3Cinternal%3E.BlockWithTransactions)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:136

___

### getCode

▸ `Abstract` **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:130

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Returns

`Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ `Abstract` **getGasPrice**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:126

___

### getLogs

▸ `Abstract` **getLogs**(`filter`): `Promise`<[`Log`](../wiki/%3Cinternal%3E.Log)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../wiki/%3Cinternal%3E.Filter) |

#### Returns

`Promise`<[`Log`](../wiki/%3Cinternal%3E.Log)[]\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:139

___

### getNetwork

▸ `Abstract` **getNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:124

___

### getStorageAt

▸ `Abstract` **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) \| `Promise`<[`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish)\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:131

___

### getTransaction

▸ `Abstract` **getTransaction**(`transactionHash`): `Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:137

___

### getTransactionCount

▸ `Abstract` **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:129

___

### getTransactionReceipt

▸ `Abstract` **getTransactionReceipt**(`transactionHash`): `Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |

#### Returns

`Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:138

___

### listenerCount

▸ `Abstract` **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:145

___

### listeners

▸ `Abstract` **listeners**(`eventName?`): [`Listener`](../wiki/%3Cinternal%3E#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

[`Listener`](../wiki/%3Cinternal%3E#listener)[]

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:146

___

### lookupAddress

▸ `Abstract` **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:141

___

### off

▸ `Abstract` **off**(`eventName`, `listener?`): [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener?` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:147

___

### on

▸ `Abstract` **on**(`eventName`, `listener`): [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:142

___

### once

▸ `Abstract` **once**(`eventName`, `listener`): [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Implementation of

[OnceBlockable](../wiki/%3Cinternal%3E.OnceBlockable).[once](../wiki/%3Cinternal%3E.OnceBlockable#once)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:143

___

### removeAllListeners

▸ `Abstract` **removeAllListeners**(`eventName?`): [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

[`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:148

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

___

### resolveName

▸ `Abstract` **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:140

___

### sendTransaction

▸ `Abstract` **sendTransaction**(`signedTransaction`): `Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:132

___

### waitForTransaction

▸ `Abstract` **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
