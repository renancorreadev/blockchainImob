# Interface: FetchContext<TQueryFnData, TError, TData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).FetchContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `TQueryFnData` |
| `TError` | `TError` |
| `TData` | `TData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Table of contents

### Properties

- [fetchOptions](../wiki/%3Cinternal%3E.FetchContext#fetchoptions)
- [options](../wiki/%3Cinternal%3E.FetchContext#options)
- [queryKey](../wiki/%3Cinternal%3E.FetchContext#querykey)
- [signal](../wiki/%3Cinternal%3E.FetchContext#signal)
- [state](../wiki/%3Cinternal%3E.FetchContext#state)

### Methods

- [fetchFn](../wiki/%3Cinternal%3E.FetchContext#fetchfn)

## Properties

### fetchOptions

• `Optional` **fetchOptions**: [`FetchOptions`](../wiki/%3Cinternal%3E.FetchOptions)

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:31

___

### options

• **options**: [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TData`, `any`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:33

___

### queryKey

• **queryKey**: `TQueryKey`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:34

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:32

___

### state

• **state**: [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:35

## Methods

### fetchFn

▸ **fetchFn**(): `unknown`

#### Returns

`unknown`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:30
