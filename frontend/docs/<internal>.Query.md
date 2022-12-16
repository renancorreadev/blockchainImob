# Class: Query<TQueryFnData, TError, TData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).Query

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Hierarchy

- [`Removable`](../wiki/%3Cinternal%3E.Removable)

  ↳ **`Query`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Query#constructor)

### Properties

- [abortSignalConsumed](../wiki/%3Cinternal%3E.Query#abortsignalconsumed)
- [cache](../wiki/%3Cinternal%3E.Query#cache)
- [cacheTime](../wiki/%3Cinternal%3E.Query#cachetime)
- [defaultOptions](../wiki/%3Cinternal%3E.Query#defaultoptions)
- [dispatch](../wiki/%3Cinternal%3E.Query#dispatch)
- [initialState](../wiki/%3Cinternal%3E.Query#initialstate)
- [isFetchingOptimistic](../wiki/%3Cinternal%3E.Query#isfetchingoptimistic)
- [logger](../wiki/%3Cinternal%3E.Query#logger)
- [observers](../wiki/%3Cinternal%3E.Query#observers)
- [options](../wiki/%3Cinternal%3E.Query#options)
- [promise](../wiki/%3Cinternal%3E.Query#promise)
- [queryHash](../wiki/%3Cinternal%3E.Query#queryhash)
- [queryKey](../wiki/%3Cinternal%3E.Query#querykey)
- [retryer](../wiki/%3Cinternal%3E.Query#retryer)
- [revertState](../wiki/%3Cinternal%3E.Query#revertstate)
- [setOptions](../wiki/%3Cinternal%3E.Query#setoptions)
- [state](../wiki/%3Cinternal%3E.Query#state)

### Accessors

- [meta](../wiki/%3Cinternal%3E.Query#meta)

### Methods

- [addObserver](../wiki/%3Cinternal%3E.Query#addobserver)
- [cancel](../wiki/%3Cinternal%3E.Query#cancel)
- [clearGcTimeout](../wiki/%3Cinternal%3E.Query#cleargctimeout)
- [destroy](../wiki/%3Cinternal%3E.Query#destroy)
- [fetch](../wiki/%3Cinternal%3E.Query#fetch)
- [getObserversCount](../wiki/%3Cinternal%3E.Query#getobserverscount)
- [invalidate](../wiki/%3Cinternal%3E.Query#invalidate)
- [isActive](../wiki/%3Cinternal%3E.Query#isactive)
- [isDisabled](../wiki/%3Cinternal%3E.Query#isdisabled)
- [isStale](../wiki/%3Cinternal%3E.Query#isstale)
- [isStaleByTime](../wiki/%3Cinternal%3E.Query#isstalebytime)
- [onFocus](../wiki/%3Cinternal%3E.Query#onfocus)
- [onOnline](../wiki/%3Cinternal%3E.Query#ononline)
- [optionalRemove](../wiki/%3Cinternal%3E.Query#optionalremove)
- [removeObserver](../wiki/%3Cinternal%3E.Query#removeobserver)
- [reset](../wiki/%3Cinternal%3E.Query#reset)
- [scheduleGc](../wiki/%3Cinternal%3E.Query#schedulegc)
- [setData](../wiki/%3Cinternal%3E.Query#setdata)
- [setState](../wiki/%3Cinternal%3E.Query#setstate)
- [updateCacheTime](../wiki/%3Cinternal%3E.Query#updatecachetime)

## Constructors

### constructor

• **new Query**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`config`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryKey` | extends readonly `unknown`[] = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`QueryConfig`](../wiki/%3Cinternal%3E.QueryConfig)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Overrides

[Removable](../wiki/%3Cinternal%3E.Removable).[constructor](../wiki/%3Cinternal%3E.Removable#constructor)

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:96

## Properties

### abortSignalConsumed

• `Private` **abortSignalConsumed**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:95

___

### cache

• `Private` **cache**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:89

___

### cacheTime

• **cacheTime**: `number`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[cacheTime](../wiki/%3Cinternal%3E.Removable#cachetime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:2

___

### defaultOptions

• `Private` `Optional` **defaultOptions**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:94

___

### dispatch

• `Private` **dispatch**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:118

___

### initialState

• **initialState**: [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:85

___

### isFetchingOptimistic

• `Optional` **isFetchingOptimistic**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:88

___

### logger

• `Private` **logger**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:90

___

### observers

• `Private` **observers**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:93

___

### options

• **options**: [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:84

___

### promise

• `Private` `Optional` **promise**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:91

___

### queryHash

• **queryHash**: `string`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:83

___

### queryKey

• **queryKey**: `TQueryKey`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:82

___

### retryer

• `Private` `Optional` **retryer**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:92

___

### revertState

• `Optional` **revertState**: [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:86

___

### setOptions

• `Private` **setOptions**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:98

___

### state

• **state**: [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:87

## Accessors

### meta

• `get` **meta**(): `undefined` \| [`QueryMeta`](../wiki/%3Cinternal%3E.QueryMeta)

#### Returns

`undefined` \| [`QueryMeta`](../wiki/%3Cinternal%3E.QueryMeta)

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:97

## Methods

### addObserver

▸ **addObserver**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`QueryObserver`](../wiki/%3Cinternal%3E.QueryObserver)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:113

___

### cancel

▸ **cancel**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CancelOptions`](../wiki/%3Cinternal%3E.CancelOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:104

___

### clearGcTimeout

▸ `Protected` **clearGcTimeout**(): `void`

#### Returns

`void`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[clearGcTimeout](../wiki/%3Cinternal%3E.Removable#cleargctimeout)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:7

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[Removable](../wiki/%3Cinternal%3E.Removable).[destroy](../wiki/%3Cinternal%3E.Removable#destroy)

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:105

___

### fetch

▸ **fetch**(`options?`, `fetchOptions?`): `Promise`<`TData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |
| `fetchOptions?` | [`FetchOptions`](../wiki/%3Cinternal%3E.FetchOptions) |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:117

___

### getObserversCount

▸ **getObserversCount**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:115

___

### invalidate

▸ **invalidate**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:116

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:107

___

### isDisabled

▸ **isDisabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:108

___

### isStale

▸ **isStale**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:109

___

### isStaleByTime

▸ **isStaleByTime**(`staleTime?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `staleTime?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:110

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:111

___

### onOnline

▸ **onOnline**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:112

___

### optionalRemove

▸ `Protected` **optionalRemove**(): `void`

#### Returns

`void`

#### Overrides

[Removable](../wiki/%3Cinternal%3E.Removable).[optionalRemove](../wiki/%3Cinternal%3E.Removable#optionalremove)

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:99

___

### removeObserver

▸ **removeObserver**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`QueryObserver`](../wiki/%3Cinternal%3E.QueryObserver)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:114

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:106

___

### scheduleGc

▸ `Protected` **scheduleGc**(): `void`

#### Returns

`void`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[scheduleGc](../wiki/%3Cinternal%3E.Removable#schedulegc)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:5

___

### setData

▸ **setData**(`newData`, `options?`): `TData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newData` | `TData` |
| `options?` | [`SetDataOptions`](../wiki/%3Cinternal%3E.SetDataOptions) & { `manual`: `boolean`  } |

#### Returns

`TData`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:100

___

### setState

▸ **setState**(`state`, `setStateOptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TData`, `TError`\> |
| `setStateOptions?` | [`SetStateOptions`](../wiki/%3Cinternal%3E.SetStateOptions) |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:103

___

### updateCacheTime

▸ `Protected` **updateCacheTime**(`newCacheTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCacheTime` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[updateCacheTime](../wiki/%3Cinternal%3E.Removable#updatecachetime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:6
