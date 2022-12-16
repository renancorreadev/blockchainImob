# Interface: QueryCacheConfig

[<internal>](../wiki/%3Cinternal%3E).QueryCacheConfig

## Table of contents

### Methods

- [onError](../wiki/%3Cinternal%3E.QueryCacheConfig#onerror)
- [onSuccess](../wiki/%3Cinternal%3E.QueryCacheConfig#onsuccess)

## Methods

### onError

▸ `Optional` **onError**(`error`, `query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `query` | [`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:9

___

### onSuccess

▸ `Optional` **onSuccess**(`data`, `query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `query` | [`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/queryCache.d.ts:10
