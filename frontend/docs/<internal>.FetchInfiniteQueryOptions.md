# Interface: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).FetchInfiniteQueryOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Hierarchy

- [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, [`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>, `TQueryKey`\>

  ↳ **`FetchInfiniteQueryOptions`**

## Table of contents

### Properties

- [\_defaulted](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#_defaulted)
- [behavior](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#behavior)
- [cacheTime](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#cachetime)
- [getNextPageParam](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#getnextpageparam)
- [getPreviousPageParam](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#getpreviouspageparam)
- [initialData](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#initialdata)
- [initialDataUpdatedAt](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#initialdataupdatedat)
- [meta](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#meta)
- [networkMode](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#networkmode)
- [queryFn](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#queryfn)
- [queryHash](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#queryhash)
- [queryKey](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#querykey)
- [queryKeyHashFn](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#querykeyhashfn)
- [retry](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#retry)
- [retryDelay](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#retrydelay)
- [staleTime](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#staletime)
- [structuralSharing](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#structuralsharing)

### Methods

- [isDataEqual](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions#isdataequal)

## Properties

### \_defaulted

• `Optional` **\_defaulted**: `boolean`

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[_defaulted](../wiki/%3Cinternal%3E.FetchQueryOptions#_defaulted)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:64

___

### behavior

• `Optional` **behavior**: [`QueryBehavior`](../wiki/%3Cinternal%3E.QueryBehavior)<`TQueryFnData`, `TError`, [`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[behavior](../wiki/%3Cinternal%3E.FetchQueryOptions#behavior)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:47

___

### cacheTime

• `Optional` **cacheTime**: `number`

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[cacheTime](../wiki/%3Cinternal%3E.FetchQueryOptions#cachetime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:39

___

### getNextPageParam

• `Optional` **getNextPageParam**: [`GetNextPageParamFunction`](../wiki/%3Cinternal%3E#getnextpageparamfunction)<`TQueryFnData`\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[getNextPageParam](../wiki/%3Cinternal%3E.FetchQueryOptions#getnextpageparam)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:63

___

### getPreviousPageParam

• `Optional` **getPreviousPageParam**: [`GetPreviousPageParamFunction`](../wiki/%3Cinternal%3E#getpreviouspageparamfunction)<`TQueryFnData`\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[getPreviousPageParam](../wiki/%3Cinternal%3E.FetchQueryOptions#getpreviouspageparam)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:58

___

### initialData

• `Optional` **initialData**: [`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\> \| [`InitialDataFunction`](../wiki/%3Cinternal%3E#initialdatafunction)<[`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[initialData](../wiki/%3Cinternal%3E.FetchQueryOptions#initialdata)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:45

___

### initialDataUpdatedAt

• `Optional` **initialDataUpdatedAt**: `number` \| () => `undefined` \| `number`

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[initialDataUpdatedAt](../wiki/%3Cinternal%3E.FetchQueryOptions#initialdataupdatedat)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:46

___

### meta

• `Optional` **meta**: [`QueryMeta`](../wiki/%3Cinternal%3E.QueryMeta)

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[meta](../wiki/%3Cinternal%3E.FetchQueryOptions#meta)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:69

___

### networkMode

• `Optional` **networkMode**: [`NetworkMode`](../wiki/%3Cinternal%3E#networkmode)

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[networkMode](../wiki/%3Cinternal%3E.FetchQueryOptions#networkmode)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:38

___

### queryFn

• `Optional` **queryFn**: [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[queryFn](../wiki/%3Cinternal%3E.FetchQueryOptions#queryfn)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:41

___

### queryHash

• `Optional` **queryHash**: `string`

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[queryHash](../wiki/%3Cinternal%3E.FetchQueryOptions#queryhash)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:42

___

### queryKey

• `Optional` **queryKey**: `TQueryKey`

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[queryKey](../wiki/%3Cinternal%3E.FetchQueryOptions#querykey)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:43

___

### queryKeyHashFn

• `Optional` **queryKeyHashFn**: [`QueryKeyHashFunction`](../wiki/%3Cinternal%3E#querykeyhashfunction)<`TQueryKey`\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[queryKeyHashFn](../wiki/%3Cinternal%3E.FetchQueryOptions#querykeyhashfn)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:44

___

### retry

• `Optional` **retry**: [`RetryValue`](../wiki/%3Cinternal%3E#retryvalue)<`TError`\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[retry](../wiki/%3Cinternal%3E.FetchQueryOptions#retry)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:36

___

### retryDelay

• `Optional` **retryDelay**: [`RetryDelayValue`](../wiki/%3Cinternal%3E#retrydelayvalue)<`TError`\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[retryDelay](../wiki/%3Cinternal%3E.FetchQueryOptions#retrydelay)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:37

___

### staleTime

• `Optional` **staleTime**: `number`

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[staleTime](../wiki/%3Cinternal%3E.FetchQueryOptions#staletime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:182

___

### structuralSharing

• `Optional` **structuralSharing**: `boolean` \| (`oldData`: `undefined` \| [`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>, `newData`: [`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>) => [`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>

#### Inherited from

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[structuralSharing](../wiki/%3Cinternal%3E.FetchQueryOptions#structuralsharing)

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

[FetchQueryOptions](../wiki/%3Cinternal%3E.FetchQueryOptions).[isDataEqual](../wiki/%3Cinternal%3E.FetchQueryOptions#isdataequal)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:40
