# Interface: MutationOptions<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).MutationOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Hierarchy

- **`MutationOptions`**

  ↳ [`MutationObserverOptions`](../wiki/%3Cinternal%3E.MutationObserverOptions)

## Table of contents

### Properties

- [\_defaulted](../wiki/%3Cinternal%3E.MutationOptions#_defaulted)
- [cacheTime](../wiki/%3Cinternal%3E.MutationOptions#cachetime)
- [meta](../wiki/%3Cinternal%3E.MutationOptions#meta)
- [mutationFn](../wiki/%3Cinternal%3E.MutationOptions#mutationfn)
- [mutationKey](../wiki/%3Cinternal%3E.MutationOptions#mutationkey)
- [networkMode](../wiki/%3Cinternal%3E.MutationOptions#networkmode)
- [retry](../wiki/%3Cinternal%3E.MutationOptions#retry)
- [retryDelay](../wiki/%3Cinternal%3E.MutationOptions#retrydelay)
- [variables](../wiki/%3Cinternal%3E.MutationOptions#variables)

### Methods

- [onError](../wiki/%3Cinternal%3E.MutationOptions#onerror)
- [onMutate](../wiki/%3Cinternal%3E.MutationOptions#onmutate)
- [onSettled](../wiki/%3Cinternal%3E.MutationOptions#onsettled)
- [onSuccess](../wiki/%3Cinternal%3E.MutationOptions#onsuccess)

## Properties

### \_defaulted

• `Optional` **\_defaulted**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:352

___

### cacheTime

• `Optional` **cacheTime**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:351

___

### meta

• `Optional` **meta**: [`MutationMeta`](../wiki/%3Cinternal%3E.MutationMeta)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:353

___

### mutationFn

• `Optional` **mutationFn**: [`MutationFunction`](../wiki/%3Cinternal%3E#mutationfunction)<`TData`, `TVariables`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:341

___

### mutationKey

• `Optional` **mutationKey**: [`MutationKey`](../wiki/%3Cinternal%3E#mutationkey)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:342

___

### networkMode

• `Optional` **networkMode**: [`NetworkMode`](../wiki/%3Cinternal%3E#networkmode)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:350

___

### retry

• `Optional` **retry**: [`RetryValue`](../wiki/%3Cinternal%3E#retryvalue)<`TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:348

___

### retryDelay

• `Optional` **retryDelay**: [`RetryDelayValue`](../wiki/%3Cinternal%3E#retrydelayvalue)<`TError`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:349

___

### variables

• `Optional` **variables**: `TVariables`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:343

## Methods

### onError

▸ `Optional` **onError**(`error`, `variables`, `context`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `TError` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`unknown`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:346

___

### onMutate

▸ `Optional` **onMutate**(`variables`): `undefined` \| `TContext` \| `Promise`<`undefined` \| `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `TVariables` |

#### Returns

`undefined` \| `TContext` \| `Promise`<`undefined` \| `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:344

___

### onSettled

▸ `Optional` **onSettled**(`data`, `error`, `variables`, `context`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| `TData` |
| `error` | ``null`` \| `TError` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`unknown`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:347

___

### onSuccess

▸ `Optional` **onSuccess**(`data`, `variables`, `context`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`unknown`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:345
