# Class: QueryObserver<TQueryFnData, TError, TData, TQueryData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).QueryObserver

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryData` | `TQueryFnData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Hierarchy

- [`Subscribable`](../wiki/%3Cinternal%3E.Subscribable)<[`QueryObserverListener`](../wiki/%3Cinternal%3E#queryobserverlistener)<`TData`, `TError`\>\>

  ↳ **`QueryObserver`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.QueryObserver#constructor)

### Properties

- [clearRefetchInterval](../wiki/%3Cinternal%3E.QueryObserver#clearrefetchinterval)
- [clearStaleTimeout](../wiki/%3Cinternal%3E.QueryObserver#clearstaletimeout)
- [client](../wiki/%3Cinternal%3E.QueryObserver#client)
- [computeRefetchInterval](../wiki/%3Cinternal%3E.QueryObserver#computerefetchinterval)
- [currentQuery](../wiki/%3Cinternal%3E.QueryObserver#currentquery)
- [currentQueryInitialState](../wiki/%3Cinternal%3E.QueryObserver#currentqueryinitialstate)
- [currentRefetchInterval](../wiki/%3Cinternal%3E.QueryObserver#currentrefetchinterval)
- [currentResult](../wiki/%3Cinternal%3E.QueryObserver#currentresult)
- [currentResultOptions](../wiki/%3Cinternal%3E.QueryObserver#currentresultoptions)
- [currentResultState](../wiki/%3Cinternal%3E.QueryObserver#currentresultstate)
- [executeFetch](../wiki/%3Cinternal%3E.QueryObserver#executefetch)
- [listeners](../wiki/%3Cinternal%3E.QueryObserver#listeners)
- [notify](../wiki/%3Cinternal%3E.QueryObserver#notify)
- [options](../wiki/%3Cinternal%3E.QueryObserver#options)
- [previousQueryResult](../wiki/%3Cinternal%3E.QueryObserver#previousqueryresult)
- [refetchIntervalId](../wiki/%3Cinternal%3E.QueryObserver#refetchintervalid)
- [selectError](../wiki/%3Cinternal%3E.QueryObserver#selecterror)
- [selectFn](../wiki/%3Cinternal%3E.QueryObserver#selectfn)
- [selectResult](../wiki/%3Cinternal%3E.QueryObserver#selectresult)
- [staleTimeoutId](../wiki/%3Cinternal%3E.QueryObserver#staletimeoutid)
- [trackedProps](../wiki/%3Cinternal%3E.QueryObserver#trackedprops)
- [updateQuery](../wiki/%3Cinternal%3E.QueryObserver#updatequery)
- [updateRefetchInterval](../wiki/%3Cinternal%3E.QueryObserver#updaterefetchinterval)
- [updateStaleTimeout](../wiki/%3Cinternal%3E.QueryObserver#updatestaletimeout)
- [updateTimers](../wiki/%3Cinternal%3E.QueryObserver#updatetimers)

### Methods

- [bindMethods](../wiki/%3Cinternal%3E.QueryObserver#bindmethods)
- [createResult](../wiki/%3Cinternal%3E.QueryObserver#createresult)
- [destroy](../wiki/%3Cinternal%3E.QueryObserver#destroy)
- [fetch](../wiki/%3Cinternal%3E.QueryObserver#fetch)
- [fetchOptimistic](../wiki/%3Cinternal%3E.QueryObserver#fetchoptimistic)
- [getCurrentQuery](../wiki/%3Cinternal%3E.QueryObserver#getcurrentquery)
- [getCurrentResult](../wiki/%3Cinternal%3E.QueryObserver#getcurrentresult)
- [getOptimisticResult](../wiki/%3Cinternal%3E.QueryObserver#getoptimisticresult)
- [hasListeners](../wiki/%3Cinternal%3E.QueryObserver#haslisteners)
- [onQueryUpdate](../wiki/%3Cinternal%3E.QueryObserver#onqueryupdate)
- [onSubscribe](../wiki/%3Cinternal%3E.QueryObserver#onsubscribe)
- [onUnsubscribe](../wiki/%3Cinternal%3E.QueryObserver#onunsubscribe)
- [refetch](../wiki/%3Cinternal%3E.QueryObserver#refetch)
- [remove](../wiki/%3Cinternal%3E.QueryObserver#remove)
- [setOptions](../wiki/%3Cinternal%3E.QueryObserver#setoptions)
- [shouldFetchOnReconnect](../wiki/%3Cinternal%3E.QueryObserver#shouldfetchonreconnect)
- [shouldFetchOnWindowFocus](../wiki/%3Cinternal%3E.QueryObserver#shouldfetchonwindowfocus)
- [subscribe](../wiki/%3Cinternal%3E.QueryObserver#subscribe)
- [trackResult](../wiki/%3Cinternal%3E.QueryObserver#trackresult)
- [updateResult](../wiki/%3Cinternal%3E.QueryObserver#updateresult)

## Constructors

### constructor

• **new QueryObserver**<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\>(`client`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryData` | `TQueryFnData` |
| `TQueryKey` | extends readonly `unknown`[] = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`QueryClient`](../wiki/%3Cinternal%3E.QueryClient) |
| `options` | [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\> |

#### Overrides

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[constructor](../wiki/%3Cinternal%3E.Subscribable#constructor)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:32

## Properties

### clearRefetchInterval

• `Private` **clearRefetchInterval**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:54

___

### clearStaleTimeout

• `Private` **clearStaleTimeout**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:53

___

### client

• `Private` **client**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:18

___

### computeRefetchInterval

• `Private` **computeRefetchInterval**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:50

___

### currentQuery

• `Private` **currentQuery**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:19

___

### currentQueryInitialState

• `Private` **currentQueryInitialState**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:20

___

### currentRefetchInterval

• `Private` `Optional` **currentRefetchInterval**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:30

___

### currentResult

• `Private` **currentResult**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:21

___

### currentResultOptions

• `Private` `Optional` **currentResultOptions**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:23

___

### currentResultState

• `Private` `Optional` **currentResultState**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:22

___

### executeFetch

• `Private` **executeFetch**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:48

___

### listeners

• `Protected` **listeners**: [`QueryObserverListener`](../wiki/%3Cinternal%3E#queryobserverlistener)<`TData`, `TError`\>[]

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[listeners](../wiki/%3Cinternal%3E.Subscribable#listeners)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:3

___

### notify

• `Private` **notify**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:59

___

### options

• **options**: [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:17

___

### previousQueryResult

• `Private` `Optional` **previousQueryResult**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:24

___

### refetchIntervalId

• `Private` `Optional` **refetchIntervalId**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:29

___

### selectError

• `Private` **selectError**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:25

___

### selectFn

• `Private` `Optional` **selectFn**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:26

___

### selectResult

• `Private` `Optional` **selectResult**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:27

___

### staleTimeoutId

• `Private` `Optional` **staleTimeoutId**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:28

___

### trackedProps

• `Private` **trackedProps**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:31

___

### updateQuery

• `Private` **updateQuery**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:57

___

### updateRefetchInterval

• `Private` **updateRefetchInterval**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:51

___

### updateStaleTimeout

• `Private` **updateStaleTimeout**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:49

___

### updateTimers

• `Private` **updateTimers**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:52

## Methods

### bindMethods

▸ `Protected` **bindMethods**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:33

___

### createResult

▸ `Protected` **createResult**(`query`, `options`): [`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\> |
| `options` | [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\> |

#### Returns

[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:55

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:38

___

### fetch

▸ `Protected` **fetch**(`fetchOptions`): `Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetchOptions` | [`ObserverFetchOptions`](../wiki/%3Cinternal%3E.ObserverFetchOptions) |

#### Returns

`Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:47

___

### fetchOptimistic

▸ **fetchOptimistic**(`options`): `Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\> |

#### Returns

`Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:46

___

### getCurrentQuery

▸ **getCurrentQuery**(): [`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>

#### Returns

[`Query`](../wiki/%3Cinternal%3E.Query)<`TQueryFnData`, `TError`, `TQueryData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:43

___

### getCurrentResult

▸ **getCurrentResult**(): [`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Returns

[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:41

___

### getOptimisticResult

▸ **getOptimisticResult**(`options`): [`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DefaultedQueryObserverOptions`](../wiki/%3Cinternal%3E#defaultedqueryobserveroptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\> |

#### Returns

[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:40

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

### onQueryUpdate

▸ **onQueryUpdate**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../wiki/%3Cinternal%3E#action)<`TData`, `TError`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:58

___

### onSubscribe

▸ `Protected` **onSubscribe**(): `void`

#### Returns

`void`

#### Overrides

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[onSubscribe](../wiki/%3Cinternal%3E.Subscribable#onsubscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:34

___

### onUnsubscribe

▸ `Protected` **onUnsubscribe**(): `void`

#### Returns

`void`

#### Overrides

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[onUnsubscribe](../wiki/%3Cinternal%3E.Subscribable#onunsubscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:35

___

### refetch

▸ **refetch**<`TPageData`\>(`«destructured»?`): `Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Type parameters

| Name |
| :------ |
| `TPageData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`RefetchOptions`](../wiki/%3Cinternal%3E.RefetchOptions) & [`RefetchPageFilters`](../wiki/%3Cinternal%3E.RefetchPageFilters)<`TPageData`\> |

#### Returns

`Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:45

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:44

___

### setOptions

▸ **setOptions**(`options?`, `notifyOptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`QueryObserverOptions`](../wiki/%3Cinternal%3E.QueryObserverOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryData`, `TQueryKey`\> |
| `notifyOptions?` | [`NotifyOptions`](../wiki/%3Cinternal%3E.NotifyOptions) |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:39

___

### shouldFetchOnReconnect

▸ **shouldFetchOnReconnect**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:36

___

### shouldFetchOnWindowFocus

▸ **shouldFetchOnWindowFocus**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:37

___

### subscribe

▸ **subscribe**(`listener`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`QueryObserverListener`](../wiki/%3Cinternal%3E#queryobserverlistener)<`TData`, `TError`\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[subscribe](../wiki/%3Cinternal%3E.Subscribable#subscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:5

___

### trackResult

▸ **trackResult**(`result`): [`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\> |

#### Returns

[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:42

___

### updateResult

▸ **updateResult**(`notifyOptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifyOptions?` | [`NotifyOptions`](../wiki/%3Cinternal%3E.NotifyOptions) |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryObserver.d.ts:56
