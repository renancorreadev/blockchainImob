# Class: WebSocketProvider

[<internal>](../wiki/%3Cinternal%3E).WebSocketProvider

## Hierarchy

- [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider)

  ↳ **`WebSocketProvider`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.WebSocketProvider#constructor)

### Properties

- [\_bootstrapPoll](../wiki/%3Cinternal%3E.WebSocketProvider#_bootstrappoll)
- [\_detectNetwork](../wiki/%3Cinternal%3E.WebSocketProvider#_detectnetwork)
- [\_emitted](../wiki/%3Cinternal%3E.WebSocketProvider#_emitted)
- [\_eventLoopCache](../wiki/%3Cinternal%3E.WebSocketProvider#_eventloopcache)
- [\_events](../wiki/%3Cinternal%3E.WebSocketProvider#_events)
- [\_fastBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#_fastblocknumber)
- [\_fastBlockNumberPromise](../wiki/%3Cinternal%3E.WebSocketProvider#_fastblocknumberpromise)
- [\_fastQueryDate](../wiki/%3Cinternal%3E.WebSocketProvider#_fastquerydate)
- [\_internalBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#_internalblocknumber)
- [\_isProvider](../wiki/%3Cinternal%3E.WebSocketProvider#_isprovider)
- [\_lastBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#_lastblocknumber)
- [\_maxFilterBlockRange](../wiki/%3Cinternal%3E.WebSocketProvider#_maxfilterblockrange)
- [\_maxInternalBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#_maxinternalblocknumber)
- [\_network](../wiki/%3Cinternal%3E.WebSocketProvider#_network)
- [\_networkPromise](../wiki/%3Cinternal%3E.WebSocketProvider#_networkpromise)
- [\_nextId](../wiki/%3Cinternal%3E.WebSocketProvider#_nextid)
- [\_pendingFilter](../wiki/%3Cinternal%3E.WebSocketProvider#_pendingfilter)
- [\_poller](../wiki/%3Cinternal%3E.WebSocketProvider#_poller)
- [\_pollingInterval](../wiki/%3Cinternal%3E.WebSocketProvider#_pollinginterval)
- [\_requests](../wiki/%3Cinternal%3E.WebSocketProvider#_requests)
- [\_subIds](../wiki/%3Cinternal%3E.WebSocketProvider#_subids)
- [\_subs](../wiki/%3Cinternal%3E.WebSocketProvider#_subs)
- [\_websocket](../wiki/%3Cinternal%3E.WebSocketProvider#_websocket)
- [\_wsReady](../wiki/%3Cinternal%3E.WebSocketProvider#_wsready)
- [anyNetwork](../wiki/%3Cinternal%3E.WebSocketProvider#anynetwork)
- [connection](../wiki/%3Cinternal%3E.WebSocketProvider#connection)
- [disableCcipRead](../wiki/%3Cinternal%3E.WebSocketProvider#disableccipread)
- [formatter](../wiki/%3Cinternal%3E.WebSocketProvider#formatter)

### Accessors

- [\_cache](../wiki/%3Cinternal%3E.WebSocketProvider#_cache)
- [blockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#blocknumber)
- [network](../wiki/%3Cinternal%3E.WebSocketProvider#network)
- [polling](../wiki/%3Cinternal%3E.WebSocketProvider#polling)
- [pollingInterval](../wiki/%3Cinternal%3E.WebSocketProvider#pollinginterval)
- [ready](../wiki/%3Cinternal%3E.WebSocketProvider#ready)
- [websocket](../wiki/%3Cinternal%3E.WebSocketProvider#websocket)

### Methods

- [\_addEventListener](../wiki/%3Cinternal%3E.WebSocketProvider#_addeventlistener)
- [\_call](../wiki/%3Cinternal%3E.WebSocketProvider#_call)
- [\_getAddress](../wiki/%3Cinternal%3E.WebSocketProvider#_getaddress)
- [\_getBlock](../wiki/%3Cinternal%3E.WebSocketProvider#_getblock)
- [\_getBlockTag](../wiki/%3Cinternal%3E.WebSocketProvider#_getblocktag)
- [\_getFastBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#_getfastblocknumber)
- [\_getFilter](../wiki/%3Cinternal%3E.WebSocketProvider#_getfilter)
- [\_getInternalBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#_getinternalblocknumber)
- [\_getResolver](../wiki/%3Cinternal%3E.WebSocketProvider#_getresolver)
- [\_getTransactionRequest](../wiki/%3Cinternal%3E.WebSocketProvider#_gettransactionrequest)
- [\_ready](../wiki/%3Cinternal%3E.WebSocketProvider#_ready)
- [\_setFastBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#_setfastblocknumber)
- [\_startEvent](../wiki/%3Cinternal%3E.WebSocketProvider#_startevent)
- [\_startPending](../wiki/%3Cinternal%3E.WebSocketProvider#_startpending)
- [\_stopEvent](../wiki/%3Cinternal%3E.WebSocketProvider#_stopevent)
- [\_subscribe](../wiki/%3Cinternal%3E.WebSocketProvider#_subscribe)
- [\_uncachedDetectNetwork](../wiki/%3Cinternal%3E.WebSocketProvider#_uncacheddetectnetwork)
- [\_waitForTransaction](../wiki/%3Cinternal%3E.WebSocketProvider#_waitfortransaction)
- [\_wrapTransaction](../wiki/%3Cinternal%3E.WebSocketProvider#_wraptransaction)
- [addListener](../wiki/%3Cinternal%3E.WebSocketProvider#addlistener)
- [call](../wiki/%3Cinternal%3E.WebSocketProvider#call)
- [ccipReadFetch](../wiki/%3Cinternal%3E.WebSocketProvider#ccipreadfetch)
- [destroy](../wiki/%3Cinternal%3E.WebSocketProvider#destroy)
- [detectNetwork](../wiki/%3Cinternal%3E.WebSocketProvider#detectnetwork)
- [emit](../wiki/%3Cinternal%3E.WebSocketProvider#emit)
- [estimateGas](../wiki/%3Cinternal%3E.WebSocketProvider#estimategas)
- [getAvatar](../wiki/%3Cinternal%3E.WebSocketProvider#getavatar)
- [getBalance](../wiki/%3Cinternal%3E.WebSocketProvider#getbalance)
- [getBlock](../wiki/%3Cinternal%3E.WebSocketProvider#getblock)
- [getBlockNumber](../wiki/%3Cinternal%3E.WebSocketProvider#getblocknumber)
- [getBlockWithTransactions](../wiki/%3Cinternal%3E.WebSocketProvider#getblockwithtransactions)
- [getCode](../wiki/%3Cinternal%3E.WebSocketProvider#getcode)
- [getEtherPrice](../wiki/%3Cinternal%3E.WebSocketProvider#getetherprice)
- [getFeeData](../wiki/%3Cinternal%3E.WebSocketProvider#getfeedata)
- [getGasPrice](../wiki/%3Cinternal%3E.WebSocketProvider#getgasprice)
- [getLogs](../wiki/%3Cinternal%3E.WebSocketProvider#getlogs)
- [getNetwork](../wiki/%3Cinternal%3E.WebSocketProvider#getnetwork)
- [getResolver](../wiki/%3Cinternal%3E.WebSocketProvider#getresolver)
- [getSigner](../wiki/%3Cinternal%3E.WebSocketProvider#getsigner)
- [getStorageAt](../wiki/%3Cinternal%3E.WebSocketProvider#getstorageat)
- [getTransaction](../wiki/%3Cinternal%3E.WebSocketProvider#gettransaction)
- [getTransactionCount](../wiki/%3Cinternal%3E.WebSocketProvider#gettransactioncount)
- [getTransactionReceipt](../wiki/%3Cinternal%3E.WebSocketProvider#gettransactionreceipt)
- [getUncheckedSigner](../wiki/%3Cinternal%3E.WebSocketProvider#getuncheckedsigner)
- [listAccounts](../wiki/%3Cinternal%3E.WebSocketProvider#listaccounts)
- [listenerCount](../wiki/%3Cinternal%3E.WebSocketProvider#listenercount)
- [listeners](../wiki/%3Cinternal%3E.WebSocketProvider#listeners)
- [lookupAddress](../wiki/%3Cinternal%3E.WebSocketProvider#lookupaddress)
- [off](../wiki/%3Cinternal%3E.WebSocketProvider#off)
- [on](../wiki/%3Cinternal%3E.WebSocketProvider#on)
- [once](../wiki/%3Cinternal%3E.WebSocketProvider#once)
- [perform](../wiki/%3Cinternal%3E.WebSocketProvider#perform)
- [poll](../wiki/%3Cinternal%3E.WebSocketProvider#poll)
- [prepareRequest](../wiki/%3Cinternal%3E.WebSocketProvider#preparerequest)
- [removeAllListeners](../wiki/%3Cinternal%3E.WebSocketProvider#removealllisteners)
- [removeListener](../wiki/%3Cinternal%3E.WebSocketProvider#removelistener)
- [resetEventsBlock](../wiki/%3Cinternal%3E.WebSocketProvider#reseteventsblock)
- [resolveName](../wiki/%3Cinternal%3E.WebSocketProvider#resolvename)
- [send](../wiki/%3Cinternal%3E.WebSocketProvider#send)
- [sendTransaction](../wiki/%3Cinternal%3E.WebSocketProvider#sendtransaction)
- [waitForTransaction](../wiki/%3Cinternal%3E.WebSocketProvider#waitfortransaction)
- [defaultUrl](../wiki/%3Cinternal%3E.WebSocketProvider#defaulturl)
- [getFormatter](../wiki/%3Cinternal%3E.WebSocketProvider#getformatter)
- [getNetwork](../wiki/%3Cinternal%3E.WebSocketProvider#getnetwork-1)
- [hexlifyTransaction](../wiki/%3Cinternal%3E.WebSocketProvider#hexlifytransaction)
- [isProvider](../wiki/%3Cinternal%3E.WebSocketProvider#isprovider)

## Constructors

### constructor

• **new WebSocketProvider**(`url`, `network?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`WebSocketLike`](../wiki/%3Cinternal%3E.WebSocketLike) |
| `network?` | [`Networkish`](../wiki/%3Cinternal%3E#networkish) |

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[constructor](../wiki/%3Cinternal%3E.JsonRpcProvider#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:33

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: [`Timer`](../wiki/%3Cinternal%3E.Timer)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_bootstrapPoll](../wiki/%3Cinternal%3E.JsonRpcProvider#_bootstrappoll)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

___

### \_detectNetwork

• `Readonly` **\_detectNetwork**: `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:25

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_emitted](../wiki/%3Cinternal%3E.JsonRpcProvider#_emitted)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

___

### \_eventLoopCache

• **\_eventLoopCache**: [`Record`](../wiki/%3Cinternal%3E#record)<`string`, `Promise`<`any`\>\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_eventLoopCache](../wiki/%3Cinternal%3E.JsonRpcProvider#_eventloopcache)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:32

___

### \_events

• **\_events**: [`Event`](../wiki/%3Cinternal%3E.Event)[]

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_events](../wiki/%3Cinternal%3E.JsonRpcProvider#_events)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:59

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_fastBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#_fastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_fastBlockNumberPromise](../wiki/%3Cinternal%3E.JsonRpcProvider#_fastblocknumberpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_fastQueryDate](../wiki/%3Cinternal%3E.JsonRpcProvider#_fastquerydate)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`<{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_internalBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#_internalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_isProvider](../wiki/%3Cinternal%3E.JsonRpcProvider#_isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_lastBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#_lastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_maxFilterBlockRange](../wiki/%3Cinternal%3E.JsonRpcProvider#_maxfilterblockrange)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_maxInternalBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#_maxinternalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

___

### \_network

• **\_network**: [`Network`](../wiki/%3Cinternal%3E#network)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_network](../wiki/%3Cinternal%3E.JsonRpcProvider#_network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

___

### \_networkPromise

• **\_networkPromise**: `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_networkPromise](../wiki/%3Cinternal%3E.JsonRpcProvider#_networkpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

___

### \_nextId

• **\_nextId**: `number`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_nextId](../wiki/%3Cinternal%3E.JsonRpcProvider#_nextid)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:31

___

### \_pendingFilter

• **\_pendingFilter**: `Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_pendingFilter](../wiki/%3Cinternal%3E.JsonRpcProvider#_pendingfilter)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:30

___

### \_poller

• **\_poller**: [`Timer`](../wiki/%3Cinternal%3E.Timer)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_poller](../wiki/%3Cinternal%3E.JsonRpcProvider#_poller)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_pollingInterval](../wiki/%3Cinternal%3E.JsonRpcProvider#_pollinginterval)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

___

### \_requests

• `Readonly` **\_requests**: `Object`

#### Index signature

▪ [name: `string`]: [`InflightRequest`](../wiki/%3Cinternal%3E#inflightrequest)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:22

___

### \_subIds

• `Readonly` **\_subIds**: `Object`

#### Index signature

▪ [tag: `string`]: `Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:26

___

### \_subs

• `Readonly` **\_subs**: `Object`

#### Index signature

▪ [name: `string`]: [`Subscription`](../wiki/%3Cinternal%3E#subscription)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:29

___

### \_websocket

• `Readonly` **\_websocket**: `any`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:21

___

### \_wsReady

• **\_wsReady**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:32

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[anyNetwork](../wiki/%3Cinternal%3E.JsonRpcProvider#anynetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

___

### connection

• `Readonly` **connection**: [`ConnectionInfo`](../wiki/%3Cinternal%3E#connectioninfo)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[connection](../wiki/%3Cinternal%3E.JsonRpcProvider#connection)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:29

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[disableCcipRead](../wiki/%3Cinternal%3E.JsonRpcProvider#disableccipread)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

___

### formatter

• **formatter**: [`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[formatter](../wiki/%3Cinternal%3E.JsonRpcProvider#formatter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### \_cache

• `get` **_cache**(): [`Record`](../wiki/%3Cinternal%3E#record)<`string`, `Promise`<`any`\>\>

#### Returns

[`Record`](../wiki/%3Cinternal%3E#record)<`string`, `Promise`<`any`\>\>

#### Inherited from

JsonRpcProvider.\_cache

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:33

___

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Inherited from

JsonRpcProvider.blockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

___

### network

• `get` **network**(): [`Network`](../wiki/%3Cinternal%3E#network)

#### Returns

[`Network`](../wiki/%3Cinternal%3E#network)

#### Inherited from

JsonRpcProvider.network

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

___

### polling

• `set` **polling**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

JsonRpcProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:40

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Overrides

JsonRpcProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:36

• `set` **pollingInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

JsonRpcProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:38

___

### ready

• `get` **ready**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

JsonRpcProvider.ready

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

___

### websocket

• `get` **websocket**(): [`WebSocketLike`](../wiki/%3Cinternal%3E.WebSocketLike)

#### Returns

[`WebSocketLike`](../wiki/%3Cinternal%3E.WebSocketLike)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:34

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |
| `once` | `boolean` |

#### Returns

[`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_addEventListener](../wiki/%3Cinternal%3E.JsonRpcProvider#_addeventlistener)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_call](../wiki/%3Cinternal%3E.JsonRpcProvider#_call)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getAddress](../wiki/%3Cinternal%3E.JsonRpcProvider#_getaddress)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getBlock](../wiki/%3Cinternal%3E.JsonRpcProvider#_getblock)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getBlockTag](../wiki/%3Cinternal%3E.JsonRpcProvider#_getblocktag)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:138

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getFastBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#_getfastblocknumber)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getFilter](../wiki/%3Cinternal%3E.JsonRpcProvider#_getfilter)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getInternalBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#_getinternalblocknumber)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getResolver](../wiki/%3Cinternal%3E.JsonRpcProvider#_getresolver)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_getTransactionRequest](../wiki/%3Cinternal%3E.JsonRpcProvider#_gettransactionrequest)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:125

___

### \_ready

▸ **_ready**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_ready](../wiki/%3Cinternal%3E.JsonRpcProvider#_ready)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_setFastBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#_setfastblocknumber)

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

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_startEvent](../wiki/%3Cinternal%3E.JsonRpcProvider#_startevent)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:44

___

### \_startPending

▸ **_startPending**(): `void`

#### Returns

`void`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_startPending](../wiki/%3Cinternal%3E.JsonRpcProvider#_startpending)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:45

___

### \_stopEvent

▸ **_stopEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../wiki/%3Cinternal%3E.Event) |

#### Returns

`void`

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_stopEvent](../wiki/%3Cinternal%3E.JsonRpcProvider#_stopevent)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:45

___

### \_subscribe

▸ **_subscribe**(`tag`, `param`, `processFunc`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `param` | `any`[] |
| `processFunc` | (`result`: `any`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:43

___

### \_uncachedDetectNetwork

▸ **_uncachedDetectNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_uncachedDetectNetwork](../wiki/%3Cinternal%3E.JsonRpcProvider#_uncacheddetectnetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:37

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_waitForTransaction](../wiki/%3Cinternal%3E.JsonRpcProvider#_waitfortransaction)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[_wrapTransaction](../wiki/%3Cinternal%3E.JsonRpcProvider#_wraptransaction)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[addListener](../wiki/%3Cinternal%3E.JsonRpcProvider#addlistener)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[call](../wiki/%3Cinternal%3E.JsonRpcProvider#call)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[ccipReadFetch](../wiki/%3Cinternal%3E.JsonRpcProvider#ccipreadfetch)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:94

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:46

___

### detectNetwork

▸ **detectNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[detectNetwork](../wiki/%3Cinternal%3E.JsonRpcProvider#detectnetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:35

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[emit](../wiki/%3Cinternal%3E.JsonRpcProvider#emit)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[estimateGas](../wiki/%3Cinternal%3E.JsonRpcProvider#estimategas)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getAvatar](../wiki/%3Cinternal%3E.JsonRpcProvider#getavatar)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getBalance](../wiki/%3Cinternal%3E.JsonRpcProvider#getbalance)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getBlock](../wiki/%3Cinternal%3E.JsonRpcProvider#getblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:132

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getBlockNumber](../wiki/%3Cinternal%3E.JsonRpcProvider#getblocknumber)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getBlockWithTransactions](../wiki/%3Cinternal%3E.JsonRpcProvider#getblockwithtransactions)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getCode](../wiki/%3Cinternal%3E.JsonRpcProvider#getcode)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:121

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getEtherPrice](../wiki/%3Cinternal%3E.JsonRpcProvider#getetherprice)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:137

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Returns

`Promise`<[`FeeData`](../wiki/%3Cinternal%3E.FeeData)\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getFeeData](../wiki/%3Cinternal%3E.JsonRpcProvider#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:127

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getGasPrice](../wiki/%3Cinternal%3E.JsonRpcProvider#getgasprice)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getLogs](../wiki/%3Cinternal%3E.JsonRpcProvider#getlogs)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:136

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Returns

`Promise`<[`Network`](../wiki/%3Cinternal%3E#network)\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getNetwork](../wiki/%3Cinternal%3E.JsonRpcProvider#getnetwork)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getResolver](../wiki/%3Cinternal%3E.JsonRpcProvider#getresolver)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:139

___

### getSigner

▸ **getSigner**(`addressOrIndex?`): [`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

[`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getSigner](../wiki/%3Cinternal%3E.JsonRpcProvider#getsigner)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:38

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getStorageAt](../wiki/%3Cinternal%3E.JsonRpcProvider#getstorageat)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getTransaction](../wiki/%3Cinternal%3E.JsonRpcProvider#gettransaction)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getTransactionCount](../wiki/%3Cinternal%3E.JsonRpcProvider#gettransactioncount)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getTransactionReceipt](../wiki/%3Cinternal%3E.JsonRpcProvider#gettransactionreceipt)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:135

___

### getUncheckedSigner

▸ **getUncheckedSigner**(`addressOrIndex?`): [`UncheckedJsonRpcSigner`](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

[`UncheckedJsonRpcSigner`](../wiki/%3Cinternal%3E.UncheckedJsonRpcSigner)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getUncheckedSigner](../wiki/%3Cinternal%3E.JsonRpcProvider#getuncheckedsigner)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:39

___

### listAccounts

▸ **listAccounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[listAccounts](../wiki/%3Cinternal%3E.JsonRpcProvider#listaccounts)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:40

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[listenerCount](../wiki/%3Cinternal%3E.JsonRpcProvider#listenercount)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[listeners](../wiki/%3Cinternal%3E.JsonRpcProvider#listeners)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[lookupAddress](../wiki/%3Cinternal%3E.JsonRpcProvider#lookupaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:142

___

### off

▸ **off**(`eventName`, `listener?`): [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener?` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[off](../wiki/%3Cinternal%3E.JsonRpcProvider#off)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:153

___

### on

▸ **on**(`eventName`, `listener`): [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[on](../wiki/%3Cinternal%3E.JsonRpcProvider#on)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:148

___

### once

▸ **once**(`eventName`, `listener`): [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |

#### Returns

[`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[once](../wiki/%3Cinternal%3E.JsonRpcProvider#once)

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

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[perform](../wiki/%3Cinternal%3E.JsonRpcProvider#perform)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:43

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[poll](../wiki/%3Cinternal%3E.JsonRpcProvider#poll)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:39

___

### prepareRequest

▸ **prepareRequest**(`method`, `params`): [`string`, `any`[]]

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

[`string`, `any`[]]

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[prepareRequest](../wiki/%3Cinternal%3E.JsonRpcProvider#preparerequest)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:42

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../wiki/%3Cinternal%3E#eventtype) |

#### Returns

[`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[removeAllListeners](../wiki/%3Cinternal%3E.JsonRpcProvider#removealllisteners)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[removeListener](../wiki/%3Cinternal%3E.JsonRpcProvider#removelistener)

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

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[resetEventsBlock](../wiki/%3Cinternal%3E.JsonRpcProvider#reseteventsblock)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:37

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[resolveName](../wiki/%3Cinternal%3E.JsonRpcProvider#resolvename)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:141

___

### send

▸ **send**(`method`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[send](../wiki/%3Cinternal%3E.JsonRpcProvider#send)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:41

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[sendTransaction](../wiki/%3Cinternal%3E.JsonRpcProvider#sendtransaction)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[waitForTransaction](../wiki/%3Cinternal%3E.JsonRpcProvider#waitfortransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:108

___

### defaultUrl

▸ `Static` **defaultUrl**(): `string`

#### Returns

`string`

#### Overrides

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[defaultUrl](../wiki/%3Cinternal%3E.JsonRpcProvider#defaulturl)

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:42

___

### getFormatter

▸ `Static` **getFormatter**(): [`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Returns

[`Formatter`](../wiki/%3Cinternal%3E.Formatter)

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getFormatter](../wiki/%3Cinternal%3E.JsonRpcProvider#getformatter)

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[getNetwork](../wiki/%3Cinternal%3E.JsonRpcProvider#getnetwork-1)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:93

___

### hexlifyTransaction

▸ `Static` **hexlifyTransaction**(`transaction`, `allowExtra?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`TransactionRequest`](../wiki/%3Cinternal%3E#transactionrequest) |
| `allowExtra?` | `Object` |

#### Returns

`Object`

#### Inherited from

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[hexlifyTransaction](../wiki/%3Cinternal%3E.JsonRpcProvider#hexlifytransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:47

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

[JsonRpcProvider](../wiki/%3Cinternal%3E.JsonRpcProvider).[isProvider](../wiki/%3Cinternal%3E.JsonRpcProvider#isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
