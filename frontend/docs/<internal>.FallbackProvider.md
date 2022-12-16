# Class: FallbackProvider

[<internal>](../wiki/%3Cinternal%3E).FallbackProvider

## Hierarchy

- [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

  ↳ **`FallbackProvider`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.FallbackProvider#constructor)

### Properties

- [\_bootstrapPoll](../wiki/%3Cinternal%3E.FallbackProvider#_bootstrappoll)
- [\_emitted](../wiki/%3Cinternal%3E.FallbackProvider#_emitted)
- [\_events](../wiki/%3Cinternal%3E.FallbackProvider#_events)
- [\_fastBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_fastblocknumber)
- [\_fastBlockNumberPromise](../wiki/%3Cinternal%3E.FallbackProvider#_fastblocknumberpromise)
- [\_fastQueryDate](../wiki/%3Cinternal%3E.FallbackProvider#_fastquerydate)
- [\_highestBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_highestblocknumber)
- [\_internalBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_internalblocknumber)
- [\_isProvider](../wiki/%3Cinternal%3E.FallbackProvider#_isprovider)
- [\_lastBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_lastblocknumber)
- [\_maxFilterBlockRange](../wiki/%3Cinternal%3E.FallbackProvider#_maxfilterblockrange)
- [\_maxInternalBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_maxinternalblocknumber)
- [\_network](../wiki/%3Cinternal%3E.FallbackProvider#_network)
- [\_networkPromise](../wiki/%3Cinternal%3E.FallbackProvider#_networkpromise)
- [\_poller](../wiki/%3Cinternal%3E.FallbackProvider#_poller)
- [\_pollingInterval](../wiki/%3Cinternal%3E.FallbackProvider#_pollinginterval)
- [anyNetwork](../wiki/%3Cinternal%3E.FallbackProvider#anynetwork)
- [disableCcipRead](../wiki/%3Cinternal%3E.FallbackProvider#disableccipread)
- [formatter](../wiki/%3Cinternal%3E.FallbackProvider#formatter)
- [providerConfigs](../wiki/%3Cinternal%3E.FallbackProvider#providerconfigs)
- [quorum](../wiki/%3Cinternal%3E.FallbackProvider#quorum)

### Accessors

- [blockNumber](../wiki/%3Cinternal%3E.FallbackProvider#blocknumber)
- [network](../wiki/%3Cinternal%3E.FallbackProvider#network)
- [polling](../wiki/%3Cinternal%3E.FallbackProvider#polling)
- [pollingInterval](../wiki/%3Cinternal%3E.FallbackProvider#pollinginterval)
- [ready](../wiki/%3Cinternal%3E.FallbackProvider#ready)

### Methods

- [\_addEventListener](../wiki/%3Cinternal%3E.FallbackProvider#_addeventlistener)
- [\_call](../wiki/%3Cinternal%3E.FallbackProvider#_call)
- [\_getAddress](../wiki/%3Cinternal%3E.FallbackProvider#_getaddress)
- [\_getBlock](../wiki/%3Cinternal%3E.FallbackProvider#_getblock)
- [\_getBlockTag](../wiki/%3Cinternal%3E.FallbackProvider#_getblocktag)
- [\_getFastBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_getfastblocknumber)
- [\_getFilter](../wiki/%3Cinternal%3E.FallbackProvider#_getfilter)
- [\_getInternalBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_getinternalblocknumber)
- [\_getResolver](../wiki/%3Cinternal%3E.FallbackProvider#_getresolver)
- [\_getTransactionRequest](../wiki/%3Cinternal%3E.FallbackProvider#_gettransactionrequest)
- [\_ready](../wiki/%3Cinternal%3E.FallbackProvider#_ready)
- [\_setFastBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#_setfastblocknumber)
- [\_startEvent](../wiki/%3Cinternal%3E.FallbackProvider#_startevent)
- [\_stopEvent](../wiki/%3Cinternal%3E.FallbackProvider#_stopevent)
- [\_waitForTransaction](../wiki/%3Cinternal%3E.FallbackProvider#_waitfortransaction)
- [\_wrapTransaction](../wiki/%3Cinternal%3E.FallbackProvider#_wraptransaction)
- [addListener](../wiki/%3Cinternal%3E.FallbackProvider#addlistener)
- [call](../wiki/%3Cinternal%3E.FallbackProvider#call)
- [ccipReadFetch](../wiki/%3Cinternal%3E.FallbackProvider#ccipreadfetch)
- [detectNetwork](../wiki/%3Cinternal%3E.FallbackProvider#detectnetwork)
- [emit](../wiki/%3Cinternal%3E.FallbackProvider#emit)
- [estimateGas](../wiki/%3Cinternal%3E.FallbackProvider#estimategas)
- [getAvatar](../wiki/%3Cinternal%3E.FallbackProvider#getavatar)
- [getBalance](../wiki/%3Cinternal%3E.FallbackProvider#getbalance)
- [getBlock](../wiki/%3Cinternal%3E.FallbackProvider#getblock)
- [getBlockNumber](../wiki/%3Cinternal%3E.FallbackProvider#getblocknumber)
- [getBlockWithTransactions](../wiki/%3Cinternal%3E.FallbackProvider#getblockwithtransactions)
- [getCode](../wiki/%3Cinternal%3E.FallbackProvider#getcode)
- [getEtherPrice](../wiki/%3Cinternal%3E.FallbackProvider#getetherprice)
- [getFeeData](../wiki/%3Cinternal%3E.FallbackProvider#getfeedata)
- [getGasPrice](../wiki/%3Cinternal%3E.FallbackProvider#getgasprice)
- [getLogs](../wiki/%3Cinternal%3E.FallbackProvider#getlogs)
- [getNetwork](../wiki/%3Cinternal%3E.FallbackProvider#getnetwork)
- [getResolver](../wiki/%3Cinternal%3E.FallbackProvider#getresolver)
- [getStorageAt](../wiki/%3Cinternal%3E.FallbackProvider#getstorageat)
- [getTransaction](../wiki/%3Cinternal%3E.FallbackProvider#gettransaction)
- [getTransactionCount](../wiki/%3Cinternal%3E.FallbackProvider#gettransactioncount)
- [getTransactionReceipt](../wiki/%3Cinternal%3E.FallbackProvider#gettransactionreceipt)
- [listenerCount](../wiki/%3Cinternal%3E.FallbackProvider#listenercount)
- [listeners](../wiki/%3Cinternal%3E.FallbackProvider#listeners)
- [lookupAddress](../wiki/%3Cinternal%3E.FallbackProvider#lookupaddress)
- [off](../wiki/%3Cinternal%3E.FallbackProvider#off)
- [on](../wiki/%3Cinternal%3E.FallbackProvider#on)
- [once](../wiki/%3Cinternal%3E.FallbackProvider#once)
- [perform](../wiki/%3Cinternal%3E.FallbackProvider#perform)
- [poll](../wiki/%3Cinternal%3E.FallbackProvider#poll)
- [removeAllListeners](../wiki/%3Cinternal%3E.FallbackProvider#removealllisteners)
- [removeListener](../wiki/%3Cinternal%3E.FallbackProvider#removelistener)
- [resetEventsBlock](../wiki/%3Cinternal%3E.FallbackProvider#reseteventsblock)
- [resolveName](../wiki/%3Cinternal%3E.FallbackProvider#resolvename)
- [sendTransaction](../wiki/%3Cinternal%3E.FallbackProvider#sendtransaction)
- [waitForTransaction](../wiki/%3Cinternal%3E.FallbackProvider#waitfortransaction)
- [getFormatter](../wiki/%3Cinternal%3E.FallbackProvider#getformatter)
- [getNetwork](../wiki/%3Cinternal%3E.FallbackProvider#getnetwork-1)
- [isProvider](../wiki/%3Cinternal%3E.FallbackProvider#isprovider)

## Constructors

### constructor

• **new FallbackProvider**(`providers`, `quorum?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `providers` | ([`Provider`](../wiki/%3Cinternal%3E.Provider) \| [`FallbackProviderConfig`](../wiki/%3Cinternal%3E.FallbackProviderConfig))[] |
| `quorum?` | `number` |

#### Overrides

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[constructor](../wiki/%3Cinternal%3E.BaseProvider#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/fallback-provider.d.ts:14

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: [`Timer`](../wiki/%3Cinternal%3E.Timer)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_bootstrapPoll](../wiki/%3Cinternal%3E.BaseProvider#_bootstrappoll)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_emitted](../wiki/%3Cinternal%3E.BaseProvider#_emitted)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

___

### \_events

• **\_events**: [`Event`](../wiki/%3Cinternal%3E.Event)[]

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_events](../wiki/%3Cinternal%3E.BaseProvider#_events)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:59

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_fastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_fastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`<`number`\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_fastBlockNumberPromise](../wiki/%3Cinternal%3E.BaseProvider#_fastblocknumberpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_fastQueryDate](../wiki/%3Cinternal%3E.BaseProvider#_fastquerydate)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

___

### \_highestBlockNumber

• **\_highestBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/fallback-provider.d.ts:13

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`<{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_internalBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_internalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_isProvider](../wiki/%3Cinternal%3E.BaseProvider#_isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_lastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_lastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_maxFilterBlockRange](../wiki/%3Cinternal%3E.BaseProvider#_maxfilterblockrange)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_maxInternalBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_maxinternalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

___

### \_network

• **\_network**: [`Network`](../wiki/%3Cinternal%3E#network)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_network](../wiki/%3Cinternal%3E.BaseProvider#_network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

___

### \_networkPromise

• **\_networkPromise**: `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_networkPromise](../wiki/%3Cinternal%3E.BaseProvider#_networkpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

___

### \_poller

• **\_poller**: [`Timer`](../wiki/%3Cinternal%3E.Timer)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_poller](../wiki/%3Cinternal%3E.BaseProvider#_poller)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_pollingInterval](../wiki/%3Cinternal%3E.BaseProvider#_pollinginterval)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[anyNetwork](../wiki/%3Cinternal%3E.BaseProvider#anynetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[disableCcipRead](../wiki/%3Cinternal%3E.BaseProvider#disableccipread)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

___

### formatter

• **formatter**: [`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[formatter](../wiki/%3Cinternal%3E.BaseProvider#formatter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

___

### providerConfigs

• `Readonly` **providerConfigs**: readonly [`FallbackProviderConfig`](../wiki/%3Cinternal%3E.FallbackProviderConfig)[]

#### Defined in

node_modules/@ethersproject/providers/lib/fallback-provider.d.ts:11

___

### quorum

• `Readonly` **quorum**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/fallback-provider.d.ts:12

## Accessors

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Inherited from

BaseProvider.blockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

___

### network

• `get` **network**(): [`Network`](../wiki/%3Cinternal%3E#network)

#### Returns

[`Network`](../wiki/%3Cinternal%3E#network)

#### Inherited from

BaseProvider.network

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

___

### polling

• `get` **polling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:102

• `set` **polling**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

BaseProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:103

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Inherited from

BaseProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:104

• `set` **pollingInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

BaseProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:105

___

### ready

• `get` **ready**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

BaseProvider.ready

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): [`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |
| `once` | `boolean` |

#### Returns

[`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_addEventListener](../wiki/%3Cinternal%3E.BaseProvider#_addeventlistener)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_call](../wiki/%3Cinternal%3E.BaseProvider#_call)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getAddress](../wiki/%3Cinternal%3E.BaseProvider#_getaddress)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getBlock](../wiki/%3Cinternal%3E.BaseProvider#_getblock)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getBlockTag](../wiki/%3Cinternal%3E.BaseProvider#_getblocktag)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:138

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getFastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_getfastblocknumber)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getFilter](../wiki/%3Cinternal%3E.BaseProvider#_getfilter)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getInternalBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_getinternalblocknumber)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getResolver](../wiki/%3Cinternal%3E.BaseProvider#_getresolver)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_getTransactionRequest](../wiki/%3Cinternal%3E.BaseProvider#_gettransactionrequest)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:125

___

### \_ready

▸ **_ready**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_ready](../wiki/%3Cinternal%3E.BaseProvider#_ready)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_setFastBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#_setfastblocknumber)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_startEvent](../wiki/%3Cinternal%3E.BaseProvider#_startevent)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_stopEvent](../wiki/%3Cinternal%3E.BaseProvider#_stopevent)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_waitForTransaction](../wiki/%3Cinternal%3E.BaseProvider#_waitfortransaction)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[_wrapTransaction](../wiki/%3Cinternal%3E.BaseProvider#_wraptransaction)

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

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[addListener](../wiki/%3Cinternal%3E.BaseProvider#addlistener)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[call](../wiki/%3Cinternal%3E.BaseProvider#call)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[ccipReadFetch](../wiki/%3Cinternal%3E.BaseProvider#ccipreadfetch)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:94

___

### detectNetwork

▸ **detectNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Overrides

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[detectNetwork](../wiki/%3Cinternal%3E.BaseProvider#detectnetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/fallback-provider.d.ts:15

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[emit](../wiki/%3Cinternal%3E.BaseProvider#emit)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[estimateGas](../wiki/%3Cinternal%3E.BaseProvider#estimategas)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getAvatar](../wiki/%3Cinternal%3E.BaseProvider#getavatar)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getBalance](../wiki/%3Cinternal%3E.BaseProvider#getbalance)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getBlock](../wiki/%3Cinternal%3E.BaseProvider#getblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:132

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getBlockNumber](../wiki/%3Cinternal%3E.BaseProvider#getblocknumber)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getBlockWithTransactions](../wiki/%3Cinternal%3E.BaseProvider#getblockwithtransactions)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getCode](../wiki/%3Cinternal%3E.BaseProvider#getcode)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:121

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getEtherPrice](../wiki/%3Cinternal%3E.BaseProvider#getetherprice)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:137

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Returns

`Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getFeeData](../wiki/%3Cinternal%3E.BaseProvider#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getGasPrice](../wiki/%3Cinternal%3E.BaseProvider#getgasprice)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getLogs](../wiki/%3Cinternal%3E.BaseProvider#getlogs)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:136

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getNetwork](../wiki/%3Cinternal%3E.BaseProvider#getnetwork)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getResolver](../wiki/%3Cinternal%3E.BaseProvider#getresolver)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getStorageAt](../wiki/%3Cinternal%3E.BaseProvider#getstorageat)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getTransaction](../wiki/%3Cinternal%3E.BaseProvider#gettransaction)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getTransactionCount](../wiki/%3Cinternal%3E.BaseProvider#gettransactioncount)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getTransactionReceipt](../wiki/%3Cinternal%3E.BaseProvider#gettransactionreceipt)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[listenerCount](../wiki/%3Cinternal%3E.BaseProvider#listenercount)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[listeners](../wiki/%3Cinternal%3E.BaseProvider#listeners)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[lookupAddress](../wiki/%3Cinternal%3E.BaseProvider#lookupaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:142

___

### off

▸ **off**(`eventName`, `listener?`): [`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener?` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[off](../wiki/%3Cinternal%3E.BaseProvider#off)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:153

___

### on

▸ **on**(`eventName`, `listener`): [`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[on](../wiki/%3Cinternal%3E.BaseProvider#on)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:148

___

### once

▸ **once**(`eventName`, `listener`): [`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[once](../wiki/%3Cinternal%3E.BaseProvider#once)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:149

___

### perform

▸ **perform**(`method`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `Object` |

#### Returns

`Promise`<`any`\>

#### Overrides

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[perform](../wiki/%3Cinternal%3E.BaseProvider#perform)

#### Defined in

node_modules/@ethersproject/providers/lib/fallback-provider.d.ts:16

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[poll](../wiki/%3Cinternal%3E.BaseProvider#poll)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:96

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

[`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[removeAllListeners](../wiki/%3Cinternal%3E.BaseProvider#removealllisteners)

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

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[removeListener](../wiki/%3Cinternal%3E.BaseProvider#removelistener)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[resetEventsBlock](../wiki/%3Cinternal%3E.BaseProvider#reseteventsblock)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[resolveName](../wiki/%3Cinternal%3E.BaseProvider#resolvename)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[sendTransaction](../wiki/%3Cinternal%3E.BaseProvider#sendtransaction)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[waitForTransaction](../wiki/%3Cinternal%3E.BaseProvider#waitfortransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:108

___

### getFormatter

▸ `Static` **getFormatter**(): [`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Returns

[`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getFormatter](../wiki/%3Cinternal%3E.BaseProvider#getformatter)

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

#### Inherited from

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[getNetwork](../wiki/%3Cinternal%3E.BaseProvider#getnetwork-1)

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

[BaseProvider](../wiki/%3Cinternal%3E.BaseProvider).[isProvider](../wiki/%3Cinternal%3E.BaseProvider#isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
