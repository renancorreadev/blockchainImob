# Class: QueryClient

[<internal>](../wiki/%3Cinternal%3E).QueryClient

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.QueryClient#constructor)

### Properties

- [defaultOptions](../wiki/%3Cinternal%3E.QueryClient#defaultoptions)
- [logger](../wiki/%3Cinternal%3E.QueryClient#logger)
- [mutationCache](../wiki/%3Cinternal%3E.QueryClient#mutationcache)
- [mutationDefaults](../wiki/%3Cinternal%3E.QueryClient#mutationdefaults)
- [queryCache](../wiki/%3Cinternal%3E.QueryClient#querycache)
- [queryDefaults](../wiki/%3Cinternal%3E.QueryClient#querydefaults)
- [unsubscribeFocus](../wiki/%3Cinternal%3E.QueryClient#unsubscribefocus)
- [unsubscribeOnline](../wiki/%3Cinternal%3E.QueryClient#unsubscribeonline)

### Methods

- [cancelQueries](../wiki/%3Cinternal%3E.QueryClient#cancelqueries)
- [clear](../wiki/%3Cinternal%3E.QueryClient#clear)
- [defaultMutationOptions](../wiki/%3Cinternal%3E.QueryClient#defaultmutationoptions)
- [defaultQueryOptions](../wiki/%3Cinternal%3E.QueryClient#defaultqueryoptions)
- [ensureQueryData](../wiki/%3Cinternal%3E.QueryClient#ensurequerydata)
- [fetchInfiniteQuery](../wiki/%3Cinternal%3E.QueryClient#fetchinfinitequery)
- [fetchQuery](../wiki/%3Cinternal%3E.QueryClient#fetchquery)
- [getDefaultOptions](../wiki/%3Cinternal%3E.QueryClient#getdefaultoptions)
- [getLogger](../wiki/%3Cinternal%3E.QueryClient#getlogger)
- [getMutationCache](../wiki/%3Cinternal%3E.QueryClient#getmutationcache)
- [getMutationDefaults](../wiki/%3Cinternal%3E.QueryClient#getmutationdefaults)
- [getQueriesData](../wiki/%3Cinternal%3E.QueryClient#getqueriesdata)
- [getQueryCache](../wiki/%3Cinternal%3E.QueryClient#getquerycache)
- [getQueryData](../wiki/%3Cinternal%3E.QueryClient#getquerydata)
- [getQueryDefaults](../wiki/%3Cinternal%3E.QueryClient#getquerydefaults)
- [getQueryState](../wiki/%3Cinternal%3E.QueryClient#getquerystate)
- [invalidateQueries](../wiki/%3Cinternal%3E.QueryClient#invalidatequeries)
- [isFetching](../wiki/%3Cinternal%3E.QueryClient#isfetching)
- [isMutating](../wiki/%3Cinternal%3E.QueryClient#ismutating)
- [mount](../wiki/%3Cinternal%3E.QueryClient#mount)
- [prefetchInfiniteQuery](../wiki/%3Cinternal%3E.QueryClient#prefetchinfinitequery)
- [prefetchQuery](../wiki/%3Cinternal%3E.QueryClient#prefetchquery)
- [refetchQueries](../wiki/%3Cinternal%3E.QueryClient#refetchqueries)
- [removeQueries](../wiki/%3Cinternal%3E.QueryClient#removequeries)
- [resetQueries](../wiki/%3Cinternal%3E.QueryClient#resetqueries)
- [resumePausedMutations](../wiki/%3Cinternal%3E.QueryClient#resumepausedmutations)
- [setDefaultOptions](../wiki/%3Cinternal%3E.QueryClient#setdefaultoptions)
- [setMutationDefaults](../wiki/%3Cinternal%3E.QueryClient#setmutationdefaults)
- [setQueriesData](../wiki/%3Cinternal%3E.QueryClient#setqueriesdata)
- [setQueryData](../wiki/%3Cinternal%3E.QueryClient#setquerydata)
- [setQueryDefaults](../wiki/%3Cinternal%3E.QueryClient#setquerydefaults)
- [unmount](../wiki/%3Cinternal%3E.QueryClient#unmount)

## Constructors

### constructor

• **new QueryClient**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`QueryClientConfig`](../wiki/%3Cinternal%3E.QueryClientConfig) |

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:17

## Properties

### defaultOptions

• `Private` **defaultOptions**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:12

___

### logger

• `Private` **logger**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:11

___

### mutationCache

• `Private` **mutationCache**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:10

___

### mutationDefaults

• `Private` **mutationDefaults**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:14

___

### queryCache

• `Private` **queryCache**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:9

___

### queryDefaults

• `Private` **queryDefaults**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:13

___

### unsubscribeFocus

• `Private` `Optional` **unsubscribeFocus**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:15

___

### unsubscribeOnline

• `Private` `Optional` **unsubscribeOnline**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:16

## Methods

### cancelQueries

▸ **cancelQueries**(`filters?`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |
| `options?` | [`CancelOptions`](../wiki/%3Cinternal%3E.CancelOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:37

▸ **cancelQueries**(`queryKey?`, `filters?`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |
| `options?` | [`CancelOptions`](../wiki/%3Cinternal%3E.CancelOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:38

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:67

___

### defaultMutationOptions

▸ **defaultMutationOptions**<`T`\>(`options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MutationOptions`](../wiki/%3Cinternal%3E.MutationOptions)<`any`, `any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `T` |

#### Returns

`T`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:66

___

### defaultQueryOptions

▸ **defaultQueryOptions**<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\>(`options?`): [`DefaultedQueryObserverOptions`](../wiki/%3Cinternal%3E#defaultedqueryobserveroptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `TQueryFnData` |
| `TError` | `TError` |
| `TData` | `TData` |
| `TQueryData` | `TQueryData` |
| `TQueryKey` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\> \| [`DefaultedQueryObserverOptions`](../wiki/%3Cinternal%3E#defaultedqueryobserveroptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\> |

#### Returns

[`DefaultedQueryObserverOptions`](../wiki/%3Cinternal%3E#defaultedqueryobserveroptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:65

___

### ensureQueryData

▸ **ensureQueryData**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`options`): `Promise`<`TData`\>

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
| `options` | [`WithRequired`](../wiki/%3Cinternal%3E#withrequired)<[`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>, ``"queryKey"``\> |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:24

▸ **ensureQueryData**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `options?`): `Promise`<`TData`\>

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
| `queryKey` | `TQueryKey` |
| `options?` | [`Omit`](../wiki/%3Cinternal%3E#omit)<[`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>, ``"queryKey"``\> |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:25

▸ **ensureQueryData**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `queryFn`, `options?`): `Promise`<`TData`\>

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
| `queryKey` | `TQueryKey` |
| `queryFn` | [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\> |
| `options?` | [`Omit`](../wiki/%3Cinternal%3E#omit)<[`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>, ``"queryKey"`` \| ``"queryFn"``\> |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:26

___

### fetchInfiniteQuery

▸ **fetchInfiniteQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`options`): `Promise`<[`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>\>

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
| `options` | [`FetchInfiniteQueryOptions`](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<[`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:49

▸ **fetchInfiniteQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `options?`): `Promise`<[`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>\>

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
| `queryKey` | `TQueryKey` |
| `options?` | [`FetchInfiniteQueryOptions`](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<[`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:50

▸ **fetchInfiniteQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `queryFn`, `options?`): `Promise`<[`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>\>

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
| `queryKey` | `TQueryKey` |
| `queryFn` | [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\> |
| `options?` | [`FetchInfiniteQueryOptions`](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<[`InfiniteData`](../wiki/%3Cinternal%3E.InfiniteData)<`TData`\>\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:51

___

### fetchQuery

▸ **fetchQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`options`): `Promise`<`TData`\>

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
| `options` | [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:43

▸ **fetchQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `options?`): `Promise`<`TData`\>

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
| `queryKey` | `TQueryKey` |
| `options?` | [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:44

▸ **fetchQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `queryFn`, `options?`): `Promise`<`TData`\>

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
| `queryKey` | `TQueryKey` |
| `queryFn` | [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\> |
| `options?` | [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:45

___

### getDefaultOptions

▸ **getDefaultOptions**(): [`DefaultOptions`](../wiki/%3Cinternal%3E.DefaultOptions)<`unknown`\>

#### Returns

[`DefaultOptions`](../wiki/%3Cinternal%3E.DefaultOptions)<`unknown`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:59

___

### getLogger

▸ **getLogger**(): [`Logger`](../wiki/%3Cinternal%3E.Logger)

#### Returns

[`Logger`](../wiki/%3Cinternal%3E.Logger)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:58

___

### getMutationCache

▸ **getMutationCache**(): [`MutationCache`](../wiki/%3Cinternal%3E.MutationCache)

#### Returns

[`MutationCache`](../wiki/%3Cinternal%3E.MutationCache)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:57

___

### getMutationDefaults

▸ **getMutationDefaults**(`mutationKey?`): `undefined` \| [`MutationObserverOptions`](../wiki/%3Cinternal%3E.MutationObserverOptions)<`any`, `any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutationKey?` | [`MutationKey`](../wiki/%3Cinternal%3E#mutationkey) |

#### Returns

`undefined` \| [`MutationObserverOptions`](../wiki/%3Cinternal%3E.MutationObserverOptions)<`any`, `any`, `any`, `any`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:64

___

### getQueriesData

▸ **getQueriesData**<`TQueryFnData`\>(`queryKey`): [[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

#### Returns

[[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:27

▸ **getQueriesData**<`TQueryFnData`\>(`filters`): [[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

[[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:28

___

### getQueryCache

▸ **getQueryCache**(): [`QueryCache`](../wiki/%3Cinternal%3E.QueryCache)

#### Returns

[`QueryCache`](../wiki/%3Cinternal%3E.QueryCache)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:56

___

### getQueryData

▸ **getQueryData**<`TQueryFnData`\>(`queryKey`, `filters?`): `undefined` \| `TQueryFnData`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

`undefined` \| `TQueryFnData`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:23

___

### getQueryDefaults

▸ **getQueryDefaults**(`queryKey?`): `undefined` \| [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`any`, `any`, `any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

#### Returns

`undefined` \| [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:62

___

### getQueryState

▸ **getQueryState**<`TQueryFnData`, `TError`\>(`queryKey`, `filters?`): `undefined` \| [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TQueryFnData`, `TError`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

`undefined` \| [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TQueryFnData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:32

___

### invalidateQueries

▸ **invalidateQueries**<`TPageData`\>(`filters?`, `options?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`InvalidateQueryFilters`](../wiki/%3Cinternal%3E.InvalidateQueryFilters)<`TPageData`\> |
| `options?` | [`InvalidateOptions`](../wiki/%3Cinternal%3E.InvalidateOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:39

▸ **invalidateQueries**<`TPageData`\>(`queryKey?`, `filters?`, `options?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`InvalidateQueryFilters`](../wiki/%3Cinternal%3E.InvalidateQueryFilters)<`TPageData`\> |
| `options?` | [`InvalidateOptions`](../wiki/%3Cinternal%3E.InvalidateOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:40

___

### isFetching

▸ **isFetching**(`filters?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

`number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:20

▸ **isFetching**(`queryKey?`, `filters?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

`number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:21

___

### isMutating

▸ **isMutating**(`filters?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`MutationFilters`](../wiki/%3Cinternal%3E.MutationFilters) |

#### Returns

`number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:22

___

### mount

▸ **mount**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:18

___

### prefetchInfiniteQuery

▸ **prefetchInfiniteQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`options`): `Promise`<`void`\>

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
| `options` | [`FetchInfiniteQueryOptions`](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:52

▸ **prefetchInfiniteQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `options?`): `Promise`<`void`\>

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
| `queryKey` | `TQueryKey` |
| `options?` | [`FetchInfiniteQueryOptions`](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:53

▸ **prefetchInfiniteQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `queryFn`, `options?`): `Promise`<`void`\>

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
| `queryKey` | `TQueryKey` |
| `queryFn` | [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\> |
| `options?` | [`FetchInfiniteQueryOptions`](../wiki/%3Cinternal%3E.FetchInfiniteQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:54

___

### prefetchQuery

▸ **prefetchQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`options`): `Promise`<`void`\>

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
| `options` | [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:46

▸ **prefetchQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `options?`): `Promise`<`void`\>

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
| `queryKey` | `TQueryKey` |
| `options?` | [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:47

▸ **prefetchQuery**<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>(`queryKey`, `queryFn`, `options?`): `Promise`<`void`\>

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
| `queryKey` | `TQueryKey` |
| `queryFn` | [`QueryFunction`](../wiki/%3Cinternal%3E#queryfunction)<`TQueryFnData`, `TQueryKey`\> |
| `options?` | [`FetchQueryOptions`](../wiki/%3Cinternal%3E.FetchQueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:48

___

### refetchQueries

▸ **refetchQueries**<`TPageData`\>(`filters?`, `options?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`RefetchQueryFilters`](../wiki/%3Cinternal%3E.RefetchQueryFilters)<`TPageData`\> |
| `options?` | [`RefetchOptions`](../wiki/%3Cinternal%3E.RefetchOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:41

▸ **refetchQueries**<`TPageData`\>(`queryKey?`, `filters?`, `options?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`RefetchQueryFilters`](../wiki/%3Cinternal%3E.RefetchQueryFilters)<`TPageData`\> |
| `options?` | [`RefetchOptions`](../wiki/%3Cinternal%3E.RefetchOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:42

___

### removeQueries

▸ **removeQueries**(`filters?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:33

▸ **removeQueries**(`queryKey?`, `filters?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:34

___

### resetQueries

▸ **resetQueries**<`TPageData`\>(`filters?`, `options?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`ResetQueryFilters`](../wiki/%3Cinternal%3E.ResetQueryFilters)<`TPageData`\> |
| `options?` | [`ResetOptions`](../wiki/%3Cinternal%3E.ResetOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:35

▸ **resetQueries**<`TPageData`\>(`queryKey?`, `filters?`, `options?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey?` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `filters?` | [`ResetQueryFilters`](../wiki/%3Cinternal%3E.ResetQueryFilters)<`TPageData`\> |
| `options?` | [`ResetOptions`](../wiki/%3Cinternal%3E.ResetOptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:36

___

### resumePausedMutations

▸ **resumePausedMutations**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:55

___

### setDefaultOptions

▸ **setDefaultOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DefaultOptions`](../wiki/%3Cinternal%3E.DefaultOptions)<`unknown`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:60

___

### setMutationDefaults

▸ **setMutationDefaults**(`mutationKey`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutationKey` | [`MutationKey`](../wiki/%3Cinternal%3E#mutationkey) |
| `options` | [`MutationObserverOptions`](../wiki/%3Cinternal%3E.MutationObserverOptions)<`any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:63

___

### setQueriesData

▸ **setQueriesData**<`TQueryFnData`\>(`queryKey`, `updater`, `options?`): [[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Type parameters

| Name |
| :------ |
| `TQueryFnData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `updater` | [`Updater`](../wiki/%3Cinternal%3E#updater)<`undefined` \| `TQueryFnData`, `undefined` \| `TQueryFnData`\> |
| `options?` | [`SetDataOptions`](../wiki/%3Cinternal%3E.SetDataOptions) |

#### Returns

[[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:30

▸ **setQueriesData**<`TQueryFnData`\>(`filters`, `updater`, `options?`): [[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Type parameters

| Name |
| :------ |
| `TQueryFnData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters) |
| `updater` | [`Updater`](../wiki/%3Cinternal%3E#updater)<`undefined` \| `TQueryFnData`, `undefined` \| `TQueryFnData`\> |
| `options?` | [`SetDataOptions`](../wiki/%3Cinternal%3E.SetDataOptions) |

#### Returns

[[`QueryKey`](../wiki/%3Cinternal%3E#querykey), `undefined` \| `TQueryFnData`][]

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:31

___

### setQueryData

▸ **setQueryData**<`TQueryFnData`\>(`queryKey`, `updater`, `options?`): `undefined` \| `TQueryFnData`

#### Type parameters

| Name |
| :------ |
| `TQueryFnData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `updater` | [`Updater`](../wiki/%3Cinternal%3E#updater)<`undefined` \| `TQueryFnData`, `undefined` \| `TQueryFnData`\> |
| `options?` | [`SetDataOptions`](../wiki/%3Cinternal%3E.SetDataOptions) |

#### Returns

`undefined` \| `TQueryFnData`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:29

___

### setQueryDefaults

▸ **setQueryDefaults**(`queryKey`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey` | [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |
| `options` | [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`unknown`, `any`, `any`, `any`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:61

___

### unmount

▸ **unmount**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryClient.d.ts:19
