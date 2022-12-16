# Interface: MutationCacheConfig

[<internal>](../wiki/%3Cinternal%3E).MutationCacheConfig

## Table of contents

### Methods

- [onError](../wiki/%3Cinternal%3E.MutationCacheConfig#onerror)
- [onMutate](../wiki/%3Cinternal%3E.MutationCacheConfig#onmutate)
- [onSuccess](../wiki/%3Cinternal%3E.MutationCacheConfig#onsuccess)

## Methods

### onError

▸ `Optional` **onError**(`error`, `variables`, `context`, `mutation`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `variables` | `unknown` |
| `context` | `unknown` |
| `mutation` | [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`unknown`, `unknown`, `unknown`, `unknown`\> |

#### Returns

`unknown`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:9

___

### onMutate

▸ `Optional` **onMutate**(`variables`, `mutation`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `unknown` |
| `mutation` | [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`unknown`, `unknown`, `unknown`, `unknown`\> |

#### Returns

`unknown`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:11

___

### onSuccess

▸ `Optional` **onSuccess**(`data`, `variables`, `context`, `mutation`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `variables` | `unknown` |
| `context` | `unknown` |
| `mutation` | [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`unknown`, `unknown`, `unknown`, `unknown`\> |

#### Returns

`unknown`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:10
