# Interface: QueryBehavior<TQueryFnData, TError, TData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).QueryBehavior

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `unknown` |
| `TError` | `unknown` |
| `TData` | `TQueryFnData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Table of contents

### Methods

- [onFetch](../wiki/%3Cinternal%3E.QueryBehavior#onfetch)

## Methods

### onFetch

▸ **onFetch**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`FetchContext`](../wiki/%3Cinternal%3E.FetchContext)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:38
