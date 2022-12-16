# Interface: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).QueryObserverOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryData` | `TQueryFnData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Hierarchy

- [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>

  ↳ **`QueryObserverOptions`**

## Table of contents

### Properties

- [\_defaulted](../wiki/%3Cinternal%3E.QueryObserverOptions#_defaulted)
- [\_optimisticResults](../wiki/%3Cinternal%3E.QueryObserverOptions#_optimisticresults)
- [behavior](../wiki/%3Cinternal%3E.QueryObserverOptions#behavior)
- [cacheTime](../wiki/%3Cinternal%3E.QueryObserverOptions#cachetime)
- [enabled](../wiki/%3Cinternal%3E.QueryObserverOptions#enabled)
- [getNextPageParam](../wiki/%3Cinternal%3E.QueryObserverOptions#getnextpageparam)
- [getPreviousPageParam](../wiki/%3Cinternal%3E.QueryObserverOptions#getpreviouspageparam)
- [initialData](../wiki/%3Cinternal%3E.QueryObserverOptions#initialdata)
- [initialDataUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverOptions#initialdataupdatedat)
- [keepPreviousData](../wiki/%3Cinternal%3E.QueryObserverOptions#keeppreviousdata)
- [meta](../wiki/%3Cinternal%3E.QueryObserverOptions#meta)
- [networkMode](../wiki/%3Cinternal%3E.QueryObserverOptions#networkmode)
- [notifyOnChangeProps](../wiki/%3Cinternal%3E.QueryObserverOptions#notifyonchangeprops)
- [placeholderData](../wiki/%3Cinternal%3E.QueryObserverOptions#placeholderdata)
- [queryFn](../wiki/%3Cinternal%3E.QueryObserverOptions#queryfn)
- [queryHash](../wiki/%3Cinternal%3E.QueryObserverOptions#queryhash)
- [queryKey](../wiki/%3Cinternal%3E.QueryObserverOptions#querykey)
- [queryKeyHashFn](../wiki/%3Cinternal%3E.QueryObserverOptions#querykeyhashfn)
- [refetchInterval](../wiki/%3Cinternal%3E.QueryObserverOptions#refetchinterval)
- [refetchIntervalInBackground](../wiki/%3Cinternal%3E.QueryObserverOptions#refetchintervalinbackground)
- [refetchOnMount](../wiki/%3Cinternal%3E.QueryObserverOptions#refetchonmount)
- [refetchOnReconnect](../wiki/%3Cinternal%3E.QueryObserverOptions#refetchonreconnect)
- [refetchOnWindowFocus](../wiki/%3Cinternal%3E.QueryObserverOptions#refetchonwindowfocus)
- [retry](../wiki/%3Cinternal%3E.QueryObserverOptions#retry)
- [retryDelay](../wiki/%3Cinternal%3E.QueryObserverOptions#retrydelay)
- [retryOnMount](../wiki/%3Cinternal%3E.QueryObserverOptions#retryonmount)
- [staleTime](../wiki/%3Cinternal%3E.QueryObserverOptions#staletime)
- [structuralSharing](../wiki/%3Cinternal%3E.QueryObserverOptions#structuralsharing)
- [suspense](../wiki/%3Cinternal%3E.QueryObserverOptions#suspense)
- [useErrorBoundary](../wiki/%3Cinternal%3E.QueryObserverOptions#useerrorboundary)

### Methods

- [isDataEqual](../wiki/%3Cinternal%3E.QueryObserverOptions#isdataequal)
- [onError](../wiki/%3Cinternal%3E.QueryObserverOptions#onerror)
- [onSettled](../wiki/%3Cinternal%3E.QueryObserverOptions#onsettled)
- [onSuccess](../wiki/%3Cinternal%3E.QueryObserverOptions#onsuccess)
- [select](../wiki/%3Cinternal%3E.QueryObserverOptions#select)

## Properties

### \_defaulted

• `Optional` **\_defaulted**: `boolean`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[_defaulted](../wiki/%3Cinternal%3E.QueryOptions#_defaulted)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:64

___

### \_optimisticResults

• `Optional` **\_optimisticResults**: ``"optimistic"`` \| ``"isRestoring"``

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:170

___

### behavior

• `Optional` **behavior**: [`QueryBehavior`](../wiki/%3Cinternal%3E.QueryBehavior)<`TQueryFnData`, `TError`, `TQueryData`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\>

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

### enabled

• `Optional` **enabled**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:78

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

• `Optional` **initialData**: `TQueryData` \| [`InitialDataFunction`](../wiki/%3Cinternal%3E#initialdatafunction)<`TQueryData`\>

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

### keepPreviousData

• `Optional` **keepPreviousData**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:165

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

### notifyOnChangeProps

• `Optional` **notifyOnChangeProps**: ``"all"`` \| (``"data"`` \| ``"error"`` \| ``"isLoading"`` \| ``"status"`` \| ``"isError"`` \| ``"isSuccess"`` \| ``"isFetched"`` \| ``"isFetchedAfterMount"`` \| ``"isFetching"`` \| ``"isRefetching"`` \| ``"refetch"`` \| ``"fetchStatus"`` \| ``"isLoadingError"`` \| ``"isRefetchError"`` \| ``"fetchNextPage"`` \| ``"fetchPreviousPage"`` \| ``"hasNextPage"`` \| ``"hasPreviousPage"`` \| ``"isFetchingNextPage"`` \| ``"isFetchingPreviousPage"`` \| ``"dataUpdatedAt"`` \| ``"errorUpdatedAt"`` \| ``"failureCount"`` \| ``"failureReason"`` \| ``"errorUpdateCount"`` \| ``"isInitialLoading"`` \| ``"isPaused"`` \| ``"isPlaceholderData"`` \| ``"isPreviousData"`` \| ``"isStale"`` \| ``"remove"``)[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:130

___

### placeholderData

• `Optional` **placeholderData**: `TQueryData` \| [`PlaceholderDataFunction`](../wiki/%3Cinternal%3E#placeholderdatafunction)<`TQueryData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:169

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

### refetchInterval

• `Optional` **refetchInterval**: `number` \| ``false`` \| (`data`: `undefined` \| `TData`, `query`: [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>) => `number` \| ``false``

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:89

___

### refetchIntervalInBackground

• `Optional` **refetchIntervalInBackground**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:94

___

### refetchOnMount

• `Optional` **refetchOnMount**: `boolean` \| ``"always"`` \| (`query`: [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>) => `boolean` \| ``"always"``

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:118

___

### refetchOnReconnect

• `Optional` **refetchOnReconnect**: `boolean` \| ``"always"`` \| (`query`: [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>) => `boolean` \| ``"always"``

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:110

___

### refetchOnWindowFocus

• `Optional` **refetchOnWindowFocus**: `boolean` \| ``"always"`` \| (`query`: [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>) => `boolean` \| ``"always"``

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:102

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

### retryOnMount

• `Optional` **retryOnMount**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:123

___

### staleTime

• `Optional` **staleTime**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:83

___

### structuralSharing

• `Optional` **structuralSharing**: `boolean` \| (`oldData`: `undefined` \| `TQueryData`, `newData`: `TQueryData`) => `TQueryData`

#### Inherited from

[QueryOptions](../wiki/%3Cinternal%3E.QueryOptions).[structuralSharing](../wiki/%3Cinternal%3E.QueryOptions#structuralsharing)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:53

___

### suspense

• `Optional` **suspense**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:160

___

### useErrorBoundary

• `Optional` **useErrorBoundary**: [`UseErrorBoundary`](../wiki/%3Cinternal%3E#useerrorboundary)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:150

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

___

### onError

▸ `Optional` **onError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `TError` |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:138

___

### onSettled

▸ `Optional` **onSettled**(`data`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| `TData` |
| `error` | ``null`` \| `TError` |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:142

___

### onSuccess

▸ `Optional` **onSuccess**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:134

___

### select

▸ `Optional` **select**(`data`): `TData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TQueryData` |

#### Returns

`TData`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:154
