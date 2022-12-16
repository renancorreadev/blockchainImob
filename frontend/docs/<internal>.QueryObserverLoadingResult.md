# Interface: QueryObserverLoadingResult<TData, TError\>

[<internal>](../wiki/%3Cinternal%3E).QueryObserverLoadingResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |

## Hierarchy

- [`QueryObserverBaseResult`](../wiki/%3Cinternal%3E.QueryObserverBaseResult)<`TData`, `TError`\>

  ↳ **`QueryObserverLoadingResult`**

## Table of contents

### Properties

- [data](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#data)
- [dataUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#dataupdatedat)
- [error](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#error)
- [errorUpdateCount](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#errorupdatecount)
- [errorUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#errorupdatedat)
- [failureCount](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#failurecount)
- [failureReason](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#failurereason)
- [fetchStatus](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#fetchstatus)
- [isError](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#iserror)
- [isFetched](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isfetched)
- [isFetchedAfterMount](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isfetchedaftermount)
- [isFetching](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isfetching)
- [isInitialLoading](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isinitialloading)
- [isLoading](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isloading)
- [isLoadingError](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isloadingerror)
- [isPaused](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#ispaused)
- [isPlaceholderData](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isplaceholderdata)
- [isPreviousData](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#ispreviousdata)
- [isRefetchError](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isrefetcherror)
- [isRefetching](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isrefetching)
- [isStale](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#isstale)
- [isSuccess](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#issuccess)
- [status](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#status)

### Methods

- [refetch](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#refetch)
- [remove](../wiki/%3Cinternal%3E.QueryObserverLoadingResult#remove)

## Properties

### data

• **data**: `undefined`

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[data](../wiki/%3Cinternal%3E.QueryObserverBaseResult#data)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:244

___

### dataUpdatedAt

• **dataUpdatedAt**: `number`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[dataUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverBaseResult#dataupdatedat)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:218

___

### error

• **error**: ``null``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[error](../wiki/%3Cinternal%3E.QueryObserverBaseResult#error)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:245

___

### errorUpdateCount

• **errorUpdateCount**: `number`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[errorUpdateCount](../wiki/%3Cinternal%3E.QueryObserverBaseResult#errorupdatecount)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:223

___

### errorUpdatedAt

• **errorUpdatedAt**: `number`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[errorUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverBaseResult#errorupdatedat)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:220

___

### failureCount

• **failureCount**: `number`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[failureCount](../wiki/%3Cinternal%3E.QueryObserverBaseResult#failurecount)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:221

___

### failureReason

• **failureReason**: ``null`` \| `TError`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[failureReason](../wiki/%3Cinternal%3E.QueryObserverBaseResult#failurereason)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:222

___

### fetchStatus

• **fetchStatus**: [`FetchStatus`](../wiki/%3Cinternal%3E#fetchstatus)

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[fetchStatus](../wiki/%3Cinternal%3E.QueryObserverBaseResult#fetchstatus)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:241

___

### isError

• **isError**: ``false``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isError](../wiki/%3Cinternal%3E.QueryObserverBaseResult#iserror)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:246

___

### isFetched

• **isFetched**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isFetched](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isfetched)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:225

___

### isFetchedAfterMount

• **isFetchedAfterMount**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isFetchedAfterMount](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isfetchedaftermount)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:226

___

### isFetching

• **isFetching**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isFetching](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isfetching)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:227

___

### isInitialLoading

• **isInitialLoading**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isInitialLoading](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isinitialloading)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:230

___

### isLoading

• **isLoading**: ``true``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isLoading](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isloading)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:247

___

### isLoadingError

• **isLoadingError**: ``false``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isLoadingError](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isloadingerror)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:248

___

### isPaused

• **isPaused**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isPaused](../wiki/%3Cinternal%3E.QueryObserverBaseResult#ispaused)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:231

___

### isPlaceholderData

• **isPlaceholderData**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isPlaceholderData](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isplaceholderdata)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:232

___

### isPreviousData

• **isPreviousData**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isPreviousData](../wiki/%3Cinternal%3E.QueryObserverBaseResult#ispreviousdata)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:233

___

### isRefetchError

• **isRefetchError**: ``false``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isRefetchError](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isrefetcherror)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:249

___

### isRefetching

• **isRefetching**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isRefetching](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isrefetching)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:235

___

### isStale

• **isStale**: `boolean`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isStale](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isstale)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:236

___

### isSuccess

• **isSuccess**: ``false``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isSuccess](../wiki/%3Cinternal%3E.QueryObserverBaseResult#issuccess)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:250

___

### status

• **status**: ``"loading"``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[status](../wiki/%3Cinternal%3E.QueryObserverBaseResult#status)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:251

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

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[refetch](../wiki/%3Cinternal%3E.QueryObserverBaseResult#refetch)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:238

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Inherited from

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[remove](../wiki/%3Cinternal%3E.QueryObserverBaseResult#remove)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:239
