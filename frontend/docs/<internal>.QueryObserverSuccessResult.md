# Interface: QueryObserverSuccessResult<TData, TError\>

[<internal>](../wiki/%3Cinternal%3E).QueryObserverSuccessResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |

## Hierarchy

- [`QueryObserverBaseResult`](../wiki/%3Cinternal%3E.QueryObserverBaseResult)<`TData`, `TError`\>

  ↳ **`QueryObserverSuccessResult`**

## Table of contents

### Properties

- [data](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#data)
- [dataUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#dataupdatedat)
- [error](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#error)
- [errorUpdateCount](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#errorupdatecount)
- [errorUpdatedAt](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#errorupdatedat)
- [failureCount](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#failurecount)
- [failureReason](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#failurereason)
- [fetchStatus](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#fetchstatus)
- [isError](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#iserror)
- [isFetched](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isfetched)
- [isFetchedAfterMount](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isfetchedaftermount)
- [isFetching](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isfetching)
- [isInitialLoading](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isinitialloading)
- [isLoading](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isloading)
- [isLoadingError](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isloadingerror)
- [isPaused](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#ispaused)
- [isPlaceholderData](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isplaceholderdata)
- [isPreviousData](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#ispreviousdata)
- [isRefetchError](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isrefetcherror)
- [isRefetching](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isrefetching)
- [isStale](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#isstale)
- [isSuccess](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#issuccess)
- [status](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#status)

### Methods

- [refetch](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#refetch)
- [remove](../wiki/%3Cinternal%3E.QueryObserverSuccessResult#remove)

## Properties

### data

• **data**: `TData`

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[data](../wiki/%3Cinternal%3E.QueryObserverBaseResult#data)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:274

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

node_modules/@tanstack/query-core/build/lib/types.d.ts:275

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

node_modules/@tanstack/query-core/build/lib/types.d.ts:276

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

• **isLoading**: ``false``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isLoading](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isloading)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:277

___

### isLoadingError

• **isLoadingError**: ``false``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isLoadingError](../wiki/%3Cinternal%3E.QueryObserverBaseResult#isloadingerror)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:278

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

node_modules/@tanstack/query-core/build/lib/types.d.ts:279

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

• **isSuccess**: ``true``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[isSuccess](../wiki/%3Cinternal%3E.QueryObserverBaseResult#issuccess)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:280

___

### status

• **status**: ``"success"``

#### Overrides

[QueryObserverBaseResult](../wiki/%3Cinternal%3E.QueryObserverBaseResult).[status](../wiki/%3Cinternal%3E.QueryObserverBaseResult#status)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:281

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
