# Class: BaseProvider

[<internal>](../wiki/%3Cinternal%3E).BaseProvider

## Hierarchy

- [`Provider`](../wiki/%3Cinternal%3E.Provider)

  ↳ **`BaseProvider`**

  ↳↳ [`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

  ↳↳ [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider)

## Implements

- [`EnsProvider`](../wiki/%3Cinternal%3E.EnsProvider)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.BaseProvider#constructor)

### Properties

- [\_bootstrapPoll](../wiki/%3Cinternal%3E.BaseProvider#_bootstrappoll)
- [\_emitted](../wiki/%3Cinternal%3E.BaseProvider#_emitted)
- [\_events](../wiki/%3Cinternal%3E.BaseProvider#_events)
- [\_fastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_fastblocknumber)
- [\_fastBlockNumberPromise](../wiki/%3Cinternal%3E.BaseProvider#_fastblocknumberpromise)
- [\_fastQueryDate](../wiki/%3Cinternal%3E.BaseProvider#_fastquerydate)
- [\_internalBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_internalblocknumber)
- [\_isProvider](../wiki/%3Cinternal%3E.BaseProvider#_isprovider)
- [\_lastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_lastblocknumber)
- [\_maxFilterBlockRange](../wiki/%3Cinternal%3E.BaseProvider#_maxfilterblockrange)
- [\_maxInternalBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_maxinternalblocknumber)
- [\_network](../wiki/%3Cinternal%3E.BaseProvider#_network)
- [\_networkPromise](../wiki/%3Cinternal%3E.BaseProvider#_networkpromise)
- [\_poller](../wiki/%3Cinternal%3E.BaseProvider#_poller)
- [\_pollingInterval](../wiki/%3Cinternal%3E.BaseProvider#_pollinginterval)
- [anyNetwork](../wiki/%3Cinternal%3E.BaseProvider#anynetwork)
- [disableCcipRead](../wiki/%3Cinternal%3E.BaseProvider#disableccipread)
- [formatter](../wiki/%3Cinternal%3E.BaseProvider#formatter)

### Accessors

- [blockNumber](../wiki/%3Cinternal%3E.BaseProvider#blocknumber)
- [network](../wiki/%3Cinternal%3E.BaseProvider#network)
- [polling](../wiki/%3Cinternal%3E.BaseProvider#polling)
- [pollingInterval](../wiki/%3Cinternal%3E.BaseProvider#pollinginterval)
- [ready](../wiki/%3Cinternal%3E.BaseProvider#ready)

### Methods

- [\_addEventListener](../wiki/%3Cinternal%3E.BaseProvider#_addeventlistener)
- [\_call](../wiki/%3Cinternal%3E.BaseProvider#_call)
- [\_getAddress](../wiki/%3Cinternal%3E.BaseProvider#_getaddress)
- [\_getBlock](../wiki/%3Cinternal%3E.BaseProvider#_getblock)
- [\_getBlockTag](../wiki/%3Cinternal%3E.BaseProvider#_getblocktag)
- [\_getFastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_getfastblocknumber)
- [\_getFilter](../wiki/%3Cinternal%3E.BaseProvider#_getfilter)
- [\_getInternalBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_getinternalblocknumber)
- [\_getResolver](../wiki/%3Cinternal%3E.BaseProvider#_getresolver)
- [\_getTransactionRequest](../wiki/%3Cinternal%3E.BaseProvider#_gettransactionrequest)
- [\_ready](../wiki/%3Cinternal%3E.BaseProvider#_ready)
- [\_setFastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_setfastblocknumber)
- [\_startEvent](../wiki/%3Cinternal%3E.BaseProvider#_startevent)
- [\_stopEvent](../wiki/%3Cinternal%3E.BaseProvider#_stopevent)
- [\_waitForTransaction](../wiki/%3Cinternal%3E.BaseProvider#_waitfortransaction)
- [\_wrapTransaction](../wiki/%3Cinternal%3E.BaseProvider#_wraptransaction)
- [addListener](../wiki/%3Cinternal%3E.BaseProvider#addlistener)
- [call](../wiki/%3Cinternal%3E.BaseProvider#call)
- [ccipReadFetch](../wiki/%3Cinternal%3E.BaseProvider#ccipreadfetch)
- [detectNetwork](../wiki/%3Cinternal%3E.BaseProvider#detectnetwork)
- [emit](../wiki/%3Cinternal%3E.BaseProvider#emit)
- [estimateGas](../wiki/%3Cinternal%3E.BaseProvider#estimategas)
- [getAvatar](../wiki/%3Cinternal%3E.BaseProvider#getavatar)
- [getBalance](../wiki/%3Cinternal%3E.BaseProvider#getbalance)
- [getBlock](../wiki/%3Cinternal%3E.BaseProvider#getblock)
- [getBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#getblocknumber)
- [getBlockWithTransactions](../wiki/%3Cinternal%3E.BaseProvider#getblockwithtransactions)
- [getCode](../wiki/%3Cinternal%3E.BaseProvider#getcode)
- [getEtherPrice](../wiki/%3Cinternal%3E.BaseProvider#getetherprice)
- [getFeeData](../wiki/%3Cinternal%3E.BaseProvider#getfeedata)
- [getGasPrice](../wiki/%3Cinternal%3E.BaseProvider#getgasprice)
- [getLogs](../wiki/%3Cinternal%3E.BaseProvider#getlogs)
- [getNetwork](../wiki/%3Cinternal%3E.BaseProvider#getnetwork)
- [getResolver](../wiki/%3Cinternal%3E.BaseProvider#getresolver)
- [getStorageAt](../wiki/%3Cinternal%3E.BaseProvider#getstorageat)
- [getTransaction](../wiki/%3Cinternal%3E.BaseProvider#gettransaction)
- [getTransactionCount](../wiki/%3Cinternal%3E.BaseProvider#gettransactioncount)
- [getTransactionReceipt](../wiki/%3Cinternal%3E.BaseProvider#gettransactionreceipt)
- [listenerCount](../wiki/%3Cinternal%3E.BaseProvider#listenercount)
- [listeners](../wiki/%3Cinternal%3E.BaseProvider#listeners)
- [lookupAddress](../wiki/%3Cinternal%3E.BaseProvider#lookupaddress)
- [off](../wiki/%3Cinternal%3E.BaseProvider#off)
- [on](../wiki/%3Cinternal%3E.BaseProvider#on)
- [once](../wiki/%3Cinternal%3E.BaseProvider#once)
- [perform](../wiki/%3Cinternal%3E.BaseProvider#perform)
- [poll](../wiki/%3Cinternal%3E.BaseProvider#poll)
- [removeAllListeners](../wiki/%3Cinternal%3E.BaseProvider#removealllisteners)
- [removeListener](../wiki/%3Cinternal%3E.BaseProvider#removelistener)
- [resetEventsBlock](../wiki/%3Cinternal%3E.BaseProvider#reseteventsblock)
- [resolveName](../wiki/%3Cinternal%3E.BaseProvider#resolvename)
- [sendTransaction](../wiki/%3Cinternal%3E.BaseProvider#sendtransaction)
- [waitForTransaction](../wiki/%3Cinternal%3E.BaseProvider#waitfortransaction)
- [getFormatter](../wiki/%3Cinternal%3E.BaseProvider#getformatter)
- [getNetwork](../wiki/%3Cinternal%3E.BaseProvider#getnetwork-1)
- [isProvider](../wiki/%3Cinternal%3E.BaseProvider#isprovider)

## Constructors

### constructor

• **new BaseProvider**(`network`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Networkish`](../wiki/%3Cinternal%3E#networkish) \| `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\> |

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[constructor](../wiki/%3Cinternal%3E.Provider#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:89

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: [`Timer`](../wiki/%3Cinternal%3E.Timer)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

___

### \_events

• **\_events**: [`Event`](../wiki/%3Cinternal%3E.Event)[]

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:59

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`<{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

[Provider](../wiki/%3Cinternal%3E.Provider).[_isProvider](../wiki/%3Cinternal%3E.Provider#_isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

___

### \_network

• **\_network**: [`Network`](../wiki/%3Cinternal%3E#network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

___

### \_networkPromise

• **\_networkPromise**: `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

___

### \_poller

• **\_poller**: [`Timer`](../wiki/%3Cinternal%3E.Timer)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

___

### formatter

• **formatter**: [`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

___

### network

• `get` **network**(): [`Network`](../wiki/%3Cinternal%3E#network)

#### Returns

[`Network`](../wiki/%3Cinternal%3E#network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

___

### polling

• `get` **polling**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:102

• `set` **polling**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:103

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:104

• `set` **pollingInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:105

___

### ready

• `get` **ready**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |
| `once` | `boolean` |

#### Returns

[`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:147

___

### \_call

▸ **_call**(`transaction`, `blockTag`, `attempt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest) |
| `blockTag` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) |
| `attempt` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:127

___

### \_getAddress

▸ **_getAddress**(`addressOrName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:130

___

### \_getBlock

▸ **_getBlock**(`blockHashOrBlockTag`, `includeTransactions?`): `Promise`<[`Block`](../wiki/%3Cinternal%3E.Block) \| [`BlockWithTransactions`](../wiki/%3Cinternal%3E.BlockWithTransactions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |
| `includeTransactions?` | `boolean` |

#### Returns

`Promise`<[`Block`](../wiki/%3Cinternal%3E.Block) \| [`BlockWithTransactions`](../wiki/%3Cinternal%3E.BlockWithTransactions)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:131

___

### \_getBlockTag

▸ **_getBlockTag**(`blockTag`): `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:138

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:106

___

### \_getFilter

▸ **_getFilter**(`filter`): `Promise`<[`Filter`](../wiki/%3Cinternal%3E.Filter) \| [`FilterByBlockHash`](../wiki/%3Cinternal%3E.FilterByBlockHash)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../wiki/%3Cinternal%3E.Filter) \| [`FilterByBlockHash`](../wiki/%3Cinternal%3E.FilterByBlockHash) \| `Promise`<[`Filter`](../wiki/%3Cinternal%3E.Filter) \| [`FilterByBlockHash`](../wiki/%3Cinternal%3E.FilterByBlockHash)\> |

#### Returns

`Promise`<[`Filter`](../wiki/%3Cinternal%3E.Filter) \| [`FilterByBlockHash`](../wiki/%3Cinternal%3E.FilterByBlockHash)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:126

___

### \_getInternalBlockNumber

▸ **_getInternalBlockNumber**(`maxAge`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAge` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:95

___

### \_getResolver

▸ **_getResolver**(`name`, `operation?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `operation?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:140

___

### \_getTransactionRequest

▸ **_getTransactionRequest**(`transaction`): `Promise`<[`Transaction`](../wiki/%3Cinternal%3E.Transaction)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<[`Transaction`](../wiki/%3Cinternal%3E.Transaction)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:125

___

### \_ready

▸ **_ready**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:90

___

### \_setFastBlockNumber

▸ **_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:107

___

### \_startEvent

▸ **_startEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../wiki/%3Cinternal%3E.Event) |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:145

___

### \_stopEvent

▸ **_stopEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../wiki/%3Cinternal%3E.Event) |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:146

___

### \_waitForTransaction

▸ **_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations` | `number` |
| `timeout` | `number` |
| `replaceable` | `Object` |
| `replaceable.data` | `string` |
| `replaceable.from` | `string` |
| `replaceable.nonce` | `number` |
| `replaceable.startBlock` | `number` |
| `replaceable.to` | `string` |
| `replaceable.value` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:109

___

### \_wrapTransaction

▸ **_wrapTransaction**(`tx`, `hash?`, `startBlock?`): [`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](../wiki/%3Cinternal%3E.Transaction) |
| `hash?` | `string` |
| `startBlock?` | `number` |

#### Returns

[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:123

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`Provider`](../wiki/%3Cinternal%3E.Provider)

#### Inherited from

[Provider](../wiki/%3Cinternal%3E.Provider).[addListener](../wiki/%3Cinternal%3E.Provider#addlistener)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[call](../wiki/%3Cinternal%3E.Provider#call)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:128

___

### ccipReadFetch

▸ **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](../wiki/%3Cinternal%3E.Transaction) |
| `calldata` | `string` |
| `urls` | `string`[] |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:94

___

### detectNetwork

▸ **detectNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:99

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[emit](../wiki/%3Cinternal%3E.Provider#emit)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:150

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../wiki/%3Cinternal%3E#deferrable)<[`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[estimateGas](../wiki/%3Cinternal%3E.Provider#estimategas)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:129

___

### getAvatar

▸ **getAvatar**(`nameOrAddress`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrAddress` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:143

___

### getBalance

▸ **getBalance**(`addressOrName`, `blockTag?`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getBalance](../wiki/%3Cinternal%3E.Provider#getbalance)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:119

___

### getBlock

▸ **getBlock**(`blockHashOrBlockTag`): `Promise`<[`Block`](../wiki/%3Cinternal%3E.Block)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<[`Block`](../wiki/%3Cinternal%3E.Block)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getBlock](../wiki/%3Cinternal%3E.Provider#getblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:132

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getBlockNumber](../wiki/%3Cinternal%3E.Provider#getblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:117

___

### getBlockWithTransactions

▸ **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<[`BlockWithTransactions`](../wiki/%3Cinternal%3E.BlockWithTransactions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<[`BlockWithTransactions`](../wiki/%3Cinternal%3E.BlockWithTransactions)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getBlockWithTransactions](../wiki/%3Cinternal%3E.Provider#getblockwithtransactions)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:133

___

### getCode

▸ **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getCode](../wiki/%3Cinternal%3E.Provider#getcode)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:121

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:137

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Returns

`Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Inherited from

[Provider](../wiki/%3Cinternal%3E.Provider).[getFeeData](../wiki/%3Cinternal%3E.Provider#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getGasPrice](../wiki/%3Cinternal%3E.Provider#getgasprice)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:118

___

### getLogs

▸ **getLogs**(`filter`): `Promise`<[`Log`](../wiki/%3Cinternal%3E.Log)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../wiki/%3Cinternal%3E.Filter) \| [`FilterByBlockHash`](../wiki/%3Cinternal%3E.FilterByBlockHash) \| `Promise`<[`Filter`](../wiki/%3Cinternal%3E.Filter) \| [`FilterByBlockHash`](../wiki/%3Cinternal%3E.FilterByBlockHash)\> |

#### Returns

`Promise`<[`Log`](../wiki/%3Cinternal%3E.Log)[]\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getLogs](../wiki/%3Cinternal%3E.Provider#getlogs)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:136

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getNetwork](../wiki/%3Cinternal%3E.Provider#getnetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:100

___

### getResolver

▸ **getResolver**(`name`): `Promise`<``null`` \| [`Resolver`](../wiki/%3Cinternal%3E.Resolver)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| [`Resolver`](../wiki/%3Cinternal%3E.Resolver)\>

#### Implementation of

[EnsProvider](../wiki/%3Cinternal%3E.EnsProvider).[getResolver](../wiki/%3Cinternal%3E.EnsProvider#getresolver)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:139

___

### getStorageAt

▸ **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) \| `Promise`<[`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish)\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getStorageAt](../wiki/%3Cinternal%3E.Provider#getstorageat)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:122

___

### getTransaction

▸ **getTransaction**(`transactionHash`): `Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getTransaction](../wiki/%3Cinternal%3E.Provider#gettransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:134

___

### getTransactionCount

▸ **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../wiki/%3Cinternal%3E#blocktag) \| `Promise`<[`BlockTag`](../wiki/%3Cinternal%3E#blocktag)\> |

#### Returns

`Promise`<`number`\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getTransactionCount](../wiki/%3Cinternal%3E.Provider#gettransactioncount)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:120

___

### getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`): `Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[getTransactionReceipt](../wiki/%3Cinternal%3E.Provider#gettransactionreceipt)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:135

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

`number`

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[listenerCount](../wiki/%3Cinternal%3E.Provider#listenercount)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:151

___

### listeners

▸ **listeners**(`eventName?`): [`Listener`](../wiki/%3Cinternal%3E#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

[`Listener`](../wiki/%3Cinternal%3E#listener)[]

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[listeners](../wiki/%3Cinternal%3E.Provider#listeners)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:152

___

### lookupAddress

▸ **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Implementation of

[EnsProvider](../wiki/%3Cinternal%3E.EnsProvider).[lookupAddress](../wiki/%3Cinternal%3E.EnsProvider#lookupaddress)

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[lookupAddress](../wiki/%3Cinternal%3E.Provider#lookupaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:142

___

### off

▸ **off**(`eventName`, `listener?`): [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener?` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[off](../wiki/%3Cinternal%3E.Provider#off)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:153

___

### on

▸ **on**(`eventName`, `listener`): [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[on](../wiki/%3Cinternal%3E.Provider#on)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:148

___

### once

▸ **once**(`eventName`, `listener`): [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[once](../wiki/%3Cinternal%3E.Provider#once)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:149

___

### perform

▸ **perform**(`method`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:144

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:96

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

[`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[removeAllListeners](../wiki/%3Cinternal%3E.Provider#removealllisteners)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:154

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

#### Inherited from

[Provider](../wiki/%3Cinternal%3E.Provider).[removeListener](../wiki/%3Cinternal%3E.Provider#removelistener)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

___

### resetEventsBlock

▸ **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:97

___

### resolveName

▸ **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Implementation of

[EnsProvider](../wiki/%3Cinternal%3E.EnsProvider).[resolveName](../wiki/%3Cinternal%3E.EnsProvider#resolvename)

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[resolveName](../wiki/%3Cinternal%3E.Provider#resolvename)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:141

___

### sendTransaction

▸ **sendTransaction**(`signedTransaction`): `Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[sendTransaction](../wiki/%3Cinternal%3E.Provider#sendtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:124

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)\>

#### Overrides

[Provider](../wiki/%3Cinternal%3E.Provider).[waitForTransaction](../wiki/%3Cinternal%3E.Provider#waitfortransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:108

___

### getFormatter

▸ `Static` **getFormatter**(): [`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Returns

[`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:92

___

### getNetwork

▸ `Static` **getNetwork**(`network`): [`Network`](../wiki/%3Cinternal%3E#network)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Networkish`](../wiki/%3Cinternal%3E#networkish) |

#### Returns

[`Network`](../wiki/%3Cinternal%3E#network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:93

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Inherited from

[Provider](../wiki/%3Cinternal%3E.Provider).[isProvider](../wiki/%3Cinternal%3E.Provider#isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
