# Interface: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).FetchQueryOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Hierarchy

- [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>

  ↳ **`FetchQueryOptions`**

  ↳↳ [`FetchInfiniteQueryOptions`](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions)

## Table of contents

### Properties

- [\_defaulted](../wiki/%3Cinternal%3E.FetchQueryOptions#_defaulted)
- [behavior](../wiki/%3Cinternal%3E.FetchQueryOptions#behavior)
- [cacheTime](../wiki/%3Cinternal%3E.FetchQueryOptions#cachetime)
- [getNextPageParam](../wiki/%3Cinternal%3E.FetchQueryOptions#getnextpageparam)
- [getPreviousPageParam](../wiki/%3Cinternal%3E.FetchQueryOptions#getpreviouspageparam)
- [initialData](../wiki/%3Cinternal%3E.FetchQueryOptions#initialdata)
- [initialDataUpdatedAt](../wiki/%3Cinternal%3E.FetchQueryOptions#initialdataupdatedat)
- [meta](../wiki/%3Cinternal%3E.FetchQueryOptions#meta)
- [networkMode](../wiki/%3Cinternal%3E.FetchQueryOptions#networkmode)
- [queryFn](../wiki/%3Cinternal%3E.FetchQueryOptions#queryfn)
- [queryHash](../wiki/%3Cinternal%3E.FetchQueryOptions#queryhash)
- [queryKey](../wiki/%3Cinternal%3E.FetchQueryOptions#querykey)
- [queryKeyHashFn](../wiki/%3Cinternal%3E.FetchQueryOptions#querykeyhashfn)
- [retry](../wiki/%3Cinternal%3E.FetchQueryOptions#retry)
- [retryDelay](../wiki/%3Cinternal%3E.FetchQueryOptions#retrydelay)
- [staleTime](../wiki/%3Cinternal%3E.FetchQueryOptions#staletime)
- [structuralSharing](../wiki/%3Cinternal%3E.FetchQueryOptions#structuralsharing)

### Methods

- [isDataEqual](../wiki/%3Cinternal%3E.FetchQueryOptions#isdataequal)

## Properties

### \_defaulted

• `Optional` **\_defaulted**: `boolean`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[_defaulted](../wiki/%3Cinternal%3E.QueryOptions#_defaulted)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:64

___

### behavior

• `Optional` **behavior**: [`QueryBehavior`](../wiki/%3Cinternal%3E.QueryBehavior)<`TQueryFnData`, `TError`, `TData`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[behavior](../wiki/%3Cinternal%3E.QueryOptions#behavior)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:47

___

### cacheTime

• `Optional` **cacheTime**: `number`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[cacheTime](../wiki/%3Cinternal%3E.QueryOptions#cachetime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:39

___

### getNextPageParam

• `Optional` **getNextPageParam**: [`GetNextPageParamFunction`](../wiki/%3Cinternal%3E#getnextpageparamfunction)<`TQueryFnData`\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[getNextPageParam](../wiki/%3Cinternal%3E.QueryOptions#getnextpageparam)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:63

___

### getPreviousPageParam

• `Optional` **getPreviousPageParam**: [`GetPreviousPageParamFunction`](../wiki/%3Cinternal%3E#getpreviouspageparamfunction)<`TQueryFnData`\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[getPreviousPageParam](../wiki/%3Cinternal%3E.QueryOptions#getpreviouspageparam)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:58

___

### initialData

• `Optional` **initialData**: `TData` \| [`InitialDataFunction`](../wiki/%3Cinternal%3E#initialdatafunction)<`TData`\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[initialData](../wiki/%3Cinternal%3E.QueryOptions#initialdata)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:45

___

### initialDataUpdatedAt

• `Optional` **initialDataUpdatedAt**: `number` \| () => `undefined` \| `number`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[initialDataUpdatedAt](../wiki/%3Cinternal%3E.QueryOptions#initialdataupdatedat)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:46

___

### meta

• `Optional` **meta**: [`QueryMeta`](../wiki/%3Cinternal%3E.QueryMeta)

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[meta](../wiki/%3Cinternal%3E.QueryOptions#meta)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:69

___

### networkMode

• `Optional` **networkMode**: [`NetworkMode`](../wiki/%3Cinternal%3E#networkmode)

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[networkMode](../wiki/%3Cinternal%3E.QueryOptions#networkmode)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:38

___

### queryFn

• `Optional` **queryFn**: [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[queryFn](../wiki/%3Cinternal%3E.QueryOptions#queryfn)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:41

___

### queryHash

• `Optional` **queryHash**: `string`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[queryHash](../wiki/%3Cinternal%3E.QueryOptions#queryhash)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:42

___

### queryKey

• `Optional` **queryKey**: `TQueryKey`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[queryKey](../wiki/%3Cinternal%3E.QueryOptions#querykey)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:43

___

### queryKeyHashFn

• `Optional` **queryKeyHashFn**: [`QueryKeyHashFunction`](../wiki/%3Cinternal%3E#querykeyhashfunction)<`TQueryKey`\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[queryKeyHashFn](../wiki/%3Cinternal%3E.QueryOptions#querykeyhashfn)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:44

___

### retry

• `Optional` **retry**: [`RetryValue`](../wiki/%3Cinternal%3E#retryvalue)<`TError`\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[retry](../wiki/%3Cinternal%3E.QueryOptions#retry)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:36

___

### retryDelay

• `Optional` **retryDelay**: [`RetryDelayValue`](../wiki/%3Cinternal%3E#retrydelayvalue)<`TError`\>

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[retryDelay](../wiki/%3Cinternal%3E.QueryOptions#retrydelay)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:37

___

### staleTime

• `Optional` **staleTime**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:182

___

### structuralSharing

• `Optional` **structuralSharing**: `boolean` \| (`oldData`: `undefined` \| `TData`, `newData`: `TData`) => `TData`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[structuralSharing](../wiki/%3Cinternal%3E.QueryOptions#structuralsharing)

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

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[isDataEqual](../wiki/%3Cinternal%3E.QueryOptions#isdataequal)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:40
