# Interface: QueryConfig<TQueryFnData, TError, TData, TQueryKey\>

[<internal>](../wiki/%3Cinternal%3E).QueryConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryFnData` | `TQueryFnData` |
| `TError` | `TError` |
| `TData` | `TData` |
| `TQueryKey` | extends [`QueryKey`](../wiki/%3Cinternal%3E#querykey) = [`QueryKey`](../wiki/%3Cinternal%3E#querykey) |

## Table of contents

### Properties

- [cache](../wiki/%3Cinternal%3E.QueryConfig#cache)
- [defaultOptions](../wiki/%3Cinternal%3E.QueryConfig#defaultoptions)
- [logger](../wiki/%3Cinternal%3E.QueryConfig#logger)
- [options](../wiki/%3Cinternal%3E.QueryConfig#options)
- [queryHash](../wiki/%3Cinternal%3E.QueryConfig#queryhash)
- [queryKey](../wiki/%3Cinternal%3E.QueryConfig#querykey)
- [state](../wiki/%3Cinternal%3E.QueryConfig#state)

## Properties

### cache

• **cache**: [`QueryCache`](../wiki/%3Cinternal%3E.QueryCache)

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:7

___

### defaultOptions

• `Optional` **defaultOptions**: [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:12

___

### logger

• `Optional` **logger**: [`Logger`](../wiki/%3Cinternal%3E.Logger)

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:10

___

### options

• `Optional` **options**: [`QueryOptions`](../wiki/%3Cinternal%3E.QueryOptions)<`TQueryFnData`, `TError`, `TData`, `TQueryKey`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:11

___

### queryHash

• **queryHash**: `string`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:9

___

### queryKey

• **queryKey**: `TQueryKey`

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:8

___

### state

• `Optional` **state**: [`QueryState`](../wiki/%3Cinternal%3E.QueryState)<`TData`, `TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/query.d.ts:13
