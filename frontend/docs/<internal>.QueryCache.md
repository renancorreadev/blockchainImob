# Class: QueryCache

[<internal>](../wiki/%3Cinternal%3E).QueryCache

## Hierarchy

- [`Subscribable`](../wiki/%3Cinternal%3E.Subscribable)<[`QueryCacheListener`](../wiki/%3Cinternal%3E#querycachelistener)\>

  ↳ **`QueryCache`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.QueryCache#constructor)

### Properties

- [config](../wiki/%3Cinternal%3E.QueryCache#config)
- [listeners](../wiki/%3Cinternal%3E.QueryCache#listeners)
- [queries](../wiki/%3Cinternal%3E.QueryCache#queries)
- [queriesMap](../wiki/%3Cinternal%3E.QueryCache#queriesmap)

### Methods

- [add](../wiki/%3Cinternal%3E.QueryCache#add)
- [build](../wiki/%3Cinternal%3E.QueryCache#build)
- [clear](../wiki/%3Cinternal%3E.QueryCache#clear)
- [find](../wiki/%3Cinternal%3E.QueryCache#find)
- [findAll](../wiki/%3Cinternal%3E.QueryCache#findall)
- [get](../wiki/%3Cinternal%3E.QueryCache#get)
- [getAll](../wiki/%3Cinternal%3E.QueryCache#getall)
- [hasListeners](../wiki/%3Cinternal%3E.QueryCache#haslisteners)
- [notify](../wiki/%3Cinternal%3E.QueryCache#notify)
- [onFocus](../wiki/%3Cinternal%3E.QueryCache#onfocus)
- [onOnline](../wiki/%3Cinternal%3E.QueryCache#ononline)
- [onSubscribe](../wiki/%3Cinternal%3E.QueryCache#onsubscribe)
- [onUnsubscribe](../wiki/%3Cinternal%3E.QueryCache#onunsubscribe)
- [remove](../wiki/%3Cinternal%3E.QueryCache#remove)
- [subscribe](../wiki/%3Cinternal%3E.QueryCache#subscribe)

## Constructors

### constructor

• **new QueryCache**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`QueryCacheConfig`](../wiki/%3Cinternal%3E.QueryCacheConfig) |

#### Overrides

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[constructor](../wiki/%3Cinternal%3E.Subscribable#constructor)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:50

## Properties

### config

• **config**: [`QueryCacheConfig`](../wiki/%3Cinternal%3E.QueryCacheConfig)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:47

___

### listeners

• `Protected` **listeners**: [`QueryCacheListener`](../wiki/%3Cinternal%3E#querycachelistener)[]

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[listeners](../wiki/%3Cinternal%3E.Subscribable#listeners)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:3

___

### queries

• `Private` **queries**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:48

___

### queriesMap

• `Private` **queriesMap**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:49

## Methods

### add

▸ **add**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../wiki/%3Cinternal%3E.Query)<`any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:52

___

### build

▸ **build**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`client`, `options`, `state?`): [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `TQueryFnData` |
| `TError` | `TError` |
| `TData` | `TData` |
| `TQueryKey` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`QueryClient`](../wiki/%3Cinternal%3E.QueryClient) |
| `options` | [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |
| `state?` | [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TData`, `TError`\> |

#### Returns

[`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:51

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:54

___

### find

▸ **find**<`TQueryFnData`, `TError`, `TData`\>(`arg1`, `arg2?`): `undefined` \| [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TData`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `arg2?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

`undefined` \| [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TData`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:57

___

### findAll

▸ **findAll**(`queryKey?`, `filters?`): [`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

[`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:58

▸ **findAll**(`filters?`): [`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

[`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:59

▸ **findAll**(`arg1?`, `arg2?`): [`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) \| [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |
| `arg2?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

[`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:60

___

### get

▸ **get**<`TQueryFnData`, `TError`, `TData`, `TQueyKey`\>(`queryHash`): `undefined` \| [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TData`, `TQueyKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueyKey` | extends readonly `unknown`[] = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryHash` | `string` |

#### Returns

`undefined` \| [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TData`, `TQueyKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:55

___

### getAll

▸ **getAll**(): [`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Returns

[`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:56

___

### hasListeners

▸ **hasListeners**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[hasListeners](../wiki/%3Cinternal%3E.Subscribable#haslisteners)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:6

___

### notify

▸ **notify**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`QueryCacheNotifyEvent`](../wiki/%3Cinternal%3E#querycachenotifyevent) |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:61

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:62

___

### onOnline

▸ **onOnline**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:63

___

### onSubscribe

▸ `Protected` **onSubscribe**(): `void`

#### Returns

`void`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[onSubscribe](../wiki/%3Cinternal%3E.Subscribable#onsubscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:7

___

### onUnsubscribe

▸ `Protected` **onUnsubscribe**(): `void`

#### Returns

`void`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[onUnsubscribe](../wiki/%3Cinternal%3E.Subscribable#onunsubscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:8

___

### remove

▸ **remove**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../wiki/%3Cinternal%3E.Query)<`any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:53

___

### subscribe

▸ **subscribe**(`listener`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`QueryCacheListener`](../wiki/%3Cinternal%3E#querycachelistener) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[subscribe](../wiki/%3Cinternal%3E.Subscribable#subscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:5
