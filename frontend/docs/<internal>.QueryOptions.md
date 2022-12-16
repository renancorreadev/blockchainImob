# Interface: QueryOptions<TQueryFnData, TError, TData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).QueryOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Hierarchy

- **`QueryOptions`**

  ↳ [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)

  ↳ [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)

## Table of contents

### Properties

- [\_defaulted](../wiki/%3Cinternal%3E.QueryOptions#_defaulted)
- [behavior](../wiki/%3Cinternal%3E.QueryOptions#behavior)
- [cacheTime](../wiki/%3Cinternal%3E.QueryOptions#cachetime)
- [getNextPageParam](../wiki/%3Cinternal%3E.QueryOptions#getnextpageparam)
- [getPreviousPageParam](../wiki/%3Cinternal%3E.QueryOptions#getpreviouspageparam)
- [initialData](../wiki/%3Cinternal%3E.QueryOptions#initialdata)
- [initialDataUpdatedAt](../wiki/%3Cinternal%3E.QueryOptions#initialdataupdatedat)
- [meta](../wiki/%3Cinternal%3E.QueryOptions#meta)
- [networkMode](../wiki/%3Cinternal%3E.QueryOptions#networkmode)
- [queryFn](../wiki/%3Cinternal%3E.QueryOptions#queryfn)
- [queryHash](../wiki/%3Cinternal%3E.QueryOptions#queryhash)
- [queryKey](../wiki/%3Cinternal%3E.QueryOptions#querykey)
- [queryKeyHashFn](../wiki/%3Cinternal%3E.QueryOptions#querykeyhashfn)
- [retry](../wiki/%3Cinternal%3E.QueryOptions#retry)
- [retryDelay](../wiki/%3Cinternal%3E.QueryOptions#retrydelay)
- [structuralSharing](../wiki/%3Cinternal%3E.QueryOptions#structuralsharing)

### Methods

- [isDataEqual](../wiki/%3Cinternal%3E.QueryOptions#isdataequal)

## Properties

### \_defaulted

• `Optional` **\_defaulted**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:64

___

### behavior

• `Optional` **behavior**: [`QueryBehavior`](../wiki/%3Cinternal%3E.QueryBehavior)<`TQueryFnData`, `TError`, `TData`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:47

___

### cacheTime

• `Optional` **cacheTime**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:39

___

### getNextPageParam

• `Optional` **getNextPageParam**: [`GetNextPageParamFunction`](../wiki/%3Cinternal%3E#getnextpageparamfunction)<`TQueryFnData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:63

___

### getPreviousPageParam

• `Optional` **getPreviousPageParam**: [`GetPreviousPageParamFunction`](../wiki/%3Cinternal%3E#getpreviouspageparamfunction)<`TQueryFnData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:58

___

### initialData

• `Optional` **initialData**: `TData` \| [`InitialDataFunction`](../wiki/%3Cinternal%3E#initialdatafunction)<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:45

___

### initialDataUpdatedAt

• `Optional` **initialDataUpdatedAt**: `number` \| () => `undefined` \| `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:46

___

### meta

• `Optional` **meta**: [`QueryMeta`](../wiki/%3Cinternal%3E.QueryMeta)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:69

___

### networkMode

• `Optional` **networkMode**: [`NetworkMode`](../wiki/%3Cinternal%3E#networkmode)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:38

___

### queryFn

• `Optional` **queryFn**: [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:41

___

### queryHash

• `Optional` **queryHash**: `string`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:42

___

### queryKey

• `Optional` **queryKey**: `TQueryKey`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:43

___

### queryKeyHashFn

• `Optional` **queryKeyHashFn**: [`QueryKeyHashFunction`](../wiki/%3Cinternal%3E#querykeyhashfunction)<`TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:44

___

### retry

• `Optional` **retry**: [`RetryValue`](../wiki/%3Cinternal%3E#retryvalue)<`TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:36

___

### retryDelay

• `Optional` **retryDelay**: [`RetryDelayValue`](../wiki/%3Cinternal%3E#retrydelayvalue)<`TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:37

___

### structuralSharing

• `Optional` **structuralSharing**: `boolean` \| (`oldData`: `undefined` \| `TData`, `newData`: `TData`) => `TData`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:53

## Methods

### isDataEqual

▸ `Optional` **isDataEqual**(`oldData`, `newData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldData` | `undefined` \| `TData` |
| `newData` | `TData` |

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:40
