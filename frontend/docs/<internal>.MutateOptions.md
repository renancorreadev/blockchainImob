# Interface: MutateOptions<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).MutateOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Table of contents

### Methods

- [onError](../wiki/%3Cinternal%3E.MutateOptions#onerror)
- [onSettled](../wiki/%3Cinternal%3E.MutateOptions#onsettled)
- [onSuccess](../wiki/%3Cinternal%3E.MutateOptions#onsuccess)

## Methods

### onError

▸ `Optional` **onError**(`error`, `variables`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `TError` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:360

___

### onSettled

▸ `Optional` **onSettled**(`data`, `error`, `variables`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| `TData` |
| `error` | ``null`` \| `TError` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:361

___

### onSuccess

▸ `Optional` **onSuccess**(`data`, `variables`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |
| `variables` | `TVariables` |
| `context` | `TContext` |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:359
