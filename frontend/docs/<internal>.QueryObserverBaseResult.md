# Interface: QueryObserverBaseResult<TData, TError\>

[<internal>](../wiki/%3Cinternal%3E).QueryObserverBaseResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |

## Hierarchy

- **`QueryObserverBaseResult`**

  ↳ [`QueryObserverLoadingErrorResult`](../wiki/%3Cinternal%3E.QueryObserverLoadingErrorResult)

  ↳ [`QueryObserverLoadingResult`](../wiki/%3Cinternal%3E.QueryObserverLoadingResult)

  ↳ [`QueryObserverRefetchErrorResult`](../wiki/%3Cinternal%3E.QueryObserverRefetchErrorResult)

  ↳ [`QueryObserverSuccessResult`](../wiki/%3Cinternal%3E.QueryObserverSuccessResult)

## Table of contents

### Properties

- [data](../wiki/%3Cinternal%3E.QueryObserverBaseResult#data)
- [dataUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverBaseResult#dataupdatedat)
- [error](../wiki/%3Cinternal%3E.QueryObserverBaseResult#error)
- [errorUpdateCount](../wiki/%3Cinternal%3E.QueryObserverBaseResult#errorupdatecount)
- [errorUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverBaseResult#errorupdatedat)
- [failureCount](../wiki/%3Cinternal%3E.QueryObserverBaseResult#failurecount)
- [failureReason](../wiki/%3Cinternal%3E.QueryObserverBaseResult#failurereason)
- [fetchStatus](../wiki/%3Cinternal%3E.QueryObserverBaseResult#fetchstatus)
- [isError](../wiki/%3Cinternal%3E.QueryObserverBaseResult#iserror)
- [isFetched](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isfetched)
- [isFetchedAfterMount](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isfetchedaftermount)
- [isFetching](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isfetching)
- [isInitialLoading](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isinitialloading)
- [isLoading](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isloading)
- [isLoadingError](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isloadingerror)
- [isPaused](../wiki/%3Cinternal%3E.QueryObserverBaseResult#ispaused)
- [isPlaceholderData](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isplaceholderdata)
- [isPreviousData](../wiki/%3Cinternal%3E.QueryObserverBaseResult#ispreviousdata)
- [isRefetchError](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isrefetcherror)
- [isRefetching](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isrefetching)
- [isStale](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isstale)
- [isSuccess](../wiki/%3Cinternal%3E.QueryObserverBaseResult#issuccess)
- [status](../wiki/%3Cinternal%3E.QueryObserverBaseResult#status)

### Methods

- [refetch](../wiki/%3Cinternal%3E.QueryObserverBaseResult#refetch)
- [remove](../wiki/%3Cinternal%3E.QueryObserverBaseResult#remove)

## Properties

### data

• **data**: `undefined` \| `TData`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:217

___

### dataUpdatedAt

• **dataUpdatedAt**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:218

___

### error

• **error**: ``null`` \| `TError`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:219

___

### errorUpdateCount

• **errorUpdateCount**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:223

___

### errorUpdatedAt

• **errorUpdatedAt**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:220

___

### failureCount

• **failureCount**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:221

___

### failureReason

• **failureReason**: ``null`` \| `TError`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:222

___

### fetchStatus

• **fetchStatus**: [`FetchStatus`](../wiki/%3Cinternal%3E#fetchstatus)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:241

___

### isError

• **isError**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:224

___

### isFetched

• **isFetched**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:225

___

### isFetchedAfterMount

• **isFetchedAfterMount**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:226

___

### isFetching

• **isFetching**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:227

___

### isInitialLoading

• **isInitialLoading**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:230

___

### isLoading

• **isLoading**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:228

___

### isLoadingError

• **isLoadingError**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:229

___

### isPaused

• **isPaused**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:231

___

### isPlaceholderData

• **isPlaceholderData**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:232

___

### isPreviousData

• **isPreviousData**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:233

___

### isRefetchError

• **isRefetchError**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:234

___

### isRefetching

• **isRefetching**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:235

___

### isStale

• **isStale**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:236

___

### isSuccess

• **isSuccess**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:237

___

### status

• **status**: [`QueryStatus`](../wiki/%3Cinternal%3E#querystatus)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:240

## Methods

### refetch

▸ **refetch**<`TPageData`\>(`options?`): `Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Type parameters

| Name |
| :------ |
| `TPageData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RefetchOptions`](../wiki/%3Cinternal%3E.RefetchOptions) & [`RefetchQueryFilters`](../wiki/%3Cinternal%3E.RefetchQueryFilters)<`TPageData`\> |

#### Returns

`Promise`<[`QueryObserverResult`](../wiki/%3Cinternal%3E#queryobserverresult)<`TData`, `TError`\>\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:238

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:239
